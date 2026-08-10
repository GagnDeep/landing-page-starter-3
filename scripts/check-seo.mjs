import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { load } from 'cheerio'; // Using cheerio to parse HTML easily, need to install it

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.join(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.error('Error: out/ directory not found. Run pnpm build first.');
  process.exit(1);
}

const bannedStrings = [
  "official",
  "government-approved",
  "VFS",
  "High Commission",
  "guaranteed approval",
  "lorem ipsum",
  "TODO",
  "FIXME"
];

let hasErrors = false;

function countWords(text) {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

function checkHtmlFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(outDir, filePath);

  if (relativePath === '404.html' || relativePath === '_not-found.html' || relativePath === '404/index.html' || relativePath === '_not-found/index.html') {
    return;
  }

  // 1. Compliance Rule: No banned strings
  for (const banned of bannedStrings) {
    if (content.toLowerCase().includes(banned.toLowerCase())) {
      console.error(`[COMPLIANCE ERROR] File ${relativePath} contains banned string: "${banned}"`);
      hasErrors = true;
    }
  }

  const $ = load(content);

  const title = $('title').text().trim();
  if (!title) {
    console.error(`[SEO ERROR] Missing title in ${relativePath}`);
    hasErrors = true;
  } else if (title.length > 60) {
    console.error(`[SEO ERROR] Title too long (${title.length} chars) in ${relativePath}`);
    hasErrors = true;
  }

  const desc = $('meta[name="description"]').attr('content');
  if (!desc) {
    console.error(`[SEO ERROR] Missing meta description in ${relativePath}`);
    hasErrors = true;
  } else if (desc.length < 120 || desc.length > 160) {
    console.error(`[SEO ERROR] Meta description length ${desc.length} not in 120-160 range in ${relativePath}`);
    hasErrors = true;
  }

  const h1s = $('h1');
  if (h1s.length !== 1) {
    console.error(`[SEO ERROR] Expected exactly 1 <h1>, found ${h1s.length} in ${relativePath}`);
    hasErrors = true;
  }

  const canonical = $('link[rel="canonical"]').attr('href');
  if (!canonical) {
    console.error(`[SEO ERROR] Missing canonical link in ${relativePath}`);
    hasErrors = true;
  }

  // 6. Design gates
  if (relativePath === 'index.html') {
    const sections = $('main > section');
    if (sections.length < 8) { // relaxed to 8 for pass 1 as per instructions
       console.error(`[DESIGN ERROR] Home page has fewer than 8 sections (found ${sections.length}).`);
       hasErrors = true;
    }
  }

  // No two adjacent sections share a background class
  const sections = $('section');
  let prevBg = null;
  sections.each((i, el) => {
    const className = $(el).attr('class') || '';
    const bgMatch = className.match(/bg-(background|muted|accent|primary)[\/\d]*/);
    const currBg = bgMatch ? bgMatch[0] : null;
    if (currBg && currBg === prevBg) {
      console.error(`[DESIGN ERROR] Adjacent sections share background class "${currBg}" in ${relativePath}`);
      hasErrors = true;
    }
    prevBg = currBg;
  });

  // Every section contains at least one svg, icon or table element
  sections.each((i, el) => {
    if ($(el).find('svg, table').length === 0) {
      console.error(`[DESIGN ERROR] Section ${i + 1} lacks svg or table element in ${relativePath}`);
      hasErrors = true;
    }
  });

  // No paragraph exceeds 120 words
  $('p').each((i, el) => {
    const pText = $(el).text();
    if (countWords(pText) > 120) {
      console.error(`[DESIGN ERROR] Paragraph exceeds 120 words in ${relativePath}`);
      hasErrors = true;
    }
  });

  // No page has more than 400 consecutive words without an intervening heading, list, table or figure
  let consecutiveWords = 0;
  $('body').contents().each(function processNode() {
      if (this.type === 'text') {
          consecutiveWords += countWords($(this).text());
          if (consecutiveWords > 400) {
              console.error(`[DESIGN ERROR] More than 400 consecutive words without visual break in ${relativePath}`);
              hasErrors = true;
              consecutiveWords = 0; // reset to avoid duplicate errors
          }
      } else if (this.type === 'tag') {
          const tag = this.name.toLowerCase();
          if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'table', 'figure', 'svg'].includes(tag)) {
              consecutiveWords = 0; // reset
          } else {
             $(this).contents().each(processNode);
          }
      }
  });

  // No img element points at an external host
  $('img').each((i, el) => {
    const src = $(el).attr('src');
    if (src && (src.startsWith('http://') || src.startsWith('https://')) && !src.includes('localhost') && !src.includes('setudirect.uk')) {
      console.error(`[DESIGN ERROR] Image points to external host: ${src} in ${relativePath}`);
      hasErrors = true;
    }
  });
}

function checkGlobalStats() {
    let totalInlineSvgs = 0;

    function walkAndCountSvgs(dir) {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
          walkAndCountSvgs(fullPath);
        } else if (fullPath.endsWith('.html')) {
          const content = fs.readFileSync(fullPath, 'utf8');
          const $ = load(content);
          // Very crude heuristic for "distinct inline svg graphic" - large svgs, not simple icons
          $('svg').each((i, el) => {
              if ($(el).attr('viewBox') && !$(el).attr('class')?.includes('size-')) {
                  totalInlineSvgs++;
              }
          })
        }
      }
    }

    walkAndCountSvgs(outDir);
    // Note: PASS 1 requires 1 inline SVG for homepage, full site requires 3. So we gate on 1 for now, or just warn if < 3.
    // We'll enforce at least 1 for this pass to not block.
    if (totalInlineSvgs < 1) {
        console.error(`[DESIGN ERROR] Site lacks at least one distinct inline SVG graphic (found 0).`);
        hasErrors = true;
    }
}


function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.html')) {
      checkHtmlFile(fullPath);
    }
  }
}

console.log('Checking SEO and compliance in out/ ...');
walkDir(outDir);
checkGlobalStats();

if (hasErrors) {
  console.error('Check failed with errors.');
  process.exit(1);
} else {
  console.log('All checks passed.');
}
