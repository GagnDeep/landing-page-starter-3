import { SEOMetadata, globalContent } from "./global";

export interface PrivacyContent {
  seo: SEOMetadata;
  header: {
    headline: string;
    lastUpdated: string;
  };
  intro: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
}

export const privacyContent: PrivacyContent = {
  seo: {
    title: `Privacy Policy | ${globalContent.clinicName}`,
    description: `Understand how Naresh Dental Clinic protects your personal data and health information.`,
  },
  header: {
    headline: "Privacy Policy",
    lastUpdated: "Last Updated: October 2023",
  },
  intro: "At Naresh Dental Clinic and Implant Center, we take your privacy and the security of your health information very seriously. This policy outlines how we collect, use, and protect your data.",
  sections: [
    {
      heading: "1. Information We Collect",
      body: "We collect information you provide directly to us, such as when you fill out an online contact form, request an appointment, or communicate with us. This may include your name, phone number, email address, and any preliminary dental symptoms you choose to share. In-clinic, we collect necessary Protected Health Information (PHI) required for your treatment.",
    },
    {
      heading: "2. How We Use Your Information",
      body: "Your information is used strictly to provide you with high-quality dental care. This includes scheduling appointments, contacting you regarding your treatment plan, processing billing and insurance claims, and sending appointment reminders.",
    },
    {
      heading: "3. Information Sharing",
      body: "We do not sell, trade, or rent your personal identification information to others. We may share necessary medical information with specialist doctors or dental laboratories (e.g., for fabricating crowns/implants) only as required for your direct treatment, and with your consent.",
    },
    {
      heading: "4. Data Security",
      body: "We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and health records stored on our digital systems.",
    },
    {
      heading: "5. Website Cookies",
      body: "Our website may use 'cookies' to enhance user experience and analyze site traffic. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.",
    },
    {
      heading: "6. Your Rights",
      body: "You have the right to request access to your personal and medical records held by our clinic. You may also request corrections to any inaccurate information.",
    },
    {
      heading: "7. Contacting Us",
      body: `If you have any questions about this Privacy Policy or how we handle your data, please contact us at ${globalContent.email} or call our reception.`,
    },
  ],
};
