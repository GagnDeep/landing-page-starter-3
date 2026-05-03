# Dentocare Design System

## 1. Core Principles
**Aesthetic:** "Hygienic Luxury" — approachable, clean, and warm.
**Avoid:** Clinical, sterile, or generic "tech-startup" aesthetics.
**Goal:** Bespoke, craft-focused digital home that feels as trustworthy and hygienic as the clinic itself.

## 2. Typography
We pair two distinct, character-rich font families:
- **Heading Font:** *Fraunces* (or similar warm, high-quality serif/display font). It conveys a bespoke, craft-focused, and premium feel.
- **Body Font:** *Figtree* (Sans-serif). It ensures excellent readability, approachability, and a clean, modern structure that grounds the elegant headings.

## 3. Color Tokens (OKLCH)
The palette evokes trust and serenity, moving away from sterile whites and harsh blues to warm off-whites, soft teals, and deep slates.

### Light Mode
- `--background`: Warm off-white (`oklch(0.98 0.01 75)`)
- `--foreground`: Deep slate (`oklch(0.25 0.02 240)`)
- `--primary`: Soft teal (`oklch(0.65 0.1 190)`)
- `--primary-foreground`: Crisp white (`oklch(0.98 0.01 75)`)
- `--secondary`: Warm cream / soft sand (`oklch(0.95 0.02 80)`)
- `--secondary-foreground`: Deep slate (`oklch(0.25 0.02 240)`)
- `--muted`: Gentle gray-beige (`oklch(0.93 0.01 80)`)
- `--muted-foreground`: Muted slate (`oklch(0.55 0.02 240)`)
- `--accent`: Muted sage or soft teal variant (`oklch(0.90 0.05 190)`)
- `--accent-foreground`: Dark slate (`oklch(0.25 0.02 240)`)
- `--border`: Soft gray (`oklch(0.90 0.01 240)`)

### Dark Mode
*Carefully considered palette that maintains accessibility and brand character, not a mere inversion.*
- `--background`: Deep slate/charcoal (`oklch(0.20 0.02 240)`)
- `--foreground`: Warm off-white (`oklch(0.95 0.01 80)`)
- `--primary`: Soft teal (`oklch(0.65 0.1 190)`)
- `--primary-foreground`: Deep slate (`oklch(0.20 0.02 240)`)
- `--secondary`: Darker slate/teal (`oklch(0.25 0.03 220)`)
- `--secondary-foreground`: Warm off-white (`oklch(0.95 0.01 80)`)
- `--muted`: Deep mute (`oklch(0.28 0.02 240)`)
- `--muted-foreground`: Soft mute (`oklch(0.75 0.02 240)`)
- `--accent`: Deep teal accent (`oklch(0.30 0.05 190)`)
- `--accent-foreground`: Warm off-white (`oklch(0.95 0.01 80)`)
- `--border`: Slate border (`oklch(0.30 0.02 240)`)

## 4. Spacing & Sizing Scale
A responsive spacing scale to establish visual rhythm:
- `4px` (xs) - tight UI spacing
- `8px` (sm) - component inner spacing
- `16px` (md) - standard padding
- `24px` (lg) - loose component padding
- `32px` (xl) - section inner spacing
- `64px` (2xl) - small section gaps
- `96px` (3xl) - standard section gaps
- `128px` (4xl) - hero/major section gaps

## 5. Border Radius
Soft, approachable corners rather than sharp edges.
- `--radius`: `0.75rem` (12px) - Base for cards and larger inputs.
- Secondary radii scale relative to the base using calc:
  - `sm`: `calc(var(--radius) - 4px)`
  - `md`: `calc(var(--radius) - 2px)`
  - `lg`: `var(--radius)`
  - `xl`: `calc(var(--radius) + 8px)`

## 6. Shadow & Depth
Subtle, soft shadows to create elevation without being heavy.
- `sm`: Soft under-shadow for interactive elements.
- `md`: Default card shadow, deeply blurred, low opacity slate.
- `lg`: Elevated components like dropdowns or hovering feature cards.

## 7. Motion & Animation
- **Pacing:** Calm and reassuring.
- **Duration:** Medium to slow transitions (300ms - 500ms).
- **Easing:** Ease-out or soft spring curves that settle gently.
- **Triggers:** Subtle fades and slight upward translations on scroll (fade-in-up) rather than aggressive or bouncy animations.
