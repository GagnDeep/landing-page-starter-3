import { SEOData, HeroSection } from './types';

export const featuresContent = {
  seo: {
    title: "Dental Services | Dr. Bansal's Dental Care",
    description: "Comprehensive dental services in Patiala. From pain-free root canals and cosmetic fillings to routine scaling and pediatric care.",
  } as SEOData,

  hero: {
    title: "Comprehensive Dental Services",
    subtitle: "Gentle, modern care tailored for every stage of life.",
  } as HeroSection,

  categories: [
    { label: "Preventive", href: "#preventive" },
    { label: "Restorative", href: "#restorative" },
    { label: "Cosmetic", href: "#cosmetic" },
    { label: "Pediatric", href: "#pediatric" },
  ],

  preventive: {
    id: "preventive",
    title: "Preventive Dentistry",
    description: "The foundation of a healthy smile. We focus on stopping problems before they start.",
    services: [
      { name: "Professional Scaling & Polishing", description: "Gentle removal of plaque and tartar to prevent gum disease and freshen breath." },
      { name: "Comprehensive Exams", description: "Thorough check-ups including oral cancer screenings and digital X-rays." },
      { name: "Dental Sealants", description: "Protective coatings applied to back teeth to prevent decay, highly recommended for children." }
    ]
  },

  restorative: {
    id: "restorative",
    title: "Restorative Dentistry",
    description: "Repairing damaged teeth with strong, natural-looking materials.",
    services: [
      { name: "Tooth-Colored Fillings", description: "Durable composite fillings that blend seamlessly with your natural teeth." },
      { name: "Pain-Free Root Canals", description: "Expert endodontic treatment to save infected teeth, performed with profound local anesthesia." },
      { name: "Crowns & Bridges", description: "Custom-crafted ceramic restorations to rebuild broken teeth or replace missing ones." }
    ]
  },

  cosmetic: {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Enhancing the natural beauty of your smile.",
    services: [
      { name: "Professional Teeth Whitening", description: "Safe, effective whitening treatments for a significantly brighter smile." },
      { name: "Porcelain Veneers", description: "Thin ceramic shells to correct chips, gaps, and severe discoloration." },
      { name: "Smile Makeovers", description: "Comprehensive treatment plans combining multiple cosmetic procedures for a total transformation." }
    ]
  },

  pediatric: {
    id: "pediatric",
    title: "Pediatric Care",
    description: "Building positive dental habits early in a fun, non-threatening environment.",
    services: [
      { name: "First Dental Visits", description: "Gentle introductions to the dental chair for toddlers." },
      { name: "Fluoride Treatments", description: "Strengthening developing enamel to resist cavities." }
    ]
  },

  emergency: {
    title: "Emergency Dental Care",
    description: "Toothaches, broken teeth, and lost fillings require immediate attention. We reserve time daily to treat emergencies and get you out of pain.",
    cta: { label: "Call for Emergency Appointment", href: "tel:+919876543211" }
  },

  finalCta: {
    title: "Not sure what you need?",
    subtitle: "Schedule a consultation, and we'll create a personalized treatment plan.",
    cta: { label: "Book Consultation", href: "/contact" }
  }
};
