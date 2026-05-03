export interface Meta {
  title: string;
  description: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface HeaderContent {
  logoAlt: string;
  navLinks: LinkItem[];
  primaryCta: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  imageAlt: string;
}

export interface TrustBarContent {
  rating: string;
  reviewCount: string;
  yearsExperience: string;
  highlightText: string;
}

export interface PhilosophyContent {
  headline: string;
  body: string;
  signatureAlt: string;
}

export interface ServiceSpotlightContent {
  headline: string;
  description: string;
  imageAlt: string;
  cta: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  iconName: string;
}

export interface FeaturesContent {
  headline: string;
  cards: FeatureCard[];
}

export interface DoctorProfileContent {
  name: string;
  title: string;
  bioSnippet: string;
  imageAlt: string;
  linkText: string;
}

export interface TestimonialCard {
  quote: string;
  name: string;
}

export interface TestimonialsContent {
  headline: string;
  reviews: TestimonialCard[];
}

export interface ClinicExperienceContent {
  headline: string;
  imageAlts: string[];
}

export interface InsuranceContent {
  headline: string;
  description: string;
  cta: string;
}

export interface TechnologyContent {
  headline: string;
  description: string;
  imageAlt: string;
}

export interface EmergencyBannerContent {
  headline: string;
  description: string;
  cta: string;
}

export interface BlogSnippetContent {
  headline: string;
  viewAllText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSnippetContent {
  headline: string;
  questions: FaqItem[];
  linkText: string;
}

export interface LocationHoursContent {
  headline: string;
  address: string;
  mapAlt: string;
  hours: { day: string; time: string }[];
}

export interface FinalCtaContent {
  headline: string;
  description: string;
  cta: string;
}

export interface NewsletterContent {
  headline: string;
  placeholder: string;
  cta: string;
}

export interface FooterContent {
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  quickLinks: LinkItem[];
  services: LinkItem[];
  legalLinks: LinkItem[];
  copyrightText: string;
}

export interface HomeContent {
  meta: Meta;
  header: HeaderContent;
  hero: HeroContent;
  trustBar: TrustBarContent;
  philosophy: PhilosophyContent;
  generalDentistry: ServiceSpotlightContent;
  cosmeticDentistry: ServiceSpotlightContent;
  restorativeDentistry: ServiceSpotlightContent;
  features: FeaturesContent;
  doctorProfile: DoctorProfileContent;
  testimonials: TestimonialsContent;
  clinicExperience: ClinicExperienceContent;
  insurance: InsuranceContent;
  technology: TechnologyContent;
  emergency: EmergencyBannerContent;
  blogSnippet: BlogSnippetContent;
  faqSnippet: FaqSnippetContent;
  locationHours: LocationHoursContent;
  finalCta: FinalCtaContent;
  newsletter: NewsletterContent;
  footer: FooterContent;
}

export const homeContent: HomeContent = {
  meta: {
    title: "Dr. Bansal’s Dental Care | Your Neighborhood Clinic in Patiala",
    description: "Experience gentle, professional, and accessible dental health services at Dr. Bansal’s Dental Care in Patiala. Book your appointment today.",
  },
  header: {
    logoAlt: "Dr. Bansal's Dental Care Logo",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
    primaryCta: "Book Appointment",
  },
  hero: {
    headline: "Gentle Dental Care for Your Entire Family",
    subheadline: "Welcome to a neighborhood clinic where your comfort and oral health always come first.",
    primaryCta: "Book Appointment",
    secondaryCta: "View Services",
    imageAlt: "Welcoming reception area of Dr. Bansal's Dental Care",
  },
  trustBar: {
    rating: "5.0",
    reviewCount: "150+ Google Reviews",
    yearsExperience: "10+ Years of Excellence",
    highlightText: "Trusted by Patiala families.",
  },
  philosophy: {
    headline: "Redefining the Dental Visit",
    body: "We believe a visit to the dentist shouldn't be stressful. From the moment you walk through our doors, our priority is to provide a calm, reassuring environment paired with expert, pain-free care. We aren't just treating teeth; we're caring for our neighbors.",
    signatureAlt: "Dr. Himal Bansal's Signature",
  },
  generalDentistry: {
    headline: "General & Preventive Care",
    description: "The foundation of a healthy smile. We offer comprehensive checkups, professional cleanings, and proactive treatments to keep your natural teeth healthy for life.",
    imageAlt: "Patient receiving a comfortable dental cleaning",
    cta: "Learn More",
  },
  cosmeticDentistry: {
    headline: "Cosmetic Enhancements",
    description: "Brighten your smile with confidence. Our cosmetic services, including professional whitening and custom veneers, are designed to give you the natural, radiant smile you deserve.",
    imageAlt: "Close-up of a confident, bright smile",
    cta: "Explore Cosmetic Options",
  },
  restorativeDentistry: {
    headline: "Restorative Treatments",
    description: "Rebuild and restore with precision. Whether you need a simple filling, a durable crown, or a long-lasting implant, we use modern techniques for comfortable, seamless results.",
    imageAlt: "Modern dental tools used for restorative care",
    cta: "View Restorative Services",
  },
  features: {
    headline: "Why Choose Our Clinic",
    cards: [
      {
        title: "Gentle Care",
        description: "We prioritize your comfort with pain-free techniques and a calming environment.",
        iconName: "heart",
      },
      {
        title: "Modern Tech",
        description: "Equipped with the latest digital tools for accurate diagnoses and faster treatments.",
        iconName: "shield",
      },
      {
        title: "Flexible Scheduling",
        description: "We offer convenient appointment times that respect your busy schedule.",
        iconName: "calendar",
      },
      {
        title: "Transparent Pricing",
        description: "Clear, upfront cost explanations before any treatment begins.",
        iconName: "tag",
      },
    ],
  },
  doctorProfile: {
    name: "Dr. Himal Bansal",
    title: "Lead Dentist",
    bioSnippet: "With over a decade of experience, Dr. Bansal is dedicated to bringing world-class, compassionate dental care to the Patiala community.",
    imageAlt: "Portrait of Dr. Himal Bansal smiling in his clinic",
    linkText: "Meet Dr. Bansal",
  },
  testimonials: {
    headline: "Stories from Our Patients",
    reviews: [
      {
        quote: "I've always been nervous about the dentist, but Dr. Bansal and his team made me feel completely at ease. The clinic is so calming.",
        name: "Amanjot K.",
      },
      {
        quote: "Professional, clean, and truly painless. The best dental experience I've had in Patiala.",
        name: "Rahul S.",
      },
      {
        quote: "They took the time to explain every step of my treatment. Highly recommend for anyone looking for an honest, gentle dentist.",
        name: "Priya M.",
      },
    ],
  },
  clinicExperience: {
    headline: "Step Inside Our Clinic",
    imageAlts: [
      "Comfortable and bright waiting area",
      "State-of-the-art treatment room",
      "Friendly reception desk",
      "Modern sterilization equipment",
    ],
  },
  insurance: {
    headline: "Stress-Free Payments & Insurance",
    description: "We believe quality dental care should be accessible. We accept most major insurance plans and offer flexible payment options to suit your budget.",
    cta: "View Pricing & Insurance",
  },
  technology: {
    headline: "Advanced Technology for Better Care",
    description: "From low-radiation digital X-rays to intraoral cameras, we invest in modern technology to ensure your visits are quicker, safer, and more comfortable.",
    imageAlt: "Dentist showing a digital X-ray on a screen",
  },
  emergency: {
    headline: "Experiencing Dental Pain?",
    description: "We reserve time in our daily schedule to handle dental emergencies promptly. Don't wait in pain.",
    cta: "Call for Emergency Care",
  },
  blogSnippet: {
    headline: "Advice for a Healthier Smile",
    viewAllText: "Read All Articles",
  },
  faqSnippet: {
    headline: "Common Questions",
    questions: [
      {
        question: "Are you accepting new patients?",
        answer: "Yes! We are always happy to welcome new patients to our clinic.",
      },
      {
        question: "What should I expect at my first visit?",
        answer: "Your first visit includes a comprehensive exam, digital X-rays if needed, and a friendly consultation to discuss your oral health goals.",
      },
      {
        question: "Do you treat children?",
        answer: "Absolutely. We offer gentle pediatric dentistry to help kids build healthy habits early on.",
      },
    ],
    linkText: "View Full FAQ",
  },
  locationHours: {
    headline: "Find Us in Patiala",
    address: "123 Clinic Road, Neighborhood Area, Patiala, Punjab 147001",
    mapAlt: "Map showing the location of Dr. Bansal's Dental Care in Patiala",
    hours: [
      { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
      { day: "Saturday", time: "9:00 AM - 2:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  finalCta: {
    headline: "Ready for a Brighter, Healthier Smile?",
    description: "Join our patient family and experience dental care that puts you first.",
    cta: "Book Appointment",
  },
  newsletter: {
    headline: "Get Monthly Dental Tips",
    placeholder: "Your email address",
    cta: "Subscribe",
  },
  footer: {
    contactInfo: {
      phone: "+91 98765 43210",
      email: "hello@drbansaldental.com",
      address: "123 Clinic Road, Patiala",
    },
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
    services: [
      { label: "General Dentistry", href: "/features" },
      { label: "Cosmetic Enhancements", href: "/features" },
      { label: "Restorative Care", href: "/features" },
      { label: "Emergency Services", href: "/features" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    copyrightText: "© 2026 Dr. Bansal's Dental Care. All rights reserved.",
  },
};
