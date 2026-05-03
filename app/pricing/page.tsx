import React from "react";
import { PricingHero } from "@/components/sections/pricing/PricingHero";
import { PricingEstimator } from "@/components/sections/pricing/PricingEstimator";
import { PricingFinancials } from "@/components/sections/pricing/PricingFinancials";
import { GlobalCTA } from "@/components/sections/home/GlobalCTA";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PricingHero />
      <PricingEstimator />
      <PricingFinancials />
      <GlobalCTA />
    </div>
  );
}
