import { SEOData, NoticeBarData } from "./types";

export const seo: SEOData = {
  title: "Careers | Dentistree Chandigarh",
  description: "Join the Dentistree team in Chandigarh. We are always looking for passionate, patient-focused dental professionals to grow with us.",
};

export const noticeBar: NoticeBarData = {
  text: "We are currently hiring for a Full-Time Dental Hygienist.",
  cta: { label: "View Openings", href: "#openings" }
};

export const hero = {
  headline: "Join the Dentistree Family",
  subheadline: "Build your career in a supportive, modern, and patient-first environment where your skills are valued and your growth is encouraged."
};

export const culture = {
  title: "Our Culture & Values",
  content: "At Dentistree, we treat our team with the same respect and care that we offer our patients. We believe in fostering a collaborative, positive workplace where everyone from the front desk to the operatory works seamlessly together to deliver excellence."
};

export const foundersMessage = {
  headline: "A Message from Dr. Siddharth & Dr. Isha",
  content: "We started this practice to create a space where both patients and staff feel at home. If you are passionate about high-quality care, empathetic to patient needs, and eager to learn, we would love to meet you."
};

export const benefits = {
  title: "Why Work With Us?",
  perks: [
    { title: "Competitive Compensation", description: "Fair pay based on experience and performance." },
    { title: "Continuing Education", description: "We invest in your growth with stipends for courses and certifications." },
    { title: "Modern Technology", description: "Work with state-of-the-art equipment in a beautifully designed clinic." },
    { title: "Supportive Environment", description: "A healthy work-life balance and a positive team atmosphere." }
  ]
};

export const openings = {
  id: "openings",
  title: "Current Openings",
  noOpeningsMessage: "We do not have any specific openings at the moment, but we are always eager to connect with talented professionals. Feel free to submit an open application.",
  jobs: [
    {
      title: "Dental Hygienist (Full-Time)",
      location: "Sector 22B, Chandigarh",
      type: "Full-Time",
      description: "We are seeking a gentle, thorough, and highly motivated Dental Hygienist to join our team. You will play a crucial role in preventive care and patient education.",
      requirements: ["Valid dental hygienist license", "Excellent communication skills", "Experience with pediatric patients is a plus"]
    },
    {
      title: "Patient Care Coordinator",
      location: "Sector 22B, Chandigarh",
      type: "Full-Time",
      description: "The first point of contact for our clinic. We need a warm, organized professional to manage scheduling, billing, and patient inquiries.",
      requirements: ["Strong administrative skills", "Experience with dental software", "Exceptional customer service attitude"]
    }
  ]
};

export const applicationProcess = {
  title: "How to Apply",
  steps: [
    { step: 1, title: "Submit Application", description: "Send your resume and a brief cover letter via our form." },
    { step: 2, title: "Initial Interview", description: "A quick phone call to discuss your experience and goals." },
    { step: 3, title: "Clinic Visit", description: "Meet the team and see the clinic space in person." }
  ]
};

export const openApplicationCta = {
  headline: "Don't see your role?",
  description: "Send us your resume anyway. We'll keep it on file for future opportunities.",
  cta: { label: "Submit Resume", href: "mailto:careers@dentistreechandigarh.in" }
};
