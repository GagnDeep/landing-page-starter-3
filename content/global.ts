export interface SEOMetadata {
  title: string;
  description: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface GlobalContent {
  clinicName: string;
  doctorName: string;
  location: string;
  phone: string;
  email: string;
  hours: string;
  rating: string;
  navigation: NavigationItem[];
  footer: {
    tagline: string;
    copyright: string;
  };
}

export const globalContent: GlobalContent = {
  clinicName: "Naresh Dental Clinic and Implant Center",
  doctorName: "Dr. Anshum Gupta",
  location: "Patiala, Punjab",
  phone: "+91 98765 43210", // Placeholder, adjust as needed
  email: "contact@nareshdental.com",
  hours: "Mon-Sat: 10:00 AM - 8:00 PM, Sun: By Appointment",
  rating: "4.9",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Patient Care", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  footer: {
    tagline: "Pristine clinical precision, delivered with warm human care.",
    copyright: `© ${new Date().getFullYear()} Naresh Dental Clinic and Implant Center. All rights reserved.`,
  },
};
