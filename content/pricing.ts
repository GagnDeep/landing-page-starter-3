import { SeoMetadata, SectionContent } from "./types"

export const pricingSeo: SeoMetadata = {
  title: "Pricing & Insurance | Spacedent Dental Clinic",
  description:
    "Transparent, accessible pricing for premium dental care in Patiala. View our treatment estimates and accepted insurance plans.",
}

export const pricingHero: SectionContent = {
  headline: "Transparent, Accessible Care",
  subheading:
    "We believe that financial surprises should never stand in the way of your oral health. Our pricing is straightforward, competitive, and clearly communicated before any treatment begins.",
}

export const pricingCategories = [
  {
    category: "Consultation & Diagnostics",
    items: [
      {
        name: "Comprehensive Oral Examination",
        price: "Contact us for pricing",
      },
      { name: "Digital X-Rays (IOPA)", price: "Contact us for pricing" },
      { name: "Pediatric Consultation", price: "Contact us for pricing" },
    ],
  },
  {
    category: "Specialized Treatments",
    items: [
      { name: "Single-Sitting RCT", price: "Starting from ₹X,XXX" },
      { name: "Dental Implants", price: "Starting from ₹XX,XXX" },
      { name: "Clear Aligners", price: "Custom quote based on treatment plan" },
    ],
  },
  {
    category: "Preventive & Routine",
    items: [
      {
        name: "Professional Scaling & Polishing",
        price: "Starting from ₹X,XXX",
      },
      { name: "Pediatric Fluoride Treatment", price: "Starting from ₹X,XXX" },
      { name: "Tooth-Colored Fillings", price: "Starting from ₹X,XXX" },
    ],
  },
]

export const insuranceInfo: SectionContent = {
  headline: "Insurance & Financing",
  body: "We partner with major health insurance providers to help you maximize your benefits. Our front desk team will assist you with claim submissions and paperwork. For larger treatment plans like implants or aligners, we offer flexible EMI options to make your care affordable.",
}
