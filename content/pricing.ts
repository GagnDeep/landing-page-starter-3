import { SEOData, NoticeBarData } from "./types";

export const seo: SEOData = {
  title: "Pricing & Insurance | Dentistree Chandigarh",
  description: "Transparent pricing, flexible financing, and insurance information for your dental care at Dentistree.",
};

export const noticeBar: NoticeBarData = {
  text: "Flexible payment plans available for orthodontic treatments.",
  cta: { label: "Learn More", href: "#financing" }
};

export const hero = {
  headline: "Transparent Pricing & Flexible Financing",
  subheadline: "We believe that premium, pain-free dental care should be accessible and straightforward. No hidden fees, just clear communication."
};

export const philosophy = {
  title: "Our Philosophy on Cost",
  content: "Investing in your oral health is one of the best decisions you can make. We are committed to providing you with a clear, detailed treatment plan and estimated costs before any procedure begins, so you can make informed decisions without financial anxiety."
};

export const insurances = {
  title: "Accepted Insurances",
  content: "We work with a variety of major insurance providers to help you maximize your benefits. Our front desk team is highly experienced in navigating insurance claims and will assist you with the paperwork.",
  providers: ["Provider A", "Provider B", "Provider C", "Provider D"] // Placeholders to be replaced by actual clinic data if known
};

export const financing = {
  id: "financing",
  title: "Flexible Financing Options",
  content: "Don't let cost stand in the way of a healthy smile. We offer flexible, zero-interest or low-interest financing plans for major treatments like invisible aligners and implants. Spread the cost over comfortable monthly payments."
};

export const consultation = {
  title: "Initial Consultation",
  content: "Your first visit includes a comprehensive exam, digital x-rays, and a personalized discussion with Dr. Siddharth or Dr. Isha. We'll outline your options clearly.",
  priceNote: "Contact us for current consultation fees."
};

export const orthodonticsPricing = {
  title: "Orthodontic & Aligner Investment",
  content: "Every smile is unique. The cost of invisible aligners or braces depends on the complexity and duration of your treatment. We offer all-inclusive pricing that covers your appliances, adjustments, and final retainers."
};

export const guarantee = {
  title: "No Hidden Fees Guarantee",
  content: "We promise complete transparency. The treatment plan we present will detail all associated costs. If a change in plan is clinically necessary, we will discuss any cost adjustments with you beforehand."
};

export const paymentMethods = {
  title: "Payment Methods Accepted",
  methods: ["Credit/Debit Cards", "UPI", "Cash", "Bank Transfer"]
};

export const billingFaq = {
  title: "Common Billing Questions",
  questions: [
    { question: "Do you offer payment plans for braces?", answer: "Yes, we offer structured in-house payment plans for orthodontic treatments to make them manageable." },
    { question: "Will insurance cover my invisible aligners?", answer: "Many dental insurance plans provide partial coverage for adult and teen orthodontics. We will verify your benefits during your consultation." }
  ]
};

export const finalCta = {
  headline: "Have Questions About Cost?",
  subheadline: "Our financial coordinator is here to help you understand your options.",
  cta: { label: "Contact Our Team", href: "/contact" }
};
