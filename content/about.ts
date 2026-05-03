import { Meta } from './home';

export interface StaffMember {
  name: string;
  role: string;
  bio: string;
  imageAlt: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface AboutContent {
  meta: Meta;
  hero: {
    headline: string;
    subheadline: string;
    imageAlt: string;
  };
  drBansal: {
    headline: string;
    bioParagraphs: string[];
    credentials: string[];
    imageAlt: string;
  };
  team: {
    headline: string;
    description: string;
    members: StaffMember[];
  };
  values: {
    headline: string;
    items: ValueItem[];
  };
  officeTour: {
    headline: string;
    description: string;
    imageAlts: string[];
  };
  finalCta: {
    headline: string;
    cta: string;
  };
}

export const aboutContent: AboutContent = {
  meta: {
    title: "About Us | Dr. Bansal’s Dental Care",
    description: "Learn about Dr. Himal Bansal, our friendly team, and our commitment to providing gentle, high-quality dental care in Patiala.",
  },
  hero: {
    headline: "Our Story",
    subheadline: "Dedicated to bringing comfortable, high-quality dental care to the heart of Patiala.",
    imageAlt: "The friendly team at Dr. Bansal's Dental Care",
  },
  drBansal: {
    headline: "Meet Dr. Himal Bansal",
    bioParagraphs: [
      "Dr. Himal Bansal founded this clinic with a simple vision: to change how people feel about visiting the dentist. Recognizing that dental anxiety is a significant barrier for many, he focused on creating a practice centered entirely on patient comfort and trust.",
      "With over a decade of clinical experience and advanced training in modern restorative techniques, Dr. Bansal combines clinical excellence with a genuinely warm, neighborly approach. He believes in listening to his patients, explaining every option clearly, and treating everyone like family."
    ],
    credentials: [
      "BDS, Master of Dental Surgery (MDS)",
      "Member of the Indian Dental Association",
      "Certified in Advanced Implantology"
    ],
    imageAlt: "Dr. Himal Bansal reviewing dental records",
  },
  team: {
    headline: "Meet the Team",
    description: "Our dedicated staff is here to ensure your visit is smooth, comfortable, and positive from the moment you walk in.",
    members: [
      {
        name: "Simran K.",
        role: "Lead Dental Hygienist",
        bio: "Simran ensures every cleaning is gentle and thorough. She loves helping patients achieve a brighter smile.",
        imageAlt: "Simran K., Lead Dental Hygienist",
      },
      {
        name: "Vikram P.",
        role: "Patient Coordinator",
        bio: "Vikram is the first friendly face you'll see. He's an expert at navigating insurance and scheduling.",
        imageAlt: "Vikram P., Patient Coordinator",
      }
    ],
  },
  values: {
    headline: "Our Clinic Values",
    items: [
      {
        title: "Compassion First",
        description: "We understand dental anxiety and treat every patient with patience and empathy."
      },
      {
        title: "Uncompromising Quality",
        description: "We use the best materials and proven techniques to ensure lasting results."
      },
      {
        title: "Community Focus",
        description: "We are proud to serve Patiala and build long-term relationships with our neighbors."
      }
    ],
  },
  officeTour: {
    headline: "Take a Look Around",
    description: "We've designed our space to feel less like a hospital and more like a welcoming living room.",
    imageAlts: [
      "Cozy seating in the waiting area",
      "Refreshment station with water and tea",
      "Bright, clean treatment room with modern chair",
      "Kid-friendly play corner"
    ]
  },
  finalCta: {
    headline: "Join our patient family today.",
    cta: "Book Appointment",
  }
};
