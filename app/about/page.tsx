import { buildMetadata, generateJsonLd } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata = buildMetadata({
  title: "About Us",
  description: "We built this because the existing guides were outdated, and the alternative was paying an agency. This is an indexed registry of data brokers.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-16 md:py-24">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
        <h1 className="h1 mb-8">About They Are Tracking</h1>
        <div className="max-w-[75ch] space-y-6">
           <p className="lead">We built this because the existing guides were outdated, and the alternative was paying an agency.</p>
           <p>This is an indexed registry of data brokers and people-search sites with each opt-out procedure as it works today. We maintain this directory so you can file your own opt-outs tonight, without paying a middleman.</p>
           <p>Revenue on this site is generated through disclosed affiliate links for those who prefer to buy back their time. The free manual path will never be gated, throttled, or degraded.</p>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd('WebSite', { name: "They Are Tracking", url: "https://theyaretracking.com" })) }} />
    </div>
  );
}
