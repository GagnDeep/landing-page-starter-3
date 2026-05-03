# Dentistree Design System

## 1. Brand Identity & Vibe
- **Core Concept**: "Gentle Authority." A balance of high-end clinical expertise (orthodontics, invisible aligners) and a warm, pediatric-friendly, anxiety-reducing environment.
- **Tone**: Calming, trustworthy, modern, premium, soft.
- **Aesthetic**: Modern medical, completely avoiding sterile "hospital white/blue" or generic AI/SaaS aesthetics.

## 2. Typography
- **Headings (Display/Title)**: `Outfit`
  - Friendly, geometric sans-serif. Slightly rounded and approachable, yet modern and highly legible. Perfect for reducing clinical intimidation while maintaining a high-end feel.
- **Body Copy (Paragraphs/UI)**: `Manrope`
  - Clean, highly legible sans-serif that pairs beautifully with Outfit. Ensures excellent readability for medical information, addresses, and longer content.

## 3. Color System (OKLCH)
The palette is built on warm, earthy, and calming tones.

### Light Mode
- **Background (`--background`)**: Warm off-white/cream, extremely subtle peach undertone. (e.g., `oklch(0.985 0.01 60)`) - *Avoids harsh, blinding pure white.*
- **Foreground (`--foreground`)**: Deep, warm charcoal/brown. (e.g., `oklch(0.25 0.01 60)`) - *Softer than pure black for eye comfort.*
- **Primary (`--primary`)**: Calming Sage Green / Soft Teal. Conveys health, growth, and calm. (e.g., `oklch(0.65 0.08 160)`)
- **Primary Foreground (`--primary-foreground`)**: Cream/White.
- **Secondary (`--secondary`)**: Warm Sand / Gentle Peach. Used for soft backgrounds and approachable call-outs. (e.g., `oklch(0.95 0.03 60)`)
- **Secondary Foreground (`--secondary-foreground`)**: Deep Charcoal.
- **Muted (`--muted`)**: Very soft, warm gray for inactive elements and backgrounds. (e.g., `oklch(0.96 0.01 60)`)
- **Muted Foreground (`--muted-foreground`)**: Mid-tone warm gray. (e.g., `oklch(0.55 0.01 60)`)
- **Accent (`--accent`)**: Soft Coral / Warm Terracotta. Used sparingly for playful, kid-friendly highlights or subtle attention-grabbers. (e.g., `oklch(0.75 0.12 35)`)
- **Accent Foreground (`--accent-foreground`)**: White/Cream.
- **Card (`--card`)**: Pure clean cream. (e.g., `oklch(0.99 0.005 60)`)
- **Border (`--border`)**: Very subtle warm gray line. (e.g., `oklch(0.90 0.01 60)`)
- **Destructive**: Softened, warm red (not alarming/neon).

### Dark Mode
*Prioritizes lower contrast surfaces for eye comfort.*
- **Background (`--background`)**: Deep, warm charcoal/espresso. (e.g., `oklch(0.20 0.01 60)`)
- **Foreground (`--foreground`)**: Soft off-white/sand. (e.g., `oklch(0.95 0.01 60)`)
- **Primary (`--primary`)**: Lighter Sage Green (adjusted for contrast against dark). (e.g., `oklch(0.75 0.08 160)`)
- **Secondary (`--secondary`)**: Deep Mocha / Warm Gray. (e.g., `oklch(0.30 0.02 60)`)
- **Card (`--card`)**: Slightly elevated deep charcoal. (e.g., `oklch(0.25 0.01 60)`)
- **Muted (`--muted`)**: Darker warm gray. (e.g., `oklch(0.28 0.01 60)`)

## 4. Border Radius (Shapes)
Emphasize soft, approachable shapes to reinforce the "gentle" and "kid-friendly" vibe. Avoid sharp, aggressive corners.
- `--radius`: `1rem` (16px) - Base radius for cards and larger buttons.
- `--radius-sm`: `0.5rem` (8px) - Inputs, small tags.
- `--radius-md`: `0.75rem` (12px) - Standard buttons, smaller containers.
- `--radius-lg`: `1.25rem` (20px) - Featured cards.
- `--radius-xl`: `1.5rem` (24px) - Large sections.
- `--radius-2xl`: `2rem` (32px) - Major hero image masks, very soft and organic.

## 5. Shadow System
Soft, diffused shadows that create depth without harshness. "Floating" aesthetic.
- **sm**: Soft, close shadow for small interactive elements.
- **md**: Standard card shadow, well-diffused.
- **lg**: Elevated shadow for popovers and major featured elements.
- *In dark mode, shadows are typically darker or replaced by subtle border highlights.*

## 6. Motion & Animation Principles
- **Vibe**: Smooth, natural, calming, easing. Never jarring, bouncy, or "tech-heavy".
- **Easing**: Use gentle cubic-bezier curves (e.g., `cubic-bezier(0.4, 0, 0.2, 1)` or custom softer curves).
- **Durations**: Slightly slower than typical fast SaaS transitions (e.g., 300ms - 500ms for state changes, longer for page entrances).
- **Types**:
  - Gentle fades.
  - Slow, subtle parallax or floating effects for background elements.
  - Soft scale-ups on hover (e.g., `scale-102` rather than `scale-105`).
- **Accessibility**: Must respect `prefers-reduced-motion` media query for all non-essential animations.
