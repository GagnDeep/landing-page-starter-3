import { AboutHero } from "@/components/sections/about/AboutHero";
import { OriginAndBio } from "@/components/sections/about/OriginAndBio";
import { ValuesAndTeam } from "@/components/sections/about/ValuesAndTeam";
import { FacilityAndCTA } from "@/components/sections/about/FacilityAndCTA";
import { aboutContent } from "@/content/about";

export const metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OriginAndBio />
      <ValuesAndTeam />
      <FacilityAndCTA />
    </>
  );
}
