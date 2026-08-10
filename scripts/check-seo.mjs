import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parse } from 'node-html-parser'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '../out')

const BANNED_STRINGS = ['lorem ipsum', 'TODO', 'FIXME']

let siteWideSvgs = new Set()

function checkSeoRules(filepath) {
  const content = fs.readFileSync(filepath, 'utf8')
  const relativePath = '/' + path.relative(OUT_DIR, filepath).replace(/\\/g, '/')
  const root = parse(content)
  const isHtml = filepath.endsWith('.html') && !filepath.endsWith('404.html')

  let errors = []

  // Check banned strings in all built HTML
  for (const str of BANNED_STRINGS) {
    if (content.toLowerCase().includes(str.toLowerCase())) {
      errors.push(`Contains banned string: ${str}`)
    }
  }

  if (isHtml) {
    // Exactly one H1
    const h1s = root.querySelectorAll('h1')
    if (h1s.length !== 1) {
      errors.push(`Expected exactly 1 <h1>, found ${h1s.length}`)
    }

    // Title < 60 chars
    const title = root.querySelector('title')
    if (!title) {
      errors.push('Missing <title>')
    } else if (title.text.length > 60) {
      errors.push(`Title too long (${title.text.length} > 60 chars): "${title.text}"`)
    }

    // Meta description length
    const desc = root.querySelector('meta[name="description"]')
    if (!desc) {
      errors.push('Missing meta description')
    } else {
      const len = desc.getAttribute('content').length
      if (len < 120 || len > 160) {
        errors.push(`Meta description length ${len} not in 120-160 range`)
      }
    }

    // Canonical link
    const canonical = root.querySelector('link[rel="canonical"]')
    if (!canonical) {
      errors.push('Missing canonical link')
    }

    // OG and Twitter
    const ogTypes = ['title', 'description', 'type', 'url', 'image']
    for (const ot of ogTypes) {
      if (!root.querySelector(`meta[property="og:${ot}"]`)) {
        errors.push(`Missing og:${ot}`)
      }
    }
    const twCard = root.querySelector('meta[name="twitter:card"]')
    if (!twCard || twCard.getAttribute('content') !== 'summary_large_image') {
      errors.push('Missing or invalid twitter:card (must be summary_large_image)')
    }

    // HTML Lang
    const html = root.querySelector('html')
    if (!html || !html.getAttribute('lang')) {
      errors.push('Missing lang attribute on <html>')
    }

    // Valid JSON-LD
    const scripts = root.querySelectorAll('script[type="application/ld+json"]')
    if (scripts.length === 0) {
      errors.push('Missing JSON-LD structured data')
    } else {
      scripts.forEach((s) => {
        try {
          JSON.parse(s.innerHTML)
        } catch (e) {
          errors.push('Invalid JSON-LD parsing')
        }
      })
    }

    // No external images
    const images = root.querySelectorAll('img')
    images.forEach(img => {
      const src = img.getAttribute('src')
      if (src && src.startsWith('http') && !src.startsWith('https://aiandinvesting.com')) {
        errors.push(`External image source found: ${src}`)
      }
    })

    // Max paragraph length (120 words max per brief)
    const paragraphs = root.querySelectorAll('p')
    paragraphs.forEach(p => {
        const pWordCount = p.text.split(/\s+/).filter(w => w.length > 0).length
        if (pWordCount > 120) {
            errors.push(`Paragraph exceeds 120 words (length: ${pWordCount})`)
        }
    })

    // Word floor rules (No > 400 words without break)
    const bodyText = root.querySelector('main')?.text || ''
    // A simplified approximation to check if there are massive unbroken text blocks by counting words between elements
    // The brief says: "no page has more than 400 consecutive words without an intervening heading, list, table or figure"
    // Since node-html-parser text output doesn't natively segment by elements cleanly, we'll manually traverse the main tree.
    let currentConsecutiveWords = 0
    let maxConsecutiveWords = 0

    function traverseWords(node) {
      if (node.nodeType === 3) { // Text node
         const words = node.rawText.trim().split(/\s+/).filter(w => w.length > 0)
         currentConsecutiveWords += words.length
         if (currentConsecutiveWords > maxConsecutiveWords) {
             maxConsecutiveWords = currentConsecutiveWords
         }
      } else if (node.nodeType === 1) { // Element node
         const breakTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'table', 'figure', 'svg']
         if (breakTags.includes(node.tagName.toLowerCase())) {
             currentConsecutiveWords = 0
         }

         // Traverse children
         node.childNodes.forEach(traverseWords)

         if (breakTags.includes(node.tagName.toLowerCase())) {
             currentConsecutiveWords = 0
         }
      }
    }

    const mainNode = root.querySelector('main')
    if (mainNode) {
       traverseWords(mainNode)
       if (maxConsecutiveWords > 400) {
           errors.push(`Found > 400 consecutive words without structural break (Max found: ${maxConsecutiveWords})`)
       }
    }


    // Collect SVGs for site-wide distinct count.
    // Differentiating by their raw outerHTML to find unique instances (or bounding boxes if distinct).
    const svgs = root.querySelectorAll('svg')
    svgs.forEach(svg => {
       // Only count substantial svgs (ignoring tiny icons if possible, hugeicons use viewbox "0 0 24 24")
       const viewBox = svg.getAttribute('viewBox')
       if (viewBox && viewBox !== '0 0 24 24') {
         siteWideSvgs.add(svg.outerHTML)
       }
    })

    // Home page design gates
    if (relativePath === '/index.html') {
      const topSections = root.querySelectorAll('main > section')
      if (topSections.length < 8) {
        errors.push(`Homepage must have at least 8 sections (found ${topSections.length})`)
      }

      // Check no two adjacent sections share the same background class
      let prevBg = null
      topSections.forEach((section, index) => {
        const className = section.getAttribute('class') || ''
        const bgs = ['bg-background', 'bg-muted', 'bg-accent', 'bg-card', 'bg-foreground', 'bg-muted/50']
        let currentBg = bgs.find(bg => className.includes(bg)) || 'bg-background'
        if (currentBg === prevBg) {
          errors.push(`Adjacent sections ${index-1} and ${index} share background class ${currentBg}`)
        }
        prevBg = currentBg

        // Every section must have at least one svg, icon, or table
        const hasSvg = section.querySelector('svg') !== null
        const hasTable = section.querySelector('table') !== null
        if (!hasSvg && !hasTable) {
            errors.push(`Section ${index} missing non-prose element (svg, icon, or table)`)
        }
      })
    }
  }

  if (errors.length > 0) {
    console.error(`\nErrors in ${relativePath}:`)
    errors.forEach(e => console.error(` - ${e}`))
    return false
  }
  return true
}

function walk(dir) {
  let hasErrors = false
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      if (!walk(fullPath)) hasErrors = true
    } else if (fullPath.endsWith('.html')) {
      if (!checkSeoRules(fullPath)) hasErrors = true
    }
  }
  return !hasErrors
}

if (!fs.existsSync(OUT_DIR)) {
  console.error(`Directory not found: ${OUT_DIR}`)
  process.exit(1)
}

console.log('Running SEO and design checks on out/ ...')
const walkSuccess = walk(OUT_DIR)

let finalSuccess = walkSuccess

// Final global gate check for SVGs (only enforced after PASS 4, but we can log it here)
// "at least three distinct inline svg graphics exist across the site"
if (siteWideSvgs.size < 3) {
   console.warn(`\n[WARNING] Only ${siteWideSvgs.size} distinct substantial SVGs found. Brief requires 3 by PASS 4.`)
   // Not failing the build on this specific gate until Pass 4 as instructed by the "BUILD ALL" timing,
   // but the script needs to evaluate it.
}

if (!finalSuccess) {
  console.error('\nSEO/Design checks failed.')
  process.exit(1)
} else {
  console.log('All checks passed!')
}
