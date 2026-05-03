# A-1 Dental Care Clinic — Design System

## 1. Brand Identity & Aesthetic Direction
**Core Values:** Ethical, neighborhood-trusted, painless.
**Vibe/Aesthetic:** Warm, professional, high-craft, artistic. Moving away from sterile, cold clinical tropes. We want patients to feel calm, welcomed, and safe. The design should evoke the feeling of a premium, neighborhood wellness space rather than a generic medical startup.

## 2. Typography
We are avoiding overused startup fonts (Inter, Roboto, Open Sans). Instead, we use a personality-driven pairing that balances high-craft elegance with warm readability.

*   **Primary Headings (`--font-heading`): Fraunces**
    *   *Why:* A soft, high-craft serif that feels premium, established, and trustworthy without being stuffy. It brings warmth and a human touch.
*   **Body & UI (`--font-sans`): Manrope**
    *   *Why:* A geometric but friendly sans-serif that ensures excellent readability for medical information while retaining a warm, approachable character.

### Type Scale (Fluid via clamp)
*   `text-xs`: `clamp(0.75rem, 0.7vw + 0.5rem, 0.875rem)`
*   `text-sm`: `clamp(0.875rem, 0.8vw + 0.6rem, 1rem)`
*   `text-base`: `clamp(1rem, 1vw + 0.75rem, 1.125rem)`
*   `text-lg`: `clamp(1.125rem, 1.2vw + 0.8rem, 1.25rem)`
*   `text-xl`: `clamp(1.25rem, 1.5vw + 1rem, 1.5rem)`
*   `text-2xl`: `clamp(1.5rem, 2vw + 1.2rem, 2rem)`
*   `text-3xl`: `clamp(1.875rem, 3vw + 1.5rem, 2.5rem)`
*   `text-4xl`: `clamp(2.25rem, 4vw + 1.8rem, 3.5rem)`
*   `text-5xl`: `clamp(2.75rem, 5vw + 2rem, 4.5rem)`
*   `text-6xl`: `clamp(3.5rem, 6vw + 2.5rem, 6rem)`

## 3. Color Palette (OKLCH)
We avoid pure white, pure black, and harsh sterile blues. Our palette relies on calming sages, warm creams, and deep earthy tones.

### Light Mode
*   **Background:** `oklch(0.98 0.01 75)` — Warm, comforting cream off-white.
*   **Foreground:** `oklch(0.2 0.02 75)` — Deep espresso brown/charcoal; softer than pure black.
*   **Card:** `oklch(1 0 0.01)` — Slightly lighter cream for subtle elevation.
*   **Card Foreground:** `oklch(0.2 0.02 75)`
*   **Primary:** `oklch(0.65 0.08 140)` — Calming, earthy sage green. Represents health and peace.
*   **Primary Foreground:** `oklch(0.98 0.01 75)`
*   **Secondary:** `oklch(0.88 0.04 50)` — Soft warm sand/terracotta.
*   **Secondary Foreground:** `oklch(0.25 0.05 50)`
*   **Muted:** `oklch(0.94 0.02 75)` — Gentle beige for backgrounds and soft sections.
*   **Muted Foreground:** `oklch(0.45 0.03 75)`
*   **Accent:** `oklch(0.85 0.12 80)` — Golden amber for friendly, painless highlights.
*   **Accent Foreground:** `oklch(0.2 0.02 75)`
*   **Destructive:** `oklch(0.6 0.15 25)` — Soft brick red.
*   **Border:** `oklch(0.9 0.02 75)`
*   **Input:** `oklch(0.9 0.02 75)`
*   **Ring:** `oklch(0.65 0.08 140)`

### Dark Mode
*   **Background:** `oklch(0.18 0.02 140)` — Deep, cozy forest/olive black.
*   **Foreground:** `oklch(0.95 0.02 75)` — Soft cream text.
*   **Card:** `oklch(0.22 0.03 140)` — Elevated deep forest tone.
*   **Card Foreground:** `oklch(0.95 0.02 75)`
*   **Primary:** `oklch(0.75 0.08 140)` — Brightened, glowing sage.
*   **Primary Foreground:** `oklch(0.15 0.03 140)`
*   **Secondary:** `oklch(0.3 0.04 50)` — Deep muted terracotta.
*   **Secondary Foreground:** `oklch(0.95 0.02 75)`
*   **Muted:** `oklch(0.25 0.02 140)`
*   **Muted Foreground:** `oklch(0.7 0.02 75)`
*   **Accent:** `oklch(0.35 0.08 80)` — Subdued golden amber.
*   **Accent Foreground:** `oklch(0.95 0.02 75)`
*   **Destructive:** `oklch(0.7 0.15 25)`
*   **Border:** `oklch(0.3 0.02 140)`
*   **Input:** `oklch(0.3 0.02 140)`
*   **Ring:** `oklch(0.75 0.08 140)`

## 4. Spacing & Rhythm
We use a fluid spacing system to create organic rhythm. Padding is generous to evoke a premium, calm atmosphere. Asymmetrical layouts are encouraged.

*   `space-xs`: `clamp(0.25rem, 0.5vw, 0.5rem)`
*   `space-sm`: `clamp(0.5rem, 1vw, 1rem)`
*   `space-md`: `clamp(1rem, 2vw, 2rem)`
*   `space-lg`: `clamp(2rem, 4vw, 4rem)`
*   `space-xl`: `clamp(4rem, 8vw, 8rem)`
*   `space-2xl`: `clamp(6rem, 12vw, 12rem)`

## 5. Shape & Structure
*   **Border Radius:** We use soft, rounded corners to eliminate sharpness, reinforcing the "painless" identity.
    *   `--radius`: `1rem`
    *   `--radius-sm`: `calc(var(--radius) * 0.5)`
    *   `--radius-md`: `calc(var(--radius) * 0.75)`
    *   `--radius-lg`: `var(--radius)`
    *   `--radius-xl`: `calc(var(--radius) * 1.5)`
*   **Shadows:** Soft, diffused, and slightly tinted with the brand's primary color. No harsh gray shadows.
    *   `shadow-sm`: `0 1px 2px oklch(0.65 0.08 140 / 0.05)`
    *   `shadow-md`: `0 4px 12px oklch(0.65 0.08 140 / 0.08)`
    *   `shadow-lg`: `0 12px 32px oklch(0.65 0.08 140 / 0.12)`

## 6. Motion & Interaction
Motion should feel unhurried, reassuring, and completely smooth.
*   **Easing:** Exponential easing out for natural deceleration (`cubic-bezier(0.16, 1, 0.3, 1)` or `ease-out-expo`). No bouncing.
*   **Durations:** `150ms` for quick interactions (hovers, focus), `400ms-600ms` for structural reveals, `800ms-1200ms` for page-load choreography.
*   **Accessibility:** Respect `prefers-reduced-motion`. When enabled, transition opacities only (0ms or simple crossfade) and disable all transform/translation animations.
*   **Interaction:** Focus rings should be clearly visible and match the brand's Sage ring color. Buttons should have soft hover states that slightly lift or shift in tint.
