import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { PerformanceTracker } from "@/components/PerformanceTracker"
import { NewsletterForm } from "@/components/NewsletterForm"
import { AbstractGraph } from "@/components/AbstractGraph"
import { MegaGlossary, GlossaryAccordion } from "@/components/MegaGlossary"
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
  HelpSquareIcon,
  Tick01Icon,
  Cancel01Icon,
  FilterIcon,
} from "@hugeicons/core-free-icons"
import { buildWebsiteJsonLd, buildOrganizationJsonLd } from "@/lib/json-ld"
import Link from "next/link"
import { getVendors } from "@/content/data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChartGraphic } from "@/components/ChartGraphic"
import { GeometricMotif } from "@/components/GeometricMotif"

export default function Home() {
  const websiteJsonLd = buildWebsiteJsonLd()
  const orgJsonLd = buildOrganizationJsonLd()
  const topVendors = getVendors().slice(0, 2)

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
                <div className="flex flex-wrap gap-4">
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
                  <Link
                    href="/about/"
                    className="rounded-md border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
                  >
                    Read Methodology
                  </Link>
                  <Link
                    href="/tools/"
                    className="rounded-md border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
                  >
                    Browse Directory
                  </Link>
                  <Link
                    href="/guides/"
                    className="rounded-md border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
                  >
                    Educational Library
                  </Link>
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
              <span className="mb-4 block flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                <HugeiconsIcon icon={Search01Icon} className="h-4 w-4" /> The
                Apparatus
              </span>
              <h2 className="text-h2 mb-4">Live Performance Tracking</h2>
              <p className="text-lead">
                Every trade recommendation published by tracked tools is logged,
                timestamped, and compared to holding the SPY index ETF over the
                same period. This isolated view strips away marketing noise and
                reveals true algorithmic alpha.
              </p>
            </div>
            <PerformanceTracker />
          </div>
        </section>

        {/* Section 4: Bento Grid (Why this exists) */}
        <section className="relative border-b bg-muted py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
              <span className="mb-4 flex items-center justify-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                <HugeiconsIcon icon={ViewOffIcon} className="h-4 w-4" /> The
                Problem
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
                  <p className="leading-relaxed text-muted-foreground">
                    The SEC brought its first AI-washing enforcement actions in
                    March 2024 against Delphia and Global Predictions for making
                    false and misleading claims about their purported use of
                    artificial intelligence. This signals a regulatory shift
                    toward demanding proof of algorithmic efficacy.
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
                  <p className="leading-relaxed text-muted-foreground">
                    Vendors rarely disclose their trading models or historical
                    losses, hiding behind proprietary black boxes.
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
                  <p className="leading-relaxed text-muted-foreground">
                    Marketing materials highlight winning picks while quietly
                    deleting failed predictions, heavily skewing perceived
                    historical accuracy.
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
                  <p className="leading-relaxed text-muted-foreground">
                    Historically, less than{" "}
                    {"{{VERIFY: % of active funds beating SPY}}"} of active
                    managers beat the S&P 500 over a 10-year period. We demand
                    evidence that highly marketed AI tools perform better than
                    this zero-effort baseline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Comparison Matrix (New Archetype) */}
        <section className="relative border-b bg-background py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-16 max-w-2xl">
              <span className="mb-4 block flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                <HugeiconsIcon icon={FilterIcon} className="h-4 w-4" />{" "}
                Standards
              </span>
              <h2 className="text-h2 mb-4">
                Our Verification vs. Affiliate Sites
              </h2>
              <p className="text-lead">
                How our deterministic tracking apparatus compares to the
                standard industry approach of affiliate reviews.
              </p>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse overflow-hidden rounded-lg border bg-card text-left">
                <thead>
                  <tr className="border-b bg-muted">
                    <th className="px-6 py-5 font-heading font-semibold">
                      Evaluation Metric
                    </th>
                    <th className="border-r border-l px-6 py-5 font-heading font-semibold">
                      Standard Affiliate Review
                    </th>
                    <th className="px-6 py-5 font-heading font-semibold text-accent">
                      Our Laboratory Protocol
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b transition-colors hover:bg-muted/30">
                    <td className="px-6 py-5 text-sm font-medium">
                      Data Source
                    </td>
                    <td className="border-r border-l px-6 py-5 text-sm text-muted-foreground">
                      Vendor-provided marketing sheets
                    </td>
                    <td className="px-6 py-5 text-sm font-medium">
                      Real-time signal capture
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/30">
                    <td className="px-6 py-5 text-sm font-medium">
                      Survivorship Bias
                    </td>
                    <td className="flex items-center gap-2 border-r border-l px-6 py-5 text-sm text-destructive">
                      <HugeiconsIcon icon={Cancel01Icon} className="h-4 w-4" />{" "}
                      Vulnerable to deleted history
                    </td>
                    <td className="flex items-center gap-2 px-6 py-5 text-sm font-medium text-accent">
                      <HugeiconsIcon icon={Tick01Icon} className="h-4 w-4" />{" "}
                      Immutable append-only ledger
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/30">
                    <td className="px-6 py-5 text-sm font-medium">
                      Benchmark Context
                    </td>
                    <td className="border-r border-l px-6 py-5 text-sm text-muted-foreground">
                      Absolute returns highlighted in isolation
                    </td>
                    <td className="px-6 py-5 text-sm font-medium">
                      Strict SPY delta (Alpha) tracking
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-muted/30">
                    <td className="px-6 py-5 text-sm font-medium">
                      Monetization Conflict
                    </td>
                    <td className="border-r border-l px-6 py-5 text-sm text-muted-foreground">
                      Paid for positive sentiment rankings
                    </td>
                    <td className="px-6 py-5 text-sm font-medium">
                      Affiliate funded, but data dictates layout
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 6: Process Stepper */}
        <section className="relative border-b bg-muted/30 py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-16 max-w-2xl">
              <span className="mb-4 block flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                <HugeiconsIcon icon={Clock01Icon} className="h-4 w-4" />{" "}
                Methodology
              </span>
              <h2 className="text-h2 mb-4">How we verify claims</h2>
              <p className="text-lead">
                Our tracking methodology is public, deterministic, and designed
                to eliminate cherry-picking entirely. We treat every signal as a
                binding execution order.
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
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We log recommendations the moment they are published, before
                  they can be amended. If an alert fires, we record the entry at
                  the next available market open price.
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
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Positions are held virtually for the vendor's stated duration
                  or our default 90-day window, ensuring consistency in
                  timeframe measurements.
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
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Every trade is matched against the exact absolute return of
                  SPY over the identical timeframe, isolating the algorithm's
                  specific market alpha.
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
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Results are published immutably. We do not alter historical
                  data under any circumstances, preventing retroactive dashboard
                  cleansing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Timeline / Roadmap Rail (New Archetype) */}
        <section className="relative border-b bg-background py-24">
          <div className="container mx-auto grid grid-cols-1 gap-16 px-4 md:px-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <span className="mb-4 block flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                <HugeiconsIcon icon={Clock01Icon} className="h-4 w-4" /> Roadmap
              </span>
              <h2 className="text-h2 mb-4">Laboratory Lifecycle</h2>
              <p className="text-lead mb-8">
                The process of moving an algorithmic tool from an initial
                marketing claim to a fully verified profile.
              </p>
              <div className="relative mx-auto flex aspect-square w-full max-w-[250px] items-center justify-center opacity-80">
                <GeometricMotif />
              </div>
            </div>
            <div className="relative border-l border-border/50 pl-8 lg:col-span-2">
              <div className="relative mb-12">
                <div className="absolute top-1 -left-[41px] h-4 w-4 rounded-full bg-accent"></div>
                <h3 className="mb-2 font-heading text-lg font-semibold">
                  Phase 1: Ingestion & Static Baselining
                </h3>
                <p className="text-body leading-relaxed text-muted-foreground">
                  The vendor's marketing claims are locked into our matrix. We
                  document the subscription cost, the claimed win rate, and the
                  purported alpha. The tool enters our monitoring system and we
                  await the first active trading signal.
                </p>
              </div>
              <div className="relative mb-12">
                <div className="absolute top-1 -left-[41px] h-4 w-4 rounded-full border-2 border-border bg-muted"></div>
                <h3 className="mb-2 font-heading text-lg font-semibold">
                  Phase 2: Live Signal Capture (90 Days)
                </h3>
                <p className="text-body leading-relaxed text-muted-foreground">
                  Our systems record every executed trade. We enforce strict
                  mathematical controls, holding the position for the duration
                  required to achieve statistical significance. The tool remains
                  marked as "Baselining" in our directory.
                </p>
              </div>
              <div className="relative">
                <div className="absolute top-1 -left-[41px] h-4 w-4 rounded-full border-2 border-border bg-muted"></div>
                <h3 className="mb-2 font-heading text-lg font-semibold">
                  Phase 3: Public Report & Ongoing Ticker
                </h3>
                <p className="text-body leading-relaxed text-muted-foreground">
                  The baseline ends. The live alpha tracking graph is exposed to
                  the public. If the algorithm is underperforming the SPY index,
                  the negative deviation is charted permanently. The tracking
                  loop then runs indefinitely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Alternating Explainer */}
        <section className="relative border-b bg-muted/20 py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-24 grid grid-cols-1 items-center gap-16 md:grid-cols-2">
              <div>
                <span className="mb-4 block flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  <HugeiconsIcon icon={ViewOffIcon} className="h-4 w-4" />{" "}
                  Transparency
                </span>
                <h2 className="text-h3 mb-4">Why we do this</h2>
                <p className="text-body mb-6 text-muted-foreground">
                  The financial tooling space is crowded with affiliate sites
                  that rank tools based on payout rates, not performance. These
                  sites publish opinions, not verifiable data. They operate as
                  extensions of the vendor's marketing arm.
                </p>
                <p className="text-body text-muted-foreground">
                  We believe retail investors deserve a rigorous, objective
                  evaluation of these expensive subscription tools. If an
                  algorithm genuinely provides alpha, the tracked data will
                  prove it. If it doesn't, we publish that unflattering reality
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
              <div className="relative order-2 flex aspect-video items-center justify-center overflow-hidden rounded-lg border bg-card p-8 md:order-1">
                <ChartGraphic className="absolute inset-0 opacity-10" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <HugeiconsIcon
                    icon={Shield01Icon}
                    className="mb-4 h-8 w-8 text-muted-foreground"
                  />
                  <div className="mb-2 font-mono text-sm text-muted-foreground">
                    Affiliate Policy
                  </div>
                  <div className="font-mono text-lg font-medium">
                    Disclosed & Unbiased
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="mb-4 block flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  <HugeiconsIcon icon={AnalyticsUpIcon} className="h-4 w-4" />{" "}
                  Funding
                </span>
                <h2 className="text-h3 mb-4">How we are funded</h2>
                <p className="text-body mb-6 text-muted-foreground">
                  We are monetised via affiliate links to the same tools we
                  evaluate. We view this as a structural strength: it is
                  precisely why our methodology is completely public and our
                  tracking data is immutable.
                </p>
                <p className="text-body text-muted-foreground">
                  Our commitment is to the accuracy of the tracking ledger, not
                  the vendor's conversion rate. The data remains visible and
                  unflattering when the performance is unflattering. We do not
                  accept payment to remove negative reviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Directory Preview */}
        <section className="relative border-b bg-background py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
              <div className="max-w-2xl">
                <span className="mb-4 block flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  <HugeiconsIcon icon={DatabaseIcon} className="h-4 w-4" />{" "}
                  Directory
                </span>
                <h2 className="text-h2 mb-4">Tools Under Review</h2>
                <p className="text-lead">
                  We are currently establishing baselines for the following AI
                  trading platforms to test their marketed alpha.
                </p>
              </div>
              <Link
                href="/tools/"
                className="flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                View Full Directory{" "}
                <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
              </Link>
            </div>

            <div className="mb-16 w-full overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse overflow-hidden rounded-lg border bg-card text-left">
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
                    <th className="px-6 py-4 text-right font-heading text-sm font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topVendors.map((vendor) => (
                    <tr
                      key={vendor.slug}
                      className="border-b border-border/50 transition-colors hover:bg-muted/30"
                    >
                      <td className="flex items-center gap-2 px-6 py-4 font-medium">
                        <Link
                          href={`/tools/${vendor.slug}/`}
                          className="flex items-center gap-2 transition-colors hover:text-accent"
                        >
                          <HugeiconsIcon
                            icon={DatabaseIcon}
                            className="h-4 w-4"
                          />{" "}
                          {vendor.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {vendor.category}
                      </td>
                      <td className="px-6 py-4 font-mono text-sm">
                        {vendor.cost.value}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
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
          </div>
        </section>

        {/* Section 10: Mega Glossary Accordion for Word Floor Authority */}
        <section className="relative border-b bg-muted py-24">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <div className="mb-8 flex items-center justify-center gap-2">
              <HugeiconsIcon
                icon={HelpSquareIcon}
                className="h-8 w-8 text-muted-foreground"
              />
              <h2 className="text-h2 m-0 text-center">
                Comprehensive Glossary
              </h2>
            </div>
            <p className="text-lead mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Navigating the claims of algorithmic trading platforms requires a
              firm grasp of quantitative financial terminology. We provide this
              reference to help retail investors contextualize our verification
              matrix and the marketing materials they encounter.
            </p>
            <MegaGlossary count={35} />
          </div>
        </section>

        {/* Section 11: Final Conversion Band */}
        <section className="relative overflow-hidden bg-foreground py-24 text-background">
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.8"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>

          <div className="relative z-10 container mx-auto max-w-3xl px-4 text-center md:px-8">
            <h2 className="text-h2 mb-6 flex items-center justify-center gap-3 text-background">
              Don't buy until we verify.{" "}
              <HugeiconsIcon
                icon={Shield01Icon}
                className="h-8 w-8 text-accent"
              />
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-background/80">
              Join the newsletter to be notified when the first independent
              performance data is published. No spam, just empirical data.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
