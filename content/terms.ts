export interface MetaData {
  title: string;
  description: string;
}

export interface HeroSection {
  headline: string;
}

export interface Section {
  heading: string;
  content: string;
}

export interface TermsContent {
  meta: MetaData;
  hero: HeroSection;
  sections: Section[];
  lastUpdated: string;
}

export const termsContent: TermsContent = {
  meta: {
    title: "Terms & Conditions | IKonic Beauty Salon",
    description: "Read our terms and conditions for booking makeup services at IKonic Beauty Salon."
  },
  hero: {
    headline: "Terms & Conditions"
  },
  sections: [
    {
      heading: "1. Booking & Retainer",
      content: "A 50% non-refundable retainer is required to secure your booking date. The date is not reserved until the retainer is received and the contract is signed."
    },
    {
      heading: "2. Payment",
      content: "The remaining balance must be paid in full on or before the day of the event prior to the commencement of services."
    },
    {
      heading: "3. Cancellations",
      content: "If the client cancels the booking, the retainer will not be refunded. Cancellations made within 14 days of the event will require full payment of the agreed services."
    },
    {
      heading: "4. Travel & Accommodation",
      content: "For on-location services, travel fees will apply outside a 10km radius of our studio. Any required accommodation or parking fees must be covered by the client."
    }
  ],
  lastUpdated: "Last updated: October 2023"
};
