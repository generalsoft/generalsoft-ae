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
  
  const urls = htmlFiles.map(file => {
    // Convert file path to URL path
    let urlPath = file.replace(/\/?index\.html$/, '');
    if (urlPath) {
      urlPath = '/' + urlPath;
    } else {
      urlPath = '/';
    }
    return `  <url>
    <loc>${siteUrl}${urlPath}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  writeFileSync(join(distDir, 'sitemap.xml'), sitemap, 'utf-8');
  console.log(`Sitemap generated with ${htmlFiles.length} URLs at dist/sitemap.xml`);
}

generateSitemap();
