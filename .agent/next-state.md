# Next State

Transition to Phase 3: Animated Visuals & Image Registry

## Objectives for Phase 3
- Create the animated visual component library.
- Establish the image registry to manage and type-check all visual assets.
- Ensure all visual components are SSR-safe, accessible (respecting `prefers-reduced-motion`), and utilize Tailwind CSS and SVGs.
- No page-level routing or global layouts should be built in this phase; focus strictly on reusable visual primitives and image management.

## Key Directives
- Visuals must align with the "warm-professional" aesthetic (hygienic, pristine, trusting).
- Images should be sourced via Unsplash (or similar) and configured in `next.config.mjs` via `remotePatterns`.
- Centralize image definitions in `lib/images.ts`.