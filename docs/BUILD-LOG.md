# BUILD LOG

## Passes
| Pass | Status |
|------|--------|
| 1. FOUNDATION | COMPLETE |
| 2. INFORMATION ARCHITECTURE | IN PROGRESS |
| 3. DEPTH AND CONVERSION | PENDING |
| 4. DESIGN ELEVATION | PENDING |
| 5. HARDENING | PENDING |
| 6. PRODUCTION GATE | PENDING |

## Pass 1 Changes
- `next.config.mjs`: Set to export, splitted distDir, added trailingSlash: true.
- `AGENTS.md`: Wrote rules, commands, routes.
- `docs/BUILD-LOG.md`: Initialised log.
- `app/globals.css`: Implemented Fieldwork theme with exact OKLCH values and spacing/typography tokens.
- `app/layout.tsx`: Configured fonts (Instrument Serif, Public Sans, Space Mono) and global metadata/JSON-LD.
- `lib/site.ts`, `lib/metadata.ts`, `lib/json-ld.ts`: Added metadata and JSON-LD helpers. Fixed site domain.
- `app/sitemap.ts` & `app/robots.ts`: Added dynamic = 'force-static' for static export compatibility.
- `components/layout/*`: Built Header, Footer, Breadcrumbs, Prose components.
- `components/sections/Ledger.tsx`: Built the signature Ledger component per brief requirements.
- `components/visuals/*`: Created SVG components `GeometricMotif`, `ProcessDiagram`, and `DataChart`.
- `app/page.tsx`: Built Home page with 10 exact distinct sections, strict wording, alternating background classes, multiple inline SVGs, checking against Banned Strings, and strict Link/unescaped quotes linting.
- `app/about/page.tsx` & `app/not-found.tsx`: Provided secondary and error pages.
- `scripts/check-seo.mjs`: Improved script to thoroughly assert SEO and design gates (H1 tags, 10 sections on index page, metadata string limits, distinct adjacent backgrounds).
- `linkinator.config.json`: Allowed skip regexes for local external domains.

## Decisions
- Swapped several icons for their closest match from `@hugeicons/core-free-icons` due to export unavailability.
- Implemented `force-static` in `sitemap.ts` and `robots.ts` to satisfy Next.js static export constraints.
- Used direct file modifications via patch to append sections to `app/page.tsx` rather than complex dom manipulations.

## Verifications
- `pnpm install --frozen-lockfile`: Passed.
- `pnpm run typecheck`: Passed.
- `pnpm run lint`: Passed.
- `pnpm run build`: Passed.
- `node scripts/check-seo.mjs`: Passed (0 errors).
- `pnpm dlx linkinator out --recurse --silent --config linkinator.config.json`: Passed (18 links, 0 broken).

## Next Action
- Implement Pass 2 (Information Architecture): Build typed content layer and programmatic templates.
