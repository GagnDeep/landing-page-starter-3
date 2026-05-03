import { SEOContent, HeroContent, ServiceCardContent } from './types';

export const featuresSEO: SEOContent = {
  title: "Dental Services & Treatments | Dentocare Chandigarh",
  description: "Explore our comprehensive dental services including general dentistry, pediatric care, advanced orthodontics, and dental implants at Dentocare.",
};

export const featuresHero: HeroContent = {
  headline: "Comprehensive Dental Care for Every Need",
  subheadline: "From your child's first check-up to full-mouth restorations, we offer a complete spectrum of advanced dental services under one roof.",
  primaryCTA: {
    label: "Book a Consultation",
    href: "/contact",
  },
};

export const servicesList = {
  general: {
    title: "General & Preventive Dentistry",
    description: "The foundation of a healthy smile. We focus on prevention to keep your natural teeth strong.",
    items: ["Comprehensive Oral Exams", "Digital X-Rays & 3D Imaging", "Professional Scaling & Polishing", "Tooth-Colored Fillings"],
  },
  cosmetic: {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile's aesthetics with our bespoke cosmetic treatments.",
    items: ["Porcelain Veneers", "Professional Teeth Whitening", "Smile Makeovers", "Gum Contouring"],
  },
  orthodontics: {
    title: "Orthodontics",
    description: "Straighten your teeth seamlessly and comfortably.",
    items: ["Invisalign & Clear Aligners", "Traditional Braces", "Retainers", "Child-Friendly Orthodontics"],
  },
  restorative: {
    title: "Restorative Care & Implants",
    description: "Rebuild your smile's function and appearance with durable, state-of-the-art materials.",
    items: ["Dental Implants", "Crowns & Bridges", "Root Canal Therapy", "Dentures"],
  },
  pediatric: {
    title: "Pediatric Dentistry",
    description: "Gentle, reassuring care tailored specifically for our youngest patients.",
    items: ["First Dental Visits", "Fluoride Treatments", "Dental Sealants", "Habit Counseling"],
  },
};

export const technologySection = {
  title: "Advanced Clinical Technology",
  description: "We invest in the latest dental technology to ensure your treatments are faster, safer, and more comfortable.",
  features: ["Intraoral Scanners", "Painless Anesthesia Delivery", "Advanced Sterilization Autoclaves", "Laser Dentistry"],
};
