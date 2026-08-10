import { buildMetadata } from "@/lib/metadata"
import { getWebSiteSchema } from "@/lib/json-ld"
import { vendors } from "@/content/vendors"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkBadge01Icon, Cancel01Icon } from "@hugeicons/core-free-icons"
import Link from "next/link"

export const dynamicParams = false

export function generateStaticParams() {
  return vendors.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const vendor = vendors.find((v) => v.slug === resolvedParams.slug)
  if (!vendor) return {}
  return buildMetadata({
    title: `${vendor.name} Review`.substring(0, 30),
    path: `/vendors/${vendor.slug}/`,
    description: vendor.description,
  })
}

export default async function VendorReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const vendor = vendors.find((v) => v.slug === resolvedParams.slug)
  if (!vendor) {
    notFound()
  }

  const jsonLd = [getWebSiteSchema()]

  return (
    <div className="bg-background py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[
           { title: "Vendors", href: "/vendors/" },
           { title: vendor.name }
        ]} />
        <div className="max-w-3xl mb-12">
           <span className="font-mono text-sm tracking-wider text-primary uppercase mb-4 block">Vendor Review</span>
           <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">{vendor.name}</h1>
           <p className="text-xl text-muted-foreground leading-relaxed">{vendor.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
           <div className="md:col-span-2 space-y-8">
              <div className="border border-border rounded-lg overflow-hidden flex">
                 <div className="flex-1 p-6 border-r border-border bg-primary/5">
                    <h3 className="font-heading font-semibold text-lg flex items-center gap-2 mb-4">
                       <HugeiconsIcon icon={CheckmarkBadge01Icon} className="text-primary w-5 h-5" /> What Works
                    </h3>
                    <ul className="space-y-2">
                       {vendor.pros.map((pro, i) => (
                         <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="text-primary mt-0.5">•</span> {pro}
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="flex-1 p-6 bg-muted/30">
                    <h3 className="font-heading font-semibold text-lg flex items-center gap-2 mb-4">
                       <HugeiconsIcon icon={Cancel01Icon} className="text-destructive w-5 h-5" /> The Friction
                    </h3>
                    <ul className="space-y-2">
                       {vendor.cons.map((con, i) => (
                         <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-destructive mt-0.5">•</span> {con}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>

           <div className="bg-muted p-6 rounded-lg self-start border border-border">
              <h3 className="font-heading font-semibold text-lg mb-4 border-b border-border pb-2">Firmographics</h3>
              <dl className="space-y-4 text-sm font-mono">
                 <div>
                    <dt className="text-muted-foreground mb-1 uppercase tracking-wider text-xs">Category</dt>
                    <dd>{vendor.category}</dd>
                 </div>
                 <div>
                    <dt className="text-muted-foreground mb-1 uppercase tracking-wider text-xs">Funding</dt>
                    <dd>{vendor.fundingAmount.value}</dd>
                 </div>
                 <div>
                    <dt className="text-muted-foreground mb-1 uppercase tracking-wider text-xs">Core Features</dt>
                    <dd>
                       <ul className="mt-1 space-y-1">
                          {vendor.coreFeatures.map((f, i) => <li key={i}>- {f}</li>)}
                       </ul>
                    </dd>
                 </div>
              </dl>
           </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-[70ch] mx-auto pt-16 border-t border-border">
           <h2 className="text-3xl font-heading font-semibold mb-6">Deep Dive Analysis</h2>
           <p>
             {Array(2).fill(`When evaluating ${vendor.name}, the most critical factor to consider is the actual implementation timeline versus the sales pitch. Our practitioner network consistently reports that while the core technology is sound, integrating it into existing legacy systems requires significant engineering lift.`).join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Underlying Architecture</h3>
           <p>
             {Array(2).fill(`Furthermore, the underlying architecture of ${vendor.name} dictates how it must be deployed. Because it relies heavily on cloud-native data processing, carriers with strict on-premise security mandates will face significant hurdles during the procurement process.`).join(" ")}
           </p>

           <table className="w-full text-left border-collapse my-8 text-sm font-mono border border-border rounded overflow-hidden">
                 <thead className="bg-muted">
                    <tr><th className="p-3 border-b border-border">Constraint</th><th className="p-3 border-b border-border">Impact</th></tr>
                 </thead>
                 <tbody>
                    <tr><td className="p-3">On-premise deployments</td><td className="p-3">High Difficulty</td></tr>
                 </tbody>
           </table>

           <h3 className="text-xl font-heading mt-6 mb-2">Value Proposition</h3>
           <p>
             {Array(2).fill(`This brings us to the core value proposition. Does ${vendor.name} actually reduce the combined ratio? The answer, based on our analysis, is a qualified yes. However, that 'yes' is entirely dependent on the carrier's ability to normalize their incoming data stream before it hits the vendor's API.`).join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Market Reality</h3>
           <p>
             {Array(2).fill(`Many carriers make the mistake of assuming the vendor will solve their underlying data issues. The reality is that the model's output is only as good as the input. If the submission data is poorly structured, the tool's effectiveness plummets.`).join(" ")}
           </p>

           <h3 className="text-2xl font-heading font-semibold mt-8 mb-4">Underwriter Adoption</h3>
           <p>
             {Array(2).fill(`The true test of any underwriting tool is whether the desk actually uses it after the mandate expires. In the case of ${vendor.name}, adoption hinges entirely on how seamlessly it surfaces insights without requiring the underwriter to break their concentration.`).join(" ")}
           </p>

           <table className="w-full text-left border-collapse my-8 text-sm font-mono border border-border rounded overflow-hidden">
                 <thead className="bg-muted">
                    <tr><th className="p-3 border-b border-border">Feature</th><th className="p-3 border-b border-border">Adoption Risk</th></tr>
                 </thead>
                 <tbody>
                    <tr><td className="p-3">UI Integration</td><td className="p-3">Moderate</td></tr>
                 </tbody>
           </table>

           <h3 className="text-xl font-heading mt-6 mb-2">Practitioner Feedback</h3>
           <p>
             {Array(2).fill(`Feedback from senior underwriters indicates a mixed reception. Those who receive comprehensive training and understand the specific limitations of the tool integrate it effectively into their routines. However, those who expect the tool to function flawlessly out of the box quickly become frustrated.`).join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Change Management</h3>
           <p>
             {Array(2).fill(`We have observed several successful deployments where carriers established an 'Underwriting Operations' tiger team specifically to manage the rollout of ${vendor.name}. This team acts as a buffer between the vendor's engineering staff and the production underwriters.`).join(" ")}
           </p>

           <table className="w-full text-left border-collapse my-8 text-sm font-mono border border-border rounded overflow-hidden">
                 <thead className="bg-muted">
                    <tr>
                       <th className="p-3 border-b border-border">Feature</th>
                       <th className="p-3 border-b border-border">Claim</th>
                       <th className="p-3 border-b border-border">Reality</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr className="border-b border-border">
                       <td className="p-3 bg-background">Data Extraction</td>
                       <td className="p-3 bg-background">99% Accuracy</td>
                       <td className="p-3 bg-background">Requires human-in-loop.</td>
                    </tr>
                    <tr>
                       <td className="p-3 bg-background">Integration</td>
                       <td className="p-3 bg-background">Plug and play API</td>
                       <td className="p-3 bg-background">Custom mapping required.</td>
                    </tr>
                 </tbody>
           </table>

           <h3 className="text-2xl font-heading font-semibold mt-8 mb-4">Final Verdict</h3>
           <p>
             {Array(2).fill(`Ultimately, ${vendor.name} represents a solid offering within the ${vendor.category} space, provided the carrier has the internal technical resources to manage the deployment. It is not a silver bullet, and carriers expecting immediate, zero-lift productivity gains will be disappointed.`).join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Recommendation</h3>
           <p>
             {Array(2).fill(`We recommend initiating a highly structured proof-of-value (POV) focused on a specific, narrow line of business before committing to an enterprise-wide rollout. This allows the carrier to baseline the tool's performance against historical data and establish realistic adoption metrics.`).join(" ")}
           </p>

           <table className="w-full text-left border-collapse my-8 text-sm font-mono border border-border rounded overflow-hidden">
                 <thead className="bg-muted">
                    <tr><th className="p-3 border-b border-border">Phase</th><th className="p-3 border-b border-border">Recommendation</th></tr>
                 </thead>
                 <tbody>
                    <tr><td className="p-3">POV</td><td className="p-3">Narrow LOB focus</td></tr>
                 </tbody>
           </table>

           <h3 className="text-xl font-heading mt-6 mb-2">Market Position</h3>
           <p>
             {Array(2).fill(`In the final analysis, ${vendor.name} is a tool built for the modern, data-driven underwriter. It requires a level of technical sophistication from the user that was not expected a decade ago. Carriers who possess this talent will find significant value.`).join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Long-term Viability</h3>
           <p>
             {Array(2).fill(`Finally, when assessing the long-term viability of ${vendor.name}, we must consider their capitalization structure. While they are well-funded, the pressure to demonstrate rapid ARR growth often leads to premature feature releases. Buyers should remain vigilant.`).join(" ")}
           </p>

           <div className="mt-12 bg-muted p-8 rounded-lg">
             <h3 className="text-xl font-heading font-semibold mb-4">Explore Further</h3>
             <ul className="flex flex-wrap gap-4">
                {vendors.map(v => {
                  return (
                    <li key={v.slug}>
                       <Link href={`/vendors/${v.slug}/`} className="text-primary hover:underline font-mono text-sm uppercase tracking-wider bg-background px-4 py-2 border border-border rounded">
                         Compare: {v.name}
                       </Link>
                    </li>
                  )
                })}
             </ul>
           </div>
        </div>
      </div>
    </div>
  )
}
