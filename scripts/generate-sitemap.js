import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
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
  return undefined;
}

function isNoindex(html) {
  return (html.match(/<meta\b[^>]*>/gi) ?? []).some((tag) => {
    const name = (attribute(tag, 'name') ?? '').toLowerCase();
    const content = (attribute(tag, 'content') ?? '').toLowerCase();
    return (name === 'robots' || name === 'googlebot') && content.includes('noindex');
  });
}

function redirectSources() {
  const sources = new Set();
  for (const rawLine of fs.readFileSync(path.join(rootDir, 'public', '_redirects'), 'utf8').split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#') || line.startsWith('http')) continue;
    const [source] = line.split(/\s+/);
    if (source?.startsWith('/')) sources.add(source.toLowerCase());
  }
  return sources;
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

if (!fs.existsSync(outDir)) {
  throw new Error('Missing out directory. Run next build before generating the sitemap.');
}

const redirects = redirectSources();
const pages = [];

for (const filePath of walkHtml(outDir)) {
  const route = routeFromFile(filePath);
  if (route === '/404' || redirects.has(route.toLowerCase())) continue;

  const html = fs.readFileSync(filePath, 'utf8');
  const canonical = canonicalFromHtml(html);
  if (!canonical || isNoindex(html)) continue;

  let canonicalUrl;
  try {
    canonicalUrl = new URL(canonical, baseUrl);
  } catch {
    continue;
  }

  const routeUrl = new URL(route, baseUrl);
  const canonicalPath = canonicalUrl.pathname.replace(/\/$/, '') || '/';
  const routePath = routeUrl.pathname.replace(/\/$/, '') || '/';
  if (canonicalUrl.origin !== baseUrl || canonicalPath !== routePath) continue;

  const stat = fs.statSync(filePath);
  pages.push({
    url: canonicalUrl.href.replace(/\/$/, '') || baseUrl,
    lastmod: stat.mtime.toISOString().slice(0, 10),
  });
}

pages.sort((a, b) => a.url.localeCompare(b.url));
const uniquePages = [...new Map(pages.map((page) => [page.url, page])).values()];
const body = uniquePages
  .map(
    ({ url, lastmod }) =>
      `  <url>\n    <loc>${escapeXml(url)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
  )
  .join('\n');
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');
fs.writeFileSync(path.join(rootDir, 'public', 'sitemap.xml'), xml, 'utf8');
console.log(`Generated canonical sitemap with ${uniquePages.length} URLs.`);
