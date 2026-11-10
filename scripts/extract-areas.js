const fs = require('fs');
const path = require('path');

// Read all area data files
const dataDir = path.join(__dirname, '../src/data');
const files = [
  'southamptonAreasData.ts',
  'newForestAreasData.ts',
  'salisburyAreasData.ts',
  'winchesterAreasData.ts',
  'eastleighAreasData.ts'
];

const allAreas = {};

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract slug values using regex
  const slugRegex = /slug:\s*"([^"]+)"/g;
  const citySlug = file.replace('AreasData.ts', '').toLowerCase();
  
  const slugs = [];
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  
  allAreas[citySlug] = slugs;
});

console.log(JSON.stringify(allAreas, null, 2));
