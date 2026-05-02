# Design System: Amil's Hair Lounge

## Brand Identity
A premier unisex salon in Patiala offering affordable luxury, expert hair treatments, and high-end aesthetics. The design must move away from generic "startup" aesthetics and focus on "boutique salon elegance" with sophisticated spacing and rhythm.

## Typography
*   **Heading Font:** `Cormorant Garamond` (or similar high-contrast serif). Used for `h1` through `h6` to convey luxury, elegance, and tradition.
*   **Body Font:** `DM Sans` (or similar clean humanist sans). Used for UI elements, paragraphs, and functional text to ensure high legibility and a modern touch.

## Color Palette (WCAG 2.1 Compliant)
Tokens are implemented using OKLCH for predictable lightness and color blending.

### Light Mode (Warm, airy, boutique salon elegance)
*   **Background:** `#FCFAFA` (slightly warm white) `oklch(0.985 0.005 80)`
*   **Foreground:** `#332F2A` (deep espresso) `oklch(0.25 0.02 80)`
*   **Primary:** `#9D7B54` (sophisticated gold/bronze) `oklch(0.55 0.08 65)`
*   **Secondary:** `#EAE5DF` (soft greige) `oklch(0.94 0.02 80)`
*   **Border:** `oklch(0.90 0.02 80)`

### Dark Mode (Moody, rich, luxurious night mode)
*   **Background:** `#262423` (dark charcoal) `oklch(0.20 0.01 80)`
*   **Foreground:** `#EFEFEF` (soft white) `oklch(0.95 0.01 80)`
*   **Primary:** `#D1AD85` (lighter gold for contrast) `oklch(0.75 0.08 65)`
*   **Secondary:** `#363433` `oklch(0.30 0.01 80)`
*   **Border:** `oklch(0.35 0.01 80)`

## Spacing & Sizing Scale
*   **Rhythm:** Employs a sophisticated 8px base rhythm.
*   **Scale:** `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`.
*   **Containers:** Max-width constraints to ensure readability, using fluid padding (`px-4 sm:px-6 lg:px-8`) for responsive design.

## Border Radius Logic
*   **Base Radius:** `0.35rem` (Subtle, elegant rounding—avoiding pill-shaped or overly boxy extremes).
*   **Usage:** Applied to cards, inputs, buttons, and image containers to maintain a refined, tailored appearance.

## Motion Principles
*   **Timing:** Slow, deliberate transitions (e.g., `duration-300` to `duration-500`).
*   **Easing:** Smooth curves (e.g., `ease-in-out` or custom cubic-bezier).
*   **Effects:** Gentle fades, subtle scaling on hover (`hover:scale-[1.02]`), and smooth reveals for scrolling, ensuring the interface feels calming and luxurious rather than frantic.
