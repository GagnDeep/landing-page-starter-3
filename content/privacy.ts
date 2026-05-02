export interface MetaData {
  title: string;
  description: string;
}

export interface HeroSection {
  headline: string;
}

export interface Section {
  heading: string;
  content: string;
}

export interface PrivacyContent {
  meta: MetaData;
  hero: HeroSection;
  sections: Section[];
  lastUpdated: string;
}

export const privacyContent: PrivacyContent = {
  meta: {
    title: "Privacy Policy | IKonic Beauty Salon",
    description: "Learn how IKonic Beauty Salon collects and protects your personal information."
  },
  hero: {
    headline: "Privacy Policy"
  },
  sections: [
    {
      heading: "1. Information Collection",
      content: "We collect information you provide directly to us when you fill out a contact form, book a service, or sign up for our newsletter. This includes your name, email address, phone number, and event details."
    },
    {
      heading: "2. Use of Information",
      content: "The information we collect is used solely to provide and improve our services, communicate with you regarding your bookings, and send marketing communications if you have opted in."
    },
    {
      heading: "3. Information Sharing",
      content: "We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information."
    },
    {
      heading: "4. Photography & Social Media",
      content: "We may ask for permission to take photos of your final look for our portfolio and social media. You have the right to decline, and we will always respect your privacy."
    }
  ],
  lastUpdated: "Last updated: October 2023"
};
