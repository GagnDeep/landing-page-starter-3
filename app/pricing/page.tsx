import { PricingHero } from "@/components/sections/pricing/PricingHero";
import { InsuranceAndFinancing } from "@/components/sections/pricing/InsuranceAndFinancing";
import { SpecialOffer } from "@/components/sections/pricing/SpecialOffer";
import { EstimatesTable } from "@/components/sections/pricing/EstimatesTable";
import { PricingFAQAndCTA } from "@/components/sections/pricing/PricingFAQAndCTA";
import { pricingContent } from "@/content/pricing";

export const metadata = {
  title: pricingContent.seo.title,
  description: pricingContent.seo.description,
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <InsuranceAndFinancing />
      <SpecialOffer />
      <EstimatesTable />
      <PricingFAQAndCTA />
    </>
  );
}
