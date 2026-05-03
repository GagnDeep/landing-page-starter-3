import { NavigationItem } from "./types"

export const mainNav: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Journal", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export const footerLinks = {
  clinic: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Journal", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Single-Sitting RCT", href: "/features#rct" },
    { label: "Pediatric Dentistry", href: "/features#pediatric" },
    { label: "Clear Aligners", href: "/features#aligners" },
    { label: "Dental Implants", href: "/features#implants" },
    { label: "Cosmetic Enhancements", href: "/features#cosmetic" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
}

export const globalCta = {
  label: "Book Appointment",
  href: "/contact",
}

export const clinicInfo = {
  name: "Spacedent Dental Clinic",
  address: "Patiala, Punjab",
  phone: "+91 XXXXX XXXXX",
  email: "hello@spacedent.in",
  copyright: "© 2024 Spacedent Dental Clinic. All rights reserved.",
}
