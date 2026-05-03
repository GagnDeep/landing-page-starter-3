import { SEOContent, CTA } from './types';

export const featuresContent = {
  seo: {
    title: "Signature Services & Treatments | Amil's Hair Lounge",
    description: "Explore our premium hair treatments including Hair Botox, Keratin, and Bespoke Color. Experience expert care at Amil's Hair Lounge in Patiala."
  } as SEOContent,
  hero: {
    headline: "Signature Treatments",
    subheading: "Advanced formulations. Expert application. Transformative results."
  },
  treatments: [
    {
      id: "botox",
      title: "Hair Botox",
      subtitle: "The Ultimate Reconstructor",
      description: "Unlike traditional smoothing treatments, our Hair Botox is a deep conditioning powerhouse. It fills in damaged, broken areas of the hair shaft, smoothing cuticles and restoring natural luster without breaking the hair's bonds. Ideal for highly damaged, frizzy, or processed hair.",
      benefits: ["Deeply hydrates and repairs", "Eliminates frizz", "Restores natural shine", "Safe for all hair types"]
    },
    {
      id: "keratin",
      title: "Keratin Smooth",
      subtitle: "Frizz-Free Perfection",
      description: "Reclaim your mornings. Our premium Keratin treatment infuses natural keratin protein deep into the hair cuticle. It drastically reduces styling time, blocks humidity, and leaves your hair silky, straight, and incredibly manageable for months.",
      benefits: ["Long-lasting smoothness", "Blocks 99% of humidity", "Cuts drying time in half", "Improves hair texture"]
    },
    {
      id: "color",
      title: "Bespoke Color & Balayage",
      subtitle: "Artistry in Every Hue",
      description: "Color isn't one-size-fits-all. Our expert colorists analyze your skin tone, eye color, and lifestyle to create a custom shade. From seamless balayage blends to bold fashion colors, we use premium, low-ammonia products that protect hair integrity during the coloring process.",
      benefits: ["Custom-blended shades", "Damage-minimizing formulas", "Seamless grow-out", "Expert dimension and depth"]
    }
  ],
  ingredients: {
    headline: "Premium Quality, No Compromises",
    description: "We partner exclusively with industry-leading brands to ensure your hair receives the best possible care.",
    brands: ["L'Oréal Professionnel", "Olaplex", "Schwarzkopf Professional", "Moroccanoil"]
  },
  process: {
    headline: "The Amil's Process",
    steps: [
      { step: "01", title: "Consultation", description: "In-depth analysis of your hair history and goals." },
      { step: "02", title: "Prescription", description: "Customized treatment plan and product selection." },
      { step: "03", title: "Execution", description: "Meticulous application by our trained experts." },
      { step: "04", title: "Maintenance", description: "Aftercare advice to prolong your beautiful results." }
    ]
  },
  cta: {
    headline: "Ready for Your Transformation?",
    subheading: "Schedule a personalized consultation with our experts.",
    cta: { label: "Book Consultation", href: "/contact" } as CTA
  }
};
