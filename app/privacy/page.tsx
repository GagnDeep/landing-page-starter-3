import { PrivacyHero } from "@/components/sections/privacy/PrivacyHero";
import { PrivacyContent } from "@/components/sections/privacy/PrivacyContent";
import { privacyContent } from "@/content/privacy";

export const metadata = {
  title: privacyContent.seo.title,
  description: privacyContent.seo.description,
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
}
