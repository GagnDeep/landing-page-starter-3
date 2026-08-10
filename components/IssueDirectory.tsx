import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function IssueDirectory() {
  const issues = [
    {
      id: "042",
      date: "2024-03-12",
      title: "The Agentic Underwriter: Reality Check",
      excerpt:
        "Where the actual adoption of LLMs in P&C underwriting stands, filtering out the vendor noise.",
      tags: ["AI", "Workflow"],
    },
    {
      id: "041",
      date: "2024-03-08",
      title: "Pricing Commercial Auto in a Hard Market",
      excerpt:
        "Tactics and tooling for navigating the persistent challenges in commercial auto lines.",
      tags: ["Commercial Auto", "Pricing"],
    },
    {
      id: "040",
      date: "2024-03-05",
      title: "Submission Intake: The Automation Frontier",
      excerpt:
        "How carriers are automating the extraction of unstructured submission data.",
      tags: ["Automation", "Intake"],
    },
  ]

  return (
    <div className="w-full">
      <div className="grid gap-6">
        {issues.map((issue) => (
          <Card key={issue.id} className="transition-colors hover:bg-muted/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-muted-foreground">
                  ISSUE {issue.id}
                </span>
                <time className="font-mono text-sm text-muted-foreground">
                  {issue.date}
                </time>
              </div>
              <CardTitle className="mt-2 text-xl font-semibold">
                {issue.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-base text-muted-foreground">
                {issue.excerpt}
              </p>
              <div className="flex gap-2">
                {issue.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="font-mono text-xs font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
