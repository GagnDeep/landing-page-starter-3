# Current State

Phase: 3/8 — Animated Visual Components & Image Registry

- Image registry created in `lib/images.ts` with Unsplash assets and photographer credits.
- `next.config.mjs` updated to allow remote Unsplash images.
- Created 8 animated visual components in `components/visuals/`:
  1. `AnimatedGradientMesh`
  2. `LogoMarquee`
  3. `AnimatedHeroIllustration`
  4. `AnimatedChart`
  5. `DotMatrixGrid`
  6. `FloatingBlobs`
  7. `CodeWindowTyping`
  8. `MicroIconSet`
- Animations respect `prefers-reduced-motion` and are hydration-safe.
