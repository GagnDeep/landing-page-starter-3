# Dentistree Design System

## Brand Identity & Tone
**Vibe:** Boutique healthcare — welcoming, clean, trustworthy, gentle, kid-friendly, yet expert.
**Avoid:** Generic "tech-startup" aesthetics, sterile hospital vibes, over-the-top cartoonish styles.
**Goal:** Balance professional orthodontic expertise with a warm, gentle atmosphere that reduces anxiety for pediatric patients while instilling confidence in parents.

## Typography
**Heading Font:** Outfit
- *Why:* Friendly, modern, geometric, approachably professional. The subtle rounding and geometric structure convey warmth and modernity without feeling overly playful.
**Body Font:** DM Sans
- *Why:* Clean, highly legible at small sizes, warm, and structured. It pairs perfectly with Outfit to maintain a professional edge.

## Color Tokens (OKLCH)

### Light Mode
The light mode emphasizes a clean, clinical yet warm environment using soft creams, gentle teals, and warm peach accents.
- **Background:** `oklch(0.98 0.01 75)` (Warm cream / Off-white)
- **Foreground:** `oklch(0.25 0.05 240)` (Deep slate navy)
- **Primary:** `oklch(0.70 0.10 210)` (Soft Ocean Teal - calming, trustworthy)
- **Primary Foreground:** `oklch(0.98 0.01 75)` (Warm cream)
- **Secondary:** `oklch(0.85 0.12 45)` (Warm Peach / Soft Coral - kid-friendly accent)
- **Secondary Foreground:** `oklch(0.25 0.05 45)` (Deep warm brown)
- **Muted:** `oklch(0.95 0.02 210)` (Very light icy teal)
- **Muted Foreground:** `oklch(0.50 0.05 240)` (Muted slate)
- **Accent:** `oklch(0.92 0.04 210)` (Soft blue-teal)
- **Accent Foreground:** `oklch(0.25 0.05 240)`
- **Destructive:** `oklch(0.60 0.18 20)` (Soft terracotta/red)
- **Border / Input:** `oklch(0.90 0.03 210)`
- **Ring:** `oklch(0.70 0.10 210)`

### Dark Mode
Dark mode is designed to be deeply soothing, like a calm night, reducing eye strain and anxiety. Contrast ratios are carefully balanced to avoid harsh brightness.
- **Background:** `oklch(0.20 0.04 240)` (Deep Forest Navy)
- **Foreground:** `oklch(0.95 0.02 75)` (Soft Cream)
- **Primary:** `oklch(0.75 0.10 210)` (Soft Ocean Teal - slightly brighter for contrast)
- **Primary Foreground:** `oklch(0.20 0.04 240)` (Deep Forest Navy)
- **Secondary:** `oklch(0.80 0.12 45)` (Warm Peach)
- **Secondary Foreground:** `oklch(0.20 0.04 240)`
- **Muted:** `oklch(0.28 0.04 240)` (Dark slate)
- **Muted Foreground:** `oklch(0.75 0.03 240)` (Light slate)
- **Accent:** `oklch(0.30 0.05 210)` (Deep teal accent)
- **Accent Foreground:** `oklch(0.95 0.02 75)`
- **Destructive:** `oklch(0.65 0.18 20)`
- **Border / Input:** `oklch(0.30 0.04 240)`
- **Ring:** `oklch(0.75 0.10 210)`

## Spacing Scale
A consistent spacing scale emphasizing breathing room and logical grouping.
- `2xs`: 0.25rem (4px)
- `xs`: 0.5rem (8px)
- `sm`: 0.75rem (12px)
- `md`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)
- `2xl`: 3rem (48px)
- `3xl`: 4rem (64px)
- `4xl`: 6rem (96px)
- `5xl`: 8rem (128px)

## Border Radius System
Extensively rounded corners to evoke gentleness, safety, and modern boutique aesthetics.
- `--radius`: `1rem` (16px) - Base roundness for cards, inputs, and standard buttons.
- Pill shapes (`9999px`) for badges and primary call-to-action buttons to appear extremely friendly.

## Shadow Definitions
Soft, diffuse shadows that lift elements without feeling harsh or technical.
- **sm:** `0 2px 8px -2px oklch(0.25 0.05 240 / 0.05)`
- **md:** `0 4px 16px -4px oklch(0.25 0.05 240 / 0.08)`
- **lg:** `0 8px 32px -8px oklch(0.25 0.05 240 / 0.12)`

## Motion Principles
- **Vibe:** Gentle, fluid, reducing anxiety. No abrupt snapping or aggressive easing.
- **Durations:**
  - Micro-interactions (hover, focus): `200ms`
  - Structural transitions (page loads, modals): `400ms` to `600ms`
- **Easing:** `cubic-bezier(0.25, 1, 0.5, 1)` (Smooth ease-out)
