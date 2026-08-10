import { buildMetadata } from "@/lib/metadata"
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/json-ld"
import { Hero } from "@/components/sections/home/Hero"
import { ValueProp } from "@/components/sections/home/ValueProp"
import { BentoGrid } from "@/components/sections/home/BentoGrid"
import { ComparisonMatrix } from "@/components/sections/home/ComparisonMatrix"
import { StatStrip } from "@/components/sections/home/StatStrip"
import { NumberedProcess } from "@/components/sections/home/NumberedProcess"
import { QuoteBand } from "@/components/sections/home/QuoteBand"
import { FAQAccordion } from "@/components/sections/home/FAQAccordion"
import { LatestIssues } from "@/components/sections/home/LatestIssues"
import { ConversionBand } from "@/components/sections/home/ConversionBand"

export const metadata = buildMetadata({
  path: "/",
})

export default function Home() {
  const jsonLd = [getOrganizationSchema(), getWebSiteSchema()]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Total: 10 Sections */}
      <Hero /> {/* bg-background */}
      <ValueProp /> {/* bg-muted */}
      <BentoGrid /> {/* bg-background */}
      <StatStrip /> {/* bg-primary */}
      <ComparisonMatrix /> {/* bg-muted */}
      <NumberedProcess /> {/* bg-background */}
      <QuoteBand /> {/* bg-primary */}
      <FAQAccordion /> {/* bg-muted */}
      <LatestIssues /> {/* bg-background */}
      <ConversionBand /> {/* bg-muted */}
    </>
  )
}
