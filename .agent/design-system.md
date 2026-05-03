# Design System: Dr. Bansal's Dental Care

## 1. Core Brand Identity
- **Personality**: Calm, Clinical Authority, Welcoming, Gentle Care.
- **Aesthetic**: "Calm-Clinic". Soft, breathable layouts, generous whitespace, avoiding sterile corporate or generic AI-startup looks.

## 2. Typography System
- **Heading Font**: `Lora` (Sophisticated, elegant, calm serif).
- **Body Font**: `Plus Jakarta Sans` (Clean, highly readable, approachable sans-serif).
- **Font Variables**:
  - `--font-heading`: `'Lora', serif`
  - `--font-sans`: `'Plus Jakarta Sans', sans-serif`

## 3. Color Tokens (OKLCH)
Focus on calming blues, soft teals, and clean off-whites. High contrast, accessible, comfortable viewing.

### Light Mode
- **Background**: `oklch(0.985 0.002 240)` (Soft, crisp off-white)
- **Foreground**: `oklch(0.25 0.04 245)` (Deep slate blue for readable text)
- **Primary**: `oklch(0.55 0.12 245)` (Trusting, calming clinic blue)
- **Primary Foreground**: `oklch(0.985 0.002 240)`
- **Secondary**: `oklch(0.88 0.06 195)` (Soft teal/mint for accents)
- **Secondary Foreground**: `oklch(0.25 0.04 245)`
- **Muted**: `oklch(0.96 0.01 240)` (Very light blue-grey for subtle backgrounds)
- **Muted Foreground**: `oklch(0.55 0.04 245)` (Mid-tone slate for secondary text)
- **Accent**: `oklch(0.92 0.04 195)` (Light teal)
- **Accent Foreground**: `oklch(0.25 0.04 245)`
- **Border**: `oklch(0.92 0.02 240)` (Soft structural lines)
- **Input**: `oklch(0.92 0.02 240)`
- **Ring**: `oklch(0.55 0.12 245)`
- **Card**: `oklch(1 0 0)` (Pure white for elevated surfaces)
- **Card Foreground**: `oklch(0.25 0.04 245)`
- **Popover**: `oklch(1 0 0)`
- **Popover Foreground**: `oklch(0.25 0.04 245)`
- **Destructive**: `oklch(0.60 0.18 20)` (Softened red for gentle alerts)
- **Destructive Foreground**: `oklch(0.985 0.002 240)`

### Dark Mode
A carefully considered dark mode that feels like a quiet, dimly lit waiting room—restful, not harsh.
- **Background**: `oklch(0.18 0.02 245)` (Very dark, soft slate)
- **Foreground**: `oklch(0.95 0.01 240)` (Soft off-white for text)
- **Primary**: `oklch(0.75 0.10 245)` (Lighter, glowing calming blue)
- **Primary Foreground**: `oklch(0.18 0.02 245)`
- **Secondary**: `oklch(0.35 0.06 195)` (Deep teal)
- **Secondary Foreground**: `oklch(0.95 0.01 240)`
- **Muted**: `oklch(0.25 0.03 245)` (Slightly elevated dark slate)
- **Muted Foreground**: `oklch(0.70 0.03 245)` (Softened text)
- **Accent**: `oklch(0.30 0.05 195)` (Darker teal accent)
- **Accent Foreground**: `oklch(0.95 0.01 240)`
- **Border**: `oklch(0.28 0.03 245)`
- **Input**: `oklch(0.28 0.03 245)`
- **Ring**: `oklch(0.75 0.10 245)`
- **Card**: `oklch(0.22 0.02 245)` (Slightly lighter than background for depth)
- **Card Foreground**: `oklch(0.95 0.01 240)`
- **Popover**: `oklch(0.22 0.02 245)`
- **Popover Foreground**: `oklch(0.95 0.01 240)`
- **Destructive**: `oklch(0.65 0.18 20)`
- **Destructive Foreground**: `oklch(0.95 0.01 240)`

## 4. Scale & Form (Gentle Care Aesthetic)

### Border Radius
Focus on soft, approachable curves rather than sharp corporate edges.
- `--radius`: `1rem` (Base rounded corner)
- `--radius-sm`: `0.5rem`
- `--radius-md`: `0.75rem`
- `--radius-lg`: `1rem`
- `--radius-xl`: `1.5rem`
- `--radius-2xl`: `2rem`
- `--radius-3xl`: `3rem`
- `--radius-full`: `9999px`

### Spacing & Whitespace
Generous whitespace to create a "breathable" and uncrowded feeling, reducing patient anxiety.
- Sections should have substantial vertical padding (e.g., `py-24` or `py-32`).
- Content blocks should be constrained in width to maintain readability (e.g., `max-w-prose` or `max-w-4xl`).

### Shadows (Soft & Diffused)
Shadows should feel like natural, soft ambient lighting, not harsh drops.
- `shadow-sm`: `0 1px 2px 0 oklch(0.25 0.04 245 / 0.05)`
- `shadow-md`: `0 4px 6px -1px oklch(0.25 0.04 245 / 0.05), 0 2px 4px -2px oklch(0.25 0.04 245 / 0.05)`
- `shadow-lg`: `0 10px 15px -3px oklch(0.25 0.04 245 / 0.05), 0 4px 6px -4px oklch(0.25 0.04 245 / 0.05)`

## 5. Motion & Transitions
- Animations should be smooth, slow, and intentional (`ease-in-out` with slightly longer durations).
- Avoid rapid or jarring movements. Fade-ins and gentle slides represent the calm clinic vibe.
