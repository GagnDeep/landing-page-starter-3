import { Meta } from './home';

export interface ContentSection {
  heading: string;
  body: string[];
}

export interface TermsContent {
  meta: Meta;
  header: {
    title: string;
    lastUpdated: string;
  };
  sections: ContentSection[];
  contact: {
    text: string;
    email: string;
  };
}

export const termsContent: TermsContent = {
  meta: {
    title: "Terms of Service | Dr. Bansal’s Dental Care",
    description: "Review the terms of service and conditions for using the Dr. Bansal’s Dental Care website.",
  },
  header: {
    title: "Terms of Service",
    lastUpdated: "Last Updated: October 2026",
  },
  sections: [
    {
      heading: "1. Acceptance of Terms",
      body: [
        "By accessing and using the website for Dr. Bansal’s Dental Care (the 'Site'), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Site."
      ]
    },
    {
      heading: "2. Medical Disclaimer",
      body: [
        "The content on this Site, including text, graphics, images, and information, is for general informational purposes only. It is not intended to be a substitute for professional medical or dental advice, diagnosis, or treatment.",
        "Always seek the advice of your dentist or other qualified health provider with any questions you may have regarding a medical or dental condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Site."
      ]
    },
    {
      heading: "3. Appointments and Cancellations",
      body: [
        "Appointments requested through the Site are subject to availability and confirmation by our clinic staff. We kindly request at least 24 hours' notice for appointment cancellations to allow us to offer the time slot to other patients."
      ]
    },
    {
      heading: "4. Intellectual Property",
      body: [
        "The Site and its original content, features, and functionality are owned by Dr. Bansal’s Dental Care and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."
      ]
    },
    {
      heading: "5. Modifications to Terms",
      body: [
        "We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of Service on this page. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms of Service."
      ]
    }
  ],
  contact: {
    text: "If you have any questions about these Terms, please contact us at:",
    email: "legal@drbansaldental.com",
  }
};
