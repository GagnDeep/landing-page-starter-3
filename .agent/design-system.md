# Design System: The Dental Masters

## 1. Design Philosophy
The Dental Masters digital presence embodies a "premium clinical" aesthetic. It conveys an international-grade, "Clinic-as-Studio" experience that is highly trusted, sophisticated, and hygienic. We actively avoid generic medical website tropes, favoring minimalism, high contrast, and clinical precision.

## 2. Typography
- **Headlines (Serif):** `Cormorant Garamond` (or similar high-contrast serif). Used for all primary headings (H1, H2) to evoke elegance, authority, and premium quality.
- **Body & UI (Sans-Serif):** `Inter` or `DM Sans`. Clean, modern, highly readable humanist sans-serif used for body text, UI elements, labels, and navigation.

## 3. Color Palette & Tokens (OKLCH)
The palette relies on slate, sterile white, deep navy, and soft mint. OKLCH is used for perceptual uniformity and scalable theming in CSS variables.

### Light Mode
- **Background (Sterile White):** `oklch(0.99 0 0)` - Crisp, clean foundation.
- **Foreground (Deep Navy):** `oklch(0.20 0.04 260)` - High contrast for text, avoiding pure black.
- **Primary (Deep Navy):** `oklch(0.25 0.05 260)` - Brand primary, robust and trustworthy.
- **Primary Foreground:** `oklch(0.99 0 0)` - Text on primary.
- **Secondary (Soft Mint):** `oklch(0.94 0.03 160)` - Accents, gentle highlights.
- **Secondary Foreground:** `oklch(0.20 0.04 260)` - Text on secondary.
- **Muted (Light Slate):** `oklch(0.96 0.01 250)` - Subtle backgrounds, secondary surfaces.
- **Muted Foreground:** `oklch(0.50 0.02 250)` - Secondary text, captions.
- **Border:** `oklch(0.90 0.01 250)` - Subtle dividers.
- **Card/Popover:** `oklch(1.0 0 0)` - Surface elements.
- **Accent:** `oklch(0.90 0.04 160)` - Interactive highlights.

### Dark Mode
- **Background (Deep Navy/Slate):** `oklch(0.15 0.03 260)` - Rich, deep background.
- **Foreground (Sterile White):** `oklch(0.98 0 0)` - High contrast text.
- **Primary (Soft Mint):** `oklch(0.85 0.05 160)` - Prominent actions in dark mode.
- **Primary Foreground:** `oklch(0.15 0.03 260)` - Text on primary.
- **Secondary (Dark Slate):** `oklch(0.25 0.02 260)` - Surface variations.
- **Secondary Foreground:** `oklch(0.98 0 0)`
- **Muted:** `oklch(0.20 0.02 260)`
- **Muted Foreground:** `oklch(0.70 0.01 250)`
- **Border:** `oklch(0.25 0.02 260)`
- **Card/Popover:** `oklch(0.18 0.03 260)`
- **Accent:** `oklch(0.30 0.04 160)`

## 4. Spacing
We use a 4px/8px baseline grid to ensure a consistent visual rhythm.
- `spacing-1`: 4px
- `spacing-2`: 8px
- `spacing-3`: 12px
- `spacing-4`: 16px
- `spacing-6`: 24px
- `spacing-8`: 32px
- `spacing-12`: 48px
- `spacing-16`: 64px
- `spacing-24`: 96px
- `spacing-32`: 128px

## 5. Border Radius
Corners are slightly rounded but lean towards sharp, emphasizing precision and structure.
- `--radius`: `0.3rem`
- UI elements (buttons, inputs): Small to medium radius.
- Large containers (cards, hero sections): Subtle rounding or sharp edges depending on context.

## 6. Shadows
Shadows are soft, diffuse, and cold (slate-tinted) to maintain the clean clinical feel, avoiding muddy dark drop shadows.
- **sm:** Subtle elevation for interactive elements.
- **md:** Default surface elevation (cards).
- **lg:** Prominent floating elements (popovers, modals).

## 7. Motion & Animation Principles
- **Pacing:** Calm, deliberate, and smooth.
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out or ease-out).
- **Duration:** 200ms - 400ms for UI transitions. 600ms+ for layout reveals.
- **Effects:** Fade-ins, subtle vertical slides. Avoid aggressive scaling or bouncing.
- **Accessibility:** Respect `prefers-reduced-motion` for all visual components.
