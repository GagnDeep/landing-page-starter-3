import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { PerformanceTracker } from "@/components/PerformanceTracker"
import { AbstractGraph } from "@/components/AbstractGraph"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Shield01Icon,
  AnalyticsUpIcon,
  DatabaseIcon,
  ViewOffIcon,
  Search01Icon,
  Clock01Icon,
  JusticeScale01Icon,
  Alert01Icon,
  ArrowRight01Icon
} from "@hugeicons/core-free-icons"
import { buildWebsiteJsonLd, buildOrganizationJsonLd } from "@/lib/json-ld"
import Link from "next/link"
import { getVendors } from "@/content/data"

export default function Home() {
  const websiteJsonLd = buildWebsiteJsonLd()
  const orgJsonLd = buildOrganizationJsonLd()
  const topVendors = getVendors().slice(0, 2)

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Header />

      <main className="flex-1">
        {/* Section 1: Split Hero */}
        <section className="bg-background py-16 md:py-32 border-b relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6 block flex items-center gap-2">
                  <HugeiconsIcon icon={DatabaseIcon} className="h-4 w-4" /> Independent Verification
                </span>
                <h1 className="text-display mb-8">Do AI stock pickers actually work?</h1>
                <p className="text-lead mb-10 max-w-xl">
                  We track the performance claims of AI trading algorithms against a buy-and-hold S&P 500 benchmark. No sponsored rankings, just reproducible data.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#tracker" className="bg-foreground text-background px-6 py-3 rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors inline-flex items-center gap-2">
                    View Live Tracking <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
                  </a>
                  <Link href="/about/" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-secondary/80 transition-colors border">
                    Read Methodology
                  </Link>
                  <Link href="/tools/" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-secondary/80 transition-colors border">
                    Browse Directory
                  </Link>
                  <Link href="/guides/" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-secondary/80 transition-colors border">
                    Educational Library
                  </Link>
                </div>
              </div>
              <div className="w-full relative">
                <AbstractGraph />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Horizontal Metric Strip */}
        <section className="bg-muted py-12 border-b relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-border/50">
              <div className="flex flex-col px-4 text-center">
                <span className="font-mono text-3xl font-semibold mb-2">{"{{VERIFY: Tools tracked count}}"}</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider flex items-center justify-center gap-1"><HugeiconsIcon icon={Search01Icon} className="h-3 w-3"/> Tools Tracked</span>
              </div>
              <div className="flex flex-col px-4 text-center">
                <span className="font-mono text-3xl font-semibold mb-2">{"{{VERIFY: Aggregate alpha figure}}"}</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider flex items-center justify-center gap-1"><HugeiconsIcon icon={AnalyticsUpIcon} className="h-3 w-3"/> Avg Alpha vs SPY</span>
              </div>
              <div className="flex flex-col px-4 text-center">
                <span className="font-mono text-3xl font-semibold mb-2">{"{{VERIFY: Win rate percentage}}"}</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider flex items-center justify-center gap-1"><HugeiconsIcon icon={JusticeScale01Icon} className="h-3 w-3"/> Win Rate</span>
              </div>
              <div className="flex flex-col px-4 text-center">
                <span className="font-mono text-3xl font-semibold mb-2 text-chart-1">SPY</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider flex items-center justify-center gap-1"><HugeiconsIcon icon={Clock01Icon} className="h-3 w-3"/> Benchmark</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Signature Component Anchor */}
        <section id="tracker" className="bg-background py-24 border-b relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 block">The Apparatus</span>
              <h2 className="text-h2 mb-4">Live Performance Tracking</h2>
              <p className="text-lead">
                Every trade recommendation published by tracked tools is logged, timestamped, and compared to holding the SPY index ETF over the same period.
              </p>
            </div>
            <PerformanceTracker />
          </div>
        </section>

        {/* Section 4: Bento Grid (Why this exists) */}
        <section className="bg-muted/50 py-24 border-b relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mb-16 text-center mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 block">The Problem</span>
              <h2 className="text-h2 mb-4">The rise of "AI-washing"</h2>
              <p className="text-lead">
                Retail investors are targeted with sophisticated marketing promising algorithmic edge, but verifiable track records are scarce.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
              <div className="md:col-span-2 bg-card border rounded-lg p-8 flex flex-col justify-between">
                <HugeiconsIcon icon={Shield01Icon} className="h-8 w-8 text-muted-foreground mb-4" />
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">SEC Enforcement</h3>
                  <p className="text-muted-foreground">
                    The SEC brought its first AI-washing enforcement actions in March 2024 against Delphia and Global Predictions for making false and misleading claims about their purported use of artificial intelligence.
                  </p>
                </div>
              </div>
              <div className="bg-card border rounded-lg p-8 flex flex-col justify-between">
                <HugeiconsIcon icon={ViewOffIcon} className="h-8 w-8 text-muted-foreground mb-4" />
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Opaque Models</h3>
                  <p className="text-muted-foreground">
                    Vendors rarely disclose their trading models or historical losses.
                  </p>
                </div>
              </div>
              <div className="bg-card border rounded-lg p-8 flex flex-col justify-between">
                <HugeiconsIcon icon={DatabaseIcon} className="h-8 w-8 text-muted-foreground mb-4" />
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Survivorship Bias</h3>
                  <p className="text-muted-foreground">
                    Marketing materials highlight winning picks while quietly deleting failed predictions.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 bg-card border rounded-lg p-8 flex flex-col justify-between">
                <HugeiconsIcon icon={AnalyticsUpIcon} className="h-8 w-8 text-muted-foreground mb-4" />
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">The Benchmark Reality</h3>
                  <p className="text-muted-foreground">
                    Historically, less than {"{{VERIFY: % of active funds beating SPY}}"} of active managers beat the S&P 500 over a 10-year period. We demand evidence that AI tools perform better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Process Stepper */}
        <section className="bg-background py-24 border-b relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 block">Methodology</span>
              <h2 className="text-h2 mb-4">How we verify claims</h2>
              <p className="text-lead">
                Our tracking methodology is public, deterministic, and designed to eliminate cherry-picking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-mono font-bold mb-6">1</div>
                <HugeiconsIcon icon={Search01Icon} className="h-6 w-6 text-foreground mb-4" />
                <h3 className="font-heading font-semibold mb-2">Capture</h3>
                <p className="text-sm text-muted-foreground">We log recommendations the moment they are published, before they can be amended.</p>
              </div>
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-mono font-bold mb-6">2</div>
                <HugeiconsIcon icon={Clock01Icon} className="h-6 w-6 text-foreground mb-4" />
                <h3 className="font-heading font-semibold mb-2">Hold</h3>
                <p className="text-sm text-muted-foreground">Positions are held virtually for the vendor's stated duration or our default 90-day window.</p>
              </div>
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-mono font-bold mb-6">3</div>
                <HugeiconsIcon icon={JusticeScale01Icon} className="h-6 w-6 text-foreground mb-4" />
                <h3 className="font-heading font-semibold mb-2">Compare</h3>
                <p className="text-sm text-muted-foreground">Every trade is matched against the exact return of SPY over the identical timeframe.</p>
              </div>
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-mono font-bold mb-6">4</div>
                <HugeiconsIcon icon={Alert01Icon} className="h-6 w-6 text-foreground mb-4" />
                <h3 className="font-heading font-semibold mb-2">Publish</h3>
                <p className="text-sm text-muted-foreground">Results are published immutably. We do not alter historical data under any circumstances.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Alternating Explainer */}
        <section className="bg-muted py-24 border-b relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 block">Transparency</span>
                <h2 className="text-h3 mb-4">Why we do this</h2>
                <p className="text-body mb-6 text-muted-foreground">
                  The financial tooling space is crowded with affiliate sites that rank tools based on payout rates, not performance. These sites publish opinions, not data.
                </p>
                <p className="text-body text-muted-foreground">
                  We believe retail investors deserve a rigorous, objective evaluation of these tools. If an algorithm genuinely provides alpha, the data will prove it. If it doesn't, we publish that too.
                </p>
              </div>
              <div className="bg-card border rounded-lg p-8 aspect-video flex items-center justify-center">
                <div className="text-center flex flex-col items-center">
                  <HugeiconsIcon icon={DatabaseIcon} className="h-8 w-8 text-muted-foreground mb-4"/>
                  <div className="font-mono text-sm text-muted-foreground mb-2">Current Alpha Verification</div>
                  <div className="font-mono text-2xl font-semibold">PENDING_DATA</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 bg-card border rounded-lg p-8 aspect-video flex items-center justify-center">
                 <div className="text-center flex flex-col items-center">
                  <HugeiconsIcon icon={Shield01Icon} className="h-8 w-8 text-muted-foreground mb-4"/>
                  <div className="font-mono text-sm text-muted-foreground mb-2">Affiliate Policy</div>
                  <div className="font-mono text-lg">Disclosed & Unbiased</div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 block">Funding</span>
                <h2 className="text-h3 mb-4">How we are funded</h2>
                <p className="text-body mb-6 text-muted-foreground">
                  We are monetised via affiliate links to the same tools we evaluate. This is precisely why our methodology is public and our data is immutable.
                </p>
                <p className="text-body text-muted-foreground">
                  Our commitment is to the accuracy of the tracking. The data remains unflattering when the performance is unflattering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Directory Preview (Empty State) */}
        <section className="bg-background py-24 border-b relative">
          <div className="container mx-auto px-4 md:px-8">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 block">Directory</span>
                <h2 className="text-h2 mb-4">Tools Under Review</h2>
                <p className="text-lead">
                  We are currently establishing baselines for the following AI trading platforms.
                </p>
              </div>
              <Link href="/tools/" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
                View Full Directory <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4"/>
              </Link>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-4 font-heading font-semibold text-sm">Tool Name</th>
                    <th className="py-4 px-4 font-heading font-semibold text-sm">Category</th>
                    <th className="py-4 px-4 font-heading font-semibold text-sm font-mono">Cost</th>
                    <th className="py-4 px-4 font-heading font-semibold text-sm text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {topVendors.map(vendor => (
                    <tr key={vendor.slug} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-4 font-medium flex items-center gap-2">
                        <Link href={`/tools/${vendor.slug}/`} className="flex items-center gap-2 hover:text-accent transition-colors">
                          <HugeiconsIcon icon={DatabaseIcon} className="h-4 w-4"/> {vendor.name}
                        </Link>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground text-sm">{vendor.category}</td>
                      <td className="py-4 px-4 font-mono text-sm">{vendor.cost.value}</td>
                      <td className="py-4 px-4 text-right"><span className="inline-flex items-center gap-1 px-2 py-1 bg-muted text-xs rounded-full"><HugeiconsIcon icon={Clock01Icon} className="h-3 w-3"/> {vendor.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 8: Final Conversion Band */}
        <section className="bg-foreground text-background py-24 relative">
          <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
            <h2 className="text-h2 mb-6 text-background flex items-center justify-center gap-3">
               Don't buy until we verify. <HugeiconsIcon icon={Shield01Icon} className="h-8 w-8 text-accent"/>
            </h2>
            <p className="text-lg text-background/80 mb-10">
              Join the newsletter to be notified when the first independent performance data is published. No spam, just data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 rounded-md bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-accent w-full max-w-sm"
              />
              <button className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-accent/90 transition-colors">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
