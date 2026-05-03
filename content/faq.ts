import { SEOData, HeroSection, SectionContent } from './types';

export const faqSEO: SEOData = {
  title: "Frequently Asked Questions | Smile Saviors Dental Clinic",
  description: "Find answers to common questions regarding appointments, treatments, billing, and our painless procedures."
};

export const faqHero: HeroSection = {
  headline: "How Can We Help?",
  subheadline: "Clear answers to your most common questions regarding treatments, clinic policies, and patient care.",
  primaryCTA: { label: "Contact Us Directly", href: "/contact" }
};

export const faqCategories = {
  treatments: [
    { question: "Is the implant procedure really painless?", answer: "Yes. We use advanced local anesthetics and precise surgical planning to ensure the procedure is virtually pain-free." },
    { question: "How long does a typical consultation take?", answer: "A comprehensive initial consultation usually takes about 45 minutes, allowing us time for thorough diagnostics and discussion." }
  ],
  clinic: [
    { question: "What are your sterilization protocols?", answer: "We exceed standard requirements by utilizing a dedicated sterilization center, medical-grade autoclaves, and strict single-use policies for all disposables." },
    { question: "Do you handle dental emergencies?", answer: "Yes, we reserve dedicated slots daily for urgent care. Please call our emergency line if you are experiencing severe pain or trauma." }
  ]
};

export const stillHaveQuestions: SectionContent = {
  heading: "Still have questions?",
  body: "Our patient care coordinators are ready to assist you with any specific inquiries you may have."
};