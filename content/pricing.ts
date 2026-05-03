import { SEOMetadata, globalContent } from "./global";

export interface PricingContent {
  seo: SEOMetadata;
  hero: {
    headline: string;
    subheadline: string;
  };
  philosophy: {
    heading: string;
    body: string;
  };
  disclaimer: string;
  categories: Array<{
    title: string;
    items: Array<{
      service: string;
      price: string;
    }>;
  }>;
  insurance: {
    heading: string;
    body: string;
  };
  paymentMethods: {
    heading: string;
    methods: string[];
  };
}

export const pricingContent: PricingContent = {
  seo: {
    title: `Transparent Pricing | ${globalContent.clinicName}`,
    description: `Clear, upfront pricing for dental services in Patiala. Learn about the costs for consultations, implants, RCT, and accepted payment methods.`,
  },
  hero: {
    headline: "Transparent Financial Options",
    subheadline: "We believe that premium dental care should be accessible and financially predictable. No hidden fees, just honest care.",
  },
  philosophy: {
    heading: "Value Without Compromise",
    body: "At Naresh Dental Clinic, we utilize the highest grade materials and adhere strictly to international sterilization standards. Our pricing reflects our commitment to clinical excellence, longevity of treatment, and your absolute safety.",
  },
  disclaimer: "Please note: The prices listed below are starting estimates. Final treatment costs depend on the complexity of the case and specific anatomical requirements. A comprehensive quote will be provided during your consultation.",
  categories: [
    {
      title: "Consultation & Diagnostics",
      items: [
        { service: "Initial Clinical Consultation", price: "Starting at ₹500" },
        { service: "Digital X-Ray (RVG)", price: "Starting at ₹300" },
      ],
    },
    {
      title: "Preventative & Restorative",
      items: [
        { service: "Professional Scaling & Polishing", price: "Starting at ₹1,500" },
        { service: "Tooth-Colored Composite Fillings", price: "Starting at ₹1,200" },
        { service: "Painless Root Canal Treatment (RCT)", price: "Starting at ₹3,500" },
      ],
    },
    {
      title: "Surgical & Prosthetics",
      items: [
        { service: "Simple Tooth Extraction", price: "Starting at ₹1,000" },
        { service: "Painless Wisdom Tooth Removal", price: "Starting at ₹3,500" },
        { service: "Ceramic / Zirconia Crowns", price: "Starting at ₹4,000" },
        { service: "Premium Dental Implants", price: "Available upon consultation" },
      ],
    },
  ],
  insurance: {
    heading: "Insurance & Financing",
    body: "We assist with all necessary documentation for reimbursement from major health insurance providers. Flexible EMI options are available for extensive treatment plans, including full-mouth rehabilitations and implants. Please speak with our front desk to learn more.",
  },
  paymentMethods: {
    heading: "Accepted Payment Methods",
    methods: ["Cash", "Credit/Debit Cards (Visa, Mastercard)", "UPI / Google Pay", "Bank Transfer"],
  },
};
