# Design System: Boho Salon Chandigarh

## 1. Brand Identity & Aesthetic
- **Vibe:** Boho-modern, sophisticated, earthy, precise, premium.
- **Target Audience:** Local and NRI clientele in Sector 17, Chandigarh.
- **Core Focus:** Nail art (chrome gel nails) and advanced curly haircuts.

## 2. Typography
Typography sets the tone for a premium editorial feel, pairing a high-contrast serif for headings with a clean humanist sans-serif for body copy.

- **Headings (Display/Titles):**
  - *Font Family:* `Playfair Display`, `Cormorant Garamond`, or similar high-contrast serif.
  - *Characteristics:* Elegant, editorial, expressive.
  - *Usage:* Hero titles, section headings, prominent callouts.

- **Body Copy (Paragraphs/UI):**
  - *Font Family:* `Inter`, `DM Sans`, or `Outfit`.
  - *Characteristics:* Clean, legible, humanist sans-serif.
  - *Usage:* Paragraph text, buttons, navigation, meta text.

- **Hierarchy:**
  - `h1`: 4rem / 1.1 line-height (Desktop), 2.5rem (Mobile)
  - `h2`: 3rem / 1.2 line-height (Desktop), 2rem (Mobile)
  - `h3`: 2rem / 1.3 line-height (Desktop), 1.5rem (Mobile)
  - `p`: 1.125rem / 1.6 line-height (Desktop), 1rem (Mobile)
  - `small`: 0.875rem / 1.5 line-height

## 3. Color Palette (OKLCH Tokens)
A balanced palette prioritizing a warm, earthy, and sophisticated boho feel. Dark mode is thoughtfully balanced, avoiding harsh inversions. All text contrasts pass WCAG AAA accessibility ratios.

### Light Mode (Base: Warm, Soft Off-White)
- **Background:** Soft, warm off-white (`oklch(0.98 0.01 75)`)
- **Foreground (Text):** Deep charcoal/espresso (`oklch(0.25 0.02 50)`)
- **Primary:** Rich terracotta/rust (`oklch(0.45 0.05 45)`)
- **Secondary:** Soft clay/sand (`oklch(0.92 0.02 60)`)
- **Muted/Surfaces:** Subtle warm grey/beige (`oklch(0.94 0.01 80)`)
- **Accent:** Pale mustard/ochre (`oklch(0.85 0.04 80)`)

### Dark Mode (Base: Deep Warm Brown/Charcoal)
- **Background:** Deep warm brown/charcoal (`oklch(0.20 0.01 50)`)
- **Foreground (Text):** Soft off-white (`oklch(0.95 0.01 75)`)
- **Primary:** Lighter terracotta for contrast (`oklch(0.65 0.06 45)`)
- **Secondary:** Dark taupe (`oklch(0.30 0.02 50)`)
- **Muted/Surfaces:** Muted deep tone (`oklch(0.28 0.01 50)`)
- **Accent:** Deep olive/ochre tone (`oklch(0.35 0.03 80)`)

## 4. Spacing Scale
The spacing scale relies on a 4px/8px baseline grid to ensure consistent visual rhythm and whitespace, critical for the premium boho-modern feel.

- **Scale:**
  - `0`: 0px
  - `1`: 4px (0.25rem)
  - `2`: 8px (0.5rem)
  - `4`: 16px (1rem)
  - `6`: 24px (1.5rem)
  - `8`: 32px (2rem)
  - `12`: 48px (3rem)
  - `16`: 64px (4rem)
  - `24`: 96px (6rem)
  - `32`: 128px (8rem)

- **Layout Whitespace:**
  - Standard section vertical padding: 6rem (desktop), 4rem (mobile).
  - Component gap: 1rem to 2rem depending on context.

## 5. Motion Principles
Motion should feel organic, deliberate, and smooth, never rushed or erratic.

- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (standard ease-in-out).
- **Duration:**
  - Micro-interactions (hover, focus): `150ms` to `200ms`.
  - Content reveals (fade-ins, slide-ups): `400ms` to `600ms`.
  - Page transitions: `300ms`.
- **Styles:**
  - Gentle fade-ins and slide-ups (Y-axis translation of 10px to 20px).
  - Parallax effects on large imagery to create depth.
  - Image scale on hover for service cards (subtle, 1.02x scale).
