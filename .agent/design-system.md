# Design System: Smile Saviors Dental Clinic and Implant Centre

## Brand Identity & Aesthetic
**Aesthetic:** "Clinic-as-Studio" - Premium, clean, high-end, trustworthy, and modern.
**Tone:** Painless, hygienic, expert, warm but clinical. Avoids generic AI-startup vibes.

## Typography
The typographic scale emphasizes a balance between clinical precision and a welcoming, warm environment.

* **Primary Heading Font:** *Cormorant Garamond* or a similar high-contrast serif. Used for large display text, H1, H2, and pull quotes to convey authority, luxury, and trust.
* **Secondary/Body Font:** *Inter* or *DM Sans* (clean, humanist sans-serif). Used for all body text, UI elements, labels, and smaller headings to ensure readability and a modern, precise clinical feel.

## Color Palette (CSS Variables)
Colors are defined using `oklch` for smooth interpolation and modern styling. The palette balances sterile clinical tones (white, slate) with warmth and calm (deep navy, soft mint).

### Light Mode
* **Background:** Clean clinical white (`oklch(0.98 0 0)`)
* **Foreground:** Deep slate/navy for contrast (`oklch(0.2 0.05 250)`)
* **Primary:** Trusting Deep Navy (`oklch(0.3 0.1 250)`)
* **Primary Foreground:** White (`oklch(0.98 0 0)`)
* **Secondary:** Soft Mint / Sage (`oklch(0.9 0.05 160)`) - Used for calming accents.
* **Secondary Foreground:** Deep Navy (`oklch(0.3 0.1 250)`)
* **Muted:** Light Gray/Slate (`oklch(0.95 0.01 250)`)
* **Muted Foreground:** Medium Slate (`oklch(0.5 0.02 250)`)
* **Accent:** Soft Mint (`oklch(0.9 0.05 160)`)
* **Accent Foreground:** Deep Navy (`oklch(0.3 0.1 250)`)
* **Border/Input:** Subtle Gray (`oklch(0.9 0.01 250)`)

### Dark Mode
*Dark mode is carefully tuned to feel like a high-end studio rather than a simple inversion.*
* **Background:** Very deep Navy/Charcoal (`oklch(0.15 0.03 250)`)
* **Foreground:** Soft off-white (`oklch(0.95 0.01 250)`)
* **Primary:** Soft Mint (`oklch(0.85 0.08 160)`)
* **Primary Foreground:** Deep Navy (`oklch(0.15 0.03 250)`)
* **Secondary:** Deep Slate (`oklch(0.25 0.04 250)`)
* **Secondary Foreground:** Soft Mint (`oklch(0.85 0.08 160)`)
* **Muted:** Dark Slate (`oklch(0.2 0.03 250)`)
* **Muted Foreground:** Light Slate (`oklch(0.7 0.02 250)`)
* **Accent:** Deep Slate (`oklch(0.25 0.04 250)`)
* **Accent Foreground:** Soft Mint (`oklch(0.85 0.08 160)`)
* **Border/Input:** Dark Slate (`oklch(0.25 0.04 250)`)

## Spacing & Sizing Scale
Follows a structured `rem`-based 4px/8px grid system to ensure visual rhythm.
- `xs`: 0.25rem (4px)
- `sm`: 0.5rem (8px)
- `md`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)
- `2xl`: 3rem (48px)
- `3xl`: 4rem (64px)
- `4xl`: 6rem (96px)
- `5xl`: 8rem (128px)

Section padding should be generous (e.g., `py-24` or `py-32`) to let the content breathe and maintain a premium studio feel.

## Border Radius
Subtle rounding to combine approachability with precision.
- `radius`: 0.5rem (8px) - Default for cards, buttons, and inputs.
- `radius-md`: 0.375rem (6px)
- `radius-lg`: 0.75rem (12px)
- `radius-full`: 9999px - For pills, avatars.

## Shadows & Depth
Shadows should be soft, diffuse, and elegant, avoiding harsh dark lines.
- **Light mode:** Use subtle, multi-layered, low-opacity shadows (e.g., `box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05)`).
- **Dark mode:** Rely on borders, subtle background lightening, and very faint drop-shadows with the primary accent color for glow effects where appropriate.

## Motion Principles
Animations should feel deliberate, smooth, and unhurried.
- **Easing:** Use custom cubic-bezier curves for a luxurious feel (e.g., `cubic-bezier(0.25, 1, 0.5, 1)`).
- **Duration:** Slightly longer than typical snappy UI interactions. Fade-ins: 400-600ms.
- **Types of motion:** Subtle scale-ins, smooth cross-fades, gentle parallax on scroll, and precise staggered reveals for grids. No overly bouncy or aggressive movements. Ensure adherence to `prefers-reduced-motion` for accessibility.