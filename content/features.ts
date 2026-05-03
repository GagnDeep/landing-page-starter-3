import { Meta } from './home';

export interface Amenity {
  title: string;
  description: string;
}

export interface TechItem {
  title: string;
  benefit: string;
  description: string;
  imageAlt: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface FeaturesContent {
  meta: Meta;
  hero: {
    headline: string;
    subheadline: string;
  };
  comfortMenu: {
    headline: string;
    description: string;
    amenities: Amenity[];
  };
  technology: {
    headline: string;
    description: string;
    items: TechItem[];
  };
  safety: {
    headline: string;
    description: string;
    points: string[];
  };
  patientJourney: {
    headline: string;
    steps: Step[];
  };
  finalCta: {
    headline: string;
    cta: string;
  };
}

export const featuresContent: FeaturesContent = {
  meta: {
    title: "Technology & Comfort | Dr. Bansal’s Dental Care",
    description: "Discover how we use advanced dental technology and a patient-first comfort menu to provide a pain-free, modern dental experience.",
  },
  hero: {
    headline: "Modern Care, Designed for Comfort",
    subheadline: "We combine state-of-the-art dental technology with thoughtful amenities to ensure your visit is entirely stress-free.",
  },
  comfortMenu: {
    headline: "The Comfort Menu",
    description: "Dental visits shouldn't be daunting. Ask our team for any of these complimentary amenities to make your stay more relaxing.",
    amenities: [
      {
        title: "Noise-Canceling Headphones",
        description: "Listen to your favorite music or podcast to drown out clinic sounds."
      },
      {
        title: "Cozy Blankets",
        description: "Stay warm and comfortable in the dental chair."
      },
      {
        title: "Neck Pillows",
        description: "Ergonomic support for longer procedures."
      },
      {
        title: "Sedation Options",
        description: "Nitrous oxide (laughing gas) is available for anxious patients."
      }
    ]
  },
  technology: {
    headline: "Advanced Dental Technology",
    description: "We invest in the latest tools to provide safer, faster, and more accurate diagnoses.",
    items: [
      {
        title: "Digital X-Rays",
        benefit: "Less Radiation, Instant Results",
        description: "Our digital sensors emit up to 90% less radiation than traditional X-rays and allow us to view high-resolution images instantly on screen.",
        imageAlt: "Digital X-ray machine in use"
      },
      {
        title: "Intraoral Cameras",
        benefit: "See What We See",
        description: "A tiny camera allows us to show you exactly what is happening in your mouth, helping you make informed decisions about your care.",
        imageAlt: "Dentist using an intraoral camera"
      },
      {
        title: "Digital Impressions",
        benefit: "No More Messy Putty",
        description: "We use 3D scanners to take highly accurate digital impressions for crowns and aligners, eliminating the need for uncomfortable traditional putty.",
        imageAlt: "3D digital impression scanner"
      }
    ]
  },
  safety: {
    headline: "Uncompromising Safety & Sterilization",
    description: "Your health is our top priority. We exceed standard guidelines for cleanliness and infection control.",
    points: [
      "Hospital-grade autoclaves for instrument sterilization.",
      "Thorough surface disinfection between every patient.",
      "Single-use tools wherever possible.",
      "Regular independent testing of our sterilization equipment."
    ]
  },
  patientJourney: {
    headline: "What to Expect",
    steps: [
      {
        number: "01",
        title: "Warm Welcome",
        description: "Arrive at our calm clinic, enjoy a beverage, and quickly complete any necessary paperwork on a tablet."
      },
      {
        number: "02",
        title: "Comprehensive Exam",
        description: "Meet Dr. Bansal for a thorough checkup, including low-radiation digital imaging if needed."
      },
      {
        number: "03",
        title: "Clear Consultation",
        description: "We will walk you through our findings on a screen, explain your options clearly, and answer all your questions."
      },
      {
        number: "04",
        title: "Gentle Treatment",
        description: "Receive your customized care while enjoying our comfort amenities in a stress-free environment."
      }
    ]
  },
  finalCta: {
    headline: "Experience the difference of modern, gentle dentistry.",
    cta: "Book Appointment",
  }
};
