import { SEO, Section } from './types';

export const seoMetadata: SEO = {
  title: "Frequently Asked Questions | Dentocare",
  description: "Find answers to common questions about appointments, dental procedures, emergencies, and billing at Dentocare Chandigarh.",
  keywords: ["dentist faq", "dental emergencies", "booking dentist chandigarh", "dentocare questions"]
};

export const heroSection = {
  headline: "Frequently Asked Questions",
  subheadline: "We are committed to transparency. Find answers to common queries regarding our services, procedures, and clinic policies."
};

export const faqCategories = [
  {
    category: "General & Appointments",
    items: [
      {
        question: "Are you accepting new patients?",
        answer: "Yes, we are always happy to welcome new patients to the Dentocare family. You can book an appointment online or call our clinic."
      },
      {
        question: "Do you handle dental emergencies?",
        answer: "Absolutely. We offer 24/7 emergency dental care. If you are experiencing severe pain, swelling, or trauma, please contact us immediately."
      }
    ]
  },
  {
    category: "Procedures & Care",
    items: [
      {
        question: "Is the implant procedure painful?",
        answer: "No. Dr. Gaurav uses advanced local anesthesia and modern surgical techniques to ensure the implant procedure is virtually painless."
      },
      {
        question: "At what age should my child first see a dentist?",
        answer: "We recommend a child's first dental visit by their first birthday, or when their first tooth erupts, to establish a preventive care routine early."
      }
    ]
  }
];

export const ctaSection = {
  headline: "Still have questions?",
  subheadline: "Our friendly team is here to help.",
  cta: { label: "Contact Us", href: "/contact" }
};
