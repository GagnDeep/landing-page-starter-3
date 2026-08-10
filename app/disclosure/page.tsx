import { buildMetadata, generateJsonLd } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = buildMetadata({
  title: "Disclosure",
  description: "Read our affiliate disclosure and understand our revenue model. We track the forms to help you reclaim your privacy and we believe in complete transparency.",
  path: "/disclosure"
});

export default function Disclosure() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-16 md:py-24">
        <h1 className="h1 mb-8">Disclosure</h1>
        <p className="lead max-w-[75ch]">Affiliate disclosure and revenue model.</p>
        <div className="h-64"></div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd('WebSite', { name: "They Are Tracking", url: "https://theyaretracking.com" })) }} />
    </div>
  );
}
