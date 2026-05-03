# Design System & Aesthetic Blueprint

**Brand:** Dental Lifeline Clinic (Smile Saviors Dental Clinic and Implant Centre)
**Aesthetic:** Premium-modern, hygiene-first, "Clinic-as-Studio"
**Vibe:** Reassuring, sophisticated, painless, clean, and trustworthy. We avoid generic medical "blue/white" clichés.

## 1. Typography
We pair a high-contrast serif for headings with a clean humanist sans-serif for body text, creating an editorial, premium feel.

- **Primary Headings (Display & Titles):** Cormorant Garamond
  - Weight: SemiBold (600), Regular (400)
  - Usage: H1, H2, hero text, pull quotes, major section titles.
- **Body & UI Text:** Inter (or DM Sans)
  - Weight: Regular (400), Medium (500)
  - Usage: Paragraphs, navigation, buttons, captions, metadata.

## 2. Color Palette (OKLCH Variables)
The palette is built around sterile white, slate, deep navy, and soft mint, evoking both luxury and hygienic reassurance. Colors are defined in OKLCH for consistent perceived lightness.

### Light Mode
- `--background`: `oklch(0.99 0.01 200)` (Crisp, sterile white with a tiny hint of cool mint)
- `--foreground`: `oklch(0.2 0.05 250)` (Deep slate navy, high contrast but softer than pure black)
- `--card`: `oklch(1 0 0)` (Pure white for floating elements)
- `--card-foreground`: `oklch(0.2 0.05 250)`
- `--primary`: `oklch(0.3 0.08 240)` (Deep sophisticated navy)
- `--primary-foreground`: `oklch(0.99 0.01 200)`
- `--secondary`: `oklch(0.95 0.03 180)` (Soft, calming mint/sage for accents)
- `--secondary-foreground`: `oklch(0.2 0.05 250)`
- `--muted`: `oklch(0.96 0.01 250)` (Cool light gray)
- `--muted-foreground`: `oklch(0.5 0.02 250)`
- `--border`: `oklch(0.9 0.02 250)`
- `--input`: `oklch(0.9 0.02 250)`
- `--ring`: `oklch(0.7 0.05 180)` (Mint focus ring)

### Dark Mode
*Dark mode must feel intentional, like an elegant studio, not just an inverted UI.*
- `--background`: `oklch(0.15 0.02 250)` (Deep slate/charcoal)
- `--foreground`: `oklch(0.98 0.01 200)` (Crisp off-white)
- `--card`: `oklch(0.2 0.02 250)`
- `--card-foreground`: `oklch(0.98 0.01 200)`
- `--primary`: `oklch(0.8 0.05 180)` (Soft mint for dark mode primary actions)
- `--primary-foreground`: `oklch(0.15 0.02 250)`
- `--secondary`: `oklch(0.25 0.03 240)`
- `--secondary-foreground`: `oklch(0.98 0.01 200)`
- `--muted`: `oklch(0.22 0.02 250)`
- `--muted-foreground`: `oklch(0.7 0.01 250)`
- `--border`: `oklch(0.3 0.02 250)`
- `--input`: `oklch(0.3 0.02 250)`
- `--ring`: `oklch(0.5 0.05 180)`

## 3. Spacing & Sizing Scale
Follows a structured Tailwind rem-based scale.
- **Micro:** `0.25rem` (4px), `0.5rem` (8px)
- **Component Padding:** `1rem` (16px), `1.5rem` (24px)
- **Section Spacing (Rhythm):** `4rem` (64px) for tight sections, `8rem` (128px) for major sections.

## 4. Border Radius (Reassuring Geometry)
Forms should be smooth and approachable, avoiding harsh, aggressive corners.
- `--radius`: `0.75rem` (12px) - Standard for cards, inputs, and buttons.
- Secondary elements might use `1rem` (16px) or fully rounded `9999px` for pills.

## 5. Shadows & Depth
Shadows must be soft, diffuse, and premium, not harsh.
- **Card Shadow:** `0 10px 30px -5px oklch(0.2 0.05 250 / 0.05)` (A very gentle, elevated float)
- **Hover Shadow:** `0 20px 40px -10px oklch(0.2 0.05 250 / 0.1)`

## 6. Motion & Animation Principles
- **Vibe:** Fluid, unhurried, reassuring. Nothing should snap or pop aggressively.
- **Durations:** 300ms for micro-interactions (hover), 600ms-800ms for layout entrances.
- **Easings:** Custom easing `cubic-bezier(0.22, 1, 0.36, 1)` (smooth, natural deceleration).
- **Accessibility:** All animations must respect `prefers-reduced-motion`.
