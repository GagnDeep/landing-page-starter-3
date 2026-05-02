# Design System: Perfect Smile Dental Clinic

## Brand Context
**Brand Personality:** Family-trusted, painless, multi-decade legacy, high-authority (4.6 stars, 863 reviews).
**Aesthetic:** Clinical excellence balanced with warmth. Sophisticated, not generic startup. High-contrast, intentional dark mode.

## Typography
Pairing two distinct, high-personality font families suitable for health/wellness.

1. **Primary/Display Typeface:** *Playfair Display* (or similar elegant, approachable serif)
   - **Usage:** Large headings, authoritative statements, hero sections.
   - **Vibe:** Multi-decade legacy, trust, sophistication.
   - **Weights:** 400 (Regular), 600 (SemiBold).
2. **Secondary/Body Typeface:** *Plus Jakarta Sans* (or similar clean, modern geometric sans)
   - **Usage:** Body copy, UI elements, functional text, small headings.
   - **Vibe:** Clinical precision, clarity, modern accessibility.
   - **Weights:** 400 (Regular), 500 (Medium), 600 (SemiBold).

## CSS Color Tokens

The palette avoids stark #000 or generic primary blue. Instead, it relies on deep, comforting navies, clinical soft blues, and warm sand tones to convey "painless care." Dark mode is considered and high-contrast, not merely inverted.

### Light Mode (`:root`)
- `--background`: `#FAFAFA` (Soft off-white, warm)
- `--foreground`: `#1A202C` (Deep slate, very readable)
- `--primary`: `#2B6CB0` (Clinical, trustworthy blue)
- `--primary-foreground`: `#FFFFFF`
- `--secondary`: `#E2E8F0` (Soft grayish blue)
- `--secondary-foreground`: `#1A202C`
- `--accent`: `#DD6B20` (Warmth, subtle energy, sparingly used for CTAs)
- `--accent-foreground`: `#FFFFFF`
- `--muted`: `#F1F5F9`
- `--muted-foreground`: `#64748B`
- `--border`: `#E2E8F0`
- `--card`: `#FFFFFF`
- `--card-foreground`: `#1A202C`

### Dark Mode (`.dark`)
- `--background`: `#0F172A` (Deep navy, not pure black)
- `--foreground`: `#F8FAFC` (Soft white, high contrast but not blinding)
- `--primary`: `#60A5FA` (Brighter, accessible clinical blue)
- `--primary-foreground`: `#0F172A`
- `--secondary`: `#1E293B`
- `--secondary-foreground`: `#F8FAFC`
- `--accent`: `#F6AD55` (Warmth pops against dark navy)
- `--accent-foreground`: `#1A202C`
- `--muted`: `#1E293B`
- `--muted-foreground`: `#94A3B8`
- `--border`: `#334155`
- `--card`: `#1E293B`
- `--card-foreground`: `#F8FAFC`

## Spacing Scale
A generous, breathable structural rhythm.
- `--space-1`: `0.25rem` (4px)
- `--space-2`: `0.5rem` (8px)
- `--space-3`: `1rem` (16px)
- `--space-4`: `1.5rem` (24px)
- `--space-5`: `2rem` (32px)
- `--space-6`: `3rem` (48px)
- `--space-8`: `4rem` (64px)
- `--space-12`: `6rem` (96px)
- `--space-16`: `8rem` (128px)
- `--space-24`: `12rem` (192px) - Used for major section spacing.

## Border Radius System
Soft, approachable curves avoiding harsh tech edges.
- `--radius-sm`: `0.25rem` (UI controls, small badges)
- `--radius-md`: `0.5rem` (Buttons, small cards)
- `--radius-lg`: `1rem` (Major cards, image containers)
- `--radius-xl`: `1.5rem` (Large feature blocks, modals)
- `--radius-full`: `9999px` (Avatars, pills)

## Shadow System
Elevation should feel soft, diffused, and natural.
- `--shadow-sm`: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- `--shadow-md`: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
- `--shadow-lg`: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`
- `--shadow-xl`: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`

## Motion Principles
- **Vibe:** Calm, deliberate, reassuring.
- **Speed:** Slow to moderate. No snappy, frantic tech-startup bounces.
- **Easing:** Smooth ease-in-out (`cubic-bezier(0.4, 0, 0.2, 1)`).
- **Triggers:** Gentle fade-ins and subtle upward translations on scroll (`y: 20, opacity: 0 -> y: 0, opacity: 1`).
- **Interaction:** Hover states should softly blend colors or subtly lift elements, never scale aggressively.
