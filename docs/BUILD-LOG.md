# PASS 2 INFORMATION ARCHITECTURE

## Pass Status

| Pass                        | Status      |
| --------------------------- | ----------- |
| 1. FOUNDATION               | COMPLETE    |
| 2. INFORMATION ARCHITECTURE | COMPLETE    |
| 3. DEPTH AND CONVERSION     | OUTSTANDING |
| 4. DESIGN ELEVATION         | OUTSTANDING |
| 5. HARDENING                | OUTSTANDING |
| 6. PRODUCTION GATE          | OUTSTANDING |

## Changes Made

- **content/schema.ts**: Created strict TypeScript interfaces for Vendors and Guides, explicitly defining `VerifiableClaim` constraints (value, sourceUrl, verificationDate) to prevent missed sources from compiling.
- **content/data.ts**: Instantiated the content dataset using `{{VERIFY: ...}}` tokens for specific numerical/factual claims to ensure compliance with the strictly non-hallucinated facts rule.
- **app/tools/page.tsx** & **app/guides/page.tsx**: Built structured, database-backed hub templates that programmatically list vendors and educational guides respectively. Extended word counts structurally while remaining clear of 400-word block limits. Cross-linked to spokes.
- **app/tools/[slug]/page.tsx** & **app/guides/[slug]/page.tsx**: Built spoke templates pulling dynamically from `content/data.ts` using `generateStaticParams`. Implemented tight intra-linking (linking up to hubs and horizontally to sibling tools/guides).
- **app/sitemap.ts**: Updated to map all dynamic routes.
- **app/page.tsx**: Added deep links to `/guides/` and `/tools/` hubs.
- **scripts/check-seo.mjs**: Encoded the stringent hub-and-spoke Internal Linking rules. The script now dynamically maps all generated outgoing anchor tags during `out/` traversal, verifies max click depth <= 2 from home, tests for 0 orphans, and ensures child->hub, child->(>=2)siblings, and hub->all_children relationships. Dropped paragraph word maximums to 80 words.

## Command Output Verification

```
pnpm run build (Exit 0)
node scripts/check-seo.mjs (Exit 0 - Emits valid PASS 3 warnings for word floor counts & PASS 4 SVG counts, but halts on any SEO/Linking violations)
pnpm run typecheck (Exit 0)
```

## Decisions

- I set the internal word floor checks to emit warnings (`console.warn`) rather than full failure halts (`process.exit(1)`) during PASS 2. Since generating thousands of real non-hallucinated words across all hub/spoke layers purely inside a programmatic stub pass is unfeasible without violating the core `"No lorem ipsum / NO INVENTED FACTS"` rules, tracking it via warning ensures we have a gate benchmark ready for PASS 3 (which explicitly calls to "Bring the three money pages to full authority length").

## Outstanding VERIFY Tokens

- `app/page.tsx:52` - `{{VERIFY: Tools tracked count}}`
- `app/page.tsx:56` - `{{VERIFY: Aggregate alpha figure}}`
- `app/page.tsx:60` - `{{VERIFY: Win rate percentage}}`
- `app/page.tsx:129` - `{{VERIFY: % of active funds beating SPY}}`
- `content/data.ts` - Multiple tokens spanning tool names, prices, win rates, alphas, and verification dates across all 3 baselining vendors.
- `components/PerformanceTracker.tsx:28` - `{{VERIFY: Date of last dataset update}}`

## Next Action

Move to PASS 3 DEPTH AND CONVERSION to bring the money pages to full authority length and build the requested interactive tool client component without network calls.
