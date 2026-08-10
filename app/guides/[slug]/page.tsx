import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Prose } from "@/components/Prose"
import { buildMetadata } from "@/lib/site"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"
import { getGuides, getGuideBySlug } from "@/content/data"
import { notFound } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import { Book01Icon, Link01Icon, HelpSquareIcon, Search01Icon, Shield01Icon, LockKeyIcon, Clock01Icon } from "@hugeicons/core-free-icons"
import Link from "next/link"
import { MegaGlossary } from "@/components/MegaGlossary"

export async function generateStaticParams() {
  return getGuides().map((guide) => ({
    slug: guide.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const guide = getGuideBySlug(resolvedParams.slug)
  if (!guide) return {}

  const shortDesc = guide.description.length > 120 ? guide.description.substring(0, 117) + "..." : guide.description;
  const padding = " Read our detailed methodology guide to ensure you know how to safely evaluate algorithmic vendors.";
  const metaDesc = (shortDesc + padding).substring(0, 155) + ".";

  return buildMetadata({
    title: guide.title,
    description: metaDesc,
    path: `/guides/${guide.slug}/`,
  })
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const guide = getGuideBySlug(resolvedParams.slug)

  if (!guide) {
    notFound()
  }

  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Guides", item: "/guides/" },
    { name: guide.title, item: `/guides/${guide.slug}/` }
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Breadcrumbs items={[
            { name: "Guides", href: "/guides/" },
            { name: guide.title, href: `/guides/${guide.slug}/` }
          ]} />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <article>
            <div className="mb-12 border-b pb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 block flex items-center gap-2">
                <HugeiconsIcon icon={Book01Icon} className="h-4 w-4"/> {guide.category}
              </span>
              <h1 className="text-display mb-6">{guide.title}</h1>
              <p className="text-lead max-w-3xl">
                {guide.description} This comprehensive guide provides the necessary frameworks to evaluate algorithmic claims safely and independently.
              </p>
              <div className="flex items-center gap-4 mt-8 font-mono text-sm text-muted-foreground">
                 <span>PUBLISHED: {guide.publishedAt}</span>
                 {guide.updatedAt !== guide.publishedAt && <span>UPDATED: {guide.updatedAt}</span>}
              </div>
            </div>

            <Prose className="max-w-none mb-16">
              <p>
                The financial tooling space is crowded with affiliate sites that rank tools based on payout rates. This guide exists to strip away the marketing layers and equip retail investors with the frameworks needed to evaluate these tools objectively. Without a strict empirical approach to validation, investors are highly susceptible to misleading performance charts.
              </p>

              <h2>The Core Concept: Alpha Generation</h2>
              <p>
                Absolute return is meaningless without context. In a bull market, nearly every long-biased strategy will generate positive absolute returns. Marketing materials highlight these gains as proof of the algorithm's efficacy. They rely on the fact that most retail investors do not subtract the opportunity cost of capital from the advertised return.
              </p>
              <p>
                However, if an algorithm returns 15% in a year where the S&P 500 returned 20%, the algorithm has destroyed value relative to a passive, zero-effort index fund. The algorithm generated negative alpha. Investors are paying expensive monthly subscription fees to actively underperform the broader market.
              </p>

              <h3>Mechanics of Survivorship Bias</h3>
              <p>
                Vendors often run multiple models simultaneously or test various parameter sets in isolated silos. When publishing marketing materials, they present the performance of the single model that happened to overperform during a specific backtested window. The models that failed are quietly discarded. This is classic survivorship bias, and it is the most common technique used to inflate perceived win rates.
              </p>
              <p>
                To neutralise this, our independent tracking apparatus captures recommendations in real-time and locks them into an immutable dataset. We do not allow retroactive amendments to trade histories. If a tool claims a high degree of predictive accuracy, it must prove that accuracy on an ongoing, forward-looking basis.
              </p>

              <h3>The Role of Data Immutability</h3>
              <p>
                When a vendor controls their own performance ledger, they face a massive conflict of interest. A string of losing trades can severely damage their subscriber conversion rate. Therefore, there is immense financial pressure to classify failed signals as "system errors" or quietly delete them from the historical log.
              </p>
              <p>
                By maintaining an external, third-party ledger of every published recommendation, we remove this conflict of interest entirely. The algorithm is judged solely by the exact signals it provided to paying customers in real-time.
              </p>
            </Prose>

            <section className="mb-16 border-t pt-16">
              <div className="flex items-center gap-2 mb-8">
                <HugeiconsIcon icon={Shield01Icon} className="h-6 w-6 text-muted-foreground" />
                <h2 className="text-h2 m-0">Evaluation Principles</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                 <div className="bg-card border rounded-lg p-6 flex flex-col gap-4">
                    <HugeiconsIcon icon={Shield01Icon} className="h-6 w-6 text-foreground" />
                    <h3 className="font-heading font-semibold text-lg">Skeptical Defaults</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                       Assume any heavily marketed algorithm is curve-fitted until independently verified over a forward-looking timeframe. Backtests are sales documents, not evidence.
                    </p>
                 </div>
                 <div className="bg-card border rounded-lg p-6 flex flex-col gap-4">
                    <HugeiconsIcon icon={Clock01Icon} className="h-6 w-6 text-foreground" />
                    <h3 className="font-heading font-semibold text-lg">Benchmark Rigidity</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                       Never evaluate a return without plotting it against the SPY ETF over the exact identical holding period. Alpha is the only metric that justifies a subscription fee.
                    </p>
                 </div>
                 <div className="bg-card border rounded-lg p-6 flex flex-col gap-4 md:col-span-2">
                    <HugeiconsIcon icon={LockKeyIcon} className="h-6 w-6 text-foreground" />
                    <h3 className="font-heading font-semibold text-lg">Ledger Immutability</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                       If a vendor controls the log of past trades, the log is corrupted. Only trust platforms that publish their recommendations to a third-party ledger (like our apparatus) where deletions and retroactive amendments are technologically impossible.
                    </p>
                 </div>
              </div>
            </section>

            <section className="mb-16 border-t pt-16">
              <div className="flex items-center gap-2 mb-8">
                <HugeiconsIcon icon={HelpSquareIcon} className="h-6 w-6 text-muted-foreground" />
                <h2 className="text-h2 m-0">In-Depth Subject Reference</h2>
              </div>
              <MegaGlossary count={10} />
            </section>

            <section className="mb-16 border-t pt-16">
               <div className="bg-muted rounded-lg p-8 md:p-12 text-center">
                  <HugeiconsIcon icon={Search01Icon} className="h-10 w-10 text-muted-foreground mx-auto mb-6" />
                  <h2 className="text-h3 mb-4">View the Live Apparatus</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    See the theoretical frameworks discussed in this guide applied directly to the live tracking metrics of heavily marketed AI vendors.
                  </p>
                  <Link href="/tools/" className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
                    Access Tools Directory
                  </Link>
                </div>
            </section>

            <section className="border-t pt-12">
              <h2 className="text-h3 mb-6">Related Reading</h2>
              <div className="flex flex-col gap-3">
                 {getGuides().filter(g => g.slug !== guide.slug).slice(0, 2).map(sibling => (
                    <div key={sibling.slug}>
                      <Link href={`/guides/${sibling.slug}/`} className="flex items-center gap-2 text-accent hover:underline bg-muted/30 px-4 py-3 rounded border hover:bg-muted/50 transition-colors w-fit">
                        <HugeiconsIcon icon={Link01Icon} className="h-4 w-4"/> Read: {sibling.title}
                      </Link>
                    </div>
                 ))}
                 <div>
                   <Link href="/guides/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-6 font-medium w-fit">
                      &larr; Return to Library
                   </Link>
                 </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
