import React from "react";
import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { ValueProp } from "@/components/sections/home/ValueProp";
import { Founder } from "@/components/sections/home/Founder";
import { ServiceHighlights } from "@/components/sections/home/ServiceHighlights";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { Technology } from "@/components/sections/home/Technology";
import { TourTeaser } from "@/components/sections/home/TourTeaser";
import { Statistics } from "@/components/sections/home/Statistics";
import { Insurance } from "@/components/sections/home/Insurance";
import { Journey } from "@/components/sections/home/Journey";
import { EmergencyBanner } from "@/components/sections/home/EmergencyBanner";
import { QuizTeaser } from "@/components/sections/home/QuizTeaser";
import { BlogTeaser } from "@/components/sections/home/BlogTeaser";
import { FAQHighlights } from "@/components/sections/home/FAQHighlights";
import { Location } from "@/components/sections/home/Location";
import { GlobalCTA } from "@/components/sections/home/GlobalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Header */}
      <Hero />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Value Proposition */}
      <ValueProp />

      {/* 4. Meet Dr. Anshum Gupta */}
      <Founder />

      {/* 5 & 6. Services Highlights */}
      <ServiceHighlights />

      {/* 7. Services Grid */}
      <ServicesGrid />

      {/* 8. Patient Testimonials */}
      <Testimonials />

      {/* 9. Technology & Hygiene */}
      <Technology />

      {/* 10. Virtual Tour Teaser */}
      <TourTeaser />

      {/* 11. Statistics / Milestones */}
      <Statistics />

      {/* 12. Insurance & Financing */}
      <Insurance />

      {/* 13. Step-by-Step Patient Journey */}
      <Journey />

      {/* 14. Emergency Dental Care Banner */}
      <EmergencyBanner />

      {/* 15. Interactive Smile Assessment Quiz Teaser */}
      <QuizTeaser />

      {/* 16. Latest from the Blog */}
      <BlogTeaser />

      {/* 17. FAQ Highlights */}
      <FAQHighlights />

      {/* 18. Location & Contact Info */}
      <Location />

      {/* 19. Final Global CTA */}
      <GlobalCTA />

      {/* 20. Footer is handled globally in layout.tsx */}
    </div>
  );
}
