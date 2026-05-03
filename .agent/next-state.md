# Next State: Phase 4 - Core Layout and Navigation Shell

**Goal:**
Build the global structural shell of the application, incorporating the design system tokens, global content, and newly created visual components.

**Upcoming Tasks:**
1. Implement the global `Header` component with responsive navigation (desktop links, mobile hamburger menu).
2. Implement the global `Footer` component consuming data from `content/global.ts` (including links, contact info, and image credits).
3. Update `app/layout.tsx` to wrap `children` in these global components.
4. Ensure dark mode toggle functionality is integrated into the header.
5. Verify semantic HTML structure (header, main, footer) for accessibility.