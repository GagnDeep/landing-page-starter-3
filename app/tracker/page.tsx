import { buildMetadata, generateJsonLd } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = buildMetadata({
  title: "Removal Tracker",
  description: "Track your data broker removal progress with our interactive tool. We track the forms to help you reclaim your privacy and stay on top of the waiting periods.",
  path: "/tracker"
});

export default function Tracker() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-16 md:py-24">
        <h1 className="h1 mb-8">Removal Tracker</h1>
        <p className="lead max-w-[75ch]">Track your data broker removal progress.</p>
        <div className="h-64"></div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd('WebSite', { name: "They Are Tracking", url: "https://theyaretracking.com" })) }} />
    </div>
  );
}
