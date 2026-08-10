# AGENTS.md

## Commands
* pnpm install --frozen-lockfile
* pnpm run typecheck
* pnpm run lint
* pnpm run build
* node scripts/check-seo.mjs
* pnpm dlx linkinator out --recurse --silent

## Route Manifest
Hubs:
- /countries/
- /compare/
- /methodology/

Spokes:
- /countries/portugal/
- /countries/panama/
- /visas/
- /healthcare/
- /taxes/

Money page:
- /dossiers/

## Rules
* All tokens live in `app/globals.css`.
* `lib/site.ts` is the only source of site metadata.
* COMPLIANCE RULE: No financial, tax, immigration or medical advice. Every comparison links /methodology/ above the fold, stating how figures were gathered, when, and what is unverified.
* These strings must fail the build: "we recommend", "best country to retire", "guaranteed residency", "tax-free".
* Every cost, visa rule, income floor, fee, processing time, treaty term and healthcare claim ships as `{{VERIFY: confirm on the issuing government's page or treaty text, with URL and date}}`.
