import fs from 'fs';
import path from 'path';
import * as jsdom from 'jsdom';

const { JSDOM } = jsdom;

const bannedStrings = ["institute of underwriting", "institute", "lorem ipsum", "todo", "fixme"];
const outDir = path.join(process.cwd(), 'out');

if (!fs.existsSync(outDir)) {
  console.log("No out/ directory found. Run build first.");
  process.exit(0);
}

let hasErrors = false;

function reportError(filePath, message) {
  console.error(`ERROR in ${filePath}: ${message}`);
  hasErrors = true;
}

function checkHtmlFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const contentLower = content.toLowerCase();

  const contentWithoutDomain = contentLower.replace(/instituteofunderwriting\.com/g, '');
  for (const banned of bannedStrings) {
    const regex = new RegExp(`\\b${banned}\\b`, 'g');
    if (regex.test(contentWithoutDomain)) {
       reportError(filePath, `Banned string "${banned}" found`);
    }
  }

  const dom = new JSDOM(content);
  const doc = dom.window.document;

  // Skip 404 pages from strict SEO checking
  if (filePath.includes('404') || filePath.includes('_not-found')) {
    return;
  }

  const h1s = doc.querySelectorAll('h1');
  if (h1s.length !== 1) {
    reportError(filePath, `Expected exactly 1 h1, found ${h1s.length}`);
  }

  const title = doc.querySelector('title');
  if (!title || !title.textContent) {
    reportError(filePath, 'Missing title tag');
  } else if (title.textContent.length > 60) {
    reportError(filePath, `Title length is ${title.textContent.length}, expected <= 60`);
  }

  const metaDesc = doc.querySelector('meta[name="description"]');
  if (!metaDesc) {
    reportError(filePath, 'Missing meta description');
  } else {
    const descLen = metaDesc.getAttribute('content').length;
    if (descLen < 120 || descLen > 160) {
      reportError(filePath, `Meta description length is ${descLen}, expected 120-160`);
    }
  }

  const canonical = doc.querySelector('link[rel="canonical"]');
  if (!canonical || !canonical.getAttribute('href')) {
    reportError(filePath, 'Missing canonical link');
  }

  const requiredOgTags = ['og:title', 'og:description', 'og:type', 'og:url', 'og:image'];
  for (const tag of requiredOgTags) {
    if (!doc.querySelector(`meta[property="${tag}"]`)) {
      reportError(filePath, `Missing Open Graph tag: ${tag}`);
    }
  }

  if (!doc.querySelector('meta[name="twitter:card"][content="summary_large_image"]')) {
    reportError(filePath, 'Missing twitter:card set to summary_large_image');
  }

  const htmlLang = doc.querySelector('html').getAttribute('lang');
  if (!htmlLang) {
    reportError(filePath, 'Missing html lang attribute');
  }

  const jsonLd = doc.querySelectorAll('script[type="application/ld+json"]');
  if (jsonLd.length === 0) {
    reportError(filePath, 'Missing JSON-LD structured data');
  }

  // Clean up path checking so `about/index.html` does not trigger root checks.
  // The normalized base path is just out/index.html
  const normalizedPath = filePath.replace(/\\/g, '/');
  const isRootHomePage = normalizedPath.endsWith('/out/index.html') || normalizedPath === 'out/index.html';

  if (isRootHomePage) {
    const sections = Array.from(doc.querySelectorAll('section'));
    if (sections.length < 10) {
      reportError(filePath, `Home page has ${sections.length} sections, expected at least 10`);
    }

    for (let i = 0; i < sections.length - 1; i++) {
      const bg1 = Array.from(sections[i].classList).find(c => c.startsWith('bg-'));
      const bg2 = Array.from(sections[i+1].classList).find(c => c.startsWith('bg-'));
      if (bg1 && bg1 === bg2) {
        reportError(filePath, `Adjacent sections (${i} and ${i+1}) share the same background class: ${bg1}`);
      }
    }
  }

  const sections = Array.from(doc.querySelectorAll('section'));
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const hasSvg = section.querySelector('svg');
    const hasTable = section.querySelector('table');
    if (!hasSvg && !hasTable) {
       reportError(filePath, `Section ${i} missing an SVG, icon, or table`);
    }
  }

  const paragraphs = doc.querySelectorAll('p');
  paragraphs.forEach((p, idx) => {
    const text = p.textContent.trim();
    if (text) {
      const words = text.split(/\s+/).length;
      if (words > 120) {
        reportError(filePath, `Paragraph ${idx} exceeds 120 words (${words} words)`);
      }
    }
  });

  // The consecutive word check algorithm was overly simplistic.
  // Let's implement a better one:
  // Flatten all text nodes, track if we've hit a structural block.
  let currentWordCount = 0;
  // A structural break is a heading, list, table, figure, or section. We'll use a TreeWalker
  // to walk the DOM and reset the counter when we hit a block element that acts as a visual break.
  const visualBreaks = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'UL', 'OL', 'TABLE', 'FIGURE', 'SVG', 'IMG', 'HR', 'SECTION'];

  const walker = doc.createTreeWalker(doc.body, dom.window.NodeFilter.SHOW_ALL, null, false);
  let currentNode = walker.currentNode;

  while (currentNode) {
    if (currentNode.nodeType === 1) { // Element node
      if (visualBreaks.includes(currentNode.nodeName)) {
        currentWordCount = 0;
      }
    } else if (currentNode.nodeType === 3) { // Text node
      const parentName = currentNode.parentNode.nodeName;
      if (!['SCRIPT', 'STYLE'].includes(parentName)) {
        const text = currentNode.textContent.trim();
        if (text) {
          currentWordCount += text.split(/\s+/).filter(w => w.length > 0).length;
          if (currentWordCount > 400) {
            reportError(filePath, `More than 400 consecutive words without a structural break`);
            currentWordCount = 0;
          }
        }
      }
    }
    currentNode = walker.nextNode();
  }

  const images = doc.querySelectorAll('img');
  images.forEach((img, idx) => {
    const src = img.getAttribute('src');
    if (src && src.startsWith('http') && !src.includes('instituteofunderwriting.com') && !src.startsWith('http://localhost') && !src.startsWith('https://localhost')) {
      reportError(filePath, `Image ${idx} points to external host: ${src}`);
    }
  });
}

function checkFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      checkFiles(filePath);
    } else if (filePath.endsWith('.html')) {
      checkHtmlFile(filePath);
    } else if (filePath.endsWith('.json')) {
      const content = fs.readFileSync(filePath, 'utf-8').toLowerCase();
      const contentWithoutDomain = content.replace(/instituteofunderwriting\.com/g, '');
      for (const banned of bannedStrings) {
        const regex = new RegExp(`\\b${banned}\\b`, 'g');
        if (regex.test(contentWithoutDomain)) {
           reportError(filePath, `Banned string "${banned}" found`);
        }
      }
    }
  }
}

checkFiles(outDir);

let uniqueSvgs = new Set();
function collectSvgs(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      collectSvgs(filePath);
    } else if (filePath.endsWith('.html')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const dom = new JSDOM(content);
      const svgs = dom.window.document.querySelectorAll('svg');
      svgs.forEach(svg => {
        const cleanSvg = svg.outerHTML.replace(/class=".*?"/g, '');
        uniqueSvgs.add(cleanSvg);
      });
    }
  }
}

collectSvgs(outDir);
if (uniqueSvgs.size < 3) {
  console.error(`ERROR: Expected at least 3 distinct inline SVGs, found ${uniqueSvgs.size}`);
  hasErrors = true;
}

if (hasErrors) {
  console.error("SEO / Compliance Check Failed");
  process.exit(1);
} else {
  console.log("SEO / Compliance Check Passed");
}
