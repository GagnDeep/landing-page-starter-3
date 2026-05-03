import { SEOContent, CTA } from './types';

export const aboutContent = {
  seo: {
    title: "About Us | Amil's Hair Lounge Patiala",
    description: "Discover the story behind Amil's Hair Lounge. Led by Master Stylist Ajay Sir, we bring affordable luxury and expert hair treatments to Leela Bhawan, Patiala."
  } as SEOContent,
  hero: {
    headline: "Our Story",
    subheading: "Where artistry meets everyday luxury."
  },
  philosophy: {
    quote: "True luxury isn't about the price tag; it's about the experience, the expertise, and how you feel when you walk out the door.",
    description: "Amil's Hair Lounge was born from a desire to bridge the gap between high-end salon experiences and accessibility. We believe everyone deserves to feel confident, empowered, and pampered. Our commitment to 'affordable luxury' drives everything we do, from the premium products we select to the continuous education of our staff."
  },
  ajaySir: {
    headline: "The Visionary: Ajay Sir",
    role: "Founder & Master Educator",
    bio: [
      "Ajay Sir isn't just a stylist; he's a true architect of hair. With over 15 years dedicated to mastering the art of cutting, coloring, and transformative treatments, he has established himself as a leading authority in Patiala.",
      "His passion extends beyond the salon chair. As the head of Amil's Academy, Ajay Sir is deeply committed to mentoring the next generation of stylists, ensuring the highest standards of the craft are upheld."
    ],
    signatureQuote: "Education is the foundation. Artistry is the execution."
  },
  theSpace: {
    headline: "A Sanctuary in Leela Bhawan",
    description: "Step into our thoughtfully designed studio. Every detail, from the lighting to the seating, has been curated to provide a relaxing, premium experience away from the hustle of the city."
  },
  team: {
    headline: "Meet the Experts",
    description: "Our handpicked team of stylists and technicians undergo rigorous, ongoing training. We don't just follow trends; we set them."
  },
  milestones: {
    headline: "Our Journey",
    events: [
      { year: "2018", title: "The Beginning", description: "Amil's Hair Lounge opens its doors in Patiala with a vision to redefine local beauty standards." },
      { year: "2020", title: "Treatment Pioneers", description: "Introduced advanced Keratin and Hair Botox protocols, setting a new benchmark for hair health." },
      { year: "2023", title: "Academy Launch", description: "Ajay Sir launches Amil's Academy to train aspiring professionals." }
    ]
  },
  cta: {
    headline: "Experience the Difference",
    cta: { label: "Book Your Visit", href: "/contact" } as CTA
  }
};
