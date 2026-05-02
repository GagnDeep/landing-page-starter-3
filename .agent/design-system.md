# Dentocare Design System: "Clinical-Luxury"

## Brand Identity & Aesthetic
The aesthetic is "clinical-luxury"—clean, trustworthy, warm, and highly professional. We avoid generic tech startup clichés and focus on hygienic, family-friendly, and full-service dental care values.

## Typography (`typeset` & `frontend-design`)
We use a sophisticated, non-generic typography scale prioritizing readability and clear hierarchy.

- **Heading Font:** `Lora` (Humanist Serif) — Conveys tradition, empathy, warmth, and high-end trust.
- **UI & Body Font:** `Plus Jakarta Sans` (Geometric Sans) — Clean, legible, and hygienic, perfect for UI elements and reading.
- **Monospace (if needed):** `JetBrains Mono`

### Typography Scale (Mobile-Responsive Base)
- `text-xs`: 0.75rem (12px), leading 1.5
- `text-sm`: 0.875rem (14px), leading 1.5
- `text-base`: 1rem (16px), leading 1.6 (Optimal for reading long-form content)
- `text-lg`: 1.125rem (18px), leading 1.6
- `text-xl`: 1.25rem (20px), leading 1.5
- `text-2xl`: 1.5rem (24px), leading 1.4
- `text-3xl`: 1.875rem (30px), leading 1.3
- `text-4xl`: 2.25rem (36px), leading 1.2
- `text-5xl`: 3rem (48px), leading 1.1
- `text-6xl`: 3.75rem (60px), leading 1.1
- `text-7xl`: 4.5rem (72px), leading 1.1

## Color Palette (`brand-guidelines`)
Our colors balance clinical hygiene with premium luxury. Light and dark modes provide equivalent contrast ratios.

### Light Mode Tokens
- `background`: `#FAFAFA` (Soft clinical white)
- `foreground`: `#1A202C` (Deep charcoal, easier on eyes than pure black)
- `primary`: `#0F4C5C` (Deep Trust Teal)
- `primary-foreground`: `#FFFFFF`
- `secondary`: `#E3B23C` (Champagne Gold / Warmth)
- `secondary-foreground`: `#1A202C`
- `muted`: `#F1F5F9` (Soft gray)
- `muted-foreground`: `#64748B`
- `accent`: `#EDF2F7`
- `accent-foreground`: `#0F4C5C`
- `card`: `#FFFFFF`
- `card-foreground`: `#1A202C`
- `border`: `#E2E8F0`
- `ring`: `#0F4C5C`
- `success`: `#10B981` (Hygienic Mint)
- `success-foreground`: `#FFFFFF`
- `destructive`: `#EF4444`
- `destructive-foreground`: `#FFFFFF`

### Dark Mode Tokens
- `background`: `#0F172A` (Deep slate, sophisticated night mode)
- `foreground`: `#F8FAFC` (Crisp off-white)
- `primary`: `#5EEAD4` (Luminous Teal)
- `primary-foreground`: `#0F172A`
- `secondary`: `#FCD34D` (Soft Gold)
- `secondary-foreground`: `#0F172A`
- `muted`: `#1E293B`
- `muted-foreground`: `#94A3B8`
- `accent`: `#1E293B`
- `accent-foreground`: `#5EEAD4`
- `card`: `#1E293B`
- `card-foreground`: `#F8FAFC`
- `border`: `#334155`
- `ring`: `#5EEAD4`
- `success`: `#34D399`
- `success-foreground`: `#0F172A`
- `destructive`: `#F87171`
- `destructive-foreground`: `#0F172A`

## Spacing Scale
A structured 4px (0.25rem) base rhythm:
- `space-1`: 0.25rem (4px)
- `space-2`: 0.5rem (8px)
- `space-3`: 0.75rem (12px)
- `space-4`: 1rem (16px)
- `space-6`: 1.5rem (24px)
- `space-8`: 2rem (32px)
- `space-12`: 3rem (48px)
- `space-16`: 4rem (64px)
- `space-24`: 6rem (96px)
- `space-32`: 8rem (128px)

## Border Radius (Friendly yet Sharp)
- `radius-sm`: 0.25rem
- `radius-md`: 0.375rem
- `radius-lg`: 0.5rem (Cards, large buttons)
- `radius-xl`: 0.75rem
- `radius-full`: 9999px (Pills)

## Shadow Depth
Soft, diffuse, premium shadows avoiding harsh lines.
- `shadow-sm`: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- `shadow-md`: `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)`
- `shadow-lg`: `0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)`
- `shadow-xl`: `0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)`

## Motion Curves
Smooth, natural, eased transitions.
- `ease-default`: `cubic-bezier(0.4, 0, 0.2, 1)` (Standard transitions)
- `ease-in`: `cubic-bezier(0.4, 0, 1, 1)` (Exiting elements)
- `ease-out`: `cubic-bezier(0, 0, 0.2, 1)` (Entering elements)
- `ease-spring`: `cubic-bezier(0.175, 0.885, 0.32, 1.275)` (Playful/interactive feedback)
