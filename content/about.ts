export interface MetaData {
  title: string;
  description: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
}

export interface PhilosophySection {
  heading: string;
  body: string;
}

export interface StudioExperience {
  heading: string;
  description: string;
}

export interface FounderSection {
  heading: string;
  body: string;
  name: string;
}

export interface TeamMember {
  name: string;
  role: string;
  quote: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface ValuesSection {
  heading: string;
  values: Value[];
}

export interface AboutContent {
  meta: MetaData;
  hero: HeroSection;
  philosophy: PhilosophySection;
  studio: StudioExperience;
  founder: FounderSection;
  teamHeading: string;
  team: TeamMember[];
  values: ValuesSection;
  finalCta: string;
}

export const aboutContent: AboutContent = {
  meta: {
    title: "About IKonic Beauty | Our Story & Artists",
    description: "Learn about the passionate team behind Patiala's leading beauty salon. Discover our philosophy, luxurious studio, and premium makeup artistry."
  },
  hero: {
    headline: "Crafting Elegance Since 2015",
    subheadline: "A journey defined by passion, precision, and the pursuit of perfect beauty."
  },
  philosophy: {
    heading: "Our Philosophy",
    body: "At IKonic Beauty Salon, we view makeup as an art form that enhances, rather than masks, your natural beauty. Our goal is to empower every client with confidence through meticulous artistry and a deeply personalized experience."
  },
  studio: {
    heading: "The Studio Experience",
    description: "Located on the vibrant Bhadson Road in Patiala, our studio is a luxurious retreat. Designed to soothe and pamper, every detail is curated to ensure you feel relaxed and radiant."
  },
  founder: {
    heading: "Meet the Founder",
    body: "With a lifelong passion for transformative beauty, Harpreet established IKonic to bring world-class makeup artistry to Patiala. Her extensive training and artistic vision have set the standard for bridal elegance in the region.",
    name: "Harpreet"
  },
  teamHeading: "The Artisans",
  team: [
    { name: "Harpreet", role: "Founder & Lead Artist", quote: "My canvas is your confidence." },
    { name: "Suman", role: "Senior Bridal Expert", quote: "Elegance is in the details." },
    { name: "Nandini", role: "Hair Styling Specialist", quote: "Every strand tells a story." }
  ],
  values: {
    heading: "Our Promise",
    values: [
      { title: "Impeccable Hygiene", description: "Strict sanitation protocols for your safety and peace of mind." },
      { title: "Premium Products", description: "Exclusive use of global luxury brands like MAC, Huda Beauty, and Charlotte Tilbury." },
      { title: "Timeless Techniques", description: "Constantly refining our craft to deliver modern, enduring looks." }
    ]
  },
  finalCta: "Experience the IKonic Touch"
};
