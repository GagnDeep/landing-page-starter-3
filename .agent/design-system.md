# Design System: Smile Saviors Dental Clinic

## 1. Core Philosophy
The design language is "premium-modern" and "hygiene-first", moving away from standard, sterile medical aesthetics. The goal is to create a digital presence that feels professional, inviting, reassuring, and "painless".

## 2. Typography
A distinct, high-end font pairing strategy is used to give the brand personality while maintaining readability.

*   **Headings (Serif/Display):** `Playfair Display` or `Outfit` — Used for H1-H4. Conveys elegance, premium quality, and trust.
*   **Body (Sans-Serif):** `Inter` or `DM Sans` — Used for body text, UI elements, and smaller headings. Clean, highly legible, humanistic.

## 3. Color Palette (OKLCH)
A sophisticated palette focusing on clinical blues, soft teals, and warm whites to express hygiene and approachability. High contrast is required for dark mode.

### Light Mode
*   **Background:** Warm white, `oklch(0.98 0.01 75)`
*   **Foreground:** Deep navy/charcoal, `oklch(0.2 0.03 260)`
*   **Primary (Brand):** Clinical soft teal/blue, `oklch(0.6 0.1 230)`
*   **Primary Foreground:** White, `oklch(1 0 0)`
*   **Secondary:** Very soft teal/gray, `oklch(0.95 0.02 230)`
*   **Secondary Foreground:** Deep navy, `oklch(0.25 0.04 260)`
*   **Muted:** Light gray, `oklch(0.96 0.01 260)`
*   **Muted Foreground:** Slate gray, `oklch(0.5 0.02 260)`
*   **Accent:** Soft blue, `oklch(0.94 0.04 240)`
*   **Accent Foreground:** Navy, `oklch(0.2 0.03 260)`
*   **Destructive:** Soft red/coral, `oklch(0.6 0.15 20)`
*   **Border / Input:** Pale gray-blue, `oklch(0.9 0.02 260)`

### Dark Mode
*   **Background:** Deep midnight blue, `oklch(0.15 0.03 260)`
*   **Foreground:** Warm white/light gray, `oklch(0.95 0.01 260)`
*   **Primary:** Luminous teal, `oklch(0.7 0.12 230)`
*   **Primary Foreground:** Deep navy, `oklch(0.1 0.03 260)`
*   **Secondary:** Dark teal/slate, `oklch(0.25 0.05 240)`
*   **Secondary Foreground:** Light gray, `oklch(0.9 0.02 260)`
*   **Muted:** Very dark gray/blue, `oklch(0.2 0.02 260)`
*   **Muted Foreground:** Medium gray, `oklch(0.6 0.02 260)`
*   **Accent:** Muted dark blue, `oklch(0.22 0.04 250)`
*   **Accent Foreground:** Soft white, `oklch(0.95 0.01 260)`
*   **Destructive:** Muted red, `oklch(0.5 0.12 20)`
*   **Border / Input:** Dark slate, `oklch(0.25 0.02 260)`

## 4. Spacing Scale
A consistent spacing scale ensures vertical and horizontal rhythm.
*   `xs`: 0.25rem (4px)
*   `sm`: 0.5rem (8px)
*   `md`: 1rem (16px)
*   `lg`: 2rem (32px)
*   `xl`: 4rem (64px)
*   `2xl`: 8rem (128px) - Often used for section padding.

## 5. Motion Principles
Animations should feel deliberate, smooth, and reassuring (not jarring).
*   **Easing:** Use ease-out functions for entering elements (feeling responsive), and ease-in for exiting.
*   **Duration:** Quick for micro-interactions (150-200ms), slightly longer for layout or page transitions (300-500ms).
*   **Accessibility:** All motion must respect `prefers-reduced-motion` queries.

## 6. General Visual Rules
*   **Border Radius:** Softened corners (`lg` around 0.75rem or 1rem) to reduce harshness.
*   **Shadows:** Soft, diffused shadows to lift elements gently off the background, enhancing depth without looking stark.
*   **Iconography:** Consistent stroke widths, clean lines, echoing the "hygiene" and "precision" themes.
*   **Images:** High-quality, warm, human-centric photography (patients smiling, clean modern clinic environments). Avoid stocky, artificial-looking medical photos.