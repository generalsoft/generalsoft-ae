import { writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const siteUrl = 'https://generalsoft.ae';

function getAllHtmlFiles(dir, basePath = '') {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      files.push(...getAllHtmlFiles(fullPath, relativePath));
    } else if (entry.name === 'index.html') {
      files.push(relativePath);
    }
  }
  return files;
}

function generateSitemap() {
  if (!existsSync(distDir)) {
    console.error('dist directory not found. Run build first.');
    process.exit(1);
  }

  const htmlFiles = getAllHtmlFiles(distDir);
  
  // Filter out the root index.html (redirect page) and sort
  const filteredFiles = htmlFiles
    .filter(file => file !== 'index.html') // exclude root redirect page
    .sort();

  const urls = filteredFiles.map(file => {
    // Convert file path to URL path
    let urlPath = file.replace(/\/?index\.html$/, '');
    if (urlPath) {
      urlPath = '/' + urlPath;
    } else {
      urlPath = '/';
    }
    
    // Determine priority and changefreq based on path
    let priority = '0.7';
    let changefreq = 'monthly';
    
    if (urlPath === '/en/' || urlPath === '/ar/' || urlPath === '/de/') {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (urlPath.includes('/about')) {
      priority = '0.8';
      changefreq = 'monthly';
    } else if (urlPath.includes('/services/')) {
      priority = '0.9';
      changefreq = 'monthly';
    } else if (urlPath.includes('/contact')) {
      priority = '0.6';
      changefreq = 'yearly';
    } else if (urlPath.includes('/partners')) {
      priority = '0.6';
      changefreq = 'monthly';
    }

    return `  <url>
    <loc>${siteUrl}${urlPath}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  writeFileSync(join(distDir, 'sitemap.xml'), sitemap, 'utf-8');
  console.log(`Sitemap generated with ${filteredFiles.length} URLs at dist/sitemap.xml`);
  
  // Print all URLs for verification
  filteredFiles.forEach(file => {
    let urlPath = file.replace(/\/?index\.html$/, '');
    if (urlPath) {
      urlPath = '/' + urlPath;
    } else {
      urlPath = '/';
    }
    console.log(`  ${siteUrl}${urlPath}`);
  });
}

generateSitemap();
