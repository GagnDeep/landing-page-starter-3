import { SEOContent, CTA } from './types';

export const faqContent = {
  seo: {
    title: "Frequently Asked Questions | Amil's Hair Lounge",
    description: "Got questions about our treatments, booking process, or salon policies? Find all the answers you need before your visit to Amil's Hair Lounge."
  } as SEOContent,
  hero: {
    headline: "Frequently Asked Questions",
    subheading: "Everything you need to know about your visit."
  },
  categories: [
    {
      title: "Treatments & Services",
      questions: [
        {
          q: "What is the difference between Hair Botox and Keratin?",
          a: "Hair Botox is a deep conditioning treatment that reconstructs the hair shaft, making it ideal for highly damaged hair. Keratin is a smoothing treatment that replenishes protein to eliminate frizz and straighten the hair. During your consultation, we'll recommend the best option for your hair type."
        },
        {
          q: "Are your color products safe for sensitive scalps?",
          a: "Yes. We use premium, low-ammonia, and ammonia-free options from brands like L'Oréal Professionnel. If you have known sensitivities, please inform us so we can perform a patch test prior to your service."
        },
        {
          q: "How long does a Balayage appointment take?",
          a: "Balayage is a highly customized, multi-step process. Depending on your hair length, thickness, and desired result, appointments typically range from 3 to 5 hours."
        }
      ]
    },
    {
      title: "Booking & Policies",
      questions: [
        {
          q: "Do I need to make an appointment, or do you accept walk-ins?",
          a: "While we do accommodate walk-ins if scheduling permits, we highly recommend booking in advance—especially for color and chemical treatments—to ensure we have dedicated time for your service."
        },
        {
          q: "What is your cancellation policy?",
          a: "We kindly request at least 24 hours' notice for cancellations or rescheduling. This allows us to offer the slot to another client."
        }
      ]
    },
    {
      title: "Amil's Academy",
      questions: [
        {
          q: "Do I need prior experience to join the academy courses?",
          a: "We offer courses for all levels. Our Foundation Course is perfect for beginners, while our Masterclasses are designed for experienced stylists looking to refine advanced techniques."
        }
      ]
    }
  ],
  contactCTA: {
    headline: "Still have questions?",
    description: "Our team is here to help. Reach out to us directly.",
    cta: { label: "Contact Us", href: "/contact" } as CTA
  }
};
