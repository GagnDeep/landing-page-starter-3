import { SEOData, HeroSection, SectionContent } from './types';

export const featuresSEO: SEOData = {
  title: "Our Services & Technology | Smile Saviors Dental Clinic",
  description: "Explore our comprehensive range of premium dental services, from painless implants to advanced cosmetic dentistry."
};

export const featuresHero: HeroSection = {
  headline: "Advanced Treatments, Exceptional Results",
  subheadline: "We offer a full spectrum of dental services, powered by cutting-edge technology and delivered with expert precision.",
  primaryCTA: { label: "Book a Consultation", href: "/contact" }
};

export const serviceCategories = [
  {
    id: "implants",
    heading: "Dental Implants",
    body: "Regain full function and a natural appearance with our guided implant procedures. We use premium-grade titanium and digital planning for perfect placement and minimal recovery time.",
    benefits: ["Permanent solution", "Natural look and feel", "Preserves jawbone health"]
  },
  {
    id: "cosmetic",
    heading: "Cosmetic Dentistry",
    body: "Transform your smile with custom porcelain veneers, professional whitening, and comprehensive smile makeovers. Our approach is artistic, ensuring results that harmonize with your facial structure.",
    benefits: ["Custom-designed smiles", "Stain-resistant materials", "Minimally invasive techniques"]
  },
  {
    id: "general",
    heading: "General & Preventive",
    body: "The foundation of a beautiful smile is optimal health. We provide thorough exams, deep cleanings, and proactive treatments to prevent issues before they arise.",
    benefits: ["Comprehensive diagnostics", "Patient education", "Long-term health focus"]
  }
];

export const technologyHighlight: SectionContent = {
  heading: "The Technology Advantage",
  body: "Our clinic is equipped with CBCT 3D Scanners, intraoral cameras, and laser dentistry tools. This ensures diagnostics are highly accurate and treatments are minimally invasive, reducing both chair time and recovery periods."
};