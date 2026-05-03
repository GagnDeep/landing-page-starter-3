# Next State: Phase 3 - Animated Visuals & Image Registry

**Goal:**
Establish the visual asset pipeline, including static imagery and standard functional animations that reflect the "calm-clinic" aesthetic, before building the core layout shell.

**Upcoming Tasks:**
1. Setup `lib/images.ts` to manage static Unsplash image URLs securely via `next/image`.
2. Define remote patterns in `next.config.mjs` for Unsplash.
3. Build generic, reusable animated visual components in `components/visuals/` using Tailwind/tw-animate-css (e.g., subtle fade-ins, gentle floating elements).
4. Ensure all visual components respect `prefers-reduced-motion` for accessibility.
5. Do not build full page layouts yet; focus purely on the visual primitives.