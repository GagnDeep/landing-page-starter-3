import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import Link from 'next/link';
import { LedgerTool } from '../components/sections/LedgerTool';
import { GeometricMotif } from '../components/visuals/GeometricMotif';
import { ProcessDiagram } from '../components/visuals/ProcessDiagram';
import {
  Shield01Icon,
  ChartHistogramIcon,
  File01Icon,
  PassportIcon,
  Stamp01Icon as StampIcon,
  FirstAidKitIcon as MedicalCircleIcon,
  CheckmarkCircle01Icon,
  Target01Icon,
  Idea01Icon,
  ArrowRight01Icon
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Split Hero with Ledger */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-caption">The Disclosed-Methodology Comparison</span>
              <h1 className="text-h1 text-balance">
                Data-driven country comparisons for your retirement.
              </h1>
              <p className="text-lead text-balance">
                We compare countries by visa route, healthcare, monthly cost, and tax treatment. No unverified claims. Every figure is sourced and dated.
              </p>
            </div>
            <div className="w-full">
              <GeometricMotif />
            </div>
          </div>
        </section>

        {/* Section 2: The Ledger Anchor (Live Asset) */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <span className="text-caption">Interactive Tool</span>
              <h2 className="text-h2 mt-2">The Ledger</h2>
              <p className="text-lead mt-4">
                Compare baseline visa routes and healthcare paths across popular destinations. All gaps indicate unconfirmed data, not estimates.
              </p>
            </div>
            <LedgerTool />
          </div>
        </section>

        {/* Section 3: Value Proposition Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-caption">Methodology</span>
              <h2 className="text-h2 mt-2">How we gather our data</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border p-8 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <HugeiconsIcon icon={Shield01Icon} className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl mb-4">Sourced Figures</h3>
                <p className="text-muted-foreground text-sm">Every cost and tax treatment is linked to official government portals or treaty texts.</p>
              </div>
              <div className="bg-card border border-border p-8 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <HugeiconsIcon icon={ChartHistogramIcon} className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl mb-4">Dated Verification</h3>
                <p className="text-muted-foreground text-sm">We explicitly state when each figure was last checked to prevent reliance on stale data.</p>
              </div>
              <div className="bg-card border border-border p-8 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <HugeiconsIcon icon={File01Icon} className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl mb-4">Honest Gaps</h3>
                <p className="text-muted-foreground text-sm">If a figure is unconfirmed, we show a gap. We never interpolate or estimate plausible numbers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Process Stepper */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <span className="text-caption">The Process</span>
              <h2 className="text-h2 mt-2">Three Steps to Clarity</h2>
              <p className="text-lead mt-4">Understanding your options requires a systematic approach to immigration, healthcare, and tax liability.</p>
            </div>
            <div className="my-12">
               <ProcessDiagram />
            </div>
          </div>
        </section>

        {/* Section 5: Comparison Matrix Preview */}
        <section className="py-16 md:py-24 bg-background border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div className="max-w-2xl">
                <span className="text-caption">Deep Dives</span>
                <h2 className="text-h2 mt-2">Key Assessment Areas</h2>
                <p className="text-lead mt-4">Detailed breakdowns of the most critical factors for a successful relocation.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Visas', icon: PassportIcon, desc: 'Income floors and processing times.' },
                { title: 'Healthcare', icon: MedicalCircleIcon, desc: 'Public system access and private requirements.' },
                { title: 'Taxes', icon: StampIcon, desc: 'Progressive rates and wealth tax implications.' },
                { title: 'Costs', icon: Target01Icon, desc: 'Landed cost estimates and ongoing fees.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-card border border-border rounded-xl">
                  <div className="text-primary shrink-0">
                    <HugeiconsIcon icon={item.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-h3 mb-1">{item.title}</h3>
                    <p className="text-small text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Two-column Explainer */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-card border border-border p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center gap-4 text-primary">
                 <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-8 h-8" />
                 <span className="font-mono text-sm font-bold">COMPLIANCE</span>
              </div>
              <h3 className="text-h3">Strictly Information, Never Advice</h3>
              <p className="text-body text-muted-foreground">
                This platform is an independent aggregation of government data. We provide no financial, tax, immigration, or medical advice. Our commitment is to transparency and methodological rigor.
              </p>
            </div>
            <div className="space-y-6">
              <span className="text-caption">Our Stance</span>
              <h2 className="text-h2 mt-2">Why we built this</h2>
              <p className="text-lead text-balance">
                The relocation industry is filled with agents paid when you move. They rarely date their figures. We built this because the admission of unverified data is a feature, not a bug.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-3 text-body">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Independent and self-funded</span>
                </li>
                <li className="flex items-center gap-3 text-body">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>No commission-driven recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Conversion Band */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="text-sm font-bold tracking-wider uppercase text-primary-foreground/80">Premium Reports</span>
            <h2 className="text-3xl md:text-4xl font-heading mt-4 mb-6">Get the Full Dossiers</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Access comprehensive, verified data packets for specific countries, updated monthly.
            </p>
            <Link href="/" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide uppercase bg-background text-foreground rounded-lg hover:bg-muted transition-colors">
              View Dossiers
            </Link>
          </div>
        </section>

        {/* Section 8: FAQ Accordion (Placeholder for visual distinctness) */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="mb-12 text-center">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">Common Questions</span>
              <h2 className="text-3xl font-heading mt-2">Methodology FAQ</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: 'How often is data updated?', a: 'We review baseline figures quarterly, and note the exact date of verification on every data point.' },
                { q: 'Do you provide immigration assistance?', a: 'No. We provide data. You must consult qualified legal counsel for immigration advice.' },
                { q: 'Why are some fields blank?', a: 'If we cannot verify a figure directly with a primary government source or treaty text, we leave it blank.' }
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-xl p-6 bg-card text-left">
                  <h3 className="font-heading text-xl mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Section 9: Alternate Background Quote */}
        <section className="py-16 md:py-24 bg-muted border-y border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <HugeiconsIcon icon={Idea01Icon} className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-heading mb-6">&quot;Our goal is not to sell you a dream, but to provide the tools to build your own reality.&quot;</h2>
            <p className="text-muted-foreground">This is our commitment to every user of the platform. Data first, decisions second.</p>
          </div>
        </section>

        {/* Section 10: Final Conversion Step */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
             <div>
                <span className="text-sm font-bold tracking-wider text-primary uppercase">Ready to start?</span>
                <h2 className="text-3xl font-heading mt-2">Begin your comparison journey</h2>
                <p className="text-muted-foreground mt-4 mb-6">
                  Access the complete methodology and explore the nuances of each destination before making a life-changing move.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-5 h-5 text-primary" />
                    <span>No hidden fees</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-5 h-5 text-primary" />
                    <span>Updated monthly</span>
                  </li>
                </ul>
             </div>
             <div className="bg-card border border-border p-8 rounded-xl shadow-sm text-center">
               <h3 className="font-heading text-2xl mb-4">View All Options</h3>
               <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors w-full">
                 <span>Compare Countries</span>
                 <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5" />
               </Link>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
