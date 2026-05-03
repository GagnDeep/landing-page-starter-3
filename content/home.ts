import { SEOContent, NavigationLink, CTA } from './types';

export const homeContent = {
  seo: {
    title: "Amil's Hair Lounge | Premium Salon in Leela Bhawan, Patiala",
    description: "Experience affordable luxury at Amil's Hair Lounge. Patiala's top-rated destination for hair botox, keratin, and transformative treatments. Book your consultation today."
  } as SEOContent,
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Academy", href: "/careers" },
    { label: "Contact", href: "/contact" }
  ] as NavigationLink[],
  hero: {
    headline: "Affordable Luxury. Unmatched Expertise.",
    subheading: "Transformative hair care and styling in the heart of Leela Bhawan, Patiala.",
    primaryCTA: { label: "Book an Appointment", href: "/contact" } as CTA
  },
  trustBar: {
    badges: ["4.9 Star Rated", "Expert Stylists", "Premium Products", "Leela Bhawan, Patiala"]
  },
  valueProposition: {
    headline: "Your Hair, Elevated.",
    description: "At Amil's Hair Lounge, we believe that luxury should be an everyday experience. Led by Ajay Sir, our team specializes in transformative treatments that not only look stunning but prioritize the health of your hair."
  },
  servicesTeaser: {
    headline: "Our Signature Treatments",
    services: [
      {
        title: "Hair Botox",
        description: "A deep conditioning treatment that reconstructs hair, producing frizz-free, luminous results.",
        link: { label: "Learn More", href: "/services#botox" } as CTA
      },
      {
        title: "Keratin Smooth",
        description: "Defy humidity and restore your hair's natural protein for long-lasting smoothness.",
        link: { label: "Learn More", href: "/services#keratin" } as CTA
      },
      {
        title: "Bespoke Color",
        description: "From subtle balayage to complete transformations, tailored specifically for your skin tone.",
        link: { label: "Learn More", href: "/services#color" } as CTA
      }
    ]
  },
  featureSpotlight: {
    headline: "The Science of Beautiful Hair",
    description: "We don't just mask damage; we repair it. Using industry-leading products like L'Oréal and Olaplex, our treatments penetrate deep into the hair shaft for results that last.",
    cta: { label: "View Our Process", href: "/services" } as CTA
  },
  ajaySirProfile: {
    headline: "Meet Ajay Sir",
    role: "Founder & Master Stylist",
    bio: "With over a decade of experience in high-end styling and education, Ajay Sir brings a meticulous eye and unparalleled expertise to every chair. His philosophy? Education is the foundation of great hair.",
    cta: { label: "Read Our Story", href: "/about" } as CTA
  },
  testimonials: {
    headline: "Client Experiences",
    quotes: [
      {
        text: "The hair botox treatment completely transformed my frizzy hair. The staff is incredible, and the vibe is so luxurious yet welcoming.",
        author: "Priya S."
      },
      {
        text: "Ajay Sir is a true artist. He understood exactly what I wanted for my color and the result exceeded my expectations.",
        author: "Neha M."
      }
    ]
  },
  academyTeaser: {
    headline: "Learn from the Best",
    subheading: "Join Amil's Academy and elevate your career in the beauty industry.",
    cta: { label: "Explore Courses", href: "/careers" } as CTA
  },
  pricingTeaser: {
    headline: "Transparent Pricing",
    items: [
      { service: "Haircut & Styling", price: "From ₹500" },
      { service: "Root Touch-up", price: "From ₹1200" },
      { service: "Keratin Treatment", price: "From ₹4000" }
    ],
    cta: { label: "View Full Menu", href: "/pricing" } as CTA
  },
  finalCTA: {
    headline: "Ready for a Transformation?",
    subheading: "Step into our salon and let us redefine your style.",
    cta: { label: "Book Now", href: "/contact" } as CTA
  },
  footer: {
    brandName: "Amil's Hair Lounge",
    address: "Leela Bhawan, Patiala, Punjab",
    contactEmail: "hello@amilshairlounge.com",
    contactPhone: "+91 98765 43210",
    legalLinks: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" }
    ]
  }
};
