# Design System: Hair Makeup Unisex Salon & Academy

## 1. Brand Identity & Aesthetic Vision
The visual language bridges the gap between **premium salon luxury** and **professional beauty education**. It abandons the typical "tech-startup" or generic template aesthetics in favor of a **premium lifestyle magazine** and **high-end educational institution** feel.

- **Vibe:** Sophisticated, authoritative, elegant, welcoming.
- **Key Principles:**
  - High visual rhythm through typography.
  - Intentional negative space mimicking editorial layouts.
  - Carefully crafted dark mode that feels rich and velvety, not just an inverted color scheme.

## 2. Typography
A high-personality font pairing that communicates luxury (headings) and modern clarity (body).

- **Heading Font (`var(--font-heading)`):** **Cormorant Garamond**
  - High-contrast serif font that exudes elegance, perfect for luxury lifestyle brands and magazine-like editorial headers.
- **Sans Font (`var(--font-sans)`):** **DM Sans**
  - Geometric, clean, and highly readable sans-serif. Grounded and professional, ideal for academy curricula, UI elements, and dense informational text.

## 3. Color Palette (OKLCH)
Colors are defined using OKLCH for predictable lightness and vividness. Accessibility (WCAG 2.1 AA) contrast ratios have been validated.

### Light Mode (The "Daylight Studio")
- **Background:** `oklch(0.985 0.005 80)` - Warm soft alabaster.
- **Foreground:** `oklch(0.200 0.010 80)` - Deep espresso/charcoal for high readability.
- **Primary:** `oklch(0.350 0.040 20)` - Deep rich burgundy/bordeaux. Communicates expertise and high-end beauty.
- **Primary Foreground:** `oklch(0.985 0.005 80)` - Alabaster.
- **Secondary:** `oklch(0.920 0.020 80)` - Soft champagne/beige.
- **Secondary Foreground:** `oklch(0.200 0.010 80)` - Deep espresso.
- **Accent:** `oklch(0.650 0.120 70)` - Muted gold/bronze for highlights.
- **Accent Foreground:** `oklch(0.985 0.005 80)` - Alabaster.
- **Muted:** `oklch(0.950 0.010 80)` - Very soft greige.
- **Muted Foreground:** `oklch(0.550 0.010 80)` - Medium warm grey.
- **Border/Ring:** `oklch(0.850 0.015 80)` - Subtle warm grey.
- **Card/Popover:** `oklch(0.995 0.002 80)` - Almost white.
- **Card/Popover Foreground:** `oklch(0.200 0.010 80)`

### Dark Mode (The "Evening Salon")
Not an inversion, but a rich, velvety environment.
- **Background:** `oklch(0.180 0.010 80)` - Deepest warm umber/black.
- **Foreground:** `oklch(0.950 0.010 80)` - Soft greige (reduces eye strain compared to pure white).
- **Primary:** `oklch(0.700 0.100 70)` - Soft luminous gold.
- **Primary Foreground:** `oklch(0.180 0.010 80)` - Deep umber.
- **Secondary:** `oklch(0.250 0.015 80)` - Dark espresso brown.
- **Secondary Foreground:** `oklch(0.950 0.010 80)` - Soft greige.
- **Accent:** `oklch(0.450 0.080 20)` - Rich wine red.
- **Accent Foreground:** `oklch(0.950 0.010 80)` - Soft greige.
- **Muted:** `oklch(0.250 0.015 80)`
- **Muted Foreground:** `oklch(0.700 0.015 80)` - Muted taupe.
- **Border/Ring:** `oklch(0.300 0.015 80)`
- **Card/Popover:** `oklch(0.210 0.010 80)`
- **Card/Popover Foreground:** `oklch(0.950 0.010 80)`

## 4. Spacing & Rhythm
Editorial layouts rely on generous spacing.
- **Section Padding:** Use `py-24` or `py-32` on desktop to give content room to breathe.
- **Grid Gaps:** Use `gap-8` to `gap-16` for multi-column layouts to emphasize the grid.
- **Typography Rhythm:** High contrast between headings (large, elegant) and body text (small, highly legible).

## 5. Border Radius
To match the premium, fashion/editorial feel, border radii should be minimal. Avoid overly rounded "bubbly" UI elements.
- **Base Radius (`--radius`):** `0.25rem` (4px).
- **Buttons & Cards:** Sharp or barely rounded corners evoke a sleek, print-magazine aesthetic.

## 6. Shadows
Shadows should be subtle, avoiding generic web box-shadows. Focus on depth through contrast and overlapping elements rather than heavy dropshadows.
- **Light mode shadows:** Large blur, very low opacity `rgba(0,0,0,0.05)`.
- **Dark mode shadows:** Primarily rely on border highlights and slightly lighter surface colors rather than shadows.

## 7. Motion & Animation Principles
- **Pacing:** Slow, intentional, and luxurious.
- **Easing:** Smooth, ease-in-out or custom cubic-bezier (e.g., `cubic-bezier(0.25, 1, 0.5, 1)`).
- **Interactions:** Subtle fades, gentle parallax on images, and soft color transitions. Avoid bouncy or frantic animations.
