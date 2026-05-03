import { SEOData, HeroSection, SectionContent, FeatureItem } from './types';

export const aboutSEO: SEOData = {
  title: "About Us | Smile Saviors Dental Clinic",
  description: "Learn about our commitment to painless, hygienic, and expert dental care in Patiala."
};

export const aboutHero: HeroSection = {
  headline: "A Legacy of Trust and Precision",
  subheadline: "For over two decades, we have set the benchmark for clinical excellence and patient comfort in Patiala.",
  primaryCTA: { label: "Meet the Team", href: "#team" }
};

export const ourStory: SectionContent = {
  heading: "Our Story",
  body: "Founded with a vision to eliminate the fear associated with dentistry, Smile Saviors was built on three pillars: uncompromising hygiene, advanced technology, and genuine compassion. We designed our clinic not as a traditional hospital, but as a serene studio dedicated to your well-being."
};

export const coreValues: { heading: string; values: FeatureItem[] } = {
  heading: "Our Philosophy",
  values: [
    { title: "Painless Care", description: "Utilizing modern anesthetics and refined techniques to ensure absolute comfort." },
    { title: "Impeccable Hygiene", description: "Adhering to international sterilization standards for your absolute safety." },
    { title: "Expert Precision", description: "Leveraging 3D imaging and digital workflows for flawless results." }
  ]
};

export const clinicExperience: SectionContent = {
  heading: "The Clinic Experience",
  body: "From the moment you walk through our doors, you are treated to a calming, premium environment. Our state-of-the-art operatories and dedicated sterilization center reflect our commitment to your health and peace of mind."
};