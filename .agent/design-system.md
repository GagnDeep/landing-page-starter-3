# IKonic Beauty Salon - Design System

## Brand Identity & Tone
- **Vibe**: High-end, bridal-glam, sophisticated, reliable, modern.
- **Tone**: Professional artistry with the sparkle and grace of bridal beauty. Avoid generic AI aesthetics.

## Typography (Font Pairings)
- **Heading Font**: A high-contrast serif (e.g., Playfair Display or Cormorant Garamond). Used for large display typography, headings, and moments of elegance.
- **Body Font**: A clean geometric sans (e.g., Plus Jakarta Sans or Montserrat). Used for UI elements, body copy, and navigation to ensure high readability and a modern structural feel.
- **Typography Scale (Fluid & Fixed)**:
  - Display (h1): clamp(2.5rem, 5vw, 4.5rem) - 1.1 line-height, tight tracking
  - Heading Large (h2): clamp(2rem, 4vw, 3.5rem) - 1.15 line-height
  - Heading Medium (h3): clamp(1.5rem, 3vw, 2.5rem) - 1.2 line-height
  - Body Large: 1.125rem - 1.6 line-height
  - Body Regular: 1rem - 1.6 line-height
  - Caption/Eyebrow: 0.875rem - uppercase, tracking wide (0.1em)

## Color Palette Tokens (CSS Variables)

The palette balances soft, glamorous bridal tones with deep, luxurious contrasts.

### Light Theme
- **Background**: Soft pearl/ivory (`oklch(0.985 0.005 80)`)
- **Foreground**: Deep charcoal/espresso (`oklch(0.2 0.01 250)`)
- **Primary**: Rich champagne gold (`oklch(0.75 0.08 75)`)
- **Primary Foreground**: Deep espresso (`oklch(0.2 0.01 250)`)
- **Secondary**: Soft rose/blush (`oklch(0.9 0.04 10)`)
- **Secondary Foreground**: Deep plum (`oklch(0.3 0.05 340)`)
- **Accent**: Soft sage/olive for natural highlights (`oklch(0.85 0.04 140)`)
- **Muted**: Light taupe (`oklch(0.95 0.02 80)`)
- **Muted Foreground**: Warm grey (`oklch(0.5 0.02 80)`)
- **Border**: Pale champagne (`oklch(0.92 0.03 75)`)
- **Card**: Pure white/ivory (`oklch(1 0 80)`)

### Dark Theme (Moody & Luxurious)
*Not just an inversion—a deliberate, midnight glamour.*
- **Background**: Deep onyx/midnight (`oklch(0.15 0.01 280)`)
- **Foreground**: Soft pearl (`oklch(0.95 0.01 80)`)
- **Primary**: Metallic rose gold (`oklch(0.7 0.1 35)`)
- **Primary Foreground**: Deep onyx (`oklch(0.15 0.01 280)`)
- **Secondary**: Deep plum/burgundy (`oklch(0.3 0.08 340)`)
- **Secondary Foreground**: Blush (`oklch(0.9 0.04 10)`)
- **Accent**: Warm brass/gold (`oklch(0.65 0.12 75)`)
- **Muted**: Charcoal (`oklch(0.25 0.02 280)`)
- **Muted Foreground**: Silver/taupe (`oklch(0.7 0.02 280)`)
- **Border**: Dark charcoal/gold tint (`oklch(0.25 0.04 75)`)
- **Card**: Soft midnight (`oklch(0.18 0.01 280)`)

## Spacing Scales
- Use a fluid and predictable rhythmic scale.
- **Base Unit**: 0.25rem (4px)
- **UI Spacing**: 2, 4, 8, 12, 16, 24, 32, 48, 64px
- **Layout Rhythm (Section padding)**:
  - Small: `py-12` (48px)
  - Medium: `py-24` (96px)
  - Large: `py-32 md:py-48` (Fluid 128-192px)

## Border-Radius Constants
- Sharp enough to be high-end, soft enough to be bridal.
- **Small (Inputs, buttons)**: `0.25rem` (4px) - Subtle softening
- **Medium (Cards, small media)**: `0.5rem` (8px)
- **Large (Hero images, massive cards)**: `1rem` (16px)
- **Full (Pills, avatars)**: `9999px`

## Motion & Interaction Principles
- **Vibe**: Graceful, sweeping, deliberate. Think "silk dropping" rather than "rubber bouncing."
- **Easing**: Exponential ease-out (e.g., `cubic-bezier(0.16, 1, 0.3, 1)`). No bounce or elastic easing.
- **Durations**: High-impact moments (page load reveals) use 800-1200ms staggered entries. UI interactions (hover, click) use snappy 200-300ms transitions.
- **Hover States**: Subtle scale-ups (1.02) or slow glow transitions rather than abrupt color snaps.
- **Scroll**: Parallax for large hero imagery to give a sense of depth and luxury.
