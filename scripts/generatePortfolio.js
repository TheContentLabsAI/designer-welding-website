import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Category mapping
const categoryMapping = {
  'Gates/Driveway-Gates': { category: 'gates', subcategory: 'drivewayGates' },
  'Gates/Entry-Gates': { category: 'gates', subcategory: 'entryGates' },
  'Gates/Side-Gates': { category: 'gates', subcategory: 'sideGates' },
  'Gates/Commercial-Gates': { category: 'gates', subcategory: 'commercialGates' },
  'Railings/Stair-Railings': { category: 'railings', subcategory: 'stairRailings' },
  'Railings/Balcony-Railings': { category: 'railings', subcategory: 'balconyRailings' },
  'Railings/Porch-Railings': { category: 'railings', subcategory: 'porchRailings' },
  'Security/Security-Doors': { category: 'security', subcategory: 'securityDoors' },
  'Security/Security-Gates': { category: 'security', subcategory: 'securityGates' },
  'Security/Security-Windows': { category: 'security', subcategory: 'securityWindows' },
  'Specialty/Pool-Fencing': { category: 'specialty', subcategory: 'poolFencing' },
  'Specialty/Fencing-and-Barriers': { category: 'specialty', subcategory: 'fencingBarriers' }
};

// Parse filename to extract metadata
function parseFilename(filename) {
  const parts = filename.replace(/\.(jpeg|jpg|png|webp)$/, '').split('_');
  return {
    material: parts[1] || 'Steel',
    finish: parts[2] || 'Black Powder Coat',
    style: parts[3] || 'Modern',
    view: parts[4] || 'Front View'
  };
}

// Generate title from metadata
function generateTitle(folderName, metadata) {
  const baseName = folderName.split('/').pop().replace(/-/g, ' ');
  return `${metadata.style} ${metadata.material} ${baseName}`;
}

// Scan directory and generate projects
function scanDirectory(baseDir) {
  const projects = [];
  let id = 1;

  Object.entries(categoryMapping).forEach(([folderPath, categoryData]) => {
    const fullPath = path.join(baseDir, folderPath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`Warning: ${fullPath} does not exist`);
      return;
    }

    const files = fs.readdirSync(fullPath);
    
    files.forEach(file => {
      if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
        const metadata = parseFilename(file);
        const imagePath = `/images/DesignerWelding/${folderPath}/${file}`;
        
        projects.push({
          id: id++,
          title: generateTitle(folderPath, metadata),
          category: categoryData.category,
          subcategory: categoryData.subcategory,
          image: imagePath,
          material: metadata.material,
          finish: metadata.finish,
          style: metadata.style
        });
      }
    });
  });

  return projects;
}

// Generate the portfolioProjects.js file
function generateFile(projects) {
  const fileContent = `// Portfolio Projects - All Images
// Auto-generated from DesignerWelding folder (${projects.length} total projects)

export const portfolioProjects = ${JSON.stringify(projects, null, 2)}

export default portfolioProjects
`;

  return fileContent;
}

// Main execution
const baseDir = path.join(__dirname, '..', 'public', 'images', 'DesignerWelding');
console.log('Scanning directory:', baseDir);

const projects = scanDirectory(baseDir);
console.log(`Found ${projects.length} images`);

// Group by category for summary
const summary = {};
projects.forEach(p => {
  const key = `${p.category}/${p.subcategory}`;
  summary[key] = (summary[key] || 0) + 1;
});

console.log('\nBreakdown by category:');
Object.entries(summary).forEach(([key, count]) => {
  console.log(`  ${key}: ${count} images`);
});

const fileContent = generateFile(projects);
const outputPath = path.join(__dirname, '..', 'src', 'data', 'portfolioProjects.js');

fs.writeFileSync(outputPath, fileContent);
console.log(`\nGenerated ${outputPath} with ${projects.length} projects`);
