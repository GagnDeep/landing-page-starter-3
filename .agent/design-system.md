# Design System: Amil’s Hair Lounge

## Brand Personality
- **Vibe:** Premium, trendy, affordable luxury, high-end lifestyle magazine meets boutique studio.
- **Core Identity:** Treatment-specialist, transformative, expert-led, inviting yet rigorous.

## Typography
We avoid generic system fonts in favor of a high-personality pairing that screams "editorial elegance" mixed with "modern clarity."

- **Headings (`--font-heading`):** Cormorant Garamond
  - A classic, elegant serif that evokes luxury, high-end magazines, and premium salon aesthetics.
- **Body (`--font-sans`):** DM Sans
  - A clean, modern, geometric sans-serif that balances the classic headings with contemporary readability and approachability.

## Color Tokens (OKLCH)
A sophisticated palette focusing on deep, rich tones and soft, luxurious neutrals to achieve a boutique studio feel. Dark mode parity is a primary concern.

### Light Mode
- `--background`: `oklch(0.98 0.01 60)` (Soft warm pearl/linen)
- `--foreground`: `oklch(0.25 0.02 20)` (Deep espresso/charcoal for soft contrast, not pure black)
- `--card`: `oklch(0.99 0.005 60)` (Almost white, warm tint)
- `--card-foreground`: `oklch(0.25 0.02 20)`
- `--popover`: `oklch(0.99 0.005 60)`
- `--popover-foreground`: `oklch(0.25 0.02 20)`
- `--primary`: `oklch(0.35 0.05 20)` (Rich warm brown/mahogany - the core brand luxury hue)
- `--primary-foreground`: `oklch(0.98 0.01 60)`
- `--secondary`: `oklch(0.92 0.02 45)` (Soft beige/champagne)
- `--secondary-foreground`: `oklch(0.35 0.05 20)`
- `--muted`: `oklch(0.94 0.01 45)`
- `--muted-foreground`: `oklch(0.55 0.02 20)`
- `--accent`: `oklch(0.85 0.04 40)` (Muted terracotta/clay for subtle highlights)
- `--accent-foreground`: `oklch(0.25 0.02 20)`
- `--destructive`: `oklch(0.50 0.15 25)`
- `--border`: `oklch(0.88 0.01 45)`
- `--input`: `oklch(0.88 0.01 45)`
- `--ring`: `oklch(0.35 0.05 20)`
- `--radius`: `0.25rem` (Subtle rounding, slightly sharp for editorial feel)

### Dark Mode
- `--background`: `oklch(0.18 0.02 20)` (Rich dark chocolate/espresso base)
- `--foreground`: `oklch(0.96 0.01 60)` (Warm off-white)
- `--card`: `oklch(0.22 0.02 20)` (Slightly lighter espresso)
- `--card-foreground`: `oklch(0.96 0.01 60)`
- `--popover`: `oklch(0.22 0.02 20)`
- `--popover-foreground`: `oklch(0.96 0.01 60)`
- `--primary`: `oklch(0.85 0.04 40)` (Muted terracotta clay - pops against dark background)
- `--primary-foreground`: `oklch(0.18 0.02 20)`
- `--secondary`: `oklch(0.28 0.03 25)` (Deep muted auburn)
- `--secondary-foreground`: `oklch(0.96 0.01 60)`
- `--muted`: `oklch(0.28 0.03 25)`
- `--muted-foreground`: `oklch(0.75 0.02 45)`
- `--accent`: `oklch(0.30 0.04 25)`
- `--accent-foreground`: `oklch(0.96 0.01 60)`
- `--destructive`: `oklch(0.65 0.15 25)`
- `--border`: `oklch(0.28 0.03 25)`
- `--input`: `oklch(0.28 0.03 25)`
- `--ring`: `oklch(0.85 0.04 40)`

## Spacing & Sizing Scale
- Emphasizes generous, rhythmic breathing room consistent with high-end print design.
- Uses fluid sizing clamps for responsive scaling.
- Tighter grouping for related items (e.g., heading + subtitle).
- Expansive margins between distinct sections.

## Border-Radius System
- **Style:** Sharp, editorial edges mixed with subtle curves for approachability.
- Avoid large pill shapes unless functionally required (like badges).
- Standard `--radius`: `0.25rem`. Elements feel structured, deliberate, and high-end.

## Shadow Depth System
- **Focus:** Shallow, intentional depth rather than floaty, generic dropshadows.
- Avoid heavy blurs. Use sharp, offset shadows for a brutalist/editorial touch, or incredibly diffuse, low-opacity shadows for a soft luxury feel.
- Dark mode relies mostly on border variations and background lightness differences rather than shadows.

## Motion & Animation Principles
- **Vibe:** Deliberate, smooth, cinematic.
- **Easing:** Exponential easing (e.g., `cubic-bezier(0.16, 1, 0.3, 1)` or `ease-out-quint`) for natural, luxurious deceleration.
- Avoid bouncy or rapid animations.
- Rely on subtle opacity fades and slow, graceful vertical reveals or parallax effects.
- Respect `prefers-reduced-motion` at all times.
