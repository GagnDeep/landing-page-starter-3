import { SeoMetadata, SectionContent } from "./types"

export const contactSeo: SeoMetadata = {
  title: "Contact Us | Spacedent Dental Clinic Patiala",
  description:
    "Book an appointment or get in touch with Spacedent. Located in Patiala, we offer modern, gentle dental care for the whole family.",
}

export const contactHero: SectionContent = {
  headline: "Get in Touch",
  subheading:
    "Ready to schedule your visit or have a question about our services? Our team is here to help.",
}

export const contactInfo = {
  phone: "+91 XXXXX XXXXX",
  email: "hello@spacedent.in",
  address: "Spacedent Dental Clinic, [Full Address], Patiala, Punjab",
  mapUrl: "https://maps.google.com/...", // To be updated
}

export const operatingHours = [
  { day: "Monday - Saturday", hours: "10:00 AM - 8:00 PM" },
  { day: "Sunday", hours: "By Appointment Only" },
]

export const emergencyInfo: SectionContent = {
  headline: "Dental Emergency?",
  body: "If you are experiencing severe dental pain, bleeding, or trauma out of hours, please contact our emergency line or proceed to the nearest hospital emergency room.",
  cta: { label: "Call Emergency Line", href: "tel:+91XXXXXXXXXX" },
}
