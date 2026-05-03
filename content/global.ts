import { GlobalData } from './types';

export const globalContent: GlobalData = {
  contact: {
    address: 'SST Nagar, Patiala, Punjab, India',
    phone: '+91 98765 43210',
    emergencyPhone: '+91 98765 43211',
    email: 'hello@drbansaldental.com',
    mapUrl: 'https://maps.google.com/?q=SST+Nagar,+Patiala',
  },
  hours: [
    { day: 'Monday - Friday', time: '9:00 AM - 7:30 PM' },
    { day: 'Saturday', time: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', time: 'Closed (Emergency Only)' },
  ],
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/drbansaldental' },
    { label: 'Facebook', href: 'https://facebook.com/drbansaldental' },
    { label: 'Google', href: '#' },
  ],
  navigation: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
    footer: [
      {
        title: 'Services',
        links: [
          { label: 'General Dentistry', href: '/features#preventive' },
          { label: 'Cosmetic Smiles', href: '/features#cosmetic' },
          { label: 'Orthodontics', href: '/features#orthodontics' },
          { label: 'Pediatric Care', href: '/features#pediatric' },
        ],
      },
      {
        title: 'Patient Info',
        links: [
          { label: 'Pricing & Insurance', href: '/pricing' },
          { label: 'FAQ', href: '/faq' },
          { label: 'Our Blog', href: '/blog' },
        ],
      },
      {
        title: 'Clinic',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Careers', href: '/careers' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' },
        ],
      },
    ],
  },
  globalCtas: {
    bookAppointment: 'Book Appointment',
    callNow: 'Call Now',
  },
};
