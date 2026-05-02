# Design System: Dr. Kochar’s House of Smiles

## 1. Core Principles
- **Compassionate Care**: Balancing professional clinical excellence with human warmth. Avoid "sterile" hospital looks.
- **Trust & Reliability**: Deep blues/teals establish trust; soft creams and organic accents provide warmth.
- **Accessible Excellence**: High contrast, readable typography, clear hierarchy for all ages (families, elderly).

## 2. Typography
- **Headings (Brand / Warmth)**: `Fraunces` (warm, empathetic serif).
- **Body (Clarity / Readability)**: `Inter` (clean, highly readable sans-serif).

### Scale (Modular, 1.25 ratio)
- `--text-caption`: 0.8rem (12.8px)
- `--text-body`: 1rem (16px) - Minimum for readability.
- `--text-secondary`: 1.25rem (20px)
- `--text-subheading`: 1.56rem (25px)
- `--text-heading-3`: 1.95rem (31px)
- `--text-heading-2`: 2.44rem (39px)
- `--text-heading-1`: 3.05rem (49px)
- `--text-display`: 3.81rem (61px)

## 3. Color Palette & Tokens

### Light Mode
- `--color-primary-dentist-blue`: #1e3a8a (Trust, reliability)
- `--color-primary-dentist-teal`: #0d9488 (Clinical excellence, freshness)
- `--color-accent-gold`: #d97706 (Warmth, high-quality care)
- `--color-surface-soft-white`: #fdfbf7 (Non-sterile background)
- `--color-surface-cream`: #fef3c7 (Warm accent sections)
- `--color-text-primary`: #0f172a
- `--color-text-secondary`: #334155
- `--color-border-subtle`: #e2e8f0

### Dark Mode
*Intentional design, not just inverted.*
- `--color-primary-dentist-blue`: #60a5fa (Brighter for dark mode contrast)
- `--color-primary-dentist-teal`: #2dd4bf
- `--color-accent-gold`: #fbbf24
- `--color-surface-deep-slate`: #0f172a (Main background)
- `--color-surface-slate-muted`: #1e293b (Card/section backgrounds)
- `--color-text-primary`: #f8fafc
- `--color-text-secondary`: #cbd5e1
- `--color-border-subtle`: #334155

## 4. Spacing (Modular Scale)
Using `rem` units based on an 8px grid (1rem = 16px).
- `--space-1`: 0.25rem (4px)
- `--space-2`: 0.5rem (8px)
- `--space-3`: 0.75rem (12px)
- `--space-4`: 1rem (16px)
- `--space-6`: 1.5rem (24px)
- `--space-8`: 2rem (32px)
- `--space-12`: 3rem (48px)
- `--space-16`: 4rem (64px)
- `--space-24`: 6rem (96px)
- `--space-32`: 8rem (128px)

## 5. Border Radius
Friendly, approachable aesthetic. Avoid sharp, clinical edges.
- `--radius-sm`: 0.375rem (6px)
- `--radius-md`: 0.5rem (8px)
- `--radius-lg`: 1rem (16px)
- `--radius-xl`: 1.5rem (24px)
- `--radius-full`: 9999px (Pills/circles)

## 6. Motion & Transitions
Smooth, calming, and not jarring.
- `--transition-duration-fast`: 150ms
- `--transition-duration-normal`: 300ms
- `--transition-duration-slow`: 500ms
- `--ease-out-back`: cubic-bezier(0.34, 1.56, 0.64, 1) - Playful but controlled
- `--ease-in-out`: cubic-bezier(0.4, 0, 0.2, 1) - Smooth state changes
