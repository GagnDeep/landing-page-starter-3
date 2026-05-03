# Design System & Aesthetic Guidelines
**Project:** Dr. Bansal’s Dental Care
**Vibe:** Calm-Clinic, Neighbourhood Comfort, Friendly-Professional
**Status:** Defined (Phase 1)

## 1. Design Philosophy
Dr. Bansal’s Dental Care moves away from sterile, intimidating medical tropes (e.g., generic cold blues, harsh whites). The design language focuses on approachability, warmth, and trust. It should feel like stepping into a clean, modern, yet familiar neighborhood clinic.

Key principles:
- **Warmth over Sterility:** Use off-whites, warm grays, and soft sage greens.
- **Clarity over Clutter:** Generous whitespace, clear typography.
- **Softness:** Rounded corners (`--radius: 0.75rem`), soft shadows, gentle transitions.
- **Accessibility:** High contrast text, logical flow, readable at all sizes.

## 2. Typography
Fonts should balance clinical professionalism with human warmth.
- **Headings (`var(--font-heading)`):** A clean, modern serif or a characterful geometric sans-serif that implies heritage and trust (e.g., *Lora*, *Merriweather*, or *Outfit*). It should feel established but not dated.
- **Body (`var(--font-sans)`):** A highly readable, friendly sans-serif (e.g., *Inter*, *DM Sans*, or *Nunito*). It must be legible at small sizes and comfortable for long-form reading (like FAQ or Service details).

## 3. Color Palette (OKLCH Architecture)
The color system uses OKLCH for consistent perceptual lightness and scalability.

### Light Mode (Warm & Inviting)
- **Background (`--background`):** Softest off-white with a very subtle warm tint. Avoids the harsh glare of pure white.
- **Foreground (`--foreground`):** Deep charcoal green/brown. Softer than pure black but maintains high contrast for readability.
- **Primary (`--primary`):** Trustworthy, calm sage green. Used for primary CTAs and brand moments.
- **Secondary (`--secondary`):** Very light sage for subtle highlights and secondary backgrounds.
- **Accent (`--accent`):** Warm beige/sand for variety and warmth.

### Dark Mode (Deep & Restful)
- **Background (`--background`):** Deepest warm forest green/gray. Restful on the eyes.
- **Foreground (`--foreground`):** Soft off-white text.
- **Primary (`--primary`):** Light sage green, optimized to pop against the dark background.
- **Surface/Cards (`--card`):** Slightly lighter deep green to create depth against the background.

## 4. Spacing & Sizing
Spacing follows a standard 4px/8px baseline grid to ensure a consistent rhythm.
- **Micro:** 4px, 8px (icons, tight groupings)
- **Small:** 12px, 16px (component padding, list items)
- **Medium:** 24px, 32px (section margins, card gaps)
- **Large:** 48px, 64px, 96px (major section vertical rhythm)

*Rhythm Rule:* Use more generous padding around clinical information to give it "breathing room" and reduce cognitive load.

## 5. Borders & Shapes
- **Radius (`--radius`):** Base is set to `0.75rem` (12px). This provides a friendly, approachable softness to cards and buttons, moving away from sharp, clinical edges.
- **Borders (`--border`):** Soft, low-contrast borders (e.g., warm muted gray in light mode) to delineate sections without feeling rigid.

## 6. Shadows & Elevation
Shadows should feel diffused and soft, like natural light in a well-lit clinic room.
- **Level 1 (Cards/Buttons):** Soft, diffused shadow with a slight warm tint. No harsh black drop shadows.
- **Level 2 (Hover States/Modals):** Broader diffusion, slightly deeper to indicate interactivity or elevation.

## 7. Motion & Interaction Principles
Motion should feel deliberate, gentle, and reassuring.
- **Speed:** Slow to medium durations (e.g., 200ms - 300ms). Avoid snappy, aggressive animations.
- **Easing:** Ease-in-out or ease-out curves for natural deceleration.
- **Interactions:** Subtle background color shifts on hover, gentle scale-ups (e.g., `scale-105`), and soft fades for modals/toasts. No jarring flashes.
- **Accessibility:** Respect `prefers-reduced-motion` at all times.
