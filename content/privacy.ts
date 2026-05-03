import { Meta } from './home';
import { ContentSection } from './terms';

export interface PrivacyContent {
  meta: Meta;
  header: {
    title: string;
    lastUpdated: string;
  };
  intro: string;
  sections: ContentSection[];
  contact: {
    text: string;
    email: string;
  };
}

export const privacyContent: PrivacyContent = {
  meta: {
    title: "Privacy Policy | Dr. Bansal’s Dental Care",
    description: "Learn how Dr. Bansal’s Dental Care collects, uses, and protects your personal and medical information.",
  },
  header: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: October 2026",
  },
  intro: "Dr. Bansal’s Dental Care respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.",
  sections: [
    {
      heading: "1. Information We Collect",
      body: [
        "We may collect, use, store, and transfer different kinds of personal data about you, including:",
        "• Identity Data: First name, last name, title.",
        "• Contact Data: Email address, telephone numbers, postal address.",
        "• Health Data: Information you voluntarily provide regarding your dental health in appointment request forms.",
        "• Technical Data: IP address, browser type and version, time zone setting, and operating system."
      ]
    },
    {
      heading: "2. How We Use Your Information",
      body: [
        "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:",
        "• To schedule and manage your dental appointments.",
        "• To respond to your inquiries and provide customer support.",
        "• To send you administrative information, such as changes to our terms or policies.",
        "• To improve our website, services, and patient experience."
      ]
    },
    {
      heading: "3. Data Security",
      body: [
        "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. Access to your personal and health data is strictly limited to employees and contractors who have a business need to know and are subject to a duty of confidentiality."
      ]
    },
    {
      heading: "4. Third-Party Links",
      body: [
        "This website may include links to third-party websites, plug-ins, and applications (e.g., Google Maps). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements."
      ]
    },
    {
      heading: "5. Your Legal Rights",
      body: [
        "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, or erasure of your personal data."
      ]
    }
  ],
  contact: {
    text: "For any questions regarding this privacy policy or our privacy practices, please contact our Data Protection Officer at:",
    email: "privacy@drbansaldental.com",
  }
};
