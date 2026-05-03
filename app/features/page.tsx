import React from "react";
import { FeaturesHero } from "@/components/sections/features/FeaturesHero";
import { FeaturesHygiene } from "@/components/sections/features/FeaturesHygiene";
import { FeaturesTechGrid } from "@/components/sections/features/FeaturesTechGrid";
import { FeaturesAmenities } from "@/components/sections/features/FeaturesAmenities";
import { GlobalCTA } from "@/components/sections/home/GlobalCTA";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FeaturesHero />
      <FeaturesHygiene />
      <FeaturesTechGrid />
      <FeaturesAmenities />
      <GlobalCTA />
    </div>
  );
}
