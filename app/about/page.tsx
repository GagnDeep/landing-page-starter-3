import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Prose } from "@/components/Prose"
import { buildMetadata } from "@/lib/site"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  HelpSquareIcon,
  Search01Icon,
  Book01Icon,
  Shield01Icon,
  ViewOffIcon,
  Tick01Icon,
} from "@hugeicons/core-free-icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MegaGlossary } from "@/components/MegaGlossary"

export const metadata = buildMetadata({
  title: "Methodology",
  description:
    "Learn how we independently track, verify, and document the performance of AI stock-picking tools against a standard buy-and-hold S&P 500 benchmark ETF.",
  path: "/about/",
})

export default function About() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Methodology", item: "/about/" },
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-background py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <Breadcrumbs items={[{ name: "Methodology", href: "/about/" }]} />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <article>
            <span className="mb-6 block font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Methodology
            </span>
            <h1 className="text-display mb-8">How We Track AI Stock Pickers</h1>

            <div className="mb-12 flex items-center gap-4 border-y border-border py-4">
              <span className="font-mono text-sm text-muted-foreground">
                LAST UPDATED: 2024-03-15
              </span>
              <span className="ml-auto font-mono text-sm text-muted-foreground">
                STATUS: BASELINING
              </span>
            </div>

            <Prose className="mb-16 max-w-none">
              <p className="text-lead">
                The financial tooling space is crowded with affiliate sites that
                rank tools based on payout rates. We publish data. This page
                outlines exactly how we collect, hold, and compare that data.
              </p>

              <h2>1. The Problem of AI-Washing</h2>
              <p>
                Retail investors are heavily targeted by sophisticated marketing
                campaigns promising algorithmic edge. However, verifiable track
                records are scarce. In March 2024, the SEC brought its first
                AI-washing enforcement actions against Delphia and Global
                Predictions for making false and misleading claims about their
                purported use of artificial intelligence.
              </p>
              <p>
                This incident underscores a systemic issue: vendors rarely
                disclose their models, historical losses are quietly omitted,
                and survivorship bias heavily skews marketing materials. We
                demand evidence. To understand more about these regulatory
                precedents, read our guide on SEC Enforcement History.
              </p>
              <p>
                The lack of transparency allows vendors to sell expensive
                monthly subscriptions based entirely on theoretical,
                backward-looking performance charts. These charts are inherently
                flawed because they assume perfect execution and ignore the
                psychological friction of trading. Furthermore, they are often
                curve-fitted, meaning the algorithm's parameters were
                specifically tweaked to match the historical data perfectly,
                resulting in a model that looks infallible on paper but fails
                dramatically when exposed to live, unpredictable market
                conditions.
              </p>
              <p>
                By shifting the focus from theoretical backtests to empirical
                forward-testing, we strip away the marketing veneer. If a tool
                claims a high degree of predictive accuracy, it must prove that
                accuracy on an ongoing, forward-looking basis. This is the only
                way to establish true algorithmic efficacy.
              </p>
            </Prose>

            <section className="mb-16 border-t pt-16">
              <div className="mb-8 flex items-center gap-2">
                <HugeiconsIcon
                  icon={Book01Icon}
                  className="h-6 w-6 text-muted-foreground"
                />
                <h2 className="text-h2 m-0">2. Data Collection Matrix</h2>
              </div>
              <p className="text-lead mb-8">
                To eliminate cherry-picking, we log trade recommendations the
                moment they are published. We do not allow platforms to rewrite
                history or curate their track records after the fact.
              </p>

              <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex items-start gap-4 rounded-lg border bg-card p-6">
                  <div className="mt-1 rounded-full bg-muted p-2">
                    <HugeiconsIcon
                      icon={Tick01Icon}
                      className="h-4 w-4 text-foreground"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-lg font-semibold">
                      Timestamping
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Every recommendation is recorded with a precise timestamp.
                      We document the exact minute the signal was generated,
                      preventing vendors from claiming they issued an alert
                      earlier than they actually did.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border bg-card p-6">
                  <div className="mt-1 rounded-full bg-muted p-2">
                    <HugeiconsIcon
                      icon={Tick01Icon}
                      className="h-4 w-4 text-foreground"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-lg font-semibold">
                      Immutability
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Once a recommendation is logged, it cannot be altered or
                      removed from our dataset, even if the vendor subsequently
                      deletes it. This is the core defense against survivorship
                      bias.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border bg-card p-6">
                  <div className="mt-1 rounded-full bg-muted p-2">
                    <HugeiconsIcon
                      icon={Tick01Icon}
                      className="h-4 w-4 text-foreground"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-lg font-semibold">
                      Entry Price
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      We use the opening price of the asset on the first trading
                      day following the recommendation, simulating a realistic
                      retail execution. We do not use the lowest price of the
                      day, as that assumes impossible prescience on the part of
                      the retail trader.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border bg-card p-6">
                  <div className="mt-1 rounded-full bg-muted p-2">
                    <HugeiconsIcon
                      icon={Tick01Icon}
                      className="h-4 w-4 text-foreground"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-lg font-semibold">
                      Zero Discretion
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      We treat every signal as a binding execution order. We do
                      not apply human judgment to filter out "bad" setups, as
                      the entire premise of algorithmic trading is the removal
                      of emotional interference.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-body leading-relaxed text-muted-foreground">
                This rigorous capture methodology ensures that the performance
                we track mirrors the actual experience of a subscriber
                attempting to follow the tool's alerts in real-time. It
                completely neutralizes the vendor's ability to massage the data
                retrospectively.
              </p>
            </section>

            <section className="mb-16 border-t pt-16">
              <div className="mb-8 flex items-center gap-2">
                <HugeiconsIcon
                  icon={Shield01Icon}
                  className="h-6 w-6 text-muted-foreground"
                />
                <h2 className="text-h2 m-0">3. The Holding Period</h2>
              </div>
              <p className="text-lead mb-8">
                A recommendation is only as good as its holding period. We hold
                positions virtually based on two strict criteria to ensure fair
                baselining across all platforms:
              </p>

              <div className="mb-8 w-full overflow-x-auto rounded-lg border bg-card">
                <table className="w-full min-w-[600px] border-collapse text-left">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-6 py-4 font-heading text-sm font-semibold">
                        Constraint Type
                      </th>
                      <th className="px-6 py-4 font-heading text-sm font-semibold">
                        Execution Protocol
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="px-6 py-5 text-sm font-medium tracking-wider text-muted-foreground uppercase">
                        Vendor Stated Duration
                      </td>
                      <td className="text-body px-6 py-5 leading-relaxed text-muted-foreground">
                        If the tool specifies a target duration, we hold for
                        exactly that period. If they provide a specific
                        stop-loss or take-profit level, we honor those
                        constraints and close the position if the asset hits
                        those marks during the designated timeframe.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5 text-sm font-medium tracking-wider text-muted-foreground uppercase">
                        Default Tracking Window
                      </td>
                      <td className="text-body px-6 py-5 leading-relaxed text-muted-foreground">
                        If no duration is specified, we apply a strict 90-day
                        holding window to standardise comparison. This aligns
                        with standard quarterly reporting cycles and prevents
                        high-frequency noise from distorting long-term
                        predictive accuracy evaluations.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-body leading-relaxed text-muted-foreground">
                By enforcing strict holding periods, we prevent vendors from
                claiming endless, rolling successes. If an algorithm says to buy
                a stock, and that stock immediately drops 20% before recovering
                a year later, a vendor might try to claim that as a winning
                trade. Our holding period constraints force them to be
                accountable for the specific timeframe they indicated.
              </p>
            </section>

            <section className="mb-16 border-t pt-16">
              <div className="mb-8 flex items-center gap-2">
                <HugeiconsIcon
                  icon={Book01Icon}
                  className="h-6 w-6 text-muted-foreground"
                />
                <h2 className="text-h2 m-0">The Benchmark Comparison Phase</h2>
              </div>
              <Prose className="mb-8 max-w-none">
                <p>
                  Absolute return is meaningless without context. Every tracked
                  trade is compared against the S&P 500 index. If you need a
                  deeper primer on these concepts, read our related guides on
                  the hub.
                </p>
              </Prose>

              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-lg border bg-card p-6">
                  <div className="mb-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    The Index
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We use the SPDR S&P 500 ETF Trust (SPY) as our benchmark. It
                    represents the opportunity cost of capital for the average
                    retail investor. It requires zero research time and
                    negligible fees.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="mb-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Exact Timeframe
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    If Tool A recommends a stock on Jan 1st and we hold it until
                    April 1st, we compare the return against buying and holding
                    SPY from Jan 1st to April 1st. We measure the precise delta
                    between the two assets.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="mb-4 text-xs font-semibold tracking-wider text-accent uppercase">
                    Alpha Calculation
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    The difference between the tool's return and the SPY return
                    is the generated "Alpha". A negative Alpha means the tool
                    underperformed buying an index fund. If a vendor charges a
                    monthly fee to generate negative alpha, they are destroying
                    your capital twice.
                  </p>
                </div>
              </div>

              <Prose className="max-w-none">
                <p>
                  This benchmark enforcement is critical because it highlights
                  the fundamental truth of modern finance: most active managers
                  fail to beat the index. If highly-marketed AI tools cannot
                  clear this basic hurdle, retail investors are better off
                  passively indexing their capital.
                </p>
              </Prose>
            </section>

            <section className="mb-16 grid grid-cols-1 gap-12 border-t pt-16 md:grid-cols-2">
              <div>
                <div className="mb-6 flex items-center gap-2">
                  <HugeiconsIcon
                    icon={Shield01Icon}
                    className="h-5 w-5 text-muted-foreground"
                  />
                  <h2 className="text-h3 m-0">Affiliate Disclosure</h2>
                </div>
                <Prose className="max-w-none">
                  <p>
                    We are funded via affiliate links to the same tools we
                    evaluate. We believe this model requires extreme
                    transparency. If you purchase a tool through our links, we
                    may earn a commission.
                  </p>
                  <p>
                    This is precisely why our methodology is public and our
                    tracking apparatus is deterministic. We do not accept
                    payment for favorable rankings, and the data remains visible
                    even when it demonstrates that a tool underperforms the
                    market. See the live data in our Tools Directory.
                  </p>
                </Prose>
              </div>
              <div>
                <div className="mb-6 flex items-center gap-2">
                  <HugeiconsIcon
                    icon={ViewOffIcon}
                    className="h-5 w-5 text-muted-foreground"
                  />
                  <h2 className="text-h3 m-0">No Data Scrubbing</h2>
                </div>
                <Prose className="max-w-none">
                  <p>
                    We refuse to scrub negative data. If a heavily marketed
                    algorithm recommends a trade that results in a catastrophic
                    loss, that loss will remain permanently enshrined in our
                    tracking matrix.
                  </p>
                  <p>
                    Our primary utility is saving retail investors from
                    expensive, underperforming subscriptions. A negative alpha
                    score is critical data, and we will never remove a listing
                    to protect a vendor's reputation or preserve a high
                    affiliate conversion rate.
                  </p>
                </Prose>
              </div>
            </section>

            <section className="mb-16 border-t pt-16">
              <div className="mb-8 flex items-center gap-2">
                <HugeiconsIcon
                  icon={HelpSquareIcon}
                  className="h-6 w-6 text-muted-foreground"
                />
                <h2 className="text-h2 m-0">Methodology FAQ</h2>
              </div>
              <Accordion type="single" collapsible className="mb-12 w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-heading text-lg">
                    Do you adjust for dividend payouts during the holding
                    period?
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-muted-foreground">
                    Our standard tracking evaluates pure price-action alpha. We
                    do not manually adjust the baseline algorithmic trades for
                    dividend capture, nor do we adjust the SPY benchmark for its
                    yield. We are evaluating the predictive timing capability of
                    the algorithm regarding asset value, not total return
                    accounting.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-heading text-lg">
                    What happens if a tool claims a 100% win rate?
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-muted-foreground">
                    A claimed 100% win rate is an immediate red flag for
                    aggressive survivorship bias or severely constrained
                    timeframes. When we encounter these claims, we strictly
                    verify them against our captured data. If a losing trade is
                    logged in our system, the 100% claim is mathematically
                    disproven and marked as such on the tool's profile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-heading text-lg">
                    Why don't you track crypto or forex bots?
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-muted-foreground">
                    Our methodology requires a universally accessible, highly
                    liquid, and easily verifiable benchmark (the S&P 500).
                    Crypto and forex lack equivalent singular benchmark assets
                    that represent the baseline opportunity cost for a standard
                    retail investor.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-heading text-lg">
                    How can I verify your verification?
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-muted-foreground">
                    Transparency is fundamental to our mission. Once the
                    baselining periods are complete, we will provide an
                    exportable log of the specific trades and timestamps we
                    captured, allowing any user to independently calculate the
                    alpha generation using public market data.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="font-heading text-lg">
                    What constitutes a statistically significant baseline?
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-muted-foreground">
                    We consider 90 days of continuous, active trading signals to
                    be the absolute minimum floor for establishing a baseline
                    performance metric. This duration typically encompasses at
                    least one complete earnings cycle and standard fluctuations
                    in baseline market volatility, preventing brief lucky
                    streaks from masquerading as systemic algorithmic edge.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="font-heading text-lg">
                    How do you handle tools that offer multiple portfolios?
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-muted-foreground">
                    If a vendor offers multiple distinct algorithmic portfolios
                    (e.g., "Aggressive Growth" vs "Conservative Income"), we
                    will select the flagship or most heavily marketed tier for
                    baselining. We clearly note which specific algorithmic tier
                    is being tracked on the vendor's profile page within our
                    directory.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mb-8 flex items-center gap-2">
                <HugeiconsIcon
                  icon={HelpSquareIcon}
                  className="h-6 w-6 text-muted-foreground"
                />
                <h2 className="text-h2 m-0">
                  Methodology Reference Definitions
                </h2>
              </div>
              <MegaGlossary count={15} />
            </section>

            <section className="border-t pt-16">
              <div className="rounded-lg bg-muted p-8 text-center md:p-12">
                <HugeiconsIcon
                  icon={Search01Icon}
                  className="mx-auto mb-6 h-10 w-10 text-muted-foreground"
                />
                <h2 className="text-h3 mb-4">View the tracked data</h2>
                <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                  Browse our directory of currently tracked platforms to see
                  this methodology applied in real-time. Review the marketing
                  claims, the verification dates, and the live status of our
                  independent baselining.
                </p>
                <Link
                  href="/tools/"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  View Tools Directory
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
