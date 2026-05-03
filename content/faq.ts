import { SEOData, HeroSection } from './types';

export const faqContent = {
  seo: {
    title: "Frequently Asked Questions | Dr. Bansal's Dental Care",
    description: "Find answers to common questions about dental visits, treatments, insurance, and emergencies at our Patiala clinic.",
  } as SEOData,

  hero: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know to feel comfortable and prepared for your visit.",
  } as HeroSection,

  searchPlaceholder: "Search for a question...",

  categories: [
    {
      title: "First Visit & General Info",
      items: [
        {
          question: "How do I book an appointment?",
          answer: "You can book an appointment by calling us directly at +91 98765 43210, messaging us on WhatsApp, or using the booking form on our Contact page."
        },
        {
          question: "What should I bring to my first appointment?",
          answer: "Please bring any previous dental X-rays if you have them, a list of current medications, and your insurance information if applicable."
        },
        {
          question: "How long does a routine cleaning and check-up take?",
          answer: "A standard comprehensive exam, scaling, and polishing usually takes about 45 minutes to an hour."
        }
      ]
    },
    {
      title: "Treatments & Pain Management",
      items: [
        {
          question: "I have extreme dental anxiety. How can you help?",
          answer: "We specialize in treating anxious patients. Our clinic environment is designed to be calming. We explain every step, allow you to listen to music, and ensure the area is completely numb before beginning any work. You are always in control and can ask us to pause at any time."
        },
        {
          question: "Are dental X-rays safe?",
          answer: "Yes. We use advanced digital X-ray technology that emits up to 90% less radiation than traditional film X-rays, making it incredibly safe."
        },
        {
          question: "How long do tooth-colored fillings last?",
          answer: "With proper oral hygiene and regular check-ups, composite resin fillings can last anywhere from 5 to 10 years or more."
        }
      ]
    },
    {
      title: "Emergencies",
      items: [
        {
          question: "What counts as a dental emergency?",
          answer: "Severe toothaches, a knocked-out tooth, a cracked or broken tooth causing pain, or swelling in the gums/face are all emergencies. Please call us immediately."
        },
        {
          question: "Do you offer same-day emergency appointments?",
          answer: "Yes, we always reserve buffer time in our daily schedule specifically to handle urgent dental emergencies."
        }
      ]
    }
  ],

  finalCta: {
    title: "Can't find the answer you're looking for?",
    subtitle: "Our friendly team is happy to help.",
    cta: { label: "Contact Us", href: "/contact" }
  }
};
