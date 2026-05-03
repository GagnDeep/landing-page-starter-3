import { SEOContent, HeroContent, CTAContent, ServiceCardContent } from './types';

export const homeSEO: SEOContent = {
  title: "Dentocare | Premier Family Dental Clinic in Chandigarh",
  description: "Experience hygienic luxury and world-class dental care at Dentocare, led by Dr. Gaurav in Sector 46C, Chandigarh. From pediatric dentistry to complex implants.",
};

export const homeHero: HeroContent = {
  headline: "Your Family’s Home for Exceptional Dental Care",
  subheadline: "Experience world-class, painless dentistry in a reassuring, hygienic environment. Led by Dr. Gaurav, Dentocare is Chandigarh’s trusted partner for every smile.",
  primaryCTA: {
    label: "Book an Appointment",
    href: "/contact",
  },
  secondaryCTA: {
    label: "Explore Our Services",
    href: "/features",
  },
};

export const trustBar = {
  rating: "5.0★ Rating on Google",
  experience: "15+ Years of Excellence",
  hygiene: "Uncompromised Sterilization Protocols",
};

export const introduction = {
  headline: "Welcome to Dentocare",
  body: "At Dentocare, we believe that a visit to the dentist should be a calming, positive experience. Dr. Gaurav and our dedicated team combine advanced dental technology with a warm, family-focused approach to provide 'hygienic luxury'—care that is as pristine as it is comfortable.",
};

export const coreValues = [
  {
    title: "Uncompromising Hygiene",
    description: "Our state-of-the-art sterilization protocols ensure a spotless, safe environment for every patient.",
  },
  {
    title: "Compassionate Care",
    description: "We listen, we care, and we tailor every treatment to your comfort and specific needs.",
  },
  {
    title: "Advanced Expertise",
    description: "From routine cleanings to complex implants, our team delivers precision-driven results.",
  },
];

export const featuredServices: ServiceCardContent[] = [
  {
    title: "General Dentistry",
    description: "Comprehensive check-ups, painless cleanings, and preventive care for the whole family.",
    href: "/features#general",
  },
  {
    title: "Cosmetic & Orthodontics",
    description: "Transform your smile with clear aligners, premium veneers, and professional whitening.",
    href: "/features#cosmetic",
  },
  {
    title: "Implants & Restorative",
    description: "Restore your confidence with durable, natural-looking dental implants and crowns.",
    href: "/features#restorative",
  },
];

export const homeCTA = {
  headline: "Ready for Your Best Smile?",
  subheadline: "Join thousands of happy patients who trust Dentocare for their oral health. Schedule your consultation today.",
  cta: {
    label: "Schedule Consultation",
    href: "/contact",
  },
};
