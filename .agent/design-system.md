# Design System: The Dental Masters

## Brand Context
**The Dental Masters** is a premium, high-end dental clinic in Sector 21C, Chandigarh. The clinic caters to a discerning clientele, including NRIs seeking international-standard care.
The visual identity must communicate clinical precision, ethical excellence, trust, and a premium, calm aesthetic. It should consciously move away from generic "AI" medical website tropes (e.g., standard clinical blues and greens) and instead feel sophisticated, grounded, and authoritative.

## 1. Typography System
To evoke authority, elegance, and clarity, we use a pairing of a high-contrast serif for headings and a clean, legible sans-serif for UI and body text.

*   **Display / Headings:** **Newsreader** (or alternatively, Fraunces / Lora)
    *   *Role:* High-contrast serif that feels editorial, trustworthy, and premium.
    *   *Weights:* Medium (500) and SemiBold (600) for varied hierarchy.
*   **Body / UI Elements:** **Plus Jakarta Sans** (or alternatively, Instrument Sans)
    *   *Role:* Clean geometric sans that provides clinical precision, modern legibility, and an international standard feel.
    *   *Weights:* Regular (400), Medium (500).

### Type Scale (Fluid clamping recommended)
*   `--text-xs`: 0.75rem (Captions, legal)
*   `--text-sm`: 0.875rem (Secondary UI, metadata)
*   `--text-base`: 1rem (Body text)
*   `--text-lg`: 1.25rem - 1.5rem (Subheadings, lead text)
*   `--text-xl`: 2rem - 3rem (Section headings)
*   `--text-2xl`: 3rem - 4.5rem (Hero headlines)

## 2. Color Palette (CSS Variables using OKLCH)
Avoid generic clinical blues/greens. Opt for soft, grounding earth tones, deep charcoals, and crisp whites.

### Base / Neutrals
We use warm-tinted neutrals (adding a subtle hint of warmth with a hue around 40-60) to avoid dead grays and create a calming, premium atmosphere.

*   `--color-neutral-50`: oklch(98% 0.005 50) - Crisp but not blinding white for main backgrounds.
*   `--color-neutral-100`: oklch(95% 0.01 50) - Soft off-white for secondary surfaces/cards.
*   `--color-neutral-200`: oklch(90% 0.01 50) - Dividers and subtle borders.
*   `--color-neutral-800`: oklch(25% 0.01 50) - Secondary text, muted emphasis.
*   `--color-neutral-900`: oklch(18% 0.01 50) - Primary text, deep charcoal (not pure black).

### Primary (Brand)
Earthy, sophisticated tones (e.g., a muted bronze/gold or deep taupe) representing high-end care.

*   `--color-primary-light`: oklch(85% 0.04 45) - Very subtle tinted background for highlights.
*   `--color-primary-base`: oklch(55% 0.08 45) - Grounding earth tone, used sparingly for accents/CTAs.
*   `--color-primary-dark`: oklch(35% 0.06 45) - Deep accent for hover states or strong contrast elements.

### Dark Mode (Semantic Redefinitions)
*   `--color-bg-primary`: var(--color-neutral-900)
*   `--color-bg-secondary`: var(--color-neutral-800)
*   `--color-text-primary`: var(--color-neutral-50)
*   `--color-text-secondary`: var(--color-neutral-200)

*(In Light Mode: `--color-bg-primary`: neutral-50, `--color-bg-secondary`: neutral-100, `--color-text-primary`: neutral-900, etc.)*

## 3. Spacing & Sizing Scale
Based on a 4pt baseline system, named semantically:

*   `--space-xs`: 4px
*   `--space-sm`: 8px
*   `--space-md`: 16px
*   `--space-lg`: 24px
*   `--space-xl`: 32px
*   `--space-2xl`: 48px
*   `--space-3xl`: 64px
*   `--space-4xl`: 96px
*   `--space-5xl`: 128px

*Use fluid spacing for sections (e.g., `clamp(64px, 8vw, 128px)` for vertical padding).*

## 4. Border Radius
Restrained and refined. Avoid excessive rounded corners typical of "AI slop".
*   `--radius-sm`: 4px (Buttons, inputs)
*   `--radius-md`: 8px (Cards, smaller image containers)
*   `--radius-lg`: 16px (Large media, prominent sections)
*   `--radius-full`: 9999px (Pills, avatars)

## 5. Shadow & Depth (Elevation)
Shadows should be barely perceptible, used only for lifting interactive elements or distinct floating layers. Deep charcoal shadows with very low opacity.
*   `--shadow-sm`: 0 1px 2px oklch(0% 0 0 / 0.05)
*   `--shadow-md`: 0 4px 6px -1px oklch(0% 0 0 / 0.05), 0 2px 4px -2px oklch(0% 0 0 / 0.05)
*   `--shadow-lg`: 0 10px 15px -3px oklch(0% 0 0 / 0.05), 0 4px 6px -4px oklch(0% 0 0 / 0.05)

*In Dark Mode, rely on surface lightness (e.g., background color shifts) rather than shadows for depth.*

## 6. Motion & Interaction Principles
*   **Timing:** Feel deliberate, calm, and expensive. Use `500ms` to `700ms` for structural reveals, `200ms` for micro-interactions (hover, active).
*   **Easing:** Use exponential ease-out for a natural deceleration curve (e.g., `cubic-bezier(0.16, 1, 0.3, 1)` or `ease-out-quint`). Avoid bounce or elastic easing.
*   **Reveals:** Subtle fade-ins with slight vertical translations for text blocks or images appearing on scroll.
*   **Micro-interactions:** Ghost buttons filling in, slight scale-ups (1.02x) on image cards on hover. Keep it minimal and functional.
