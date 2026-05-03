import { SeoMetadata, SectionContent, FaqItem } from "./types"

export const faqSeo: SeoMetadata = {
  title: "Frequently Asked Questions | Spacedent",
  description:
    "Find answers to common questions about our dental services, pricing, pediatric care, and what to expect during your visit.",
}

export const faqHero: SectionContent = {
  headline: "How Can We Help?",
  subheading:
    "Browse our frequently asked questions to learn more about our treatments, clinic policies, and what makes Spacedent different.",
}

export const faqCategories: Record<string, FaqItem[]> = {
  general: [
    {
      id: "g1",
      question: "Are you accepting new patients?",
      answer:
        "Yes, we are always welcoming new patients to the Spacedent family. You can book your initial consultation via our website or by calling our front desk.",
    },
    {
      id: "g2",
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring a valid ID, any previous dental x-rays or records if you have them, and your insurance information. Arriving 10 minutes early to complete any necessary intake forms is greatly appreciated.",
    },
  ],
  treatments: [
    {
      id: "t1",
      question: "Is a single-sitting RCT really possible?",
      answer:
        "Yes. With modern rotary endodontics and 3D imaging, Dr. Vikramjit can efficiently clean, shape, and seal the root canals in a single visit for most cases, significantly reducing your time in the chair and post-operative discomfort.",
    },
    {
      id: "t2",
      question: "Do you offer sedation for anxious patients?",
      answer:
        "We prioritize a calming environment and utilize advanced local anesthesia techniques to ensure you feel no pain. For highly anxious patients or complex procedures, we can discuss appropriate sedation options during your consultation.",
    },
  ],
  pediatric: [
    {
      id: "p1",
      question: "When should my child first see a dentist?",
      answer:
        "The pediatric dental community recommends that a child's first dental visit occur within six months of the eruption of their first tooth, or no later than their first birthday.",
    },
    {
      id: "p2",
      question: "Can I stay in the room with my child during their treatment?",
      answer:
        "Absolutely. We encourage parents to be present, especially during early visits, to help their child feel secure. Dr. Arshiya will work closely with you to ensure your child has a positive experience.",
    },
  ],
}
