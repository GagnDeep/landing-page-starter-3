import fs from 'fs';
import path from 'path';
import { parse } from 'node-html-parser';

const OUT_DIR = path.join(process.cwd(), 'out');
const BANNED_STRINGS = ['unlock the full list', 'enter your email', 'guaranteed deletion', 'lorem ipsum', 'TODO', 'FIXME'];

let errors = [];

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function assert(condition, message, file) {
  if (!condition) {
    errors.push(`[${file}] ${message}`);
  }
}

function checkFile(filePath) {
  if (!filePath.endsWith('.html')) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const root = parse(content);

  // General SEO Rules
  const h1s = root.querySelectorAll('h1');
  assert(h1s.length === 1, `Must have exactly one h1 (found ${h1s.length})`, filePath);

  const title = root.querySelector('title');
  assert(title && title.text.length > 0 && title.text.length <= 60, `Title must be 1-60 chars (found ${title ? title.text.length : 0})`, filePath);

  const metaDesc = root.querySelector('meta[name="description"]');
  assert(metaDesc && metaDesc.getAttribute('content').length >= 120 && metaDesc.getAttribute('content').length <= 160, `Meta description must be 120-160 chars`, filePath);

  const canonical = root.querySelector('link[rel="canonical"]');
  assert(canonical && canonical.getAttribute('href'), `Must have an absolute self-referencing canonical link`, filePath);

  const ogTitle = root.querySelector('meta[property="og:title"]');
  assert(ogTitle && ogTitle.getAttribute('content'), `Must have og:title`, filePath);

  const jsonLdScripts = root.querySelectorAll('script[type="application/ld+json"]');
  assert(jsonLdScripts.length > 0, `Must have valid JSON-LD`, filePath);

  const htmlTag = root.querySelector('html');
  assert(htmlTag && htmlTag.getAttribute('lang') === 'en', `HTML lang must be 'en'`, filePath);

  // Banned Strings
  BANNED_STRINGS.forEach(str => {
    assert(!content.toLowerCase().includes(str.toLowerCase()), `Banned string found: "${str}"`, filePath);
  });

  // Design Gates for Home Page
  if (filePath.endsWith('index.html')) {
    const sections = root.querySelectorAll('main > section');
    assert(sections.length >= 8, `Home page must render at least 8 top-level sections for PASS 1 (found ${sections.length})`, filePath);
  }

  // Word Length constraints
  const paragraphs = root.querySelectorAll('p');
  paragraphs.forEach(p => {
    const words = p.text.trim().split(/\s+/).length;
    assert(words <= 120, `Paragraph exceeds 120 words (found ${words})`, filePath);
  });

  // No external img hosts
  const imgs = root.querySelectorAll('img');
  imgs.forEach(img => {
    const src = img.getAttribute('src');
    if (src && src.startsWith('http') && !src.includes('theyaretracking.com')) {
       assert(false, `No img element points at an external host (found ${src})`, filePath);
    }
  });
}

walkDir(OUT_DIR, checkFile);

if (errors.length > 0) {
  console.error("SEO & Design Check Failed:");
  errors.forEach(e => console.error(e));
  process.exit(1);
} else {
  console.log("SEO & Design Check Passed!");
}
