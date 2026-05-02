# Design System & Token Architecture

## 1. Brand Concept
**"Clinical Calm Meets Warm Trust"**
For Dr. Gurpartap Singh Dental Clinic and Implant Center, we avoid generic "medical blue." Instead, we use deep slate/charcoal to convey high-tech implant precision, paired with soft terracotta/sage for a warm, human-centric, patient-centered aesthetic.

## 2. Typography
- **Headers (Brand/Elegance):** Refined Serif (e.g., Playfair Display or similar, represented via CSS variables). Conveys authority, high-end care, and trust.
- **Body (Readability/Modernity):** Clean, Humanist Sans-Serif (e.g., Inter, Figtree, or similar). Prioritizes clarity and clinical precision for reading clinical text.

## 3. Color Tokens
All tokens must meet WCAG contrast requirements.

### Light Mode
- **Background:** `oklch(0.98 0.01 60)` - Warm Off-White / Soft Cream
- **Foreground:** `oklch(0.20 0.02 260)` - Deep Slate / Charcoal
- **Primary:** `oklch(0.30 0.03 260)` - Slate (Clinical Precision)
- **Primary Foreground:** `oklch(0.98 0 0)` - White
- **Secondary:** `oklch(0.65 0.10 45)` - Soft Terracotta / Sage (Warm Trust)
- **Secondary Foreground:** `oklch(0.98 0 0)` - White
- **Muted:** `oklch(0.95 0.01 60)` - Light Warm Gray
- **Muted Foreground:** `oklch(0.40 0.01 260)` - Medium Slate
- **Accent:** `oklch(0.85 0.05 45)` - Pale Terracotta
- **Accent Foreground:** `oklch(0.20 0.02 260)` - Deep Slate
- **Border/Ring:** `oklch(0.90 0.01 60)` - Soft Gray

### Dark Mode
- **Background:** `oklch(0.15 0.02 260)` - Deep Slate Background
- **Foreground:** `oklch(0.95 0.01 60)` - Warm Off-White
- **Primary:** `oklch(0.90 0.01 60)` - Light Slate
- **Primary Foreground:** `oklch(0.15 0.02 260)` - Deep Slate
- **Secondary:** `oklch(0.60 0.10 45)` - Muted Terracotta
- **Secondary Foreground:** `oklch(0.98 0 0)` - White
- **Muted:** `oklch(0.25 0.02 260)` - Dark Slate Gray
- **Muted Foreground:** `oklch(0.70 0.01 60)` - Light Gray
- **Accent:** `oklch(0.30 0.05 45)` - Deep Warm Accent
- **Accent Foreground:** `oklch(0.95 0.01 60)` - Warm Off-White
- **Border/Ring:** `oklch(0.30 0.02 260)` - Slate Border

## 4. Spacing Scale
A consistent spacing scale (4px baseline) for predictable rhythm:
- `--space-1`: 0.25rem (4px)
- `--space-2`: 0.5rem (8px)
- `--space-3`: 0.75rem (12px)
- `--space-4`: 1rem (16px)
- `--space-6`: 1.5rem (24px)
- `--space-8`: 2rem (32px)
- `--space-12`: 3rem (48px)
- `--space-16`: 4rem (64px)
- `--space-24`: 6rem (96px)
- `--space-32`: 8rem (128px)

## 5. Border Radius
Soft edges to remove the "sharp clinical" feel and add a welcoming, human touch.
- `--radius-sm`: 0.25rem
- `--radius-md`: 0.5rem
- `--radius-lg`: 1rem (Default for cards and large buttons)
- `--radius-xl`: 1.5rem (For featured sections/images)
- `--radius-full`: 9999px (Pills, avatars)

## 6. Shadow System
Subtle depth for interactive elements without harsh contrast.
- `--shadow-sm`: 0 1px 2px 0 rgb(0 0 0 / 0.05)
- `--shadow-md`: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
- `--shadow-lg`: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)

## 7. Motion Principles
- **Duration:** Quick but smooth (150ms - 300ms).
- **Easing:** Ease-out for entering elements (`cubic-bezier(0, 0, 0.2, 1)`), ease-in for exiting elements (`cubic-bezier(0.4, 0, 1, 1)`).
- **Purpose:** Use for interactive feedback (hover, focus), subtle page transitions, and gentle reveals of clinical imagery or patient testimonials. No jarring or overly dramatic animations.
