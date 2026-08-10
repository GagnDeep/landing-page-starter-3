import { HugeiconsIcon } from "@hugeicons/react";
import { buildMetadata, generateJsonLd } from "@/lib/site";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RemovalTracker } from "@/components/RemovalTracker";

import { Shield01Icon, Search01Icon, Alert01Icon, DatabaseIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "They Are Tracking | Opt-Out Guides",
  path: "/"
});

// Inline SVG Graphic 1: Data Flow Diagram
const DataFlowSvg = () => (
  <svg viewBox="0 0 400 200" className="w-full h-auto max-w-md mx-auto" aria-hidden="true">
    <rect width="100%" height="100%" fill="transparent" />
    <circle cx="50" cy="100" r="30" fill="var(--color-primary)" opacity="0.2" />
    <circle cx="200" cy="100" r="40" fill="var(--color-destructive)" opacity="0.1" />
    <circle cx="350" cy="100" r="30" fill="var(--color-accent)" opacity="0.2" />
    <path d="M 90 100 L 150 100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
    <path d="M 250 100 L 310 100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
    <text x="50" y="105" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">YOU</text>
    <text x="200" y="105" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">BROKERS</text>
    <text x="350" y="105" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">PUBLIC</text>
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">

        {/* Section 1: Split Hero */}
        <section className="bg-background py-16 md:py-24 border-b border-border">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="uppercase text-xs font-bold tracking-wider text-muted-foreground">The Opt-Out Desk</span>
              <h1 className="h1">Take back your data from public search sites.</h1>
              <p className="lead">An indexed registry of data brokers and people-search sites with each opt-out procedure as it works today. We track the forms so you do not have to.</p>
              <div className="flex gap-4 pt-4">
                <Link href="#tracker" className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90">Start Removal</Link>
              </div>
            </div>
            <div className="relative" id="tracker">
               <RemovalTracker />
            </div>
          </div>
        </section>

        {/* Section 2: Disclosure / Trust Banner */}
        <section className="bg-muted py-8 border-b border-border text-center">
           <div className="container">
             <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <HugeiconsIcon icon={Alert01Icon} className="w-4 h-4" />
                <p><strong>Disclosure:</strong> The free manual path is never gated, throttled, or degraded. We earn affiliate income if you use a paid service listed on this site.</p>
             </div>
           </div>
        </section>

        {/* Section 3: The Problem (Alternating Layout) */}
        <section className="bg-background py-16 md:py-24 border-b border-border">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
               <DataFlowSvg />
             </div>
             <div className="order-1 md:order-2 space-y-6">
                <span className="uppercase text-xs font-bold tracking-wider text-muted-foreground">The Data Engine</span>
                <h2 className="h2">How they get your information.</h2>
                <p>Data brokers aggregate public records, purchase histories, and social media data. They build a profile and sell it to the highest bidder or publish it on people-search sites. This is not an accident; it's a multi-billion dollar industry.</p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-start space-x-3">
                     <HugeiconsIcon icon={DatabaseIcon} className="w-5 h-5 text-primary mt-0.5" />
                     <span><strong>Aggregation:</strong> They scrape public databases constantly.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                     <HugeiconsIcon icon={Search01Icon} className="w-5 h-5 text-primary mt-0.5" />
                     <span><strong>Publication:</strong> Your home address and relatives are made public.</span>
                  </li>
                </ul>
             </div>
          </div>
        </section>

        {/* Section 4: Grid of Services (Card Grid) */}
        <section className="bg-muted py-16 md:py-24 border-b border-border">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
               <span className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Coverage</span>
               <h2 className="h2">We track the top aggregators.</h2>
               <p className="text-muted-foreground">Detailed, step-by-step guides for removing your data from the sites that matter most.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 {name: "Whitepages", desc: "One of the oldest and largest people-search directories.", time: "48h"},
                 {name: "Spokeo", desc: "Aggregates social, public, and historical records.", time: "24h"},
                 {name: "Intelius", desc: "Provides background checks and reverse phone lookups.", time: "72h"}
               ].map(broker => (
                 <div key={broker.name} className="bg-card border border-border p-6 rounded-lg space-y-4">
                    <HugeiconsIcon icon={Shield01Icon} className="w-8 h-8 text-primary" />
                    <h3 className="h3 text-xl">{broker.name}</h3>
                    <p className="text-sm text-muted-foreground">{broker.desc}</p>
                    <div className="text-xs font-mono bg-muted p-2 rounded">Wait time: {broker.time}</div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Section 5: Stats Strip */}
        <section className="bg-primary text-primary-foreground py-12 border-b border-border">
           <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-heading font-bold mb-2">50+</div>
                <div className="text-sm opacity-80 uppercase tracking-wider">Brokers Tracked</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold mb-2">100%</div>
                <div className="text-sm opacity-80 uppercase tracking-wider">Free Guides</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold mb-2">0</div>
                <div className="text-sm opacity-80 uppercase tracking-wider">Paywalls</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold mb-2">{"{{VERIFY: active users}}"}</div>
                <div className="text-sm opacity-80 uppercase tracking-wider">Records Removed</div>
              </div>
           </div>
        </section>

        {/* Section 6: Process Stepper */}
        <section className="bg-background py-16 md:py-24 border-b border-border">
           <div className="container max-w-4xl">
              <div className="text-center space-y-4 mb-16">
                 <span className="uppercase text-xs font-bold tracking-wider text-muted-foreground">The Process</span>
                 <h2 className="h2">How to disappear.</h2>
              </div>
              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                 {[
                   { step: "01", title: "Audit your presence", desc: "Use our tracker to identify which brokers are listing your data." },
                   { step: "02", title: "Submit opt-outs", desc: "Follow our exact, verified steps to submit removal requests." },
                   { step: "03", title: "Verify removal", desc: "Check back after the stated wait time to ensure the data is gone." }
                 ].map((item, i) => (
                   <div key={item.step} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                         {item.step}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-card border border-border rounded-lg shadow-sm">
                         <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                         <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Section 7: Comparison Table */}
        <section className="bg-muted py-16 md:py-24 border-b border-border">
           <div className="container">
              <div className="text-center space-y-4 mb-12">
                 <span className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Alternatives</span>
                 <h2 className="h2">Manual vs. Paid Removal</h2>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse border border-border bg-card">
                    <thead>
                       <tr className="bg-muted">
                          <th className="p-4 border-b border-border font-medium">Approach</th>
                          <th className="p-4 border-b border-border font-medium">Cost</th>
                          <th className="p-4 border-b border-border font-medium">Time Required</th>
                          <th className="p-4 border-b border-border font-medium">Coverage</th>
                       </tr>
                    </thead>
                    <tbody>
                       <tr>
                          <td className="p-4 border-b border-border font-medium">Manual (This Site)</td>
                          <td className="p-4 border-b border-border text-green-600 dark:text-green-400">$0</td>
                          <td className="p-4 border-b border-border">High (Hours)</td>
                          <td className="p-4 border-b border-border">Targeted</td>
                       </tr>
                       <tr>
                          <td className="p-4 border-b border-border font-medium">Paid Service (e.g., Incogni)</td>
                          <td className="p-4 border-b border-border">~$100/yr</td>
                          <td className="p-4 border-b border-border">Low (Minutes)</td>
                          <td className="p-4 border-b border-border">Broad (100+ sites)</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* Section 8: Final CTA */}
        <section className="bg-background py-16 md:py-24">
           <div className="container text-center max-w-2xl mx-auto space-y-8">
              <h2 className="h2">Ready to clean up your digital footprint?</h2>
              <p className="lead">Start with the biggest aggregators today. It takes about 15 minutes to file the top three requests.</p>
              <Link href="/" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-md font-bold text-lg hover:bg-primary/90">Browse Broker Directory</Link>
           </div>
        </section>

      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        ...generateJsonLd('WebSite', { name: "They Are Tracking", url: "https://theyaretracking.com" }),
        ...generateJsonLd('Organization', { name: "They Are Tracking", url: "https://theyaretracking.com", logo: "https://theyaretracking.com" })
      }) }} />
    </div>
  );
}
