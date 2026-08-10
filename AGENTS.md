# COMMANDS

pnpm install --frozen-lockfile
pnpm run typecheck
pnpm run lint
pnpm run build
node scripts/check-seo.mjs
pnpm dlx linkinator out --recurse --silent
! grep -ri "lorem ipsum" app components content lib
! grep -rn "TODO\|FIXME" app components content lib
! grep -rn "@ts-ignore\|@ts-expect-error\|eslint-disable" app components content lib

# ROUTE MANIFEST

/ (Home)
/about (About)
/404 (Not Found)
/tools (Tools Hub)
/tools/[slug] (Tool Spoke)
/guides (Guides Hub)
/guides/[slug] (Guide Spoke)

# RULES

1. All tokens live in app/globals.css.
2. lib/site.ts is the only source of site metadata.
3. COMPLIANCE RULE: No invented facts. Any figure, price, date, fee, threshold, payout or vendor claim not supplied in the domain brief ships as the literal token {{VERIFY: what is needed and where to source it}}. No fabricated social proof. Directories and datasets with no real records ship honestly empty with a well-designed empty state.
4. The SEC brought its first AI-washing enforcement actions in March 2024 against Delphia and Global Predictions.
