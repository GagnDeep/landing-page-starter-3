export interface MetaData {
  title: string;
  description: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
}

export interface CultureSection {
  heading: string;
  body: string;
}

export interface Position {
  title: string;
  type: string;
  description: string;
}

export interface CareersContent {
  meta: MetaData;
  hero: HeroSection;
  culture: CultureSection;
  positionsHeading: string;
  positions: Position[];
  applicationCtaHeading: string;
  applicationCtaButton: string;
}

export const careersContent: CareersContent = {
  meta: {
    title: "Careers | Join IKonic Beauty Salon",
    description: "Build your career in high-end bridal makeup and hair artistry. Join the elite team at IKonic Beauty Salon in Patiala."
  },
  hero: {
    headline: "Join the IKonic Team.",
    subheadline: "Where passion meets artistry in a luxurious environment."
  },
  culture: {
    heading: "Why Work With Us",
    body: "At IKonic, we foster a culture of continuous learning and artistic excellence. We believe in empowering our artists, using only the best products, and delivering an unforgettable experience to every client."
  },
  positionsHeading: "Open Positions",
  positions: [
    {
      title: "Senior Makeup Artist",
      type: "Full-time",
      description: "Looking for an experienced artist specializing in HD and Airbrush bridal makeup."
    },
    {
      title: "Hair Styling Assistant",
      type: "Full-time",
      description: "Assist our lead hair stylists and learn modern, architectural hair techniques."
    },
    {
      title: "Front Desk Coordinator",
      type: "Part-time",
      description: "Be the face of our studio. Exceptional communication and organizational skills required."
    }
  ],
  applicationCtaHeading: "Ready to elevate your craft?",
  applicationCtaButton: "Send Your Portfolio"
};
