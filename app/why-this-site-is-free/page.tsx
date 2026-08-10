import { buildMetadata, generateJsonLd } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = buildMetadata({
  title: "Why This Site Is Free",
  description: "Learn why our data broker opt-out guides are completely free. We track the forms to help you reclaim your privacy, manual removal should not be gated.",
  path: "/why-this-site-is-free"
});

export default function WhyFree() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-16 md:py-24">
        <h1 className="h1 mb-8">Why This Site Is Free</h1>
        <p className="lead max-w-[75ch]">Learn why our data broker opt-out guides are completely free.</p>
        <div className="h-64"></div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd('WebSite', { name: "They Are Tracking", url: "https://theyaretracking.com" })) }} />
    </div>
  );
}
