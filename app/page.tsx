import {
  HeroSection,
  TrustMarquee,
  ValueProposition,
  SpecialtiesSection,
  ServicesGrid,
  TestimonialsAndFaq,
} from "@/components/home"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <HeroSection />
      <TrustMarquee />
      <ValueProposition />
      <SpecialtiesSection />
      <ServicesGrid />
      <TestimonialsAndFaq />
    </div>
  )
}
