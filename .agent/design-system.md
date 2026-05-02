# Design System: 99 Institute

## 1. Core Principles
- **Aesthetic:** Luxury Salon meets Modern Academy. High-end, bespoke, editorial, but accessible and educational.
- **Themes:** Glam Academy, Makeup Mastery, Student-friendly.
- **Vibe:** Sophisticated, timeless, glamorous, yet structured and clear.
- **Avoid:** Generic "tech-startup" tropes (e.g., overly playful blob shapes, standard flat primary blue, generic geometric illustrations).

## 2. Typography
A classic editorial contrast to establish authority and luxury.

- **Primary Headings (Display/Serif):** Playfair Display or Cormorant Garamond.
  - *Usage:* H1, H2, large quotes, section titles. Brings the "glam" and editorial luxury.
  - *Fallback:* Georgia, serif.
- **Secondary/UI (Sans-Serif):** Montserrat or Inter (geometric, clean).
  - *Usage:* Body text, buttons, forms, navigation, small caps overlines. Ensures legibility and a modern, "student-friendly" structure.
  - *Fallback:* system-ui, sans-serif.

## 3. Color Tokens
Using `oklch` for modern color spacing, ensuring rich, vibrant darks and elegant lights.

### Light Mode (Luxurious & Clean)
- **Background:** `oklch(0.98 0.01 60)` - Warm pearl/alabaster. Not pure white.
- **Foreground:** `oklch(0.15 0.02 280)` - Deep charcoal/midnight, avoiding harsh pure black.
- **Primary (Brand):** `oklch(0.35 0.05 320)` - Deep plum/burgundy (rich salon vibe).
- **Primary Foreground:** `oklch(0.98 0 0)` - Crisp white for contrast.
- **Secondary (Accent):** `oklch(0.75 0.12 65)` - Metallic rose gold / soft copper.
- **Secondary Foreground:** `oklch(0.15 0.02 280)` - Deep charcoal.
- **Muted / Surface:** `oklch(0.94 0.01 60)` - Soft cream for secondary sections.
- **Muted Foreground:** `oklch(0.45 0.02 280)` - Medium gray for secondary text.
- **Border:** `oklch(0.85 0.02 60)` - Subtle warm gray/gold border.

### Dark Mode (Deep, Elegant Glamour)
Dark mode is *not* a simple inversion. It uses deep, rich, velvety tones.
- **Background:** `oklch(0.12 0.02 320)` - Deep rich aubergine/midnight black.
- **Foreground:** `oklch(0.95 0.01 60)` - Soft pearl white for readability.
- **Primary (Brand):** `oklch(0.75 0.12 65)` - Rose gold accent pops beautifully on dark.
- **Primary Foreground:** `oklch(0.12 0.02 320)` - Deep midnight.
- **Secondary:** `oklch(0.25 0.05 320)` - Muted dark plum for cards.
- **Secondary Foreground:** `oklch(0.95 0.01 60)` - Soft pearl.
- **Muted / Surface:** `oklch(0.18 0.03 320)` - Slightly lighter aubergine for elevated cards.
- **Muted Foreground:** `oklch(0.75 0.02 280)` - Light silver/gray.
- **Border:** `oklch(0.25 0.03 320)` - Subtle dark border with a hint of warmth.

## 4. Spacing & Sizing Scale
A deliberate, airy scale to allow the editorial typography to breathe.
- `spacing-xs`: 0.25rem (4px)
- `spacing-sm`: 0.5rem (8px)
- `spacing-md`: 1rem (16px)
- `spacing-lg`: 2rem (32px)
- `spacing-xl`: 4rem (64px) - *Used heavily for section padding to create a luxurious, uncrowded feel.*
- `spacing-2xl`: 8rem (128px)

## 5. Border Radius
Moving away from standard "pill" or perfectly sharp edges to strike a balance between structural academy and elegant salon.
- **Small (Inputs, Checkboxes):** `2px` (sharp, precise).
- **Medium (Cards, Buttons):** `4px` or `0` (editorial, structured).
- **Large (Hero Images, Featured Sections):** `8px` or dramatic editorial arches.
- *Core Principle:* Mostly sharp or slightly softened edges (`--radius: 0.25rem`) to feel like a high-end fashion magazine rather than a bubbly app.

## 6. Shadow System
Shadows should feel like soft studio lighting, not harsh drops.
- **Soft (Cards):** `0 4px 20px -2px rgba(0, 0, 0, 0.05)`
- **Elevated (Dropdowns, Modals):** `0 10px 40px -5px rgba(0, 0, 0, 0.1)`
- **Dark Mode Shadows:** Rely more on subtle borders and surface lightness (`Muted / Surface`) rather than deep shadows, which get lost on dark backgrounds. Use an inner glow or subtle top border highlight.

## 7. Motion Principles
- **Feel:** Graceful, cinematic, deliberate.
- **Timing:** Slower, eased transitions (e.g., `duration-500` or `duration-700`).
- **Easing:** `cubic-bezier(0.25, 1, 0.5, 1)` (smooth, elegant deceleration).
- **Triggers:** Fade-ins, gentle upward translates for text reveals, and slow subtle zooms on hover for images (Ken Burns effect). Avoid bouncy, spring-based animations.
