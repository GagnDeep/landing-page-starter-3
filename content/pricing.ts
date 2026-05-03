import { Meta } from './home';

export interface InsuranceLogo {
  name: string;
  imageAlt: string;
}

export interface PaymentOption {
  title: string;
  description: string;
}

export interface MembershipTier {
  name: string;
  price: string;
  period: string;
  benefits: string[];
}

export interface EstimateRow {
  service: string;
  startingPrice: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingContent {
  meta: Meta;
  hero: {
    headline: string;
    subheadline: string;
  };
  insurances: {
    headline: string;
    description: string;
    providers: InsuranceLogo[];
  };
  paymentOptions: {
    headline: string;
    options: PaymentOption[];
  };
  membership: {
    headline: string;
    description: string;
    tiers: MembershipTier[];
  };
  estimates: {
    headline: string;
    description: string;
    rows: EstimateRow[];
  };
  faq: {
    headline: string;
    questions: FaqItem[];
  };
  contactBilling: {
    headline: string;
    description: string;
    cta: string;
  };
}

export const pricingContent: PricingContent = {
  meta: {
    title: "Pricing & Insurance | Dr. Bansal’s Dental Care",
    description: "Transparent pricing and flexible payment options for dental care in Patiala. We accept most insurances and offer an affordable membership plan.",
  },
  hero: {
    headline: "Transparent Care, Clear Costs",
    subheadline: "We believe in honest conversations about your dental health and the cost of your care. No surprises.",
  },
  insurances: {
    headline: "Insurances Accepted",
    description: "We work with many major insurance providers to help maximize your benefits.",
    providers: [
      { name: "Star Health", imageAlt: "Star Health Insurance Logo" },
      { name: "HDFC ERGO", imageAlt: "HDFC ERGO Insurance Logo" },
      { name: "ICICI Lombard", imageAlt: "ICICI Lombard Insurance Logo" },
      { name: "Aditya Birla Health", imageAlt: "Aditya Birla Health Insurance Logo" }
    ]
  },
  paymentOptions: {
    headline: "Flexible Ways to Pay",
    options: [
      {
        title: "Credit & Debit Cards",
        description: "We accept all major Visa, Mastercard, and Rupay cards."
      },
      {
        title: "UPI & Digital Wallets",
        description: "Quick and contactless payments via GPay, PhonePe, and Paytm."
      },
      {
        title: "Easy EMI Options",
        description: "Flexible financing plans available for larger restorative or cosmetic treatments."
      }
    ]
  },
  membership: {
    headline: "No Insurance? No Problem.",
    description: "Join our in-house membership plan designed to make preventive care affordable and straightforward for individuals and families.",
    tiers: [
      {
        name: "Adult Preventive Plan",
        price: "₹1,999",
        period: "per year",
        benefits: [
          "2 Comprehensive Exams",
          "2 Professional Cleanings",
          "Digital X-Rays as needed",
          "15% off additional treatments"
        ]
      },
      {
        name: "Child Preventive Plan",
        price: "₹1,499",
        period: "per year (under 12)",
        benefits: [
          "2 Pediatric Exams",
          "2 Gentle Cleanings",
          "Fluoride Treatment",
          "15% off additional treatments"
        ]
      }
    ]
  },
  estimates: {
    headline: "Standard Fee Estimates",
    description: "While exact costs depend on your specific needs, here are starting prices for some of our most common procedures.",
    rows: [
      { service: "Comprehensive Exam & X-Rays", startingPrice: "₹500" },
      { service: "Professional Cleaning (Scaling)", startingPrice: "₹1,000" },
      { service: "Tooth-Colored Filling", startingPrice: "₹1,200" },
      { service: "Teeth Whitening", startingPrice: "₹5,000" },
      { service: "Single Dental Implant", startingPrice: "₹25,000" }
    ]
  },
  faq: {
    headline: "Financial Questions, Answered",
    questions: [
      {
        question: "Do you offer payment plans for larger treatments?",
        answer: "Yes, we partner with health financing providers to offer EMI options so you can get the care you need without financial stress."
      },
      {
        question: "Will you tell me the cost before starting treatment?",
        answer: "Absolutely. After your exam, we will provide a clear, written treatment plan including all estimated costs before any work begins."
      },
      {
        question: "Can I use my insurance for cosmetic procedures?",
        answer: "Most insurance plans cover preventive and restorative care, but generally do not cover purely cosmetic treatments. We can help verify your specific benefits."
      }
    ]
  },
  contactBilling: {
    headline: "Have questions about your coverage?",
    description: "Our patient coordinator is an expert at navigating insurance and will happily help you understand your benefits.",
    cta: "Contact Billing Support",
  }
};
