# Design System: Preet Dental & Facial Aesthetics

## 1. Aesthetic Direction
**Vibe:** Boutique Luxury Studio / Bridal Aesthetic
**Tone:** Elegant, sophisticated, clinical precision meets soft luxury.
**Concept:** A departure from sterile medical templates. The interface should feel like stepping into a high-end bridal beauty lounge that happens to offer advanced clinical procedures.
**Key Elements:**
- Soft gradients and subtle textures.
- Generous, airy spacing (lots of breathing room).
- High-contrast typography pairing.
- Warm, neutral tones with elegant accent colors.

## 2. Typography
A classic, high-contrast serif for headings to convey luxury, authority, and bridal elegance, paired with a clean, readable humanist sans-serif for body copy.

*   **Display / Headings:** Playfair Display (or Cormorant Garamond)
    *   *Role:* Used for main headlines, section titles, and key numbers.
    *   *Characteristics:* High contrast, elegant, classic.
*   **Body / Interface:** DM Sans (or Lato)
    *   *Role:* Used for paragraphs, buttons, navigation, and UI elements.
    *   *Characteristics:* Clean, modern, highly legible, provides structural balance to the ornate serif.

**Type Scale (Fluid/Clamp):**
*   `text-xs`: `clamp(0.75rem, 0.7vw + 0.5rem, 0.875rem)`
*   `text-sm`: `clamp(0.875rem, 0.8vw + 0.6rem, 1rem)`
*   `text-base`: `clamp(1rem, 1vw + 0.7rem, 1.125rem)`
*   `text-lg`: `clamp(1.125rem, 1.2vw + 0.8rem, 1.25rem)`
*   `text-xl`: `clamp(1.25rem, 1.5vw + 0.9rem, 1.5rem)`
*   `text-2xl`: `clamp(1.5rem, 2vw + 1rem, 2rem)`
*   `text-3xl`: `clamp(2rem, 3vw + 1.2rem, 2.5rem)`
*   `text-4xl`: `clamp(2.5rem, 4vw + 1.5rem, 3.5rem)`
*   `text-5xl`: `clamp(3.5rem, 5vw + 2rem, 5rem)`

## 3. Color Tokens (OKLCH)
Colors are defined using OKLCH for perceptually uniform lightness. The palette is built around "Soft Pearl" neutrals and "Champagne Gold / Rose" accents.

### Light Mode
*   `--background`: `oklch(0.98 0.01 75)` (Warm Pearl White)
*   `--foreground`: `oklch(0.25 0.02 75)` (Deep Espresso / Charcoal)
*   `--card`: `oklch(0.99 0.005 75)` (Soft Cream)
*   `--card-foreground`: `oklch(0.3 0.02 75)`
*   `--popover`: `oklch(0.99 0.005 75)`
*   `--popover-foreground`: `oklch(0.25 0.02 75)`
*   `--primary`: `oklch(0.75 0.08 45)` (Soft Rose Gold / Champagne)
*   `--primary-foreground`: `oklch(0.98 0.01 75)` (White)
*   `--secondary`: `oklch(0.93 0.02 75)` (Warm Grey/Beige)
*   `--secondary-foreground`: `oklch(0.3 0.02 75)`
*   `--muted`: `oklch(0.95 0.01 75)`
*   `--muted-foreground`: `oklch(0.55 0.02 75)`
*   `--accent`: `oklch(0.92 0.03 45)` (Light Rose Accent)
*   `--accent-foreground`: `oklch(0.25 0.02 75)`
*   `--destructive`: `oklch(0.6 0.15 20)` (Soft Red)
*   `--destructive-foreground`: `oklch(0.98 0 0)`
*   `--border`: `oklch(0.9 0.02 75)`
*   `--input`: `oklch(0.9 0.02 75)`
*   `--ring`: `oklch(0.75 0.08 45)`

### Dark Mode
*Curated to be a "Midnight Studio" rather than inverted colors. Deep warm greys with glowing champagne.*
*   `--background`: `oklch(0.18 0.01 75)` (Deep Studio Charcoal)
*   `--foreground`: `oklch(0.95 0.01 75)` (Soft Pearl)
*   `--card`: `oklch(0.22 0.015 75)` (Elevated Charcoal)
*   `--card-foreground`: `oklch(0.95 0.01 75)`
*   `--popover`: `oklch(0.22 0.015 75)`
*   `--popover-foreground`: `oklch(0.95 0.01 75)`
*   `--primary`: `oklch(0.8 0.06 45)` (Luminous Rose Gold)
*   `--primary-foreground`: `oklch(0.2 0.02 75)` (Dark text on gold)
*   `--secondary`: `oklch(0.28 0.02 75)` (Muted Deep Beige)
*   `--secondary-foreground`: `oklch(0.9 0.01 75)`
*   `--muted`: `oklch(0.25 0.01 75)`
*   `--muted-foreground`: `oklch(0.7 0.02 75)`
*   `--accent`: `oklch(0.3 0.03 45)` (Deep Rose Accent)
*   `--accent-foreground`: `oklch(0.95 0.01 75)`
*   `--destructive`: `oklch(0.5 0.12 20)`
*   `--destructive-foreground`: `oklch(0.95 0 0)`
*   `--border`: `oklch(0.3 0.02 75)`
*   `--input`: `oklch(0.3 0.02 75)`
*   `--ring`: `oklch(0.8 0.06 45)`

## 4. Spacing System
Focus on rhythmic, generous spacing. Avoid tight clusters.
*   `spacing-micro`: `0.25rem`
*   `spacing-xs`: `0.5rem`
*   `spacing-sm`: `1rem`
*   `spacing-md`: `2rem`
*   `spacing-lg`: `4rem`
*   `spacing-xl`: `8rem` (Used between major sections)
*   `spacing-2xl`: `12rem` (Used for dramatic pauses in scroll)

## 5. Border Radius
Soft, subtle rounding. Avoid extreme pills unless for specific buttons.
*   `--radius`: `0.5rem` (Subtle elegance)

## 6. Shadow System
Soft, diffuse shadows that simulate ambient lighting in a physical studio.
*   `shadow-sm`: `0 4px 20px -2px oklch(0 0 0 / 0.05)`
*   `shadow-md`: `0 10px 30px -5px oklch(0 0 0 / 0.08)`
*   `shadow-lg`: `0 20px 40px -10px oklch(0 0 0 / 0.1)`
*   `shadow-glow`: `0 0 20px 0 oklch(var(--primary) / 0.2)`

## 7. Motion & Interaction
*   **Easing:** Smooth, exponential deceleration. `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo).
*   **Entrances:** Fade in and drift up slowly. No aggressive bouncing.
*   **Hover States:** Subtle desaturation or soft glowing shadows, accompanied by a slow transition (`500ms`).
*   **Scroll:** Parallax imagery where appropriate to give a feeling of depth and premium quality.
