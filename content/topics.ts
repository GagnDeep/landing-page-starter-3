import { Topic } from "@/schemas/content"

export const topics: Topic[] = [
  {
    slug: "pricing-engines",
    title: "Pricing Engines",
    description: "The evolution of algorithmic pricing in commercial lines.",
    relatedTopics: ["submission-intake", "portfolio-management"],
  },
  {
    slug: "submission-intake",
    title: "Submission Intake",
    description: "Automating the extraction of unstructured submission data.",
    relatedTopics: ["pricing-engines", "portfolio-management"],
  },
  {
    slug: "portfolio-management",
    title: "Portfolio Management",
    description: "Macro shifts in capacity and aggregate exposure tracking.",
    relatedTopics: ["pricing-engines", "submission-intake"],
  },
]
