import { Hero } from "@/components/sections/home/Hero";
import { TrustIndicators } from "@/components/sections/home/TrustIndicators";
import { Welcome } from "@/components/sections/home/Welcome";
import { Services } from "@/components/sections/home/Services";
import { Features } from "@/components/sections/home/Features";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { DoctorProfile } from "@/components/sections/home/DoctorProfile";
import { ClinicTour } from "@/components/sections/home/ClinicTour";
import { TechAndOffer } from "@/components/sections/home/TechAndOffer";
import { EmergencyAndInfo } from "@/components/sections/home/EmergencyAndInfo";
import { FAQTeaser } from "@/components/sections/home/FAQTeaser";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { homeContent } from "@/content/home";

export const metadata = {
  title: homeContent.seo.title,
  description: homeContent.seo.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Welcome />
      <Services />
      <Features />
      <Testimonials />
      <DoctorProfile />
      <ClinicTour />
      <TechAndOffer />
      <EmergencyAndInfo />
      <FAQTeaser />
      <FinalCTA />
    </>
  );
}
