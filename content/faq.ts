import { Meta } from './home';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  questions: FaqItem[];
}

export interface FaqContent {
  meta: Meta;
  hero: {
    headline: string;
    subheadline: string;
    searchPlaceholder: string;
  };
  categories: FaqCategory[];
  contact: {
    headline: string;
    description: string;
    phoneText: string;
    emailText: string;
  };
  finalCta: {
    headline: string;
    cta: string;
  };
}

export const faqContent: FaqContent = {
  meta: {
    title: "Frequently Asked Questions | Dr. Bansal’s Dental Care",
    description: "Find answers to common questions about dental treatments, appointments, insurance, and what to expect at Dr. Bansal’s Dental Care.",
  },
  hero: {
    headline: "How can we help you?",
    subheadline: "Find quick answers to common questions about our clinic, treatments, and billing.",
    searchPlaceholder: "Search for a question...",
  },
  categories: [
    {
      title: "General & Appointments",
      questions: [
        {
          question: "Are you accepting new patients?",
          answer: "Yes, we are always happy to welcome new patients to our clinic. You can book an appointment online or call us directly."
        },
        {
          question: "What are your clinic hours?",
          answer: "We are open Monday through Friday from 9:00 AM to 7:00 PM, and Saturday from 9:00 AM to 2:00 PM. We are closed on Sundays."
        },
        {
          question: "What is your cancellation policy?",
          answer: "We kindly ask for at least 24 hours' notice if you need to cancel or reschedule your appointment so we can offer that time to another patient in need."
        }
      ]
    },
    {
      title: "Treatments & Care",
      questions: [
        {
          question: "Does getting a filling hurt?",
          answer: "Not at all. We use modern, gentle numbing techniques and offer a comfort menu to ensure you feel absolutely no pain during restorative procedures."
        },
        {
          question: "How often should I get my teeth cleaned?",
          answer: "For most patients, we recommend a professional cleaning and checkup every six months. However, if you have gum disease or other conditions, we may suggest more frequent visits."
        },
        {
          question: "Do you treat children?",
          answer: "Yes! We provide gentle, friendly pediatric care and aim to make the dentist a fun, positive experience for kids."
        }
      ]
    },
    {
      title: "Billing & Insurance",
      questions: [
        {
          question: "Do you accept my insurance?",
          answer: "We accept most major insurance plans. Please bring your insurance card to your first visit, and our patient coordinator will help verify your benefits."
        },
        {
          question: "What if I don't have dental insurance?",
          answer: "We offer an affordable in-house membership plan that covers all your preventive care for the year, plus discounts on additional treatments."
        }
      ]
    }
  ],
  contact: {
    headline: "Still have questions?",
    description: "Our friendly team is here to help clarify any doubts you might have.",
    phoneText: "Call us at +91 98765 43210",
    emailText: "Email hello@drbansaldental.com",
  },
  finalCta: {
    headline: "Ready to schedule your visit?",
    cta: "Book Appointment",
  }
};
