# Design System

## Typography System
- **Headings (Cinematic Serif):** Cormorant Garamond. Used for all high-level display text, hero sections, and elegant introductions. Provides a timeless, editorial, premium feel.
- **Body & Functional (Clean Humanist Sans):** Figtree or DM Sans. Used for body text, navigation, meta details, and buttons. Ensures readability, modernity, and a sharp contrast to the ornate serif.

## Color Tokens (Gallery & Editorial Experience)
Avoid generic grays. Use rich, tonal colors that feel intentional.

### Light Mode (Crisp Editorial Spread)
- **Background:** `oklch(0.98 0.01 75)` - Warm, pearl white, not stark `#FFF`.
- **Foreground:** `oklch(0.25 0.02 75)` - Deep charcoal/espresso, avoiding harsh black.
- **Primary:** `oklch(0.3 0.05 75)` - Rich, dark sepia/warm black.
- **Muted/Secondary Background:** `oklch(0.95 0.01 75)` - Very soft linen.
- **Borders:** `oklch(0.9 0.01 75)` - Subtle definition.

### Dark Mode (Cinematic Exhibition Space)
- **Background:** `oklch(0.15 0.02 75)` - Deep, rich obsidian/warm black (not `#000`).
- **Foreground:** `oklch(0.9 0.02 75)` - Soft, ivory white (not stark `#FFF`).
- **Primary:** `oklch(0.85 0.05 75)` - Elegant champagne/warm off-white.
- **Muted/Secondary Background:** `oklch(0.2 0.02 75)` - Slightly lighter obsidian for depth.
- **Borders:** `oklch(0.25 0.02 75)` - Subtle structural lines.

## Spacing & Sizing Scales
- Follow an 8px base rhythm but prioritize generous, "gallery-like" white space.
- Sections should have macro-padding (e.g., `py-24` or `py-32`) to let content breathe.
- Elements within clusters use tighter spacing (e.g., `gap-4` or `gap-8`) to maintain association.

## Border Radius
- Minimal and sharp. Use `0px` or `2px` (`rounded-none` or `rounded-sm`) to evoke a precise, framed-photograph aesthetic rather than bubbly web elements.

## Shadows & Depth
- **Light Mode:** Use very diffuse, soft, and warm shadows (`box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05)`).
- **Dark Mode:** Shadows are less visible; rely on subtle border lines or very faint, wide glows to separate layers.

## Motion & Easing
- Slow, deliberate, and cinematic.
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (out-expo) or `cubic-bezier(0.33, 1, 0.68, 1)` (ease-out).
- Transitions should feel like smooth camera pans or slow cross-fades rather than snappy web UI bounces. Standard duration: `500ms` - `800ms`.
