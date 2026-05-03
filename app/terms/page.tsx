import { TermsHero } from "@/components/sections/terms/TermsHero";
import { TermsContent } from "@/components/sections/terms/TermsContent";
import { termsContent } from "@/content/terms";

export const metadata = {
  title: termsContent.seo.title,
  description: termsContent.seo.description,
};

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <TermsContent />
    </>
  );
}
