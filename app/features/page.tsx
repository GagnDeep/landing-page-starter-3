import { FeaturesHero } from "@/components/sections/features/FeaturesHero";
import { StickyNav } from "@/components/sections/features/StickyNav";
import { ServiceCategories } from "@/components/sections/features/ServiceCategories";
import { FeaturesCTA } from "@/components/sections/features/FeaturesCTA";
import { featuresContent } from "@/content/features";

export const metadata = {
  title: featuresContent.seo.title,
  description: featuresContent.seo.description,
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <StickyNav />
      <ServiceCategories />
      <FeaturesCTA />
    </>
  );
}
