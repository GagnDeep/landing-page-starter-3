import { CareersHero } from "@/components/sections/careers/CareersHero";
import { CareersBenefits } from "@/components/sections/careers/CareersBenefits";
import { CareersCulture } from "@/components/sections/careers/CareersCulture";
import { CareersOpenings } from "@/components/sections/careers/CareersOpenings";
import { CareersProcess } from "@/components/sections/careers/CareersProcess";
import { CareersApplication } from "@/components/sections/careers/CareersApplication";
import { careersContent } from "@/content/careers";

export const metadata = {
  title: careersContent.seo.title,
  description: careersContent.seo.description,
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersBenefits />
      <CareersCulture />
      <CareersOpenings />
      <CareersProcess />
      <CareersApplication />
    </>
  );
}
