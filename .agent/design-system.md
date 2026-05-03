# Design System & Visual Identity

## Brand Identity & Aesthetic
- **Vibe:** Calming, Modern Medical, Warm, Friendly, Premium, Expert
- **Keywords:** Invisible Aligners, Aesthetic Dentistry, Painless, Specialized Care
- **Core Principle:** Avoid generic AI startup aesthetics. The interface should feel like a high-end, approachable clinic. Dark mode should provide lower contrast surfaces for eye comfort rather than just inverting colors.

## Typography
- **Heading Font:** `Outfit` (Evokes a modern, clean, approachable medical feel, with subtle geometric roundness).
- **Body Font:** `Manrope` (Highly legible, modern sans-serif with a warm and friendly character).

## Color Tokens (OKLCH)

### Light Mode
- **Background (`--background`):** `oklch(0.99 0.01 240)` - Soft, pearl-like white with a hint of cool blue for a clinical yet calming feel.
- **Surface/Card (`--card`):** `oklch(1 0 0)` - Pure white for clean separation.
- **Foreground (`--foreground`):** `oklch(0.25 0.02 240)` - Deep slate-blue instead of harsh black for softer readability.
- **Primary (`--primary`):** `oklch(0.60 0.15 230)` - A reassuring, professional medical blue.
- **Primary Foreground (`--primary-foreground`):** `oklch(0.98 0 0)` - Crisp white text on primary backgrounds.
- **Secondary (`--secondary`):** `oklch(0.95 0.03 200)` - A gentle, airy teal/mint for supportive elements.
- **Secondary Foreground (`--secondary-foreground`):** `oklch(0.35 0.10 200)` - Deep teal for readable text on secondary backgrounds.
- **Accent (`--accent`):** `oklch(0.85 0.10 85)` - A warm, friendly amber/gold for highlights and subtle attention (not warnings).
- **Accent Foreground (`--accent-foreground`):** `oklch(0.30 0.05 85)` - Dark warm tone for accent text.
- **Muted (`--muted`):** `oklch(0.96 0.01 240)` - Softest gray-blue for subtle backgrounds.
- **Muted Foreground (`--muted-foreground`):** `oklch(0.55 0.02 240)` - Mid-tone gray-blue for secondary text.
- **Border (`--border`):** `oklch(0.92 0.01 240)` - Gentle structural lines.
- **Ring (`--ring`):** `oklch(0.60 0.15 230)` - Matches primary for focus states.
- **Destructive (`--destructive`):** `oklch(0.60 0.18 20)` - Softened medical red, avoiding alarming neon tones.

### Dark Mode (Calming, Low-Contrast Surfaces)
- **Background (`--background`):** `oklch(0.20 0.02 240)` - Deep, soothing slate-blue, avoiding stark black.
- **Surface/Card (`--card`):** `oklch(0.23 0.02 240)` - Slightly elevated slate for cards.
- **Foreground (`--foreground`):** `oklch(0.95 0.01 240)` - Soft off-white for comfortable reading.
- **Primary (`--primary`):** `oklch(0.70 0.12 230)` - Lightened medical blue to ensure contrast on dark backgrounds.
- **Primary Foreground (`--primary-foreground`):** `oklch(0.20 0.02 240)` - Dark text on primary buttons for contrast.
- **Secondary (`--secondary`):** `oklch(0.28 0.05 200)` - Deep, muted teal for supportive backgrounds.
- **Secondary Foreground (`--secondary-foreground`):** `oklch(0.90 0.08 200)` - Light teal for readability.
- **Accent (`--accent`):** `oklch(0.30 0.06 85)` - Muted amber for subtle highlights.
- **Accent Foreground (`--accent-foreground`):** `oklch(0.90 0.10 85)` - Bright amber text.
- **Muted (`--muted`):** `oklch(0.26 0.02 240)` - Subtle dark gray-blue for subdued areas.
- **Muted Foreground (`--muted-foreground`):** `oklch(0.70 0.02 240)` - Light gray-blue for secondary text.
- **Border (`--border`):** `oklch(0.30 0.02 240)` - Subtle separation lines.
- **Ring (`--ring`):** `oklch(0.70 0.12 230)` - Matches primary for focus states.
- **Destructive (`--destructive`):** `oklch(0.65 0.15 20)` - Desaturated red for dark mode.

## Spacing & Layout
- **Grid:** 12-column fluid grid, breaking gracefully at standard container widths.
- **Rhythm:** Utilize a modular scale for spacing (`var(--space-2)` to `var(--space-12)` mapping roughly to `8px` to `128px`), ensuring generous white space to evoke a premium, uncrowded, calm clinic environment.
- **Section Spacing:** Generous padding between major page sections (`py-24` or `py-32` on desktop, scaling down on mobile).

## Shape & Form
- **Border Radius:**
  - `--radius-sm`: `0.25rem` (Subtle UI elements)
  - `--radius-md`: `0.5rem` (Cards, inputs)
  - `--radius-lg`: `1rem` (Major containers, featured blocks)
  - `--radius-full`: `9999px` (Pills, circular avatars)
- **Shadows:** Use extremely soft, diffuse shadows with low opacity to create gentle elevation, avoiding harsh, dark drop shadows. Focus on light mode elevation; dark mode should rely more on subtle borders and surface lightness variations.

## Motion & Interaction Principles
- **Philosophy:** Purposeful, calming, and reassuring. Avoid sudden snaps or chaotic, overly fast animations.
- **Easing (`--ease-medical`):** `cubic-bezier(0.2, 0.8, 0.2, 1)` - A smooth, decelerating ease that feels natural and patient.
- **Durations:**
  - Fast (micro-interactions): `150ms`
  - Medium (state changes, hovers): `300ms`
  - Slow (page transitions, large reveals): `500ms` - `700ms`
- **Accessibility:** All motion must respect `prefers-reduced-motion`.
