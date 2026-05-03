# Design System: Naresh Dental Clinic and Implant Center

## 1. Aesthetic Direction

**Tone**: Warm-Professional
**Vibe**: Clinical precision meets human warmth. High-end, pristine, reassuring, and deeply trustworthy.
**Differentiation**: Moving away from sterile, generic medical "AI slop." The interface should feel like a premium, modern health institute. It prioritizes pristine cleanliness (cool undertones) paired seamlessly with inviting human care (warm typography, soft structural elements, gentle gold/coral accents).

## 2. Typography

We establish a sophisticated duality: a high-legibility, elegant serif for authority and clinical heritage, paired with a clean, geometric sans-serif for modern precision and readability.

### Typefaces
- **Primary Display/Heading Font**: `Lora` (or similar high-legibility, modern serif like `Cormorant Garamond` or `Playfair Display`). Conveys established trust, heritage, and premium care.
- **Primary Body Font**: `DM Sans` (or `Inter`, `Plus Jakarta Sans`). Conveys clean, precise, modern medical hygiene.

### Type Scale (Modular - 1.25 Ratio)
- **H1 (Hero)**: Fluid `clamp(2.5rem, 5vw, 4rem)` — Bold, tight line-height (1.1).
- **H2 (Section Header)**: Fluid `clamp(2rem, 4vw, 3rem)` — Semi-Bold, tight line-height (1.15).
- **H3 (Card/Sub-header)**: `clamp(1.5rem, 3vw, 2rem)` — Medium.
- **H4 (Component Header)**: `1.25rem` (20px) — Medium.
- **Body Large (Intro/Lead)**: `1.125rem` (18px) — Regular, loose line-height (1.6).
- **Body Default**: `1rem` (16px) — Regular, loose line-height (1.6).
- **Caption/Microcopy**: `0.875rem` (14px) — Medium, slightly open letter-spacing.

## 3. Color Palette

Powered by OKLCH variables in `app/globals.css`.

### Light Mode (The Pristine Clinic)
- **Background**: Warm hygienic white `oklch(0.99 0.01 75)`. Not pure clinical white; inviting.
- **Foreground**: Deep navy-gray `oklch(0.20 0.02 260)`. High contrast without the harshness of pure black.
- **Primary (Trust)**: Deep Blue `oklch(0.35 0.08 260)`. Used for major structural elements, primary buttons, and authority markers.
- **Secondary (Hygiene)**: Soft medical teal / ice blue `oklch(0.95 0.02 200)`. Used for subtle backgrounds, secondary buttons, and section dividers.
- **Accent (Warmth)**: Warm Gold/Coral `oklch(0.70 0.12 45)`. Used sparingly for interactive elements, highlights, and CTAs to break up the cool medical tones.

### Dark Mode (The X-Ray Room / Deep Focus)
- **Background**: Deep slate `oklch(0.18 0.02 260)`. Restful on the eyes, premium feel.
- **Foreground**: Soft warm white `oklch(0.96 0.01 75)`.
- **Primary**: Shifted to Teal `oklch(0.65 0.10 200)` for better pop against dark backgrounds.
- **Secondary**: Darker slate `oklch(0.28 0.04 260)`.
- **Accent**: Brightened warm gold `oklch(0.75 0.12 45)`.

## 4. Spacing & Spatial Design

- **Rhythm**: Embraces generous white space to convey cleanliness and calm. Tighten grouping for related items; use expansive padding for section dividers.
- **Scale**: `rem` based (4px baseline). `0.25rem` (4px), `0.5rem` (8px), `1rem` (16px), `1.5rem` (24px), `2rem` (32px), `3rem` (48px), `4rem` (64px), `6rem` (96px).
- **Border Radius**: `0.75rem` (12px) base. Soft but structured. Avoid pill-shaped buttons everywhere; use subtle rounding for an approachable but professional feel.
- **Containers**: Center layouts with max-widths (e.g., `max-w-7xl`). Break the grid occasionally with full-bleed image/color blocks for visual interest.

## 5. Visual Details & Motion

### Motion
- Focus on smooth, natural deceleration (`ease-out-quint`).
- **Page Loads**: Staggered reveals for hero sections. Text fades up slightly, images scale in slowly.
- **Interactions**: Fast, optimistic feedback. Subtle transform scaling (e.g., `scale-105`) on hover for clinical imagery cards.

### Decor
- **Avoid**: Glassmorphism everywhere, generic drop shadows, AI-slop glowing borders.
- **Use**: Subtle, purposeful borders (`oklch(0.90 0.01 260)` in light mode). High-quality imagery, perhaps subtle geometric abstract patterns (representing precise dental alignment or sound waves) used at 5% opacity in backgrounds.

## 6. Component Guidelines

- **Buttons**: Clear hierarchy. Primary (Deep Blue), Secondary/Ghost (Soft Teal background or transparent). Hover states must feel responsive.
- **Cards**: Don't nest cards. Use cards for clinical services, staff profiles, and testimonials. Keep them flat with a subtle border or very soft shadow; prioritize typography over container styling.
- **Imagery**: Must reflect the 4.9-star reality. High resolution, bright lighting, focus on technology and patient comfort.