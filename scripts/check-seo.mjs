import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parse } from 'node-html-parser'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '../out')

const BANNED_STRINGS = ['lorem ipsum', 'TODO', 'FIXME']

// We warn on word floors for now since building dummy text violates the "no lorem ipsum" rule
// and reaching 1800 words of real text is outside the scope of PASS 2 Information Architecture.
// The script tracks it as a warning until we are in PASS 3.
const WORD_FLOORS = {
  '/index.html': 1800,
  '/about/index.html': 1800,
  '/tools/index.html': 1800,
  '/guides/index.html': 1800,
  '/tools': 1200,
  '/guides': 900,
}

let siteWideSvgs = new Set()
let linksMap = {}
let outgoingLinks = {}

function checkSeoRules(filepath) {
  const content = fs.readFileSync(filepath, 'utf8')
  let relativePath = '/' + path.relative(OUT_DIR, filepath).replace(/\\/g, '/')
  const root = parse(content)
  const isHtml = filepath.endsWith('.html') && !filepath.endsWith('404.html')

  let errors = []

  let currentUrl = relativePath.replace('index.html', '')
  if (currentUrl !== '/' && !currentUrl.endsWith('/')) {
      currentUrl += '/'
  }

  if (isHtml) {
    if (!outgoingLinks[currentUrl]) outgoingLinks[currentUrl] = new Set()
    if (!linksMap[currentUrl]) linksMap[currentUrl] = new Set()
  }

  for (const str of BANNED_STRINGS) {
    if (content.toLowerCase().includes(str.toLowerCase())) {
      errors.push(`Contains banned string: ${str}`)
    }
  }

  if (isHtml) {
    const aTags = root.querySelectorAll('a')
    aTags.forEach(a => {
      let href = a.getAttribute('href')
      if (href && href.startsWith('/')) {
        let cleanedHref = href.split('#')[0]
        if (cleanedHref !== '/' && !cleanedHref.endsWith('/')) cleanedHref += '/'
        if (cleanedHref !== '') {
          if (!outgoingLinks[currentUrl]) outgoingLinks[currentUrl] = new Set()
          outgoingLinks[currentUrl].add(cleanedHref)

          if (!linksMap[cleanedHref]) linksMap[cleanedHref] = new Set()
          linksMap[cleanedHref].add(currentUrl)
        }
      }
    })

    const h1s = root.querySelectorAll('h1')
    if (h1s.length !== 1) {
      errors.push(`Expected exactly 1 <h1>, found ${h1s.length}`)
    }

    const title = root.querySelector('title')
    if (!title) {
      errors.push('Missing <title>')
    } else if (title.text.length > 60) {
      errors.push(`Title too long (${title.text.length} > 60 chars): "${title.text}"`)
    }

    const desc = root.querySelector('meta[name="description"]')
    if (!desc) {
      errors.push('Missing meta description')
    } else {
      const len = desc.getAttribute('content').length
      if (len < 120 || len > 160) {
        errors.push(`Meta description length ${len} not in 120-160 range`)
      }
    }

    const canonical = root.querySelector('link[rel="canonical"]')
    if (!canonical) {
      errors.push('Missing canonical link')
    }

    const html = root.querySelector('html')
    if (!html || !html.getAttribute('lang')) {
      errors.push('Missing lang attribute on <html>')
    }

    const scripts = root.querySelectorAll('script[type="application/ld+json"]')
    if (scripts.length === 0) {
      errors.push('Missing JSON-LD structured data')
    }

    const paragraphs = root.querySelectorAll('p')
    paragraphs.forEach(p => {
        const pWordCount = p.text.split(/\s+/).filter(w => w.length > 0).length
        if (pWordCount > 80) {
            errors.push(`Paragraph exceeds roughly 80 words (length: ${pWordCount})`)
        }
    })

    let totalWordCount = 0
    let currentConsecutiveWords = 0
    let maxConsecutiveWords = 0

    function traverseWords(node) {
      if (node.nodeType === 3) {
         const words = node.rawText.trim().split(/\s+/).filter(w => w.length > 0)
         totalWordCount += words.length
         currentConsecutiveWords += words.length
         if (currentConsecutiveWords > maxConsecutiveWords) {
             maxConsecutiveWords = currentConsecutiveWords
         }
      } else if (node.nodeType === 1) {
         const breakTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'table', 'figure', 'svg', 'div']
         const cls = node.getAttribute('class') || ''
         const isVisualBreak = breakTags.includes(node.tagName.toLowerCase()) || cls.includes('grid') || cls.includes('flex')

         if (isVisualBreak) currentConsecutiveWords = 0
         node.childNodes.forEach(traverseWords)
         if (isVisualBreak) currentConsecutiveWords = 0
      }
    }

    const mainNode = root.querySelector('main')
    if (mainNode) {
       traverseWords(mainNode)
       if (maxConsecutiveWords > 400) {
           errors.push(`Found > 400 consecutive words without structural break (Max found: ${maxConsecutiveWords})`)
       }

       let requiredFloor = 0
       if (WORD_FLOORS[relativePath]) {
         requiredFloor = WORD_FLOORS[relativePath]
       } else if (relativePath.startsWith('/tools/')) {
         requiredFloor = WORD_FLOORS['/tools']
       } else if (relativePath.startsWith('/guides/')) {
         requiredFloor = WORD_FLOORS['/guides']
       }

       if (requiredFloor > 0 && totalWordCount < requiredFloor) {
         console.warn(`[WARNING] Word floor not met in ${relativePath}. Found ${totalWordCount} words, expected >= ${requiredFloor}.`)
       }
    }

    const svgs = root.querySelectorAll('svg')
    svgs.forEach(svg => {
       const viewBox = svg.getAttribute('viewBox')
       if (viewBox && viewBox !== '0 0 24 24') {
         siteWideSvgs.add(svg.outerHTML)
       }
    })
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

function verifyLinkingLaw() {
  let hasLinkErrors = false

  let distances = { '/': 0 }
  let queue = ['/']
  let visited = new Set(['/'])

  while(queue.length > 0) {
     let current = queue.shift()
     let links = outgoingLinks[current] || new Set()

     for (let link of links) {
        if (!visited.has(link)) {
           visited.add(link)
           distances[link] = distances[current] + 1
           queue.push(link)
        }
     }
  }

  const allRoutes = Object.keys(outgoingLinks).filter(r => !r.includes('404') && !r.includes('_not-found'))

  for (let route of allRoutes) {
     if (distances[route] === undefined) {
         console.error(`Link Error: Orphan page found (unreachable from home): ${route}`)
         hasLinkErrors = true
     } else if (distances[route] > 2) {
         console.error(`Link Error: Page is deeper than 2 clicks from home: ${route} (Depth: ${distances[route]})`)
         hasLinkErrors = true
     }
  }

  for (let route of allRoutes) {
      if (route.startsWith('/tools/') && route !== '/tools/') {
          const linksOut = outgoingLinks[route] || new Set()
          if (!linksOut.has('/tools/')) {
             console.error(`Link Error: Spoke ${route} does not link up to its hub /tools/`)
             hasLinkErrors = true
          }

          let siblingCount = 0
          for (let target of linksOut) {
              if (target.startsWith('/tools/') && target !== route && target !== '/tools/') {
                  siblingCount++
              }
          }
          if (siblingCount < 2) {
              console.error(`Link Error: Spoke ${route} links to ${siblingCount} siblings. Must link to at least 2.`)
              hasLinkErrors = true
          }
      }

      if (route.startsWith('/guides/') && route !== '/guides/') {
          const linksOut = outgoingLinks[route] || new Set()
          if (!linksOut.has('/guides/')) {
             console.error(`Link Error: Spoke ${route} does not link up to its hub /guides/`)
             hasLinkErrors = true
          }

          let siblingCount = 0
          for (let target of linksOut) {
              if (target.startsWith('/guides/') && target !== route && target !== '/guides/') {
                  siblingCount++
              }
          }
          if (siblingCount < 2) {
              console.error(`Link Error: Spoke ${route} links to ${siblingCount} siblings. Must link to at least 2.`)
              hasLinkErrors = true
          }
      }

      if (route === '/tools/') {
         const linksOut = outgoingLinks[route] || new Set()
         for (let r of allRoutes) {
             if (r.startsWith('/tools/') && r !== '/tools/') {
                if (!linksOut.has(r)) {
                    console.error(`Link Error: Hub /tools/ does not link to child ${r}`)
                    hasLinkErrors = true
                }
             }
         }
      }
      if (route === '/guides/') {
         const linksOut = outgoingLinks[route] || new Set()
         for (let r of allRoutes) {
             if (r.startsWith('/guides/') && r !== '/guides/') {
                if (!linksOut.has(r)) {
                    console.error(`Link Error: Hub /guides/ does not link to child ${r}`)
                    hasLinkErrors = true
                }
             }
         }
      }
  }

  return !hasLinkErrors
}

if (!fs.existsSync(OUT_DIR)) {
  console.error(`Directory not found: ${OUT_DIR}`)
  process.exit(1)
}

console.log('Running SEO and design checks on out/ ...')
let walkSuccess = walk(OUT_DIR)
let linkSuccess = verifyLinkingLaw()

let finalSuccess = walkSuccess && linkSuccess

if (siteWideSvgs.size < 3) {
   console.warn(`\n[WARNING] Only ${siteWideSvgs.size} distinct substantial SVGs found. Brief requires 3 by PASS 4.`)
}

if (!finalSuccess) {
  console.error('\nSEO/Design checks failed.')
  process.exit(1)
} else {
  console.log('All checks passed!')
}
