import { SEOMetadata, globalContent } from "./global";

export interface CareersContent {
  seo: SEOMetadata;
  hero: {
    headline: string;
    subheadline: string;
  };
  culture: {
    heading: string;
    body: string;
  };
  benefits: Array<{
    title: string;
    description: string;
  }>;
  openings: {
    heading: string;
    noOpeningsMessage: string;
    roles: Array<{
      title: string;
      department: string;
      type: string;
      description: string;
    }>;
  };
  application: {
    heading: string;
    body: string;
    contactEmail: string;
  };
}

export const careersContent: CareersContent = {
  seo: {
    title: `Join Our Team | Careers at ${globalContent.clinicName}`,
    description: `Explore career opportunities at Naresh Dental Clinic in Patiala. We are always looking for passionate dental professionals and support staff.`,
  },
  hero: {
    headline: "Build Your Career With Us",
    subheadline: "Join Patiala’s leading dental practice. We are committed to fostering a culture of clinical excellence, continuous learning, and compassionate patient care.",
  },
  culture: {
    heading: "A Standard of Excellence",
    body: "Working at Naresh Dental Clinic means being part of a team that refuses to compromise on quality. Under the guidance of Dr. Anshum Gupta, our staff enjoys a state-of-the-art working environment, access to the latest dental technologies, and a supportive atmosphere that prioritizes both patient and employee well-being.",
  },
  benefits: [
    {
      title: "Advanced Technology Access",
      description: "Work daily with top-tier equipment, from digital scanners to rotary endodontics.",
    },
    {
      title: "Mentorship & Growth",
      description: "Benefit from continuous clinical mentorship and opportunities to expand your skill set.",
    },
    {
      title: "Pristine Environment",
      description: "Practice in a strictly sterilized, hygienic, and aesthetically beautiful clinic.",
    },
  ],
  openings: {
    heading: "Current Opportunities",
    noOpeningsMessage: "We do not have any open positions at this exact moment, but we are always eager to meet talented professionals.",
    roles: [
      {
        title: "Associate Dental Surgeon",
        department: "Clinical",
        type: "Full-time",
        description: "Looking for an experienced BDS/MDS with a strong foundation in general dentistry, particularly RCT and restorative procedures.",
      },
      {
        title: "Dental Hygienist / Assistant",
        department: "Clinical Support",
        type: "Full-time",
        description: "Seeking a detail-oriented professional to assist in four-handed dentistry and maintain our rigorous sterilization protocols.",
      },
      {
        title: "Front Desk Coordinator",
        department: "Administration",
        type: "Full-time",
        description: "The first point of contact for our patients. Requires excellent communication skills and an empathetic demeanor.",
      },
    ],
  },
  application: {
    heading: "How to Apply",
    body: "If you share our commitment to patient-first, high-quality dentistry, we want to hear from you. Please send your resume and a brief cover letter to our HR department.",
    contactEmail: "careers@nareshdental.com",
  },
};
