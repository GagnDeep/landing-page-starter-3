import { SEOMetadata, globalContent } from "./global";

export interface TermsContent {
  seo: SEOMetadata;
  header: {
    headline: string;
    lastUpdated: string;
  };
  sections: Array<{
    heading: string;
    body: string;
  }>;
}

export const termsContent: TermsContent = {
  seo: {
    title: `Terms of Service | ${globalContent.clinicName}`,
    description: `Read the Terms of Service for using the Naresh Dental Clinic website and understanding our patient policies.`,
  },
  header: {
    headline: "Terms of Service",
    lastUpdated: "Last Updated: October 2023",
  },
  sections: [
    {
      heading: "1. Acceptance of Terms",
      body: "By accessing and using the website of Naresh Dental Clinic and Implant Center, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this site.",
    },
    {
      heading: "2. Medical Disclaimer",
      body: "The content provided on this website, including text, graphics, and images, is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified health provider with any questions you may have regarding a medical condition.",
    },
    {
      heading: "3. Patient-Dentist Relationship",
      body: "Use of this website or communication via email/forms does not establish a patient-dentist relationship. Such a relationship is only established upon formal registration and clinical examination at our Patiala clinic.",
    },
    {
      heading: "4. Treatment Estimates",
      body: "Any pricing information provided on the website is indicative. A final, binding treatment plan and cost estimate can only be provided after a comprehensive physical examination and necessary radiographic investigations by Dr. Anshum Gupta.",
    },
    {
      heading: "5. Appointments and Cancellations",
      body: "We value your time and ask that you value ours. If you need to cancel or reschedule an appointment, please contact us at least 24 hours in advance to allow us to offer that time slot to another patient in need.",
    },
    {
      heading: "6. Intellectual Property",
      body: "All content, logos, and specific imagery on this website are the property of Naresh Dental Clinic and are protected by applicable copyright and trademark laws. Unauthorized use of this material is prohibited.",
    },
    {
      heading: "7. Governing Law",
      body: "These Terms shall be governed and construed in accordance with the laws of Punjab, India, without regard to its conflict of law provisions.",
    },
  ],
};
