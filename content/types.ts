export interface SEOData {
  title: string;
  description: string;
}

export interface LinkData {
  label: string;
  href: string;
}

export interface ImageData {
  alt: string;
  src?: string; // Will be populated later
}

// Global Types
export interface GlobalData {
  contact: {
    address: string;
    phone: string;
    emergencyPhone: string;
    email: string;
    mapUrl: string;
  };
  hours: {
    day: string;
    time: string;
  }[];
  socials: LinkData[];
  navigation: {
    main: LinkData[];
    footer: { title: string; links: LinkData[] }[];
  };
  globalCtas: {
    bookAppointment: string;
    callNow: string;
  };
}

// Reusable Section Types
export interface HeroSection {
  title: string;
  subtitle: string;
  primaryCta?: LinkData;
  secondaryCta?: LinkData;
  image?: ImageData;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}
