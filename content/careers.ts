import { Meta } from './home';

export interface Benefit {
  title: string;
  description: string;
}

export interface JobOpening {
  id: string;
  title: string;
  type: string;
  description: string;
}

export interface CareersContent {
  meta: Meta;
  hero: {
    headline: string;
    subheadline: string;
    imageAlt: string;
  };
  culture: {
    headline: string;
    description: string;
    benefits: Benefit[];
  };
  openings: {
    headline: string;
    jobs: JobOpening[];
    emptyStateMessage: string;
  };
  application: {
    headline: string;
    description: string;
    cta: string;
  };
}

export const careersContent: CareersContent = {
  meta: {
    title: "Careers | Dr. Bansal’s Dental Care",
    description: "Join the dedicated team at Dr. Bansal’s Dental Care in Patiala. Explore open positions for dental professionals and administrative staff.",
  },
  hero: {
    headline: "Join Our Clinic Family",
    subheadline: "We are always looking for compassionate, skilled professionals who share our vision of redefining patient care.",
    imageAlt: "Team of dental professionals smiling together",
  },
  culture: {
    headline: "Why Work With Us?",
    description: "At Dr. Bansal's, we believe that a happy team leads to happy patients. We foster a supportive, educational, and respectful work environment.",
    benefits: [
      {
        title: "Work-Life Balance",
        description: "Predictable scheduling with no late-night shifts and respected time off."
      },
      {
        title: "Continuous Learning",
        description: "Opportunities for ongoing training and certifications in modern dental techniques."
      },
      {
        title: "Modern Environment",
        description: "Work in a clean, state-of-the-art clinic equipped with the latest technology."
      },
      {
        title: "Supportive Culture",
        description: "A collaborative team atmosphere where everyone's input is valued."
      }
    ]
  },
  openings: {
    headline: "Current Openings",
    jobs: [
      {
        id: "dental-assistant",
        title: "Registered Dental Assistant",
        type: "Full-Time",
        description: "We are seeking a proactive and gentle dental assistant to support Dr. Bansal during procedures and help manage patient flow."
      },
      {
        id: "patient-coordinator",
        title: "Front Desk / Patient Coordinator",
        type: "Full-Time",
        description: "Looking for a welcoming professional to manage scheduling, insurance verification, and ensure a warm reception for all patients."
      }
    ],
    emptyStateMessage: "We don't have any specific openings right now, but we are always eager to connect with great talent."
  },
  application: {
    headline: "Don't see a perfect fit?",
    description: "We are always accepting resumes from passionate individuals. Send us your details, and we'll keep you in mind for future roles.",
    cta: "Submit General Application",
  }
};
