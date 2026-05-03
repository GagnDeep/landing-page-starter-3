import { SEOData, HeroSection } from './types';

export const careersContent = {
  seo: {
    title: "Careers | Join Dr. Bansal's Dental Care Patiala",
    description: "Looking for a fulfilling career in dentistry? Join our compassionate, patient-focused team in SST Nagar, Patiala.",
  } as SEOData,

  hero: {
    title: "Join Our Dental Family",
    subtitle: "Build a rewarding career providing gentle, compassionate care in a modern, supportive environment.",
  } as HeroSection,

  benefits: {
    title: "Why Work With Us?",
    items: [
      { title: "Positive Culture", description: "We foster a supportive, drama-free environment where team members respect and uplift one another." },
      { title: "Work-Life Balance", description: "Predictable scheduling with respectful hours so you can enjoy your time outside the clinic." },
      { title: "Modern Technology", description: "Work with state-of-the-art equipment that makes your job easier and improves patient outcomes." },
      { title: "Continuous Learning", description: "We support ongoing education and training to help you grow in your dental career." }
    ]
  },

  culture: {
    title: "Our Clinic Culture",
    description: "At Dr. Bansal's Dental Care, we believe that happy staff leads to happy patients. We prioritize a calm atmosphere not just for those in the dental chair, but for the team working around it."
  },

  openings: {
    title: "Current Openings",
    noOpeningsMessage: "We are always looking for talented individuals. Even if you don't see a specific role listed below, feel free to submit your resume.",
    items: [
      // Example structure for when roles are open:
      // { title: "Dental Assistant", type: "Full-Time", location: "Patiala" }
    ]
  },

  applicationProcess: {
    title: "How to Apply",
    steps: [
      "1. Submit your resume and a brief cover letter.",
      "2. Phone interview with our Clinic Manager.",
      "3. In-person interview and clinic tour.",
      "4. Paid trial day to meet the team and see the workflow."
    ]
  },

  form: {
    title: "Send Us Your Resume",
    description: "Upload your CV and tell us why you'd be a great fit for our team.",
    fields: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      role: "Role you are interested in",
      message: "Why do you want to join our team?",
      file: "Upload Resume (PDF or Word)"
    },
    submitLabel: "Submit Application"
  }
};
