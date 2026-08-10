# They Are Tracking - Rules & Guidelines

## Commands
Run on every pass verify:
pnpm install --frozen-lockfile; pnpm run typecheck; pnpm run lint; pnpm run build; node scripts/check-seo.mjs; pnpm dlx linkinator out --recurse --silent

## Route Manifest
- Home: `/`
- Hubs: `/brokers/`, `/guides/`
- Spokes: `/brokers/whitepages/`, `/brokers/spokeo/`, `/guides/remove-home-address/`
- Trust Spine: `/disclosure/`, `/why-this-site-is-free/`
- Tool: `/tracker/`
- Money: `/compare-removal-services/`, `/reviews/incogni/`

## Core Rules
1. **Tokens**: All design tokens live in `app/globals.css`.
2. **Metadata**: `lib/site.ts` is the single source of truth for site metadata.
3. **Compliance**: The free manual path is NEVER gated, throttled, or degraded to sell the paid one. No email wall, no partial list, no account. Disclosure sits above the first affiliate link on every page.
4. **Theme**: Signal Flare (Dark-first, dense, table-driven).
