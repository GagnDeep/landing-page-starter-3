# Landing Page Starter — Agent Guide

## Commands
- `pnpm run dev` — Start dev server (Turbopack)
- `pnpm run build` — Production build
- `pnpm run lint` — ESLint
- `pnpm run format` — Prettier
- `pnpm run typecheck` — TypeScript check
- `node scripts/check-seo.mjs` — SEO and Domain check

## Route Manifest
- `/` (Home)
- `/about` (About)
- (Future passes will add more routes according to brief)

## Rules
1. **Tokens:** All tokens live in `app/globals.css`.
2. **Metadata:** `lib/site.ts` is the *only* source of site metadata.
3. **Compliance Rule:** The domain is instituteofunderwriting.com but the public brand is The Underwriting Desk. The Institutes is an active trademark holder in exactly this space. The word Institute must *never* appear as the site name, in the logo, in any page title, masthead, footer, Open Graph tag or JSON-LD name field. The domain is a URL the site sits on; it is not the brand.
