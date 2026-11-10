import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(rootDir, "out");
const baseUrl = "https://ukbplumbing.co.uk";

function walkHtml(directory, result = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) walkHtml(absolutePath, result);
    else if (entry.isFile() && entry.name.endsWith(".html")) result.push(absolutePath);
  }
  return result;
}

function routeFromFile(filePath) {
  const relative = path.relative(outDir, filePath).replaceAll(path.sep, "/");
  if (relative === "index.html") return "/";
  if (relative.endsWith("/index.html")) return `/${relative.slice(0, -"/index.html".length)}`;
  return `/${relative.slice(0, -".html".length)}`;
}

function attribute(tag, name) {
  return tag.match(new RegExp(`${name}=["']([^"']*)["']`, "i"))?.[1];
}

function metaContent(html, key, value) {
  return (html.match(/<meta\b[^>]*>/gi) ?? [])
    .filter((tag) => (attribute(tag, key) ?? "").toLowerCase() === value.toLowerCase())
    .map((tag) => attribute(tag, "content") ?? "");
}

function linkHrefs(html, rel) {
  return (html.match(/<link\b[^>]*>/gi) ?? [])
    .filter((tag) => (attribute(tag, "rel") ?? "").toLowerCase().split(/\s+/).includes(rel))
    .map((tag) => attribute(tag, "href") ?? "");
}

function decodeEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

if (!fs.existsSync(outDir)) throw new Error("Missing out directory. Run the production build first.");

const sitemapPath = path.join(outDir, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) throw new Error("Missing out/sitemap.xml.");

const sitemap = fs.readFileSync(sitemapPath, "utf8");
const indexableRoutes = new Set(
  [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => {
    const pathname = new URL(match[1]).pathname.replace(/\/$/, "");
    return pathname || "/";
  })
);
const redirectSources = new Set(
  fs
    .readFileSync(path.join(rootDir, "public", "_redirects"), "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#") && !line.startsWith("http"))
    .map((line) => line.split(/\s+/)[0].replace(/\/$/, "") || "/")
);

const errors = [];
let jsonLdBlocks = 0;
let checkedIndexable = 0;

for (const filePath of walkHtml(outDir)) {
  const route = routeFromFile(filePath);
  if (route === "/404" || route === "/_not-found" || redirectSources.has(route)) continue;

  const html = fs.readFileSync(filePath, "utf8");
  const isIndexable = indexableRoutes.has(route);
  const titles = [...html.matchAll(/<title>([\s\S]*?)<\/title>/gi)].map((match) => decodeEntities(match[1].trim()));
  const descriptions = metaContent(html, "name", "description");
  const canonicals = linkHrefs(html, "canonical");
  const robots = metaContent(html, "name", "robots").join(",").toLowerCase();

  if (titles.length !== 1 || !titles[0]) errors.push(`${route}: expected one non-empty title`);
  if (descriptions.length !== 1 || !descriptions[0]) errors.push(`${route}: expected one non-empty meta description`);
  if (canonicals.length !== 1 || !canonicals[0]) errors.push(`${route}: expected one canonical link`);

  if (isIndexable) {
    checkedIndexable += 1;
    if (robots.includes("noindex")) errors.push(`${route}: sitemap route is noindex`);
    if ((html.match(/<h1\b/gi) ?? []).length !== 1) errors.push(`${route}: expected exactly one H1`);
    if (metaContent(html, "property", "og:title").length !== 1) errors.push(`${route}: missing or duplicate og:title`);
    if (metaContent(html, "property", "og:description").length !== 1) errors.push(`${route}: missing or duplicate og:description`);
    if (metaContent(html, "property", "og:image").length !== 1) errors.push(`${route}: missing or duplicate og:image`);
    if (metaContent(html, "name", "twitter:card")[0] !== "summary_large_image") {
      errors.push(`${route}: twitter:card must be summary_large_image`);
    }
    if (canonicals[0]) {
      const canonical = new URL(canonicals[0], baseUrl);
      const canonicalRoute = canonical.pathname.replace(/\/$/, "") || "/";
      if (canonical.origin !== baseUrl || canonicalRoute !== route) {
        errors.push(`${route}: canonical is not self-referencing (${canonical.href})`);
      }
    }
  } else if (!robots.includes("noindex")) {
    errors.push(`${route}: route is outside the sitemap but is not noindex`);
  }

  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    jsonLdBlocks += 1;
    try {
      const data = JSON.parse(match[1]);
      const serialized = JSON.stringify(data);
      if (/"aggregateRating"\s*:/.test(serialized)) errors.push(`${route}: contains aggregateRating schema`);
      if (/"review"\s*:/.test(serialized)) errors.push(`${route}: contains self-serving review schema`);
    } catch (error) {
      errors.push(`${route}: invalid JSON-LD (${error.message})`);
    }
  }
}

for (const route of indexableRoutes) {
  const relative = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  const nested = route === "/" ? "index.html" : path.join(route.slice(1), "index.html");
  if (!fs.existsSync(path.join(outDir, relative)) && !fs.existsSync(path.join(outDir, nested))) {
    errors.push(`${route}: sitemap route has no exported HTML file`);
  }
}

if (errors.length) {
  console.error(`Exported SEO validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Exported SEO validation passed: ${checkedIndexable} indexable routes, ${jsonLdBlocks} valid JSON-LD blocks and no unsitemapped indexable pages.`
);
