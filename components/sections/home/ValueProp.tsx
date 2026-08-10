import { HugeiconsIcon } from "@hugeicons/react"
import {
  DocumentValidationIcon,
  Briefcase02Icon,
  Settings02Icon,
} from "@hugeicons/core-free-icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ValueProp() {
  const values = [
    {
      title: "Workflow & Tooling",
      description:
        "Cut through vendor noise. We track exactly which carriers are deploying which solutions, from submission intake to pricing engines.",
      icon: Settings02Icon,
    },
    {
      title: "Market Moves",
      description:
        "Hard market tactics, capacity shifts, and how peer organizations are adjusting their underwriting guidelines in real-time.",
      icon: DocumentValidationIcon,
    },
    {
      title: "Career & Hiring",
      description:
        "Salary benchmarks, emerging roles (like the 'Agentic Underwriter'), and the skills commanding a premium in the current cycle.",
      icon: Briefcase02Icon,
    },
  ]

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 max-w-[66ch]">
          <span className="mb-4 block font-mono text-sm tracking-wider text-primary uppercase">
            The Signal, Not The Noise
          </span>
          <h2 className="mb-4 font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Explicitly not career-entry content.
          </h2>
          <p className="text-lg text-muted-foreground">
            No how-to-become-an-underwriter, no credentialing, no exam prep. You
            already have the job. We cover what comes next.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <Card key={i} className="border-border/50 bg-background">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <HugeiconsIcon icon={v.icon} className="h-6 w-6" />
                </div>
                <CardTitle>{v.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{v.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
