# Design System: Your Home Salon

## 1. Typography System
To evoke a sophisticated, boutique-salon aesthetic, we use a distinct pairing of an elegant serif and a refined humanist sans-serif.

- **Heading Font (`--font-heading`)**: Playfair Display (or similar high-contrast serif). Used for all major headers, conveying elegance, heritage, and luxury.
- **Body Font (`--font-sans`)**: Lato or Montserrat (or similar clean humanist sans). Used for body copy, UI elements, and metadata, ensuring maximum legibility and a modern touch.
- **Scale**:
  - `h1`: 3.5rem (56px) - Fluid scaling on smaller screens
  - `h2`: 2.5rem (40px)
  - `h3`: 2rem (32px)
  - `body-large`: 1.125rem (18px)
  - `body-base`: 1rem (16px)
  - `body-small`: 0.875rem (14px)

## 2. Color Palette (Tokens)
The palette focuses on "at-home luxury" with soft neutrals and deep, calming jewel tones. We avoid harsh, pure blacks and whites.

### Light Mode (Root)
- **Background**: Soft Alabaster (`#FAFAF9` / oklch(0.98 0.01 75))
- **Foreground**: Deep Charcoal (`#1C1917` / oklch(0.25 0.01 75))
- **Primary**: Deep Emerald (`#065F46` / oklch(0.45 0.1 160)) - Calming, natural, luxurious.
- **Primary Foreground**: Off-White (`#F0FDF4` / oklch(0.98 0.02 160))
- **Secondary**: Warm Terracotta (`#9A3412` / oklch(0.45 0.12 45)) - Adds warmth and intimacy.
- **Secondary Foreground**: Soft Peach (`#FFF7ED` / oklch(0.98 0.02 45))
- **Muted**: Warm Gray (`#E7E5E4` / oklch(0.92 0.01 75))
- **Muted Foreground**: Medium Gray (`#78716C` / oklch(0.55 0.01 75))
- **Border/Input**: Light Gray (`#D6D3D1` / oklch(0.85 0.01 75))
- **Card/Popover**: Pure White (`#FFFFFF` / oklch(1 0 0))

### Dark Mode
- **Background**: Rich Obsidian (`#1C1917` / oklch(0.25 0.01 75))
- **Foreground**: Soft Alabaster (`#FAFAF9` / oklch(0.98 0.01 75))
- **Primary**: Soft Emerald (`#10B981` / oklch(0.7 0.15 160))
- **Primary Foreground**: Deep Green (`#022C22` / oklch(0.2 0.05 160))
- **Secondary**: Muted Terracotta (`#F97316` / oklch(0.7 0.15 45))
- **Secondary Foreground**: Deep Brown (`#431407` / oklch(0.2 0.05 45))
- **Muted**: Dark Gray (`#292524` / oklch(0.3 0.01 75))
- **Muted Foreground**: Light Gray (`#A8A29E` / oklch(0.7 0.01 75))
- **Border/Input**: Charcoal (`#44403C` / oklch(0.4 0.01 75))
- **Card/Popover**: Darker Obsidian (`#171514` / oklch(0.2 0.01 75))

## 3. Spacing Scale
A generous, breathable spacing scale to allow content to feel airy and unhurried.
- `xs`: 0.25rem (4px)
- `sm`: 0.5rem (8px)
- `md`: 1rem (16px)
- `lg`: 2rem (32px)
- `xl`: 4rem (64px) - Used for distinct section breaks
- `2xl`: 8rem (128px) - Used for major page transitions

## 4. Border Radius
Soft, approachable edges, avoiding sharp, aggressive corners.
- `none`: 0
- `sm`: 0.25rem
- `md`: 0.5rem
- `lg`: 1rem
- `full`: 9999px

## 5. Shadow Depth
Subtle, diffuse shadows to lift elements gracefully rather than sharply.
- `sm`: `0 2px 8px rgba(0, 0, 0, 0.04)`
- `md`: `0 8px 24px rgba(0, 0, 0, 0.06)`
- `lg`: `0 16px 48px rgba(0, 0, 0, 0.08)`

## 6. Motion Principles
- **Grace over Speed**: Animations should be fluid, easing in and out gently.
- **Duration**: Use longer durations for structural changes (e.g., 400ms-600ms) and standard durations for micro-interactions (e.g., 200ms-300ms).
- **Easing**: Custom cubic-bezier for a "breathe-in, breathe-out" feel, e.g., `cubic-bezier(0.25, 1, 0.5, 1)`.
- **Effects**: Rely on subtle fades, gentle scaling, and soft parallax scrolling. Avoid abrupt flashes or bouncing.
