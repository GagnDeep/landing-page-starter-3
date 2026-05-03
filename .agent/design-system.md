# Design System: Preet Dental & Facial Aesthetics Clinic

## Overview
This design system defines the visual language for Preet Dental & Facial Aesthetics Clinic, aimed at establishing a sophisticated, "bridal-aesthetic" brand identity. It seamlessly blends advanced dental procedures with high-end facial aesthetics, distancing itself from generic "medical" tropes in favor of a "luxury clinic" feel.

## Typography
The typographic pairing balances elegant sophistication with modern readability.
- **Headings (Serif):** `Cormorant Garamond` — Used for titles, section headings, and impactful quotes. It conveys heritage, luxury, and premium care.
- **Body & UI (Sans-Serif):** `DM Sans` — Used for paragraphs, navigation, buttons, and data display. A clean, humanist sans-serif that ensures clinical clarity and readability across devices.

## Color Palette (OKLCH CSS Variables)

The palette leans into soft, bridal-inspired tones (ivory, champagne, muted gold) anchored by deep clinical tones. Dark mode is carefully curated as an "evening" version of the brand palette, retaining warmth and luxury.

### Light Mode
- `--background`: Soft Ivory (Warm, clean base)
- `--foreground`: Deep Charcoal (High contrast for text)
- `--primary`: Muted Gold / Champagne (Sophisticated accent for CTAs)
- `--primary-foreground`: Soft Ivory (Text on primary)
- `--secondary`: Warm Sand (Subtle backgrounds for sections)
- `--secondary-foreground`: Deep Charcoal
- `--accent`: Blush / Rose Dust (Delicate accent for highlights)
- `--accent-foreground`: Deep Charcoal
- `--muted`: Light Taupe (Borders, subtle UI elements)
- `--muted-foreground`: Medium Warm Gray (Secondary text)
- `--card`: Pure White / Cream (Card backgrounds)
- `--card-foreground`: Deep Charcoal
- `--popover`: Pure White / Cream
- `--popover-foreground`: Deep Charcoal
- `--border`: Light Taupe
- `--input`: Light Taupe
- `--ring`: Muted Gold

### Dark Mode (Evening Mode)
- `--background`: Deep Espresso / Charcoal (Luxurious dark base)
- `--foreground`: Soft Ivory (High contrast for text)
- `--primary`: Muted Gold / Champagne (Retained for brand consistency)
- `--primary-foreground`: Deep Espresso
- `--secondary`: Dark Mocha / Taupe (Subtle backgrounds for sections)
- `--secondary-foreground`: Soft Ivory
- `--accent`: Deep Rose Dust (Delicate accent for highlights)
- `--accent-foreground`: Soft Ivory
- `--muted`: Dark Warm Gray (Borders, subtle UI elements)
- `--muted-foreground`: Light Warm Gray (Secondary text)
- `--card`: Dark Espresso (Card backgrounds)
- `--card-foreground`: Soft Ivory
- `--popover`: Dark Espresso
- `--popover-foreground`: Soft Ivory
- `--border`: Dark Warm Gray
- `--input`: Dark Warm Gray
- `--ring`: Muted Gold

## Spacing & Layout
A generous, airy spacing scale based on multiples of `0.25rem` (4px), promoting a relaxed, luxurious browsing experience.
- Dense UI elements: 4px, 8px, 12px
- Component spacing: 16px, 24px, 32px
- Section pacing: 64px, 96px, 128px (e.g., `py-16`, `py-24`)

## Border Radii
Gentle, sophisticated curves to soften the clinical feel.
- Buttons & small inputs: `var(--radius)` (e.g., `0.5rem` / 8px)
- Cards & images: `calc(var(--radius) * 1.5)` or `calc(var(--radius) * 2)`
- Full pills (for badges): `9999px`

## Motion & Animation Principles
Animations should feel deliberate, smooth, and elegant—like walking into a high-end salon.
- **Duration:** Slightly slower than standard web apps (e.g., 300ms - 500ms).
- **Easing:** Ease-out or elegant custom cubic-bezier curves (e.g., `cubic-bezier(0.22, 1, 0.36, 1)`).
- **Effects:** Soft fade-ins, gentle upward translates (parallax), and subtle image zooms on hover. Avoid aggressive bounces or rapid flashes.
- **Accessibility:** Respect `prefers-reduced-motion` for all decorative animations.