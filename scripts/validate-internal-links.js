import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(rootDir, 'out');

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

function normalizeRoute(rawHref) {
  try {
    const url = new URL(rawHref, 'https://ukbplumbing.co.uk');
    if (url.origin !== 'https://ukbplumbing.co.uk') return undefined;
    return decodeURI(url.pathname).replace(/\/$/, '') || '/';
  } catch {
    return undefined;
  }
}

if (!fs.existsSync(outDir)) throw new Error('Missing out directory. Run next build first.');

const htmlFiles = walkHtml(outDir);
const builtRoutes = new Set(htmlFiles.map(routeFromFile).map((route) => route.toLowerCase()));
const redirectSources = new Set();
for (const rawLine of fs.readFileSync(path.join(rootDir, 'public', '_redirects'), 'utf8').split(/\r?\n/)) {
  const line = rawLine.trim();
  if (!line || line.startsWith('#') || line.startsWith('http')) continue;
  const [source] = line.split(/\s+/);
  if (source?.startsWith('/')) redirectSources.add(decodeURI(source).toLowerCase());
}

const errors = new Set();
for (const filePath of htmlFiles) {
  const sourceRoute = routeFromFile(filePath);
  const html = fs.readFileSync(filePath, 'utf8');
  for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)) {
    const href = match[1];
    if (/^(?:#|mailto:|tel:|javascript:)/i.test(href)) continue;
    const target = normalizeRoute(href);
    if (!target) continue;
    const key = target.toLowerCase();
    if (redirectSources.has(key)) errors.add(`${sourceRoute} links to redirected route ${target}`);
    else if (!builtRoutes.has(key)) errors.add(`${sourceRoute} links to missing route ${target}`);
  }
}

if (errors.size) {
  console.error(`Internal-link validation failed with ${errors.size} unique error(s):`);
  for (const error of [...errors].sort()) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Internal-link validation passed across ${htmlFiles.length} HTML files.`);
