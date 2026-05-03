import React from "react";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutHistory } from "@/components/sections/about/AboutHistory";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutDrGupta } from "@/components/sections/about/AboutDrGupta";
import { AboutTeam } from "@/components/sections/about/AboutTeam";
import { AboutFacility } from "@/components/sections/about/AboutFacility";
import { AboutCommunity } from "@/components/sections/about/AboutCommunity";
import { GlobalCTA } from "@/components/sections/home/GlobalCTA";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <AboutHistory />
      <AboutValues />
      <AboutDrGupta />
      <AboutTeam />
      <AboutFacility />
      <AboutCommunity />
      <GlobalCTA />
    </div>
  );
}
