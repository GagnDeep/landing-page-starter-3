# Setu Direct — Agent Guide

## Commands
`pnpm install --frozen-lockfile`
`pnpm run typecheck`
`pnpm run lint`
`pnpm run build`
`node scripts/check-seo.mjs`
`pnpm dlx linkinator out --recurse --silent`

## Route Manifest
- Hubs: `/`, `/oci/`, `/passport/`, `/guides/`
- Spokes: `/oci/eligibility/`, `/passport/renewal/`, `/passport/surrender-and-renunciation/`, `/visa/`, `/fees-and-timelines/`
- Money pages: `/packages/`, `/start/`
- About: `/about/`

## Rules
1. All tokens live in `app/globals.css`.
2. `lib/site.ts` is the only source of site metadata.
3. COMPLIANCE RULE: No page or meta tag may imply government, consular or outsourcing-partner status; an independence strip renders on every route. The build fails on any rendered instance of "official", "government-approved", "VFS", "High Commission" or "guaranteed approval".
