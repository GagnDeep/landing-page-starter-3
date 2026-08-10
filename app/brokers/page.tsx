import { buildMetadata, generateJsonLd } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = buildMetadata({
  title: "Brokers",
  description: "An indexed directory of data brokers and people search sites with each opt-out procedure as it works today. We track the forms to help you reclaim your privacy.",
  path: "/brokers"
});

export default function Brokers() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-16 md:py-24">
        <h1 className="h1 mb-8">Data Brokers</h1>
        <p className="lead max-w-[75ch]">Directory of data brokers and opt-out procedures.</p>
        <div className="h-64"></div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd('WebSite', { name: "They Are Tracking", url: "https://theyaretracking.com" })) }} />
    </div>
  );
}
