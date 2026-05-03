import { FAQHero } from "@/components/sections/faq/FAQHero";
import { FAQSearch } from "@/components/sections/faq/FAQSearch";
import { FAQAccordionCategories } from "@/components/sections/faq/FAQAccordionCategories";
import { FAQContactCTA } from "@/components/sections/faq/FAQContactCTA";
import { faqContent } from "@/content/faq";

export const metadata = {
  title: faqContent.seo.title,
  description: faqContent.seo.description,
};

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQSearch />
      <FAQAccordionCategories />
      <FAQContactCTA />
    </>
  );
}
