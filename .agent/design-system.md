# Design System Blueprint

## Typography
- **Heading Font:** Cormorant Garamond (High-contrast serif, evokes luxury and editorial elegance)
- **Body Font:** DM Sans (Clean, humanist sans-serif, provides readability and modern balance)
- **Scale:**
  - H1: 4rem / 1.1 (Hero)
  - H2: 3rem / 1.2 (Section Titles)
  - H3: 2rem / 1.3 (Subsections)
  - Body Large: 1.125rem / 1.6 (Intro text)
  - Body Base: 1rem / 1.6 (Standard)
  - Caption: 0.875rem / 1.4 (Meta, disclaimers)

## Color Palette (OKLCH CSS Variables)
*Theme: "Bridal Aesthetic" — Soft, radiant, high-end studio feel.*

### Light Mode
- `--background`: `oklch(0.98 0.01 75)` - Soft pearl/alabaster.
- `--foreground`: `oklch(0.25 0.02 75)` - Deep charcoal (softer than pure black).
- `--primary`: `oklch(0.75 0.08 45)` - Warm, muted gold/champagne.
- `--primary-foreground`: `oklch(0.98 0.01 75)` - Pearl text on primary buttons.
- `--secondary`: `oklch(0.93 0.02 75)` - Soft taupe/warm grey.
- `--secondary-foreground`: `oklch(0.3 0.02 75)` - Dark taupe.
- `--muted`: `oklch(0.95 0.01 75)` - Very light grey for background panels.
- `--muted-foreground`: `oklch(0.55 0.02 75)` - Medium grey for secondary text.
- `--accent`: `oklch(0.92 0.03 45)` - Soft blush/rose gold accent.
- `--accent-foreground`: `oklch(0.25 0.02 75)` - Deep charcoal.
- `--border`: `oklch(0.9 0.02 75)` - Subtle structural lines.
- `--card`: `oklch(0.99 0.005 75)` - Almost pure white with a hint of warmth.

### Dark Mode
*Maintains luxury, avoiding harsh neon or pure black.*
- `--background`: `oklch(0.18 0.01 75)` - Rich espresso/charcoal blend.
- `--foreground`: `oklch(0.95 0.01 75)` - Soft pearl (off-white).
- `--primary`: `oklch(0.8 0.06 45)` - Luminous gold/champagne.
- `--primary-foreground`: `oklch(0.2 0.02 75)` - Dark text on primary buttons.
- `--secondary`: `oklch(0.28 0.02 75)` - Deep warm grey.
- `--secondary-foreground`: `oklch(0.9 0.01 75)` - Light taupe.
- `--muted`: `oklch(0.25 0.01 75)` - Dark muted background panels.
- `--muted-foreground`: `oklch(0.7 0.02 75)` - Medium light grey.
- `--accent`: `oklch(0.3 0.03 45)` - Deep rose/burgundy undertone.
- `--accent-foreground`: `oklch(0.95 0.01 75)` - Soft pearl.
- `--border`: `oklch(0.3 0.02 75)` - Dark subtle lines.
- `--card`: `oklch(0.22 0.015 75)` - Elevated dark panel.

## Spacing System
- *Rhythm:* Emphasizes generous whitespace and "breathing room."
- *Variables:*
  - `space-sm`: 0.5rem
  - `space-md`: 1rem
  - `space-lg`: 2rem
  - `space-xl`: 4rem
  - `section-gap`: 8rem (Desktop) / 4rem (Mobile)

## Borders & Radii
- *Aesthetic:* Soft, organic, approachable. Avoiding sharp clinical corners.
- `--radius`: 0.5rem (Base)
- Soft rounded edges for buttons (often pill-shaped `rounded-full`) and gentle radii (`rounded-2xl` or `rounded-3xl`) for image cards and floating containers.

## Shadows & Elevation
- *Aesthetic:* Diffused, soft, "glow-like" rather than harsh drop shadows.
- `shadow-premium`: `0 20px 40px -10px oklch(0.25 0.02 75 / 0.05)` (Light mode)

## Motion & Animation Principles
- **Pacing:** Slow, deliberate, smooth.
- **Easings:** `cubic-bezier(0.22, 1, 0.36, 1)` (Smooth out).
- **Triggers:** Scroll-based fade-ins, subtle parallax, gentle scale on hover (no aggressive bouncing).
- **Accessibility:** Must respect `prefers-reduced-motion`.
