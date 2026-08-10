import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OciReadinessChecker } from "@/components/oci-readiness-checker"
import { buildMetadata, generateJsonLd } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkBadge01Icon, PassportIcon, Note01Icon, Clock01Icon } from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Setu Direct | Indian Consular Paperwork Prepared in the UK",
  description: "Setu Direct privately prepares and checks Indian consular paperwork in the UK. Independent experts for OCI cards, passports, and visas.",
})

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "description": siteConfig.description,
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {generateJsonLd(orgSchema)}
      {generateJsonLd(websiteSchema)}
      <main className="flex-1">
        {/* 1. Hero Section (Split with Checker) */}
        <section className="bg-background py-16 md:py-24 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground leading-tight">
                  Get your Indian consular paperwork right the first time.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px]">
                  We privately prepare and verify applications for OCI cards, passport renewals, and renunciation certificates in the UK. Stop guessing at contradictory forum advice.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <HugeiconsIcon icon={CheckmarkBadge01Icon} className="text-primary size-5" strokeWidth={2} />
                    Fixed Fees
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <HugeiconsIcon icon={CheckmarkBadge01Icon} className="text-primary size-5" strokeWidth={2} />
                    UK Based
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <HugeiconsIcon icon={CheckmarkBadge01Icon} className="text-primary size-5" strokeWidth={2} />
                    Independent Verification
                  </div>
                </div>
              </div>
              <div>
                <OciReadinessChecker />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Process Section (Numbered Stepper) */}
        <section className="bg-muted/30 py-16 md:py-24 border-b">
          <div className="container px-4 md:px-6">
            <HugeiconsIcon icon={CheckmarkBadge01Icon} className="hidden" />
            <div className="mb-12">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">How it works</span>
              <h2 className="text-3xl font-heading font-bold mt-2">A clear path to a complete application</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="absolute top-0 left-6 -ml-px h-full w-0.5 bg-border hidden md:block" aria-hidden="true"></div>
                <div className="relative flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading font-bold z-10 shrink-0 shadow-sm">1</div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold font-heading mb-2">We Assess Your Case</h3>
                    <p className="text-muted-foreground">Answer a few specific questions. We identify your correct application route and the exact documents required based on current guidelines.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-6 -ml-px h-full w-0.5 bg-border hidden md:block" aria-hidden="true"></div>
                <div className="relative flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading font-bold z-10 shrink-0 shadow-sm">2</div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold font-heading mb-2">Document Verification</h3>
                    <p className="text-muted-foreground">You upload your documents securely. We check them against the strict criteria that usually cause rejections at the submission counter.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading font-bold z-10 shrink-0 shadow-sm">3</div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold font-heading mb-2">Ready for Submission</h3>
                    <p className="text-muted-foreground">Receive a complete, correctly formatted application pack, ready for you to submit to the processing centre with confidence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Services Grid */}
        <section className="bg-background py-16 md:py-24 border-b">
          <div className="container px-4 md:px-6">
            <div className="mb-12">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">Our Services</span>
              <h2 className="text-3xl font-heading font-bold mt-2">Expert preparation for critical paperwork</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <HugeiconsIcon icon={PassportIcon} className="text-primary size-6" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">OCI Applications</h3>
                <p className="text-muted-foreground mb-4">Preparation for new OCI cards, miscellaneous services, and in-lieu of lost cards.</p>
                <div className="text-sm font-medium text-primary">Learn more &rarr;</div>
              </div>
              <div className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <HugeiconsIcon icon={Note01Icon} className="text-primary size-6" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">Surrender Certificates</h3>
                <p className="text-muted-foreground mb-4">Renunciation of Indian citizenship and surrender of passports after acquiring foreign nationality.</p>
                <div className="text-sm font-medium text-primary">Learn more &rarr;</div>
              </div>
              <div className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <HugeiconsIcon icon={Clock01Icon} className="text-primary size-6" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">Passport Renewals</h3>
                <p className="text-muted-foreground mb-4">Assistance with renewing Indian passports for residents in the UK, including changes of details.</p>
                <div className="text-sm font-medium text-primary">Learn more &rarr;</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Comparison Table (Data as visual) */}
        <section className="bg-muted/20 py-16 md:py-24 border-b">
          <div className="container px-4 md:px-6">
            <div className="mb-12">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">Why use Setu Direct</span>
              <h2 className="text-3xl font-heading font-bold mt-2">The difference between guessing and knowing</h2>
            </div>
            <div className="w-full overflow-x-auto border rounded-lg bg-card shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-muted/50 border-b">
                    <th className="p-4 font-heading font-bold">Feature</th>
                    <th className="p-4 font-heading font-bold border-l w-1/3">Doing it alone</th>
                    <th className="p-4 font-heading font-bold border-l w-1/3 text-primary">With Setu Direct</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  <tr>
                    <td className="p-4 font-medium">Document Checks</td>
                    <td className="p-4 border-l text-muted-foreground">Found out at the counter</td>
                    <td className="p-4 border-l font-medium text-foreground">Verified before you book</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Guidance Updates</td>
                    <td className="p-4 border-l text-muted-foreground">Rely on old forum posts</td>
                    <td className="p-4 border-l font-medium text-foreground">Mapped to current rules</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Form Filling</td>
                    <td className="p-4 border-l text-muted-foreground">Confusing technical questions</td>
                    <td className="p-4 border-l font-medium text-foreground">Done correctly for your exact route</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. Metrics / Stats strip */}
        <section className="bg-primary text-primary-foreground py-12 border-b">
          <div className="container px-4 md:px-6">
            <HugeiconsIcon icon={CheckmarkBadge01Icon} className="hidden" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary-foreground/20">
              <div className="px-4">
                <div className="text-3xl md:text-4xl font-heading font-bold mb-2">{"{{VERIFY: stats count}}"}</div>
                <div className="text-sm font-medium text-primary-foreground/80">Applications Prepared</div>
              </div>
              <div className="px-4">
                <div className="text-3xl md:text-4xl font-heading font-bold mb-2">{"{{VERIFY: failure rate}}"}</div>
                <div className="text-sm font-medium text-primary-foreground/80">Rejection Rate Prevented</div>
              </div>
              <div className="px-4">
                <div className="text-3xl md:text-4xl font-heading font-bold mb-2">100%</div>
                <div className="text-sm font-medium text-primary-foreground/80">Independent</div>
              </div>
              <div className="px-4">
                <div className="text-3xl md:text-4xl font-heading font-bold mb-2">Fixed</div>
                <div className="text-sm font-medium text-primary-foreground/80">Transparent Fees</div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Abstract SVG Graphic Section */}
        <section className="bg-background py-16 md:py-24 border-b">
          <div className="container px-4 md:px-6">
             <div className="grid md:grid-cols-2 gap-12 items-center">
               <div>
                  <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-md rounded-lg" aria-hidden="true">
                    <rect width="400" height="300" fill="var(--color-muted)" rx="8" />
                    <circle cx="200" cy="150" r="100" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="200" cy="150" r="60" fill="var(--color-primary)" opacity="0.1" />
                    <path d="M 120 150 Q 200 50 280 150" fill="none" stroke="var(--color-accent)" strokeWidth="3" />
                    <path d="M 120 150 Q 200 250 280 150" fill="none" stroke="var(--color-accent)" strokeWidth="3" opacity="0.5"/>
                    <rect x="180" y="130" width="40" height="40" fill="var(--color-primary)" rx="4" />
                  </svg>
               </div>
               <div>
                  <span className="text-sm font-bold tracking-wider text-primary uppercase">Precision Matters</span>
                  <h2 className="text-3xl font-heading font-bold mt-2 mb-4">Navigating the bureaucracy</h2>
                  <p className="text-muted-foreground mb-6">Consular rules are complex and often updated without wide announcement. A single missing document or incorrect checkbox can result in your application being returned, losing you weeks of processing time and appointment booking fees.</p>
                  <p className="text-muted-foreground">We map the exact requirements for your specific situation so you don&apos;t have to guess.</p>
               </div>
             </div>
          </div>
        </section>

        {/* 7. FAQ Accordion (Substantive) */}
        <section className="bg-muted/10 py-16 md:py-24 border-b">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">Common Questions</span>
              <h2 className="text-3xl font-heading font-bold mt-2">Clear answers to complex issues</h2>
            </div>

            <div className="space-y-4">
              <details className="group border rounded-lg bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-heading font-semibold">
                  Are you the government processing centre?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  No. Setu Direct is an independent private company. We are not a government agency, not the issuing authority, and not their outsourced processing partner. We act purely on your behalf to prepare your paperwork privately before you submit it.
                </div>
              </details>
              <details className="group border rounded-lg bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-heading font-semibold">
                  Can you guarantee my OCI will be approved?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  No one can guarantee approval except the issuing authority. We ensure your application is technically correct, complete, and formatted according to the rules, which prevents the vast majority of administrative rejections at the counter.
                </div>
              </details>
              <details className="group border rounded-lg bg-card p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-heading font-semibold">
                  What if my situation is complicated?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  We handle complex cases including lost passports, unenrolled deed polls, foreign marriages, and minor applicants with non-British parents. Our checker tool above will highlight the specific documents needed for these routes.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* 8. Conversion Band */}
        <section className="bg-background py-20 border-b relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-primary) 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.2 }}></div>
          <div className="container px-4 md:px-6 relative text-center max-w-2xl mx-auto">
            <HugeiconsIcon icon={CheckmarkBadge01Icon} className="hidden" />
            <h2 className="text-3xl font-heading font-bold mb-4">Ready to stop guessing?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get your paperwork prepared professionally. Pay a fixed fee, avoid rejection delays, and submit with confidence.
            </p>
            <a href="/start" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Start Your Application
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
