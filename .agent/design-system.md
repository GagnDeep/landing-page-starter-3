# Design System for "Your Home Salon"

This document defines the visual DNA and structural blueprint for the premium beauty service provider "Your Home Salon", aiming for a sophisticated, "boutique studio" feel that balances elegant luxury with professional reliability.

## Typography

The typography pairing uses a high-contrast serif for headings to impart a premium, elegant feel, and a clean, humanist sans-serif for body text to ensure modern readability and a welcoming tone.

*   **Headings (`--font-heading`):** `Cormorant Garamond`, serif. (Provides a classic, sophisticated aesthetic suited for luxury and elegance).
*   **Body (`--font-sans`):** `DM Sans`, sans-serif. (Clean, legible, and professional, offering a modern contrast to the serif headings).

## Color Palette (OKLCH)

The color palette is built using OKLCH for predictable and perceptually uniform scaling across light and dark modes. The aesthetic avoids generic tech/startup blues and leans into warm, inviting, and premium tones (warm off-whites, deep charcoals, muted golds/champagne accents).

### Light Mode

*   `--background`: `oklch(0.99 0.01 75)` - Very warm, creamy off-white.
*   `--foreground`: `oklch(0.20 0.01 75)` - Deep warm charcoal, avoiding stark black.
*   `--card`: `oklch(1 0 0)` - Pure white for elevation.
*   `--card-foreground`: `oklch(0.20 0.01 75)` - Same as foreground.
*   `--popover`: `oklch(1 0 0)` - Pure white.
*   `--popover-foreground`: `oklch(0.20 0.01 75)` - Same as foreground.
*   `--primary`: `oklch(0.25 0.02 70)` - Rich, deep warm tone (almost espresso) for primary actions.
*   `--primary-foreground`: `oklch(0.98 0.01 75)` - Very light warm off-white for text on primary.
*   `--secondary`: `oklch(0.94 0.02 80)` - Soft, warm beige/sand.
*   `--secondary-foreground`: `oklch(0.30 0.02 75)` - Dark warm tone for text on secondary.
*   `--muted`: `oklch(0.96 0.01 75)` - Very subtle warm grey/white.
*   `--muted-foreground`: `oklch(0.55 0.02 75)` - Medium warm grey.
*   `--accent`: `oklch(0.85 0.04 80)` - Champagne/muted gold for accents and highlights.
*   `--accent-foreground`: `oklch(0.20 0.01 75)` - Dark text on accent.
*   `--destructive`: `oklch(0.50 0.15 25)` - Muted, elegant red.
*   `--border`: `oklch(0.90 0.02 75)` - Light warm grey border.
*   `--input`: `oklch(0.90 0.02 75)` - Light warm grey for inputs.
*   `--ring`: `oklch(0.85 0.04 80)` - Champagne focus ring.

### Dark Mode

*   `--background`: `oklch(0.15 0.01 75)` - Deep, rich charcoal brown (not pure black).
*   `--foreground`: `oklch(0.95 0.01 75)` - Soft, warm off-white.
*   `--card`: `oklch(0.18 0.01 75)` - Slightly lighter charcoal.
*   `--card-foreground`: `oklch(0.95 0.01 75)` - Same as foreground.
*   `--popover`: `oklch(0.18 0.01 75)` - Slightly lighter charcoal.
*   `--popover-foreground`: `oklch(0.95 0.01 75)` - Same as foreground.
*   `--primary`: `oklch(0.85 0.04 80)` - Champagne/muted gold for primary actions in dark mode.
*   `--primary-foreground`: `oklch(0.15 0.01 75)` - Deep charcoal text on primary.
*   `--secondary`: `oklch(0.22 0.01 75)` - Medium-dark charcoal.
*   `--secondary-foreground`: `oklch(0.90 0.01 75)` - Light warm grey text.
*   `--muted`: `oklch(0.20 0.01 75)` - Subtle dark grey.
*   `--muted-foreground`: `oklch(0.65 0.02 75)` - Medium light warm grey.
*   `--accent`: `oklch(0.25 0.02 75)` - Dark warm accent tone.
*   `--accent-foreground`: `oklch(0.95 0.01 75)` - Light text on accent.
*   `--destructive`: `oklch(0.60 0.15 25)` - Slightly lighter, muted red.
*   `--border`: `oklch(0.25 0.01 75)` - Dark warm grey border.
*   `--input`: `oklch(0.25 0.01 75)` - Dark warm grey for inputs.
*   `--ring`: `oklch(0.85 0.04 80)` - Champagne focus ring.

## Modular Spacing Scale

A consistent spacing scale to ensure rhythmic and breathable layouts, critical for a premium feel. Base unit is 4px (0.25rem).

*   `space-1`: 0.25rem (4px)
*   `space-2`: 0.5rem (8px)
*   `space-3`: 0.75rem (12px)
*   `space-4`: 1rem (16px) - Baseline
*   `space-6`: 1.5rem (24px)
*   `space-8`: 2rem (32px)
*   `space-12`: 3rem (48px) - Section inner spacing
*   `space-16`: 4rem (64px) - Section separation
*   `space-24`: 6rem (96px) - Large section separation
*   `space-32`: 8rem (128px) - Hero/feature separation

## Border Radius Tokens

Soft, elegant corners rather than sharp edges or overly pill-shaped forms.

*   `--radius`: `0.5rem` (8px) - Base radius for cards and buttons.
*   `--radius-sm`: `calc(var(--radius) * 0.5)` (4px) - For small inputs, tags.
*   `--radius-md`: `calc(var(--radius) * 0.75)` (6px) - Intermediate elements.
*   `--radius-lg`: `var(--radius)` (8px) - Standard elements.
*   `--radius-xl`: `calc(var(--radius) * 1.5)` (12px) - Modals, large cards.
*   `--radius-2xl`: `calc(var(--radius) * 2)` (16px) - Hero images, major structural blocks.

## Motion & Easing Principles

Animations should feel intentional, smooth, and unhurried. They should convey a sense of calm and precision.

*   **Easing Curves:**
    *   `ease-out-smooth`: `cubic-bezier(0.16, 1, 0.3, 1)` - For entering elements, scaling up, fades. Feels natural and settling.
    *   `ease-in-out-gentle`: `cubic-bezier(0.4, 0, 0.2, 1)` - For state transitions, hovers.
*   **Durations:**
    *   `duration-fast`: `150ms` - Micro-interactions (hovers, active states).
    *   `duration-normal`: `300ms` - Entering structural elements, dropdowns.
    *   `duration-slow`: `500ms` - Page transitions, hero reveals.
    *   `duration-very-slow`: `800ms+` - Parallax effects, ambient background motion.
*   **Principles:**
    *   Use fades and slight vertical translates (y-axis) for reveals.
    *   Avoid bouncy or overly playful easing curves.
    *   Respect `prefers-reduced-motion` at all times.