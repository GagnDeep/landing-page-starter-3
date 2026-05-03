import { SEOContent, CTA } from './types';

export const pricingContent = {
  seo: {
    title: "Salon Menu & Pricing | Amil's Hair Lounge Patiala",
    description: "Transparent, affordable luxury pricing for premium hair, nail, and makeup services at Amil's Hair Lounge, Leela Bhawan."
  } as SEOContent,
  hero: {
    headline: "Transparent Pricing.",
    subheading: "Affordable luxury tailored to your unique style."
  },
  categories: [
    {
      title: "Hair Cuts & Styling",
      items: [
        { name: "Women's Advanced Cut", price: "From ₹800" },
        { name: "Men's Precision Fade", price: "From ₹400" },
        { name: "Blowdry & Styling", price: "From ₹500" },
        { name: "Event Up-do", price: "From ₹1500" }
      ]
    },
    {
      title: "Signature Treatments",
      items: [
        { name: "Hair Botox (Short to Medium)", price: "From ₹4500" },
        { name: "Hair Botox (Long)", price: "From ₹6500" },
        { name: "Premium Keratin", price: "From ₹5000" },
        { name: "Olaplex Standalone Treatment", price: "From ₹2500" }
      ]
    },
    {
      title: "Coloring Services",
      items: [
        { name: "Root Touch-Up", price: "From ₹1200" },
        { name: "Global Color", price: "From ₹3500" },
        { name: "Balayage / Ombre", price: "From ₹5500" },
        { name: "Highlights / Lowlights", price: "From ₹4500" }
      ]
    }
  ],
  packages: {
    headline: "Curated Packages",
    items: [
      {
        title: "The Total Transformation",
        description: "Consultation, Custom Color/Balayage, Olaplex Treatment, and Precision Cut.",
        price: "From ₹8999"
      },
      {
        title: "Bridal Elegance",
        description: "Complete pre-bridal hair care plan, trial session, and wedding day styling.",
        price: "Price on Consultation"
      }
    ]
  },
  disclaimer: "Prices listed are starting points. Final pricing depends on hair length, density, and product usage. A precise quote is provided during your consultation.",
  faq: {
    headline: "Pricing FAQ",
    questions: [
      {
        q: "Why do prices say 'From'?",
        a: "Every client's hair is unique. Thicker or longer hair requires more product and time, which affects the final cost. We always provide a firm quote before beginning any service."
      },
      {
        q: "Do I need to pay a deposit?",
        a: "For long appointments like Balayage or smoothing treatments, a small deposit may be required to secure your booking."
      }
    ]
  },
  cta: {
    headline: "Invest in Your Hair",
    cta: { label: "Book an Appointment", href: "/contact" } as CTA
  }
};
