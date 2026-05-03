import { SEOData, NoticeBarData } from "./types";

export const seo: SEOData = {
  title: "Our Services | Dentistree Chandigarh",
  description: "Comprehensive dental services including pediatric care, invisible aligners, aesthetic dentistry, and pain-free treatments at Dentistree.",
};

export const noticeBar: NoticeBarData = {
  text: "Now accepting new pediatric and orthodontic patients in Sector 22B.",
  cta: { label: "Book Appointment", href: "/contact" }
};

export const hero = {
  headline: "Comprehensive Dental Care",
  subheadline: "From your child's first checkup to advanced orthodontic transformations, we offer a full spectrum of services tailored to your needs."
};

export const pediatric = {
  id: "pediatric",
  title: "Pediatric Dentistry",
  description: "Gentle, fun, and preventive care designed to make your child love visiting the dentist.",
  services: [
    { name: "First Visit Checkups", description: "A gentle introduction to the dental chair for toddlers." },
    { name: "Fluoride Treatments & Sealants", description: "Protecting growing teeth from cavities." },
    { name: "Gentle Cavity Fillings", description: "Quick, comfortable treatments for little ones." }
  ]
};

export const orthodontics = {
  id: "orthodontics",
  title: "Orthodontics & Aligners",
  description: "Expert alignment for a healthier bite and a more confident smile.",
  services: [
    { name: "Invisible Aligners", description: "Clear, removable, and comfortable custom aligners. The discreet way to straighten your teeth." },
    { name: "Modern Traditional Braces", description: "Highly effective, low-profile brackets for complex alignment needs." },
    { name: "Early Interceptive Orthodontics", description: "Guiding jaw growth in children to prevent severe issues later." }
  ]
};

export const aesthetic = {
  id: "aesthetic",
  title: "Aesthetic Dentistry",
  description: "Enhancing the natural beauty of your smile with precision and artistry.",
  services: [
    { name: "Porcelain Veneers", description: "Custom-crafted thin shells to correct chips, gaps, and discoloration." },
    { name: "Professional Teeth Whitening", description: "Safe, effective brightening for a radiant smile." },
    { name: "Smile Makeovers", description: "Comprehensive cosmetic planning for transformative results." }
  ]
};

export const general = {
  id: "general",
  title: "General & Preventive Care",
  description: "The foundation of a healthy mouth for patients of all ages.",
  services: [
    { name: "Comprehensive Exams", description: "Thorough checkups including oral cancer screenings." },
    { name: "Professional Cleanings", description: "Removing plaque and tartar to prevent gum disease." },
    { name: "Desensitizing Treatments", description: "Relief for sensitive teeth." }
  ]
};

export const restorative = {
  id: "restorative",
  title: "Restorative Dentistry",
  description: "Repairing and restoring the function and strength of your teeth.",
  services: [
    { name: "Tooth-Colored Fillings", description: "Durable, invisible repairs for cavities." },
    { name: "Crowns & Bridges", description: "Custom restorations to protect damaged or missing teeth." },
    { name: "Dental Implants", description: "Permanent, natural-looking replacements for missing teeth." }
  ]
};

export const comfort = {
  title: "Pain-Free & Sedation Options",
  content: "Your comfort is non-negotiable. We offer advanced numbing techniques and gentle sedation options (like Nitrous Oxide) for anxious patients or complex procedures, ensuring a stress-free experience."
};

export const finalCta = {
  headline: "Not Sure What You Need?",
  subheadline: "Book a consultation, and we'll help you create a personalized treatment plan.",
  cta: { label: "Book a Consultation", href: "/contact" }
};
