import { SEOMetadata, globalContent } from "./global";

export interface FAQContent {
  seo: SEOMetadata;
  hero: {
    headline: string;
    subheadline: string;
  };
  contactTeaser: {
    heading: string;
    body: string;
    cta: string;
  };
  categories: Array<{
    title: string;
    questions: Array<{
      q: string;
      a: string;
    }>;
  }>;
}

export const faqContent: FAQContent = {
  seo: {
    title: `Frequently Asked Questions | ${globalContent.clinicName}`,
    description: `Find answers to common questions regarding dental treatments, implants, painless RCT, and appointment scheduling at our Patiala clinic.`,
  },
  hero: {
    headline: "Frequently Asked Questions",
    subheadline: "Clear, honest answers to help you feel confident and prepared for your dental visit.",
  },
  contactTeaser: {
    heading: "Still have questions?",
    body: "If you cannot find the answer you are looking for, our reception team is available via phone or WhatsApp to assist you.",
    cta: "Contact Us Directly",
  },
  categories: [
    {
      title: "General & Appointments",
      questions: [
        {
          q: "What are your clinic hours?",
          a: `We are open ${globalContent.hours}. We recommend booking an appointment in advance to minimize your wait time.`,
        },
        {
          q: "How often should I visit the dentist for a checkup?",
          a: "For optimal oral hygiene, we strongly recommend a professional cleaning and checkup every six months to catch any potential issues early.",
        },
      ],
    },
    {
      title: "Treatments & Procedures",
      questions: [
        {
          q: "Is the Root Canal Treatment (RCT) really painless?",
          a: "Yes. We use advanced local anesthetics and modern rotary endodontics. Most of our patients report that an RCT feels no different than getting a routine filling.",
        },
        {
          q: "What is involved in a wisdom tooth extraction?",
          a: "Dr. Anshum will first take an X-ray to assess the tooth's position. The procedure is performed under local anesthesia. You will be sent home with clear aftercare instructions to ensure a rapid, comfortable recovery.",
        },
        {
          q: "Are dental implants safe?",
          a: "Dental implants are considered the gold standard for tooth replacement. They are made from biocompatible titanium, boast a high success rate, and act just like a natural tooth root.",
        },
      ],
    },
    {
      title: "Financial & Insurance",
      questions: [
        {
          q: "Do you accept health insurance?",
          a: "While dental procedures are rarely entirely 'cashless' in India, we provide all necessary official documentation and itemized bills to help you claim reimbursement from your health insurance provider.",
        },
        {
          q: "Do you offer EMI options for extensive treatments?",
          a: "Yes, for comprehensive treatments like full-mouth implants or extensive cosmetic work, we can guide you toward third-party financing options to make payments manageable.",
        },
      ],
    },
  ],
};
