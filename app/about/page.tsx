import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Prose } from "@/components/Prose"
import { buildMetadata } from "@/lib/site"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"
import Link from "next/link"

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

            <Prose className="max-w-none">
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
                and "survivorship bias" heavily skews marketing materials. We
                demand evidence. To understand more about these regulatory
                precedents, read our guide on{" "}
                <Link href="/guides/sec-enforcement-history/">
                  SEC Enforcement History
                </Link>
                .
              </p>

              <h2>2. Data Collection (Capture)</h2>
              <p>
                To eliminate cherry-picking, we log trade recommendations the
                moment they are published.
              </p>
              <ul>
                <li>
                  <strong>Timestamping:</strong> Every recommendation is
                  recorded with a precise timestamp.
                </li>
                <li>
                  <strong>Immutability:</strong> Once a recommendation is
                  logged, it cannot be altered or removed from our dataset, even
                  if the vendor subsequently deletes it.
                </li>
                <li>
                  <strong>Entry Price:</strong> We use the opening price of the
                  asset on the first trading day following the recommendation,
                  simulating a realistic retail execution.
                </li>
              </ul>

              <h2>3. The Holding Period</h2>
              <p>
                A recommendation is only as good as its holding period. We hold
                positions virtually based on two criteria:
              </p>
              <ul>
                <li>
                  <strong>Vendor Stated:</strong> If the tool specifies a target
                  duration (e.g., "30-day swing"), we hold for exactly that
                  period.
                </li>
                <li>
                  <strong>Default Window:</strong> If no duration is specified,
                  we apply a strict 90-day holding window to standardise
                  comparison.
                </li>
              </ul>

              <h2>4. The Benchmark Comparison</h2>
              <p>
                Absolute return is meaningless without context. Every tracked
                trade is compared against the S&P 500 index. If you need a
                deeper primer on these concepts, read our guide on{" "}
                <Link href="/guides/understanding-alpha/">
                  Understanding Alpha and Benchmarks
                </Link>
                .
              </p>
              <ul>
                <li>
                  <strong>The Index:</strong> We use the SPDR S&P 500 ETF Trust
                  (SPY) as our benchmark.
                </li>
                <li>
                  <strong>Exact Timeframe:</strong> If Tool A recommends a stock
                  on Jan 1st and we hold it until April 1st, we compare the
                  return against buying and holding SPY from Jan 1st to April
                  1st.
                </li>
                <li>
                  <strong>Alpha Calculation:</strong> The difference between the
                  tool's return and the SPY return is the generated "Alpha". A
                  negative Alpha means the tool underperformed buying an index
                  fund.
                </li>
              </ul>

              <h2>5. Affiliate Disclosure</h2>
              <p>
                We are funded via affiliate links to the same tools we evaluate.
                We believe this model requires extreme transparency. If you
                purchase a tool through our links, we may earn a commission.
              </p>
              <p>
                This is precisely why our methodology is public and our tracking
                apparatus is deterministic. We do not accept payment for
                favorable rankings, and the data remains visible even when it
                demonstrates that a tool underperforms the market. See the live
                data in our <Link href="/tools/">Tools Directory</Link>.
              </p>
            </Prose>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
