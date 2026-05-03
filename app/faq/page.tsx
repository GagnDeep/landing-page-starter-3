import React from "react";
import { FAQHero } from "@/components/sections/faq/FAQHero";
import { FAQContent } from "@/components/sections/faq/FAQContent";
import { GlobalCTA } from "@/components/sections/home/GlobalCTA";

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FAQHero />
      <FAQContent />
      <GlobalCTA />
    </div>
  );
}
