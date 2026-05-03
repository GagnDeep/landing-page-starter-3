import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactInfoGrid } from "@/components/sections/contact/ContactInfoGrid";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { MapAndTransit } from "@/components/sections/contact/MapAndTransit";
import { contactContent } from "@/content/contact";

export const metadata = {
  title: contactContent.seo.title,
  description: contactContent.seo.description,
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoGrid />
      <ContactForm />
      <MapAndTransit />
    </>
  );
}
