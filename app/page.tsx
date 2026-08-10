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
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import { buildWebsiteJsonLd, buildOrganizationJsonLd } from "@/lib/json-ld"

export default function Home() {
  const websiteJsonLd = buildWebsiteJsonLd()
  const orgJsonLd = buildOrganizationJsonLd()

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Section 1: Split Hero */}
        <section className="relative border-b bg-background py-16 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <div>
                <span className="mb-6 block flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  <HugeiconsIcon icon={DatabaseIcon} className="h-4 w-4" />{" "}
                  Independent Verification
                </span>
                <h1 className="text-display mb-8">
                  Do AI stock pickers actually work?
                </h1>
                <p className="text-lead mb-10 max-w-xl">
                  We track the performance claims of AI trading algorithms
                  against a buy-and-hold S&P 500 benchmark. No sponsored
                  rankings, just reproducible data.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#tracker"
                    className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    View Live Tracking{" "}
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      className="h-4 w-4"
                    />
                  </a>
                  <a
                    href="/about/"
                    className="rounded-md border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
                  >
                    Read Methodology
                  </a>
                </div>
              </div>
              <div className="relative w-full">
                <AbstractGraph />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Horizontal Metric Strip */}
        <section className="relative border-b bg-muted py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 gap-8 divide-x divide-border/50 md:grid-cols-4 md:gap-4">
              <div className="flex flex-col px-4 text-center">
                <span className="mb-2 font-mono text-3xl font-semibold">
                  {"{{VERIFY: Tools tracked count}}"}
                </span>
                <span className="flex items-center justify-center gap-1 text-sm tracking-wider text-muted-foreground uppercase">
                  <HugeiconsIcon icon={Search01Icon} className="h-3 w-3" />{" "}
                  Tools Tracked
                </span>
              </div>
              <div className="flex flex-col px-4 text-center">
                <span className="mb-2 font-mono text-3xl font-semibold">
                  {"{{VERIFY: Aggregate alpha figure}}"}
                </span>
                <span className="flex items-center justify-center gap-1 text-sm tracking-wider text-muted-foreground uppercase">
                  <HugeiconsIcon icon={AnalyticsUpIcon} className="h-3 w-3" />{" "}
                  Avg Alpha vs SPY
                </span>
              </div>
              <div className="flex flex-col px-4 text-center">
                <span className="mb-2 font-mono text-3xl font-semibold">
                  {"{{VERIFY: Win rate percentage}}"}
                </span>
                <span className="flex items-center justify-center gap-1 text-sm tracking-wider text-muted-foreground uppercase">
                  <HugeiconsIcon
                    icon={JusticeScale01Icon}
                    className="h-3 w-3"
                  />{" "}
                  Win Rate
                </span>
              </div>
              <div className="flex flex-col px-4 text-center">
                <span className="mb-2 font-mono text-3xl font-semibold text-chart-1">
                  SPY
                </span>
                <span className="flex items-center justify-center gap-1 text-sm tracking-wider text-muted-foreground uppercase">
                  <HugeiconsIcon icon={Clock01Icon} className="h-3 w-3" />{" "}
                  Benchmark
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Signature Component Anchor */}
        <section id="tracker" className="relative border-b bg-background py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-12 max-w-3xl">
              <span className="mb-4 block font-mono text-xs tracking-widest text-muted-foreground uppercase">
                The Apparatus
              </span>
              <h2 className="text-h2 mb-4">Live Performance Tracking</h2>
              <p className="text-lead">
                Every trade recommendation published by tracked tools is logged,
                timestamped, and compared to holding the SPY index ETF over the
                same period.
              </p>
            </div>
            <PerformanceTracker />
          </div>
        </section>

        {/* Section 4: Bento Grid (Why this exists) */}
        <section className="relative border-b bg-muted/50 py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="mb-4 block font-mono text-xs tracking-widest text-muted-foreground uppercase">
                The Problem
              </span>
              <h2 className="text-h2 mb-4">The rise of "AI-washing"</h2>
              <p className="text-lead">
                Retail investors are targeted with sophisticated marketing
                promising algorithmic edge, but verifiable track records are
                scarce.
              </p>
            </div>

            <div className="grid auto-rows-[250px] grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border bg-card p-8 md:col-span-2">
                <HugeiconsIcon
                  icon={Shield01Icon}
                  className="mb-4 h-8 w-8 text-muted-foreground"
                />
                <div>
                  <h3 className="mb-2 font-heading text-xl font-semibold">
                    SEC Enforcement
                  </h3>
                  <p className="text-muted-foreground">
                    The SEC brought its first AI-washing enforcement actions in
                    March 2024 against Delphia and Global Predictions for making
                    false and misleading claims about their purported use of
                    artificial intelligence.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-card p-8">
                <HugeiconsIcon
                  icon={ViewOffIcon}
                  className="mb-4 h-8 w-8 text-muted-foreground"
                />
                <div>
                  <h3 className="mb-2 font-heading text-xl font-semibold">
                    Opaque Models
                  </h3>
                  <p className="text-muted-foreground">
                    Vendors rarely disclose their trading models or historical
                    losses.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-card p-8">
                <HugeiconsIcon
                  icon={DatabaseIcon}
                  className="mb-4 h-8 w-8 text-muted-foreground"
                />
                <div>
                  <h3 className="mb-2 font-heading text-xl font-semibold">
                    Survivorship Bias
                  </h3>
                  <p className="text-muted-foreground">
                    Marketing materials highlight winning picks while quietly
                    deleting failed predictions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-card p-8 md:col-span-2">
                <HugeiconsIcon
                  icon={AnalyticsUpIcon}
                  className="mb-4 h-8 w-8 text-muted-foreground"
                />
                <div>
                  <h3 className="mb-2 font-heading text-xl font-semibold">
                    The Benchmark Reality
                  </h3>
                  <p className="text-muted-foreground">
                    Historically, less than{" "}
                    {"{{VERIFY: % of active funds beating SPY}}"} of active
                    managers beat the S&P 500 over a 10-year period. We demand
                    evidence that AI tools perform better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Process Stepper */}
        <section className="relative border-b bg-background py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-16 max-w-2xl">
              <span className="mb-4 block font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Methodology
              </span>
              <h2 className="text-h2 mb-4">How we verify claims</h2>
              <p className="text-lead">
                Our tracking methodology is public, deterministic, and designed
                to eliminate cherry-picking.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="relative">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-muted font-mono font-bold">
                  1
                </div>
                <HugeiconsIcon
                  icon={Search01Icon}
                  className="mb-4 h-6 w-6 text-foreground"
                />
                <h3 className="mb-2 font-heading font-semibold">Capture</h3>
                <p className="text-sm text-muted-foreground">
                  We log recommendations the moment they are published, before
                  they can be amended.
                </p>
              </div>
              <div className="relative">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-muted font-mono font-bold">
                  2
                </div>
                <HugeiconsIcon
                  icon={Clock01Icon}
                  className="mb-4 h-6 w-6 text-foreground"
                />
                <h3 className="mb-2 font-heading font-semibold">Hold</h3>
                <p className="text-sm text-muted-foreground">
                  Positions are held virtually for the vendor's stated duration
                  or our default 90-day window.
                </p>
              </div>
              <div className="relative">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-muted font-mono font-bold">
                  3
                </div>
                <HugeiconsIcon
                  icon={JusticeScale01Icon}
                  className="mb-4 h-6 w-6 text-foreground"
                />
                <h3 className="mb-2 font-heading font-semibold">Compare</h3>
                <p className="text-sm text-muted-foreground">
                  Every trade is matched against the exact return of SPY over
                  the identical timeframe.
                </p>
              </div>
              <div className="relative">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-muted font-mono font-bold">
                  4
                </div>
                <HugeiconsIcon
                  icon={Alert01Icon}
                  className="mb-4 h-6 w-6 text-foreground"
                />
                <h3 className="mb-2 font-heading font-semibold">Publish</h3>
                <p className="text-sm text-muted-foreground">
                  Results are published immutably. We do not alter historical
                  data under any circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Alternating Explainer */}
        <section className="relative border-b bg-muted py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-24 grid grid-cols-1 items-center gap-16 md:grid-cols-2">
              <div>
                <span className="mb-4 block font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Transparency
                </span>
                <h2 className="text-h3 mb-4">Why we do this</h2>
                <p className="text-body mb-6 text-muted-foreground">
                  The financial tooling space is crowded with affiliate sites
                  that rank tools based on payout rates, not performance. These
                  sites publish opinions, not data.
                </p>
                <p className="text-body text-muted-foreground">
                  We believe retail investors deserve a rigorous, objective
                  evaluation of these tools. If an algorithm genuinely provides
                  alpha, the data will prove it. If it doesn't, we publish that
                  too.
                </p>
              </div>
              <div className="flex aspect-video items-center justify-center rounded-lg border bg-card p-8">
                <div className="flex flex-col items-center text-center">
                  <HugeiconsIcon
                    icon={DatabaseIcon}
                    className="mb-4 h-8 w-8 text-muted-foreground"
                  />
                  <div className="mb-2 font-mono text-sm text-muted-foreground">
                    Current Alpha Verification
                  </div>
                  <div className="font-mono text-2xl font-semibold">
                    PENDING_DATA
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
              <div className="order-2 flex aspect-video items-center justify-center rounded-lg border bg-card p-8 md:order-1">
                <div className="flex flex-col items-center text-center">
                  <HugeiconsIcon
                    icon={Shield01Icon}
                    className="mb-4 h-8 w-8 text-muted-foreground"
                  />
                  <div className="mb-2 font-mono text-sm text-muted-foreground">
                    Affiliate Policy
                  </div>
                  <div className="font-mono text-lg">Disclosed & Unbiased</div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="mb-4 block font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Funding
                </span>
                <h2 className="text-h3 mb-4">How we are funded</h2>
                <p className="text-body mb-6 text-muted-foreground">
                  We are monetised via affiliate links to the same tools we
                  evaluate. This is precisely why our methodology is public and
                  our data is immutable.
                </p>
                <p className="text-body text-muted-foreground">
                  Our commitment is to the accuracy of the tracking. The data
                  remains unflattering when the performance is unflattering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Directory Preview (Empty State) */}
        <section className="relative border-b bg-background py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
              <div className="max-w-2xl">
                <span className="mb-4 block font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Directory
                </span>
                <h2 className="text-h2 mb-4">Tools Under Review</h2>
                <p className="text-lead">
                  We are currently establishing baselines for the following AI
                  trading platforms.
                </p>
              </div>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-4 font-heading text-sm font-semibold">
                      Tool Name
                    </th>
                    <th className="px-4 py-4 font-heading text-sm font-semibold">
                      Category
                    </th>
                    <th className="px-4 py-4 font-heading font-mono text-sm font-semibold">
                      Cost
                    </th>
                    <th className="px-4 py-4 text-right font-heading text-sm font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 transition-colors hover:bg-muted/30">
                    <td className="flex items-center gap-2 px-4 py-4 font-medium">
                      <HugeiconsIcon icon={DatabaseIcon} className="h-4 w-4" />{" "}
                      {"{{VERIFY: Tool Name 1}}"}
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">
                      Stock Picker
                    </td>
                    <td className="px-4 py-4 font-mono text-sm">
                      {"{{VERIFY: Price 1}}"}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-xs">
                        <HugeiconsIcon icon={Clock01Icon} className="h-3 w-3" />{" "}
                        Baselining
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border/50 transition-colors hover:bg-muted/30">
                    <td className="flex items-center gap-2 px-4 py-4 font-medium">
                      <HugeiconsIcon icon={DatabaseIcon} className="h-4 w-4" />{" "}
                      {"{{VERIFY: Tool Name 2}}"}
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">
                      Portfolio Optimizer
                    </td>
                    <td className="px-4 py-4 font-mono text-sm">
                      {"{{VERIFY: Price 2}}"}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-xs">
                        <HugeiconsIcon icon={Clock01Icon} className="h-3 w-3" />{" "}
                        Baselining
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 8: Final Conversion Band */}
        <section className="relative bg-foreground py-24 text-background">
          <div className="container mx-auto max-w-3xl px-4 text-center md:px-8">
            <h2 className="text-h2 mb-6 flex items-center justify-center gap-3 text-background">
              Don't buy until we verify.{" "}
              <HugeiconsIcon
                icon={Shield01Icon}
                className="h-8 w-8 text-accent"
              />
            </h2>
            <p className="mb-10 text-lg text-background/80">
              Join the newsletter to be notified when the first independent
              performance data is published. No spam, just data.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="w-full max-w-sm rounded-md border border-background/20 bg-background/10 px-4 py-3 text-background placeholder:text-background/50 focus:ring-2 focus:ring-accent focus:outline-none"
              />
              <button className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90">
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
