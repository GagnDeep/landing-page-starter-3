# Design System: Spacedent Dental Clinic

## Core Vision
A gentle, modern, and clinical-tech balance. Welcoming to families and parents while maintaining the authority of a high-tech clinic specializing in single-sitting RCT and pediatric dentistry. Moves away from sterile medical tropes to a warm, approachable, and professional aesthetic.

## Typography
- **Heading Font**: `Cormorant Garamond` (Sophisticated, premium, authoritative serif)
- **Body Font**: `DM Sans` (Clean, humanist, accessible sans-serif)

### Type Scale (Fluid for marketing, fixed for UI elements)
- **Display**: 4rem - 5rem (Fluid)
- **H1**: 3rem - 4rem (Fluid)
- **H2**: 2.25rem - 3rem (Fluid)
- **H3**: 1.75rem - 2.25rem (Fluid)
- **H4**: 1.5rem (Fixed)
- **Body Large**: 1.125rem (Fixed)
- **Body**: 1rem (Fixed)
- **Small/Caption**: 0.875rem (Fixed)

### Hierarchy and Weights
- Headings (`Cormorant Garamond`): Medium (500), SemiBold (600)
- Body (`DM Sans`): Regular (400), Medium (500) for emphasis, Bold (700) for critical labels.

## Color System (OKLCH)
A sophisticated palette focusing on warmth and trustworthiness.

### Light Mode
- **Background**: Soft, warm off-white (warmth, approachability)
- **Foreground**: Deep, charcoal grey (readability, modern contrast)
- **Primary**: Calming, clinical-tech blue/teal (trust, technology)
- **Secondary**: Gentle, warm sand/beige (comfort, pediatric focus)
- **Accent**: Soft coral/peach (warmth, subtle highlighting)
- **Surface/Card**: Pure white (cleanliness, clinical)
- **Muted**: Soft grey with a touch of warmth
- **Border**: Subtle, barely-there grey

### Dark Mode
- **Background**: Deep, rich charcoal/slate (modern, high-tech)
- **Foreground**: Soft off-white (readability)
- **Primary**: Vibrant, clinical-tech teal (tech focus, stands out)
- **Secondary**: Deep, warm taupe/slate
- **Accent**: Muted coral/peach
- **Surface/Card**: Slightly lighter charcoal (depth)
- **Muted**: Dark, muted grey
- **Border**: Subtle, dark grey

## Spacing System
Based on an 8px (0.5rem) grid to ensure consistent rhythm.
- 2px, 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

## Border Radius
Soft and approachable, reflecting gentle care.
- **Sm**: 0.375rem (6px)
- **Md**: 0.5rem (8px)
- **Lg**: 1rem (16px) - *Primary radius for cards and buttons*
- **Xl**: 1.5rem (24px)
- **Full**: 9999px (Pills)

## Shadow System
Elevation should feel soft, airy, and clinical. Avoid harsh, dark shadows.
- **Sm**: Subtle drop shadow for interactive elements.
- **Md**: Standard card shadow.
- **Lg**: Elevated components (modals, dropdowns).

## Motion and Animation Principles
- **Vibe**: Smooth, calming, and precise (reflects "gentle, technology-driven care").
- **Easing**: Custom cubic-bezier for a natural, unhurried feel (e.g., `cubic-bezier(0.25, 1, 0.5, 1)`).
- **Duration**: 200ms - 300ms for micro-interactions; 500ms - 700ms for page transitions or large reveals.
- **Accessibility**: Respect `prefers-reduced-motion` strictly. Fall back to simple fades or instant transitions.

## Accessibility Notes
- Ensure WCAG AA compliance for contrast ratios, especially for text on colored backgrounds.
- Avoid relying solely on color to convey information.
- Provide clear focus states for keyboard navigation.
