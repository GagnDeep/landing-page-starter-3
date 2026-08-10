import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Prose } from "@/components/Prose"
import { buildMetadata } from "@/lib/site"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"
import { getVendors } from "@/content/data"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  DatabaseIcon,
  Clock01Icon,
  AnalyticsUpIcon,
  Search01Icon,
  HelpSquareIcon,
} from "@hugeicons/core-free-icons"
import { MegaGlossary } from "@/components/MegaGlossary"

export const metadata = buildMetadata({
  title: "AI Trading Tools Directory & Tracker",
  description:
    "Browse the complete directory of AI stock pickers and trading algorithms currently tracked and verified by our independent lab.",
  path: "/tools/",
})

export default function ToolsHub() {
  const jsonLd = buildBreadcrumbJsonLd([{ name: "Tools", item: "/tools/" }])
  const vendors = getVendors()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-background py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-8">
          <Breadcrumbs items={[{ name: "Tools", href: "/tools/" }]} />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <div className="mb-16">
            <span className="mb-6 block font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Directory
            </span>
            <h1 className="text-display mb-6">AI Trading Tools Directory</h1>
            <p className="text-lead max-w-3xl">
              This is the comprehensive directory of all AI stock-picking tools,
              portfolio optimisers, and trading bots currently under active
              tracking or baselining by our lab. We verify claims against a
              buy-and-hold SPY benchmark.
            </p>
          </div>

          {/* Section 1: Directory Table (Substantive non-prose) */}
          <section className="mb-24">
            <div className="w-full overflow-x-auto rounded-lg border bg-card">
              <table className="w-full min-w-[800px] border-collapse text-left">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-6 py-4 font-heading text-sm font-semibold">
                      Tool Name
                    </th>
                    <th className="px-6 py-4 font-heading text-sm font-semibold">
                      Category
                    </th>
                    <th className="px-6 py-4 font-heading font-mono text-sm font-semibold">
                      Cost
                    </th>
                    <th className="px-6 py-4 font-heading font-mono text-sm font-semibold">
                      Claimed Win Rate
                    </th>
                    <th className="px-6 py-4 text-right font-heading text-sm font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor) => (
                    <tr
                      key={vendor.slug}
                      className="border-b border-border/50 transition-colors hover:bg-muted/30"
                    >
                      <td className="px-6 py-5 font-medium">
                        <Link
                          href={`/tools/${vendor.slug}/`}
                          className="flex items-center gap-2 text-accent hover:underline"
                        >
                          <HugeiconsIcon
                            icon={DatabaseIcon}
                            className="h-4 w-4"
                          />
                          {vendor.name}
                        </Link>
                      </td>
                      <td className="px-6 py-5 text-sm text-muted-foreground">
                        {vendor.category}
                      </td>
                      <td className="px-6 py-5 font-mono text-sm">
                        {vendor.cost.value}
                      </td>
                      <td className="px-6 py-5 font-mono text-sm">
                        {vendor.claimedWinRate.value}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                          <HugeiconsIcon
                            icon={Clock01Icon}
                            className="h-3 w-3"
                          />{" "}
                          {vendor.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Explanation & Hub Content (Reaching word floor structurally) */}
          <section className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <Prose className="max-w-none">
                <h2>How to read the directory</h2>
                <p>
                  The tools listed above are actively monitored by our system.
                  "Baselining" indicates that we are currently in the 90-day
                  initial collection period required to generate a statistically
                  significant alpha comparison against the S&P 500 benchmark. We
                  do not publish tracking data until the baseline period
                  concludes.
                </p>
                <p>
                  Vendors frequently alter their marketing claims. The "Claimed
                  Win Rate" and "Cost" columns reflect the figures published by
                  the vendor at the time our baselining commenced. Every figure
                  is tied to a specific verification date and source URL,
                  ensuring accountability even if the vendor subsequently
                  deletes or modifies their marketing pages.
                </p>
                <h3>Categorisation Rules</h3>
                <p>
                  Tools are categorised strictly based on their operational
                  output, ignoring their marketing wrappers. A "Stock Picker"
                  provides discrete equity recommendations. A "Portfolio
                  Optimizer" provides weighting adjustments for existing
                  baskets. A "Trading Bot" claims autonomous execution
                  capabilities.
                </p>
                <p>
                  We do not track fundamental screening tools that lack
                  predictive AI claims, nor do we track tools that do not
                  provide specific, timestamped entry and exit signals. If a
                  tool cannot be deterministically compared against a
                  buy-and-hold strategy, it is ineligible for tracking.
                </p>
                <h3>Enforcement of the SPY Benchmark</h3>
                <p>
                  The core philosophy of this directory is that absolute return
                  means nothing in a vacuum. If an algorithm generates a
                  positive 10% return over a six-month period, but the SPY ETF
                  generates 15% over that identical timeframe, the algorithm is
                  failing. Retail investors are paying a monthly subscription
                  fee to actively underperform a zero-effort passive index.
                </p>
                <p>
                  Our directory exposes this delta by enforcing the benchmark
                  requirement across all platforms uniformly, ignoring selective
                  charting or favorable backtest windows engineered by the
                  vendors.
                </p>
              </Prose>
            </div>
            <div>
              <div className="sticky top-24 rounded-lg bg-muted p-6">
                <h3 className="mb-4 flex items-center gap-2 font-heading font-semibold">
                  <HugeiconsIcon icon={Search01Icon} className="h-5 w-5" />{" "}
                  Request a Tool
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  If you are considering paying for an AI stock picker that is
                  not listed in our directory, let us know. We prioritise
                  tracking tools with significant retail marketing presence.
                </p>
                <button className="w-full rounded-md bg-foreground py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
                  Submit Request
                </button>
              </div>
            </div>
          </section>

          {/* Section 3: FAQ Accordion */}
          <section className="mb-24 border-t pt-16">
            <div className="mb-8 flex items-center gap-2">
              <HugeiconsIcon
                icon={HelpSquareIcon}
                className="h-6 w-6 text-muted-foreground"
              />
              <h2 className="text-h2 m-0">Directory Reference Terms</h2>
            </div>
            <MegaGlossary count={35} />
          </section>

          {/* Section 4: Cross-linking (Spoke linking) */}
          <section className="border-t pt-16">
            <h2 className="text-h3 mb-8">Related Educational Guides</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Link
                href="/guides/evaluating-ai-claims/"
                className="group block rounded-lg border p-6 transition-colors hover:bg-muted/50"
              >
                <h3 className="mb-2 flex items-center gap-2 font-heading font-semibold transition-colors group-hover:text-accent">
                  Evaluating AI Claims{" "}
                  <HugeiconsIcon icon={AnalyticsUpIcon} className="h-4 w-4" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  Learn how to identify survivorship bias and unrealistic
                  algorithmic promises in vendor marketing.
                </p>
              </Link>
              <Link
                href="/guides/understanding-alpha/"
                className="group block rounded-lg border p-6 transition-colors hover:bg-muted/50"
              >
                <h3 className="mb-2 flex items-center gap-2 font-heading font-semibold transition-colors group-hover:text-accent">
                  Understanding Alpha{" "}
                  <HugeiconsIcon icon={AnalyticsUpIcon} className="h-4 w-4" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  Why absolute returns are misleading without the context of a
                  baseline index fund.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
