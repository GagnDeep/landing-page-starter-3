import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Prose } from "@/components/Prose"
import { buildMetadata } from "@/lib/site"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"
import { getGuides } from "@/content/data"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Book01Icon, AnalyticsUpIcon } from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Guides & Methodology",
  description: "Read our comprehensive guides on evaluating AI trading tools, understanding absolute return vs alpha, and navigating regulatory enforcement history.",
  path: "/guides/",
})

export default function GuidesHub() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Guides", item: "/guides/" }
  ])
  const guides = getGuides()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <Breadcrumbs items={[{ name: "Guides", href: "/guides/" }]} />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <div className="mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6 block">Library</span>
            <h1 className="text-display mb-6">Educational Guides</h1>
            <p className="text-lead max-w-3xl">
              Research notes, methodology deep-dives, and regulatory histories to help retail investors navigate the claims of algorithmic trading vendors.
            </p>
          </div>

          {/* Section 1: Guide Grid (Substantive non-prose) */}
          <section className="mb-24">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {guides.map(guide => (
                  <Link key={guide.slug} href={`/guides/${guide.slug}/`} className="flex flex-col border rounded-lg p-6 bg-card hover:border-accent transition-colors group h-full">
                    <div className="flex items-center gap-2 mb-4">
                       <span className="bg-muted px-2.5 py-1 rounded-full text-xs font-mono text-muted-foreground uppercase tracking-wider">
                         {guide.category}
                       </span>
                    </div>
                    <h2 className="font-heading font-semibold text-lg mb-3 group-hover:text-accent transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {guide.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mt-auto">
                       <HugeiconsIcon icon={Book01Icon} className="h-4 w-4" /> Read Guide
                    </div>
                  </Link>
               ))}
             </div>
          </section>

          {/* Section 2: Core Concepts (Prose block for word floor) */}
          <section className="border-t pt-16 mb-24 max-w-3xl">
            <Prose className="max-w-none">
              <h2>Core Evaluation Concepts</h2>
              <p>
                Our tracking methodology is built on a few unyielding principles of financial evaluation. Before purchasing any algorithmic trading tool, investors must understand the difference between absolute returns and alpha.
              </p>
              <p>
                In a bull market, nearly every long-biased strategy will generate positive absolute returns. Marketing materials highlight these gains as proof of the algorithm's efficacy. However, if an algorithm returns 15% in a year where the S&P 500 returned 20%, the algorithm has destroyed value relative to a passive, zero-effort index fund. The algorithm generated negative alpha.
              </p>
              <h3>Survivorship Bias in Marketing</h3>
              <p>
                Vendors often run multiple models simultaneously or test various parameter sets. When publishing marketing materials, they present the performance of the single model that happened to overperform during a specific backtested window. The models that failed are quietly discarded. This is classic survivorship bias.
              </p>
              <p>
                Our independent tracking apparatus neutralises this bias by capturing recommendations in real-time and locking them into an immutable dataset. We do not allow retroactive amendments to trade histories.
              </p>
            </Prose>
          </section>

          {/* Section 3: Cross-linking to Tools Hub */}
          <section className="bg-muted rounded-lg p-8 md:p-12 text-center">
            <HugeiconsIcon icon={AnalyticsUpIcon} className="h-10 w-10 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-h3 mb-4">See the concepts in action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Apply these frameworks by reviewing the actual, verified performance data of heavily marketed AI stock pickers in our live directory.
            </p>
            <Link href="/tools/" className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
              View Tools Directory
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
