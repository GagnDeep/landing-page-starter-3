import { SEOData, HeroSection, SectionContent, FeatureItem, ReviewItem, CTAData } from './types';

export const homeSEO: SEOData = {
  title: "Smile Saviors Dental Clinic | Premium Care in Patiala",
  description: "Experience world-class, painless dentistry in a hygienic, state-of-the-art environment. Rated 5.0 stars for expert care in Patiala."
};

export const homeHero: HeroSection = {
  headline: "Precision Dentistry. Painless Care.",
  subheadline: "Welcome to a new standard of dental excellence in Patiala. We combine advanced technology with absolute comfort in a pristine, modern clinic.",
  primaryCTA: { label: "Book Your Visit", href: "/contact" },
  secondaryCTA: { label: "Our Services", href: "/features" }
};

export const trustBar = {
  rating: "5.0-Star Rated",
  experience: "Over 20 Years Experience",
  technology: "Pain-Free Technology"
};

export const practicePhilosophy: SectionContent = {
  heading: "The Smile Saviors Philosophy",
  body: "We believe that exceptional dentistry should be completely comfortable. From routine cleanings to complex implants, our expert team utilizes the strictest hygiene protocols and the latest technology to ensure every procedure is precise, safe, and stress-free."
};

export const servicesGrid: { heading: string; items: FeatureItem[] } = {
  heading: "Expert Care for Every Smile",
  items: [
    { title: "Painless Implants", description: "Permanent, natural-looking solutions using guided 3D technology for precise placement." },
    { title: "Cosmetic Aesthetics", description: "Veneers, teeth whitening, and full smile makeovers designed to complement your facial features." },
    { title: "General & Preventive", description: "Thorough cleanings, comprehensive exams, and proactive care to maintain lifelong oral health." }
  ]
};

export const doctorProfiles: SectionContent & { doctors: { name: string; title: string }[] } = {
  heading: "Meet the Experts",
  body: "Led by industry veterans, our team combines decades of clinical experience with a commitment to ongoing education.",
  doctors: [
    { name: "Dr. Ajay Sharma", title: "Lead Implantologist" },
    { name: "Dr. Priya Kaur", title: "Cosmetic Specialist" }
  ]
};

export const patientReviews: { heading: string; reviews: ReviewItem[] } = {
  heading: "Trusted by Thousands",
  reviews: [
    { quote: "The most professional and cleanest clinic I have ever visited. The procedure was entirely painless.", author: "Rajinder S.", rating: 5 },
    { quote: "A truly premium experience. The staff makes you feel comfortable, and the results are exceptional.", author: "Amanpreet K.", rating: 5 }
  ]
};

export const finalCTA: SectionContent & { cta: CTAData } = {
  heading: "Ready for Your New Smile?",
  body: "Schedule your consultation today and experience the difference of premium dental care.",
  cta: { label: "Schedule Consultation", href: "/contact" }
};