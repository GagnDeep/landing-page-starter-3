import { SEOMetadata, globalContent } from "./global";

export interface HomeContent {
  seo: SEOMetadata;
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trustBar: {
    ratingText: string;
    yearsExperience: string;
    certifications: string[];
  };
  intro: {
    heading: string;
    body: string;
    signature: string;
  };
  servicesOverview: {
    heading: string;
    services: Array<{
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    heading: string;
    reviews: Array<{
      quote: string;
      author: string;
    }>;
  };
  preFooter: {
    headline: string;
    cta: string;
  };
}

export const homeContent: HomeContent = {
  seo: {
    title: `${globalContent.clinicName} | Premium Dental Care in Patiala`,
    description: `Experience 4.9-star rated dental care in Patiala with ${globalContent.doctorName}. Specializing in painless implants, RCT, and complete oral hygiene.`,
  },
  hero: {
    headline: "Precision Dentistry. Compassionate Care.",
    subheadline: "Welcome to Patiala’s premier destination for advanced dental implants, painless treatments, and radiant smiles. Experience the standard of care you deserve.",
    ctaPrimary: "Book an Appointment",
    ctaSecondary: "Explore Our Services",
  },
  trustBar: {
    ratingText: "4.9/5 Star Rated by Our Patients",
    yearsExperience: "15+ Years of Excellence",
    certifications: ["ISO Certified", "IDA Member"],
  },
  intro: {
    heading: "A New Standard in Dental Hygiene",
    body: "At Naresh Dental Clinic, we believe that world-class dental care should feel comfortable and reassuring. Led by Dr. Anshum Gupta, our team utilizes state-of-the-art technology and rigorous sterilization protocols to ensure every visit is safe, painless, and exceptionally effective.",
    signature: "Dr. Anshum Gupta, Lead Dental Surgeon",
  },
  servicesOverview: {
    heading: "Comprehensive Dental Solutions",
    services: [
      {
        title: "Advanced Dental Implants",
        description: "Permanent, natural-looking tooth replacements designed to restore your confident smile.",
      },
      {
        title: "Painless Root Canal Treatment (RCT)",
        description: "Save your natural teeth with our advanced, discomfort-free endodontic procedures.",
      },
      {
        title: "Wisdom Tooth Extraction",
        description: "Expert surgical removal with a focus on minimizing swelling and ensuring rapid recovery.",
      },
      {
        title: "Cosmetic & General Dentistry",
        description: "From routine cleanings and fillings to advanced gum treatments and smile makeovers.",
      },
    ],
  },
  testimonials: {
    heading: "What Our Patients Say",
    reviews: [
      {
        quote: "The cleanest, most professional clinic I've visited. Dr. Anshum made my implant procedure entirely painless. Highly recommended!",
        author: "Sandeep S.",
      },
      {
        quote: "I was terrified of getting a root canal, but the team here made me feel completely at ease. The hygiene standards are impeccable.",
        author: "Priya M.",
      },
    ],
  },
  preFooter: {
    headline: "Ready for your new smile?",
    cta: "Schedule Your Consultation Today",
  },
};
