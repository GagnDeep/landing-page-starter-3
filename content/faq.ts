import { SEOData, NoticeBarData } from "./types";

export const seo: SEOData = {
  title: "Frequently Asked Questions | Dentistree Chandigarh",
  description: "Find answers to common questions about pediatric dentistry, orthodontics, invisible aligners, billing, and what to expect during your visit.",
};

export const noticeBar: NoticeBarData = {
  text: "Can't find your answer? Our team is available via WhatsApp.",
  cta: { label: "Message Us", href: "/contact" }
};

export const hero = {
  headline: "Frequently Asked Questions",
  subheadline: "We believe in clear communication. Find answers to common queries regarding our services, policies, and treatments.",
  searchPlaceholder: "Search for a question..."
};

export const categories = [
  { id: "general", label: "General Clinic Questions" },
  { id: "pediatric", label: "Pediatric Care" },
  { id: "orthodontics", label: "Orthodontics & Aligners" },
  { id: "billing", label: "Billing & Insurance" },
  { id: "anxiety", label: "Dental Anxiety & Comfort" }
];

export const generalFaq = {
  id: "general",
  title: "General Clinic Questions",
  questions: [
    {
      question: "Where is the clinic located?",
      answer: "Dentistree is conveniently located in Sector 22B, Chandigarh. We have ample parking available near the entrance."
    },
    {
      question: "What are your operating hours?",
      answer: "We are open Monday through Saturday from 9:30 AM to 7:30 PM. We are closed on Sundays."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, your insurance information (if applicable), and any previous dental records or x-rays you might have."
    }
  ]
};

export const pediatricFaq = {
  id: "pediatric",
  title: "Pediatric Care",
  questions: [
    {
      question: "At what age should my child first visit the dentist?",
      answer: "The American Academy of Pediatric Dentistry recommends that a child visit the dentist by their first birthday, or within six months of their first tooth erupting."
    },
    {
      question: "Are dental x-rays safe for children?",
      answer: "Yes. We use advanced digital x-rays that emit extremely low levels of radiation—much less than traditional x-rays. We only take them when clinically necessary."
    },
    {
      question: "How do you handle uncooperative or scared children?",
      answer: "Dr. Isha specializes in pediatric behavior management. We use a 'tell-show-do' approach, gentle language, and a fun environment to ease their fears. We also offer safe, mild sedation options if needed."
    }
  ]
};

export const orthodonticsFaq = {
  id: "orthodontics",
  title: "Orthodontics & Aligners",
  questions: [
    {
      question: "How long does invisible aligner treatment take?",
      answer: "Treatment times vary depending on the complexity of the case, but most adult treatments are completed within 6 to 18 months."
    },
    {
      question: "Do invisible aligners hurt?",
      answer: "You may experience mild pressure or discomfort for the first day or two after switching to a new set of aligners, but they are generally much more comfortable than traditional braces."
    },
    {
      question: "Can I eat with my aligners in?",
      answer: "No. You must remove your aligners before eating or drinking anything other than plain water. This prevents staining and damage to the plastic."
    }
  ]
};

export const billingFaq = {
  id: "billing",
  title: "Billing & Insurance",
  questions: [
    {
      question: "Do you accept my insurance?",
      answer: "We work with most major dental insurance providers. Please contact our front desk with your policy details, and we will verify your coverage before your appointment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI payments, and cash."
    }
  ]
};

export const anxietyFaq = {
  id: "anxiety",
  title: "Dental Anxiety & Comfort",
  questions: [
    {
      question: "I have severe dental anxiety. What are my options?",
      answer: "You are not alone. We offer a completely judgment-free environment. We provide numbing gels, highly localized anesthetics, and sedation options like nitrous oxide (laughing gas) to ensure you are entirely relaxed."
    }
  ]
};

export const contactBox = {
  title: "Still have questions?",
  description: "Our friendly team is here to help. Reach out directly.",
  cta: { label: "Contact Us", href: "/contact" }
};
