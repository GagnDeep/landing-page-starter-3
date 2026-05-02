export interface MetaData {
  title: string;
  description: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface SocialProof {
  text: string;
  rating: string;
  reviewCount: number;
}

export interface IntroSection {
  heading: string;
  body: string;
  signOff: string;
}

export interface ServicePillar {
  title: string;
  description: string;
}

export interface SignaturePackage {
  title: string;
  description: string;
  features: string[];
}

export interface FounderQuote {
  quote: string;
  author: string;
}

export interface TimelineStep {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface AwardsSection {
  title: string;
  awards: string[];
}

export interface StudioInfo {
  heading: string;
  address: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface HomeContent {
  meta: MetaData;
  hero: HeroSection;
  socialProof: SocialProof;
  intro: IntroSection;
  services: ServicePillar[];
  signaturePackage: SignaturePackage;
  portfolioCta: string;
  founderQuote: FounderQuote;
  testimonial: Testimonial;
  timeline: TimelineStep[];
  awards: AwardsSection;
  studio: StudioInfo;
  faqTeaserHeading: string;
  team: TeamMember[];
  instagramText: string;
  newsletterCta: string;
  finalCtaHeading: string;
  finalCtaButton: string;
}

export const homeContent: HomeContent = {
  meta: {
    title: "IKonic Beauty Salon | Premier Bridal Makeup in Patiala",
    description: "Discover high-end bridal, engagement, and party makeup at IKonic Beauty Salon on Bhadson Road, Patiala. Experience our 4.9-star rated luxury artistry."
  },
  hero: {
    headline: "Your Perfect Day, Perfectly Sculpted.",
    subheadline: "Where professional artistry meets the grace of bridal beauty.",
    primaryCta: "Reserve Your Date",
    secondaryCta: "Explore our gallery"
  },
  socialProof: {
    text: "Trusted by elite brides across Patiala.",
    rating: "4.9",
    reviewCount: 350
  },
  intro: {
    heading: "The IKonic Difference",
    body: "We believe that true beauty is deeply personal. Our tailored approach ensures that your vision is realized with precision, using only the world's finest cosmetics to craft a look that is timeless, elegant, and uniquely yours.",
    signOff: "With love, The IKonic Team"
  },
  services: [
    { title: "Bridal Makeup", description: "Flawless, long-lasting glamour for your most important day." },
    { title: "Engagement Looks", description: "Soft, glowing elegance tailored to pre-wedding celebrations." },
    { title: "Party Glam", description: "Striking, high-energy artistry that turns heads." },
    { title: "Hair Artistry", description: "Intricate, architectural styling from classic buns to modern waves." }
  ],
  signaturePackage: {
    title: "The Signature Bridal Experience",
    description: "An exclusive, all-encompassing package designed for the discerning bride.",
    features: ["HD/Airbrush Makeup", "Premium Hair Styling", "Pre-event Skin Prep", "Luxury Lashes & Draping"]
  },
  portfolioCta: "View Full Gallery",
  founderQuote: {
    quote: "We don't just apply makeup; we craft the confidence you wear down the aisle.",
    author: "Harpreet, Founder & Lead Artist"
  },
  testimonial: {
    quote: "The team at IKonic made me feel like absolute royalty. The makeup lasted flawlessly through all the tears and dancing!",
    author: "Simran K., IKonic Bride"
  },
  timeline: [
    { title: "Consultation", description: "Discuss your vision and style preferences." },
    { title: "Trial Session", description: "Perfect the look before the big day." },
    { title: "Skin Prep", description: "Luxury treatments for a glowing canvas." },
    { title: "The Big Day", description: "Relax as our experts bring your vision to life." }
  ],
  awards: {
    title: "Recognized Excellence",
    awards: ["Voted #1 Bridal Studio 2023 - Patiala", "Excellence in Artistry - Punjab Beauty Awards"]
  },
  studio: {
    heading: "A Sanctuary of Beauty",
    address: "Bhadson Road, Patiala",
    description: "Step into our luxurious studio, designed to offer a serene and premium experience."
  },
  faqTeaserHeading: "Common Questions",
  team: [
    { name: "Harpreet", role: "Founder & Lead Artist" },
    { name: "Suman", role: "Senior Bridal Expert" },
    { name: "Nandini", role: "Hair Styling Specialist" }
  ],
  instagramText: "Follow the glamour @ikonicbeauty",
  newsletterCta: "Receive our Bridal Prep Guide",
  finalCtaHeading: "Ready to be an IKonic Bride?",
  finalCtaButton: "Book Your Consultation Now"
};
