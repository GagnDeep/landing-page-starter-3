import { SEOData, HeroSection } from './types';

export const aboutContent = {
  seo: {
    title: "About Us | Dr. Bansal's Dental Care Patiala",
    description: "Learn about our commitment to gentle, community-focused dental care in SST Nagar. Meet Dr. Himal Bansal and our dedicated team.",
  } as SEOData,

  hero: {
    title: "Our Story & Our Promise",
    subtitle: "Bringing world-class, compassionate dentistry to the heart of Patiala.",
    image: { alt: "The team at Dr. Bansal's Dental Care standing together" }
  } as HeroSection,

  originStory: {
    title: "A Neighbourhood Clinic with a Modern Vision",
    content: "Dr. Bansal's Dental Care was founded with a simple belief: going to the dentist shouldn't be an anxiety-inducing experience. We established our practice in SST Nagar to serve our local community with a higher standard of care—one that prioritizes patient comfort, transparent communication, and long-term oral health over quick fixes."
  },

  drBansalDeepDive: {
    title: "Meet Dr. Himal Bansal",
    credentials: "BDS, MDS (Conservative Dentistry & Endodontics)",
    bio: [
      "Dr. Himal Bansal is a passionate advocate for painless, conservative dentistry. With years of specialized training in Endodontics, his primary goal is to save your natural teeth whenever possible.",
      "He understands that many patients carry deep-seated fears about dental visits. His approach is rooted in empathy: he takes the time to explain every procedure, ensuring you feel completely in control of your treatment.",
      "Outside the clinic, Dr. Bansal is an active member of the Patiala community and enjoys educating local schools about pediatric oral hygiene."
    ],
    image: { alt: "Dr. Himal Bansal in his consulting room" }
  },

  team: {
    title: "Meet the Team",
    members: [
      {
        name: "Simran Kaur",
        role: "Lead Dental Hygienist",
        quote: "I love helping patients achieve that fresh, clean feeling after a thorough scaling. A healthy smile is the best confidence booster!"
      },
      {
        name: "Rahul Verma",
        role: "Patient Coordinator",
        quote: "My goal is to make sure your visit is smooth from the moment you walk in to the moment you leave, especially navigating insurance and billing."
      }
    ]
  },

  coreValues: {
    title: "What Drives Us",
    items: [
      { title: "Compassion", description: "We treat every patient like family, prioritizing your comfort above all else." },
      { title: "Integrity", description: "We only recommend treatments you actually need, with fully transparent pricing." },
      { title: "Excellence", description: "We continuously invest in our education and clinic technology to provide the best clinical outcomes." },
      { title: "Community", description: "We are proud to be a trusted healthcare partner for families in SST Nagar and beyond." }
    ]
  },

  facility: {
    title: "State-of-the-Art Facility",
    description: "We've equipped our clinic with the latest technology, including digital radiography that emits up to 90% less radiation than traditional X-rays, and advanced sterilization protocols that exceed industry standards to ensure your absolute safety."
  },

  community: {
    title: "Community Involvement",
    description: "We believe in giving back. We regularly host free dental check-up camps in local Patiala schools and participate in community health awareness drives."
  },

  finalCta: {
    title: "Join our patient family",
    cta: { label: "Schedule a Consultation", href: "/contact" }
  }
};
