import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.join(__dirname, '..', 'out', 'sitemap.xml');
const OUT_DIR = path.join(__dirname, '..', 'out');
const BASE_URL = 'https://ukbplumbing.co.uk';

function urlToFilePath(url) {
  // Remove base URL
  let relativePath = url.replace(BASE_URL, '');
  
  // Add .html extension
  if (relativePath === '' || relativePath === '/') {
    relativePath = '/index.html';
  } else {
    relativePath += '.html';
  }
  
  // Convert to proper file path
  return path.join(OUT_DIR, ...relativePath.split('/'));
}

function spotCheckUrls() {
  const content = fs.readFileSync(SITEMAP_PATH, 'utf8');
  
  // Extract all <loc> tags
  const locRegex = /<loc>(.*?)<\/loc>/g;
  const locs = [];
  let match;
  
  while ((match = locRegex.exec(content)) !== null) {
    locs.push(match[1]);
  }
  
  console.log(`Total URLs in sitemap: ${locs.length}`);
  
  // Select 15 random URLs
  const randomUrls = [];
  const usedIndices = new Set();
  
  while (randomUrls.length < 15 && randomUrls.length < locs.length) {
    const randomIndex = Math.floor(Math.random() * locs.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      randomUrls.push(locs[randomIndex]);
    }
  }
  
  console.log(`\nSpot-checking ${randomUrls.length} random URLs:\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  randomUrls.forEach(url => {
    const filePath = urlToFilePath(url);
    const exists = fs.existsSync(filePath);
    
    if (exists) {
      console.log(`✅ ${url}`);
      console.log(`   File exists: ${filePath}`);
      successCount++;
    } else {
      console.log(`❌ ${url}`);
      console.log(`   File missing: ${filePath}`);
      failCount++;
    }
  });
  
  console.log(`\nSpot-check results: ${successCount} passed, ${failCount} failed`);
  
  return { successCount, failCount, total: randomUrls.length };
}

const results = spotCheckUrls();

if (results.failCount > 0) {
  console.error('\n❌ Some URLs failed the spot-check');
  process.exit(1);
} else {
  console.log('\n✅ All spot-checked URLs are valid');
}
