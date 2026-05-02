export interface MetaData {
  title: string;
  description: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface FAQContent {
  meta: MetaData;
  hero: HeroSection;
  categories: string[];
  faqs: FAQItem[];
  contactCtaHeading: string;
  contactCtaButton: string;
}

export const faqContent: FAQContent = {
  meta: {
    title: "FAQ | IKonic Beauty Salon",
    description: "Find answers to frequently asked questions regarding bridal makeup bookings, trials, and services at IKonic Beauty Salon."
  },
  hero: {
    headline: "Your Questions Answered",
    subheadline: "Clarity for Your Special Day."
  },
  categories: ["Booking", "Trials", "Bridal", "General"],
  faqs: [
    {
      question: "How far in advance should I book my bridal makeup?",
      answer: "We recommend booking 3 to 6 months in advance, especially if your wedding falls during the peak season (October to March), to ensure our lead artists are available.",
      category: "Booking"
    },
    {
      question: "Do you travel to the venue for makeup?",
      answer: "Yes, we offer on-location services for brides. Travel and accommodation charges (if applicable) will be added to your custom quote.",
      category: "Bridal"
    },
    {
      question: "Is a trial session included in the bridal package?",
      answer: "A trial is not included in the standard package but is highly recommended. It can be booked separately at a dedicated trial rate.",
      category: "Trials"
    },
    {
      question: "What is the difference between HD and Airbrush makeup?",
      answer: "HD makeup is manually applied to look flawless on high-definition cameras, while Airbrush makeup is sprayed on for a lightweight, long-lasting, water-resistant finish. Both are excellent; we will recommend the best based on your skin type.",
      category: "Bridal"
    },
    {
      question: "Do I need to bring my own hair extensions?",
      answer: "We can provide premium hair extensions for styling. If you prefer to use your own, please let us know during the consultation.",
      category: "General"
    }
  ],
  contactCtaHeading: "Still have questions? Reach out to our team.",
  contactCtaButton: "Contact Us"
};
