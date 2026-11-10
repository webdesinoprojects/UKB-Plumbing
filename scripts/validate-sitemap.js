import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(rootDir, 'out');
const baseUrl = 'https://ukbplumbing.co.uk';

function walkHtml(directory, result = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) walkHtml(absolutePath, result);
    else if (entry.isFile() && entry.name.endsWith('.html')) result.push(absolutePath);
  }
  return result;
}

function routeFromFile(filePath) {
  const relative = path.relative(outDir, filePath).replaceAll(path.sep, '/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -'/index.html'.length)}`;
  return `/${relative.slice(0, -'.html'.length)}`;
}

function attribute(tag, name) {
  return tag.match(new RegExp(`${name}=["']([^"']+)["']`, 'i'))?.[1];
}

function canonicalFromHtml(html) {
  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    if ((attribute(tag, 'rel') ?? '').toLowerCase().split(/\s+/).includes('canonical')) {
      return attribute(tag, 'href');
    }
  }
}

function isNoindex(html) {
  return (html.match(/<meta\b[^>]*>/gi) ?? []).some((tag) => {
    const name = (attribute(tag, 'name') ?? '').toLowerCase();
    const content = (attribute(tag, 'content') ?? '').toLowerCase();
    return (name === 'robots' || name === 'googlebot') && content.includes('noindex');
  });
}

function readRedirects() {
  const redirects = new Map();
  const errors = [];
  const lines = fs.readFileSync(path.join(rootDir, 'public', '_redirects'), 'utf8').split(/\r?\n/);
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#') || line.startsWith('http')) continue;
    const [source, target, status] = line.split(/\s+/);
    if (!source?.startsWith('/') || !target?.startsWith('/') || !status?.startsWith('301')) {
      errors.push(`Invalid redirect rule: ${line}`);
      continue;
    }
    const key = source;
    if (redirects.has(key)) errors.push(`Duplicate redirect source: ${source}`);
    redirects.set(key, target);
  }
  const lowercaseSources = new Set([...redirects.keys()].map((source) => source.toLowerCase()));
  for (const [source, target] of redirects) {
    if (lowercaseSources.has(target.toLowerCase())) errors.push(`Redirect chain: ${source} -> ${target}`);
  }
  return { redirects, errors };
}

if (!fs.existsSync(outDir)) throw new Error('Missing out directory. Run next build first.');
const sitemapPath = path.join(outDir, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) throw new Error('Missing out/sitemap.xml. Run generate-sitemap first.');

const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const urlSet = new Set(urls);
const { redirects, errors } = readRedirects();
const redirectSourceKeys = new Set([...redirects.keys()].map((source) => source.toLowerCase()));
const htmlFiles = walkHtml(outDir);
const builtRoutes = new Set(htmlFiles.map(routeFromFile).map((route) => route.toLowerCase()));
const eligible = new Set();

if (urls.length !== urlSet.size) errors.push('Sitemap contains duplicate URLs.');

for (const [source, target] of redirects) {
  if (!builtRoutes.has(target.toLowerCase())) errors.push(`Redirect target is not built: ${source} -> ${target}`);
}

for (const filePath of htmlFiles) {
  const route = routeFromFile(filePath);
  if (route === '/404' || redirectSourceKeys.has(route.toLowerCase())) continue;
  const html = fs.readFileSync(filePath, 'utf8');
  if (isNoindex(html)) continue;
  const canonical = canonicalFromHtml(html);
  if (!canonical) {
    errors.push(`Indexable route has no canonical: ${route}`);
    continue;
  }
  const expected = new URL(route, baseUrl);
  const actual = new URL(canonical, baseUrl);
  const expectedPath = expected.pathname.replace(/\/$/, '') || '/';
  const actualPath = actual.pathname.replace(/\/$/, '') || '/';
  if (actual.origin !== baseUrl || actualPath !== expectedPath) {
    errors.push(`Non-self canonical on ${route}: ${actual.href}`);
    continue;
  }
  eligible.add(actual.href.replace(/\/$/, '') || baseUrl);
}

for (const url of urls) {
  if (!url.startsWith(baseUrl)) errors.push(`Wrong sitemap domain: ${url}`);
  if (!eligible.has(url)) errors.push(`Ineligible sitemap URL: ${url}`);
}
for (const url of eligible) {
  if (!urlSet.has(url)) errors.push(`Eligible route missing from sitemap: ${url}`);
}

if (errors.length) {
  console.error(`Sitemap validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Sitemap validation passed: ${urls.length} canonical, indexable URLs and no redirect chains.`);
