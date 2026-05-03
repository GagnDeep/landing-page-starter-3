import { SEOContent, HeroContent, SectionContent } from './types';

export const pricingSEO: SEOContent = {
  title: "Transparent Pricing & Insurance | Dentocare",
  description: "View our transparent pricing, accepted insurances, and flexible payment plans for dental treatments at Dentocare in Chandigarh.",
};

export const pricingHero: HeroContent = {
  headline: "Transparent Pricing, No Surprises",
  subheadline: "We believe in honest, upfront communication about the cost of your care. We work with you to find solutions that fit your budget.",
  primaryCTA: {
    label: "Contact Billing Support",
    href: "/contact",
  },
};

export const standardFees = [
  { service: "Initial Consultation & Exam", price: "₹500 - ₹1000" },
  { service: "Professional Cleaning (Scaling)", price: "From ₹1500" },
  { service: "Tooth-Colored Filling", price: "From ₹2000" },
  { service: "Root Canal Treatment", price: "From ₹4500" },
  { service: "Dental Implant (per tooth)", price: "Consultation Required" },
];

export const insuranceInfo: SectionContent = {
  title: "Insurance & Financing",
  body: "We accept most major health insurance plans with dental coverage. Our team is happy to assist you with claims and paperwork. For extensive treatments, we offer flexible, zero-interest EMI options to ensure you get the care you need without financial stress.",
};
