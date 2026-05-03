# Layout Blueprint: Home Page

This document defines the structural rhythm and visual intent for the Home Page, establishing a premium, inviting, and booking-optimized flow.

## 1. Global Navigation Bar (Sticky)
- **Intent:** Constant access to booking and primary navigation without visual clutter.
- **Rhythm:** Fixed at top, slight blur backdrop (glassmorphism), minimal height.
- **Elements:** Logo (left), Centered Links (Services, About, Academy, Contact), Primary CTA "Book Now" (right).

## 2. Immersive Hero Section
- **Intent:** Immediate emotional impact conveying luxury and relaxation.
- **Rhythm:** Full viewport height (`min-h-screen`).
- **Elements:** Large, slow-moving parallax background image or subtle video loop of salon atmosphere. Centered high-contrast serif typography for the main value proposition. "Book Now" and "Explore Services" buttons.

## 3. Brand Trust & As-Seen-In Bar
- **Intent:** Establish credibility immediately below the fold.
- **Rhythm:** Thin, horizontal band, `space-6` padding.
- **Elements:** Muted logos of premium product partners (e.g., L'Oréal, Kerastase) or media mentions, scrolling infinitely or spaced evenly.

## 4. Introduction / The Ajay Sir Philosophy
- **Intent:** Personalize the brand and highlight the founder's expertise.
- **Rhythm:** Asymmetric split layout (`grid-cols-2`). Generous `space-24` top/bottom padding.
- **Elements:** Left: High-quality portrait of Ajay sir in the studio. Right: Serif heading, humanist sans-serif body text detailing the commitment to quality. Signature graphic.

## 5. Signature Services Showcase (Horizontal Scroll)
- **Intent:** Highlight top-tier services without overwhelming vertical space.
- **Rhythm:** Full width, bleeding off the right edge. `space-16` padding.
- **Elements:** Section heading left-aligned. A scrollable row of elegant cards (image top, minimal text below, "Discover" link).

## 6. The "Your Home Salon" Experience (Features)
- **Intent:** Explain the unique value of bringing the premium salon home.
- **Rhythm:** 3-column grid. Soft background color (`--secondary`). `space-24` padding.
- **Elements:** Three pillars (e.g., "Premium Products," "Expert Stylists," "Ultimate Convenience"). Custom minimal icons (`Hugeicons`), short descriptive text.

## 7. Video Testimonial / Atmosphere Reel
- **Intent:** Social proof and visual immersion.
- **Rhythm:** Full-width structural block. `space-32` top/bottom margin.
- **Elements:** Large video player with a custom, elegant play button. A short, impactful quote overlayed.

## 8. Trending Now / Seasonal Offers
- **Intent:** Drive immediate action based on urgency or seasonal relevance.
- **Rhythm:** 2-column asymmetric layout. `space-16` padding.
- **Elements:** Large striking image on one side, stylized typographic offer details on the other. High-contrast CTA.

## 9. The Academy (Cross-promotion)
- **Intent:** Introduce the educational arm of the business.
- **Rhythm:** Dark mode inverted section to break up the flow and signal a different offering. `space-24` padding.
- **Elements:** Dramatic lighting imagery, bold serif typography, "Learn from the Masters" CTA.

## 10. Client Transformations (Before & After Slider)
- **Intent:** Visual proof of expertise.
- **Rhythm:** Centered container, `max-w-5xl`. `space-16` padding.
- **Elements:** Interactive image slider (draggable divider). Clean, minimal labels.

## 11. Curated Product Selection
- **Intent:** Upsell retail products used in services.
- **Rhythm:** 4-column grid for products. `space-16` padding.
- **Elements:** Minimalist product photography on pure white (`--card`), subtle hover lift (`ease-out-smooth`), price, and "Add to Cart" or "Enquire" button.

## 12. Featured Blog Post / Beauty Editorial
- **Intent:** Position the brand as a thought leader in beauty.
- **Rhythm:** Magazine-style layout. Large featured image spanning 2/3 width, text block overlapping slightly.
- **Elements:** Serif headline, "Read Editorial" link, author meta (Ajay sir).

## 13. Location & Studio Ambiance
- **Intent:** For clients who prefer to visit the physical Punjabi Bagh studio.
- **Rhythm:** Full-width image gallery mosaic. `space-24` padding.
- **Elements:** 3-4 high-quality shots of the interior, elegant map pin icon, address details.

## 14. Real Client Reviews (Masonry)
- **Intent:** Unfiltered social proof.
- **Rhythm:** Masonry grid of varying height cards. Soft background (`--muted`).
- **Elements:** Star ratings, client names, authentic text blocks.

## 15. FAQ Quick Accordion
- **Intent:** Address common booking hesitations immediately.
- **Rhythm:** Narrow centered column (`max-w-3xl`). `space-16` padding.
- **Elements:** 4-5 key questions. Smooth, gentle expansion animation (`duration-normal`).

## 16. Join the Elite Membership
- **Intent:** Promote recurring revenue via memberships.
- **Rhythm:** Visually distinct card spanning full content width. Champagne accent borders.
- **Elements:** "VIP" messaging, list of exclusive benefits, "Join Now" CTA.

## 17. Instagram Feed Integration
- **Intent:** Keep the page fresh and show active, day-to-day work.
- **Rhythm:** Edge-to-edge grid of square images (e.g., 6 across). No gaps.
- **Elements:** Hover overlay with "Follow @YourHomeSalon" icon.

## 18. Pre-Footer Booking CTA
- **Intent:** Final push for conversion after consuming the page content.
- **Rhythm:** Massive typography, deep primary background (`--primary`). `space-32` padding.
- **Elements:** "Ready for your transformation?" Large, high-contrast button.

## 19. Global Footer (Detailed)
- **Intent:** Navigation hub and legal requirements.
- **Rhythm:** Multi-column (4-5 cols). Top border line. `space-16` padding.
- **Elements:** Brand mark, quick links, contact info, social icons, newsletter signup (minimal input field).

## 20. Sub-Footer (Legal)
- **Intent:** Copyright and utility links.
- **Rhythm:** Minimal height, small text (`text-sm`), centered or split left/right.
- **Elements:** Copyright year, Privacy Policy link, Terms of Service link.