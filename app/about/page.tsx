import { buildMetadata } from "@/lib/metadata"
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/json-ld"
import { Prose } from "@/components/ui/prose"

export const metadata = buildMetadata({
  title: "About",
  path: "/about",
  description:
    "Learn about the mission, editorial process, and focus of The Underwriting Desk, a publication exclusively for working P&C insurance underwriters.",
})

export default function AboutPage() {
  const jsonLd = [getOrganizationSchema(), getWebSiteSchema()]

  return (
    <div className="bg-background py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <Prose>
          <span className="mb-4 block font-mono text-sm tracking-wider text-primary uppercase">
            About
          </span>
          <h1>The Desk</h1>
          <p className="lead">
            The Underwriting Desk is a sponsorship-funded trade publication for
            working P&C insurance underwriters.
          </p>
          <h2>Our Mission</h2>
          <p>
            Underwriting-workflow vendors raised large rounds between 2023 and
            2025 and need a channel reaching practitioners rather than the
            C-suite. We bridge that gap by providing a twice-weekly issue on
            underwriting tooling, hiring, market moves, and the live argument
            about AI in underwriting.
          </p>
          <h2>Who It Is For</h2>
          <p>
            Explicitly not career-entry content. We do not cover how to become
            an underwriter, credentialing, or exam prep. Our reader already has
            the job.
          </p>
          <hr className="my-8 border-border" />
          <p className="font-mono text-sm text-muted-foreground">
            Circulation: {"{{VERIFY: subscriber count}}"}
            <br />
            Sponsorship rates: {"{{VERIFY: sponsorship rate}}"}
          </p>
        </Prose>
      </div>
    </div>
  )
}
