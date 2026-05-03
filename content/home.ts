import { SeoMetadata, CtaData, Testimonial, SectionContent } from "./types"

export const homeSeo: SeoMetadata = {
  title: "Spacedent Dental Clinic | Gentle, High-Tech Care in Patiala",
  description:
    "Experience modern, painless dentistry at Spacedent in Patiala. Specializing in single-sitting RCT and gentle pediatric care by Dr. Vikramjit and Dr. Arshiya.",
}

export const homeHero = {
  headline: "Modern Dentistry, Designed for Comfort",
  subheading:
    "Experience a new standard of dental care in Patiala. From painless single-sitting root canals to gentle pediatric dentistry, we combine advanced technology with a welcoming touch.",
  primaryCta: { label: "Book an Appointment", href: "/contact" } as CtaData,
  secondaryCta: { label: "Explore Our Services", href: "/features" } as CtaData,
}

export const homeValueProposition: SectionContent = {
  headline: "Gentle, Technology-Driven Care",
  body: "At Spacedent, we believe visiting the dentist should be a calm, positive experience. We've moved away from sterile clinical environments to create a space that feels warm and reassuring, using state-of-the-art technology to ensure your treatments are efficient and painless.",
}

export const homeSpecialtyRct = {
  headline: "Single-Sitting Root Canals",
  body: "Led by Dr. Vikramjit, our endodontic specialists use advanced 3D imaging and rotary instruments to complete root canal treatments in just one comfortable visit. No more multiple appointments or prolonged discomfort.",
  cta: { label: "Learn About RCT", href: "/features#rct" } as CtaData,
}

export const homeSpecialtyPediatric = {
  headline: "Gentle Pediatric Care",
  body: "Dr. Arshiya and our team understand that early dental experiences shape a lifetime of oral health. We provide a fun, anxiety-free environment specifically tailored to make children feel safe and excited about their smiles.",
  cta: { label: "Pediatric Services", href: "/features#pediatric" } as CtaData,
}

export const homeServicesGrid = [
  {
    title: "Clear Aligners",
    description:
      "Discreet, comfortable orthodontic treatment for a perfect smile.",
    href: "/features#aligners",
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions for missing teeth.",
    href: "/features#implants",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, whitening, and smile makeovers tailored to you.",
    href: "/features#cosmetic",
  },
  {
    title: "Preventive Care",
    description: "Comprehensive exams, cleanings, and oral health education.",
    href: "/features#preventive",
  },
]

export const homeTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya S.",
    quote:
      "I was terrified of getting a root canal, but Dr. Vikramjit completed it in one sitting with zero pain. The clinic doesn't even feel like a typical hospital—it's so calming.",
  },
  {
    id: "t2",
    name: "Rahul M.",
    quote:
      "My 5-year-old actually looks forward to visiting Dr. Arshiya. They are so incredibly patient and gentle with kids. Highly recommend for families!",
  },
  {
    id: "t3",
    name: "Anita K.",
    quote:
      "State-of-the-art technology and a team that genuinely cares. The clear aligner process was smooth and the results are amazing.",
  },
]

export const homeFaqSnippet = [
  {
    question: "Is a single-sitting RCT really possible?",
    answer:
      "Yes! Using advanced rotary endodontics and 3D imaging, Dr. Vikramjit can thoroughly clean and seal the tooth in a single, comfortable appointment in most cases.",
  },
  {
    question: "At what age should I bring my child for their first visit?",
    answer:
      "We recommend scheduling their first visit by their first birthday or within six months of their first tooth erupting. Early visits help build a positive relationship with the dentist.",
  },
]

export const homeFinalCta: SectionContent = {
  headline: "Ready to Transform Your Smile?",
  subheading:
    "Join the Spacedent family and experience dentistry that puts your comfort first.",
  cta: { label: "Schedule Your Visit Today", href: "/contact" } as CtaData,
}
