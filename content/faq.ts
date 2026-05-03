import { SEOContent, HeroContent } from './types';

export const faqSEO: SEOContent = {
  title: "Frequently Asked Questions | Dentocare",
  description: "Find answers to common questions about dental treatments, appointments, and billing at Dentocare, Chandigarh.",
};

export const faqHero: HeroContent = {
  headline: "How Can We Help You?",
  subheadline: "Find quick answers to common questions about our services, clinic policies, and dental health.",
  primaryCTA: {
    label: "Still need help? Contact Us",
    href: "/contact",
  },
};

export const faqs = {
  general: [
    {
      question: "Are you accepting new patients?",
      answer: "Yes, we are always happy to welcome new patients and families to our practice in Sector 46C.",
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We generally recommend a routine check-up and cleaning every 6 months, though this may vary based on your individual oral health needs.",
    },
  ],
  treatments: [
    {
      question: "Do dental implants hurt?",
      answer: "The procedure is performed under local anesthesia, so you will not feel pain during the surgery. Mild discomfort during recovery is manageable with prescribed medication.",
    },
    {
      question: "What is the difference between Invisalign and braces?",
      answer: "Invisalign uses clear, removable aligners to straighten teeth, while traditional braces use fixed metal or ceramic brackets. Dr. Gaurav can recommend the best option during your consultation.",
    },
  ],
  billing: [
    {
      question: "Do you offer payment plans for expensive treatments?",
      answer: "Yes, we offer flexible EMI options for treatments like orthodontics and implants to make your care affordable.",
    },
  ],
};
