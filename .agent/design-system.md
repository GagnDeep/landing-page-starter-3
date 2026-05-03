# Spacedent Design System

## Core Identity & Tone
Spacedent Dental Clinic is a modern, patient-centered practice focusing on gentle pediatric care and advanced tech-forward treatments.
The visual language avoids generic "medical blue" tropes, opting instead for a calming, trustworthy, and sophisticated palette.
- **Tone:** Calm, Gentle, Modern, Trustworthy, Professional.
- **Aesthetic:** Clean, asymmetric but balanced, fluid spacing, and inviting.

## Typography
To balance the professional medical authority with a gentle, inviting tone, we use a pairing of a sophisticated serif for headers and a clean sans-serif for body text.

- **Headings (Primary Font):** A sophisticated serif (e.g., Cormorant Garamond, Lora, or Playfair Display). Brings authority and a touch of premium luxury.
- **Body (Secondary Font):** A clean, legible sans-serif (e.g., DM Sans, Inter, or Plus Jakarta Sans). Ensures readability and modern cleanliness.

*Note on implementation: Both will be loaded via `next/font/google` and exposed as `--font-heading` and `--font-sans` CSS variables.*

## Color Palette (OKLCH)
Using OKLCH for perceptually uniform gradients and accessible light/dark modes.
The palette avoids pure blacks/whites and typical medical blues.
Instead, it embraces soft teals, warm clays, and gentle slates.

### Light Mode Base Tokens (Conceptual)
- **Background:** Soft warm off-white (e.g., warm clay tint) `oklch(0.98 0.01 60)`
- **Foreground (Text):** Deep gentle slate (tinted dark gray) `oklch(0.25 0.02 240)`
- **Primary:** Soft Teal (calm, trustworthy, medical-adjacent but softer) `oklch(0.65 0.08 210)`
- **Primary Foreground:** Off-white `oklch(0.98 0.01 60)`
- **Secondary:** Warm Clay (gentle, inviting for pediatric) `oklch(0.85 0.04 50)`
- **Secondary Foreground:** Deep Slate `oklch(0.25 0.02 240)`
- **Muted/Card:** Very subtle off-white/gray-teal `oklch(0.96 0.01 210)`
- **Border:** Soft divider line `oklch(0.90 0.01 210)`

### Dark Mode Base Tokens (Conceptual)
Must maintain high contrast and readability.
- **Background:** Deep rich slate `oklch(0.18 0.02 240)`
- **Foreground (Text):** Soft warm off-white `oklch(0.95 0.01 60)`
- **Primary:** Lighter Soft Teal `oklch(0.75 0.08 210)`
- **Primary Foreground:** Deep slate `oklch(0.18 0.02 240)`
- **Secondary:** Muted Warm Clay `oklch(0.45 0.04 50)`
- **Secondary Foreground:** Soft white `oklch(0.95 0.01 60)`
- **Muted/Card:** Slightly elevated deep slate `oklch(0.22 0.02 240)`
- **Border:** Subtle divider `oklch(0.30 0.02 240)`

## Spacing & Layout Rhythm
- Emphasize visual rhythm through varied spacing. Do not use uniform padding everywhere.
- Use fluid typography and spacing with CSS `clamp()`.
- **Rhythm:** Tight groupings for related elements, generous breathing room between sections.
- **Containers:** Avoid nesting cards within cards. Embrace asymmetry. Use left-aligned text with offset imagery rather than centering everything.

## Border Radius
- Soft, inviting corners. Avoid harsh 90-degree angles to maintain the "gentle pediatric" feel.
- Standard radius: `0.75rem` or `1rem` (md/lg).
- Over-exaggerated rounded elements are avoided unless purposefully decorative.

## Motion & Interaction
- **Motion:** Exponential easing (`ease-out-quart/quint`). Focus on entrances, state changes, and high-impact moments. No elastic or bouncy animations.
- **Transitions:** Smooth, calm fading and sliding. Avoid animating layout properties (width, height), stick to transform and opacity.
- **Interaction:** Optimistic UI. Buttons and interactive elements should have subtle scaling or color shifts on hover, reflecting responsiveness without feeling "jittery".
- **Accessibility:** Respect `prefers-reduced-motion`.

## "Anti-AI Slop" Guidelines
- No pure blacks/whites.
- No gradient text for headings.
- No standard "hero metric" templates or endless same-sized card grids.
- No unnecessary modals.
