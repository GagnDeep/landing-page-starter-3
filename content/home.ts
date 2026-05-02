import { SEO, CTA, Section } from './types';

export const seoMetadata: SEO = {
  title: "Dentocare | Premier Dental Clinic in Sector 46C, Chandigarh",
  description: "Experience world-class, family-oriented dental care with Dr. Gaurav at Dentocare. We offer a full range of services from implants to kids orthodontics. Available 24/7.",
  keywords: ["dentist chandigarh", "dental clinic sector 46C", "dental implants", "kids orthodontics", "wisdom tooth surgery", "Dr. Gaurav dentocare", "emergency dentist 24/7"]
};

export const globalAlert = {
  message: "We are accepting new patients! Book your consultation today and experience pain-free dentistry.",
  cta: { label: "Book Now", href: "/contact" }
};

export const heroSection = {
  headline: "World-Class Dental Care for Your Entire Family",
  subheadline: "Led by Dr. Gaurav, Dentocare in Sector 46C provides hygienic, advanced, and compassionate dental solutions. Your 5.0-star smile journey begins here.",
  primaryCta: { label: "Book Appointment", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "/features" }
};

export const trustBarSection = {
  rating: "5.0",
  text: "Stars on Google",
  awards: ["Top Rated Dentist Chandigarh", "Certified Implantologist", "Advanced Pediatric Care"]
};

export const welcomeSection = {
  title: "A Patient-First Philosophy",
  content: "At Dentocare, we believe a visit to the dentist should be a relaxing, transparent, and rewarding experience. Dr. Gaurav and our dedicated team are committed to utilizing the latest technology to ensure your comfort and long-term oral health.",
  imageAlt: "Dr. Gaurav with a smiling patient in a modern dental room"
};

export const servicesTeaser: Section<{ title: string; desc: string; icon: string }> = {
  title: "Comprehensive Dental Solutions",
  subtitle: "Everything you need under one roof, with world-class hygiene standards.",
  items: [
    { title: "Dental Implants", desc: "Permanent, natural-looking tooth replacement solutions.", icon: "implant" },
    { title: "Pediatric Orthodontics", desc: "Gentle, effective alignment care for children and teens.", icon: "braces" },
    { title: "Wisdom Tooth Surgery", desc: "Pain-free, expertly managed extractions.", icon: "tooth" },
    { title: "Cosmetic Dentistry", desc: "Veneers, whitening, and smile makeovers.", icon: "smile" }
  ]
};

export const featureSpotlight1 = {
  title: "Anxiety-Free, Painless Procedures",
  content: "We understand dental anxiety. Our clinic is designed to be a calming environment, and we utilize the latest anesthetics and minimally invasive techniques so you feel nothing but comfort."
};

export const featureSpotlight2 = {
  title: "Advanced Technology & Strict Hygiene",
  content: "From 3D digital imaging to rigorous multi-step sterilization protocols, Dentocare meets international standards to guarantee precise diagnostics and absolute safety."
};

export const testimonialsSection = {
  title: "Real Stories, Real Smiles",
  items: [
    { name: "Rahul S.", review: "Dr. Gaurav is exceptional. The implant procedure was completely painless. Highly recommend Dentocare!" },
    { name: "Priya M.", review: "My kids used to be terrified of dentists until we found Dentocare. The staff is so warm and family-friendly." }
  ]
};

export const howItWorksSection = {
  title: "Your Journey to a Perfect Smile",
  items: [
    { step: 1, title: "Book a Consultation", desc: "Schedule online or call us 24/7." },
    { step: 2, title: "Comprehensive Evaluation", desc: "Advanced diagnostics and a clear treatment plan." },
    { step: 3, title: "Expert Treatment", desc: "Experience pain-free, specialized care." }
  ]
};

export const ctaSection = {
  headline: "Ready for a Healthier Smile?",
  subheadline: "Our Sector 46C clinic is open for you. We also provide 24/7 emergency support.",
  cta: { label: "Contact Us Today", href: "/contact" }
};
