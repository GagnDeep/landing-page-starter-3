import { buildMetadata, generateJsonLd } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from 'next/link';

export const metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved. Please check the URL or return to the home page to find your way.",
  path: "/404"
});

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-16 md:py-24 flex flex-col items-center justify-center text-center">
        <h1 className="font-heading text-6xl font-bold mb-4 text-destructive">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-[50ch]">The page you are looking for does not exist or has been moved. Check the URL or return to the home page.</p>
        <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium">Return Home</Link>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd('WebSite', { name: "They Are Tracking", url: "https://theyaretracking.com" })) }} />
    </div>
  );
}
