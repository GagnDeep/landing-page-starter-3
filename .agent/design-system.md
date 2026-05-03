# Design System & Brand Identity

**Brand:** Naresh Dental Clinic and Implant Center
**Core Identity:** Warm-professional, hygienic, clinical-yet-inviting, patient-centric, high-end medical authority.

## 1. Typography
We are avoiding standard AI-startup tropes by selecting typefaces that convey trust, precision, and approachability.

- **Headings (`--font-heading`):** *Lora*
  - A contemporary serif with roots in calligraphy. It conveys authority, medical precision, and high-end trust while maintaining warmth.
- **Body (`--font-sans`):** *Manrope*
  - A modern sans-serif with excellent legibility. It provides a clean, clinical, and highly accessible reading experience for patient information.

## 2. Color Palette (OKLCH)
Colors are mapped to CSS variables to support seamless light and dark mode switching. Contrast ratios have been considered for WCAG 2.1 compliance.

### Light Mode
The light mode focuses on a hygienic, bright atmosphere softened by warm, inviting undertones (creams and soft grays) with clinical teal/blue for trust.

- `--background`: `oklch(0.99 0.01 70)` (Warm, hygienic white)
- `--foreground`: `oklch(0.25 0.02 240)` (Deep slate, avoiding harsh pure black)
- `--card`: `oklch(1 0 0)` (Pure white)
- `--card-foreground`: `oklch(0.25 0.02 240)`
- `--popover`: `oklch(1 0 0)`
- `--popover-foreground`: `oklch(0.25 0.02 240)`
- `--primary`: `oklch(0.55 0.12 230)` (Trustworthy clinical blue/teal)
- `--primary-foreground`: `oklch(0.98 0 0)` (Crisp white)
- `--secondary`: `oklch(0.95 0.02 70)` (Inviting warm cream)
- `--secondary-foreground`: `oklch(0.3 0.03 70)` (Deep warm brown/gray)
- `--muted`: `oklch(0.96 0.01 240)` (Soft clinical gray-blue)
- `--muted-foreground`: `oklch(0.55 0.02 240)`
- `--accent`: `oklch(0.92 0.04 230)` (Soft blue highlight)
- `--accent-foreground`: `oklch(0.25 0.02 240)`
- `--destructive`: `oklch(0.6 0.15 20)` (Hygienic, clear red)
- `--destructive-foreground`: `oklch(0.98 0 0)`
- `--border`: `oklch(0.9 0.01 240)`
- `--input`: `oklch(0.9 0.01 240)`
- `--ring`: `oklch(0.55 0.12 230)`

### Dark Mode
The dark mode maintains professional authority, shifting to deep slate backgrounds while keeping text highly legible. Warmth is introduced through subtle desaturated creams.

- `--background`: `oklch(0.20 0.02 240)` (Deep professional slate)
- `--foreground`: `oklch(0.98 0.01 70)` (Warm off-white)
- `--card`: `oklch(0.25 0.02 240)`
- `--card-foreground`: `oklch(0.98 0.01 70)`
- `--popover`: `oklch(0.25 0.02 240)`
- `--popover-foreground`: `oklch(0.98 0.01 70)`
- `--primary`: `oklch(0.70 0.10 230)` (Lighter clinical blue for contrast)
- `--primary-foreground`: `oklch(0.20 0.02 240)`
- `--secondary`: `oklch(0.30 0.02 70)` (Deep warm brown/gray)
- `--secondary-foreground`: `oklch(0.95 0.02 70)`
- `--muted`: `oklch(0.30 0.02 240)`
- `--muted-foreground`: `oklch(0.75 0.02 240)`
- `--accent`: `oklch(0.35 0.04 230)`
- `--accent-foreground`: `oklch(0.98 0.01 70)`
- `--destructive`: `oklch(0.6 0.15 20)`
- `--destructive-foreground`: `oklch(0.98 0 0)`
- `--border`: `oklch(0.35 0.02 240)`
- `--input`: `oklch(0.35 0.02 240)`
- `--ring`: `oklch(0.70 0.10 230)`

## 3. Spacing & Visual Rhythm
- **Rhythm:** The layout relies on spacious, breathable sections to emphasize hygiene and clarity. Standard spacing multipliers should use base `4px` increments (e.g., `pt-16`, `pb-24` for large section padding).
- **Gaps:** Generous gaps between elements (`gap-8`, `gap-12`) prevent visual clutter, ensuring patient focus is guided naturally.

## 4. Border Radius (`--radius`)
- **Base Radius:** `0.5rem` (8px). Soft enough to be approachable and welcoming, but structured enough to maintain a precise, clinical look.

## 5. Motion & Transitions
- **Easing:** Smooth, ease-in-out transitions to reflect care and gentle touch (e.g., `transition-all duration-300 ease-in-out`).
- **Reduced Motion:** All animations must respect `prefers-reduced-motion` to ensure an accessible experience for all users.
