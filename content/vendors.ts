import { Vendor } from "@/schemas/content"

export const vendors: Vendor[] = [
  {
    slug: "cytora",
    name: "Cytora",
    description:
      "Configurable platform that enables commercial insurers to create digital workflows.",
    fundingAmount: {
      value: "{{VERIFY: Cytora total funding amount}}",
      source: "{{VERIFY: Cytora funding source}}",
      verificationDate: "2024-03-12",
    },
    category: "Submission Intake",
    pros: ["Highly configurable", "Strong API"],
    cons: ["Complex implementation", "Steep learning curve"],
    coreFeatures: ["Risk routing", "Data extraction", "API-first"],
  },
  {
    slug: "send",
    name: "Send Technology",
    description:
      "Commercial insurance software provider with a core underwriting workbench.",
    fundingAmount: {
      value: "{{VERIFY: Send total funding amount}}",
      source: "{{VERIFY: Send funding source}}",
      verificationDate: "2024-03-12",
    },
    category: "Underwriting Workbench",
    pros: ["Built specifically for commercial lines", "End-to-end workflow"],
    cons: ["Slower to deploy", "Heavy enterprise footprint"],
    coreFeatures: ["Workbench", "Pricing integration", "Task management"],
  },
  {
    slug: "kalepa",
    name: "Kalepa",
    description:
      "Copilot software for commercial insurance underwriters focused on finding hidden risks.",
    fundingAmount: {
      value: "{{VERIFY: Kalepa total funding amount}}",
      source: "{{VERIFY: Kalepa funding source}}",
      verificationDate: "2024-03-12",
    },
    category: "Underwriting Copilot",
    pros: ["Excellent risk discovery", "Fast deployment"],
    cons: ["Narrower focus than full workbenches", "Limited pricing tools"],
    coreFeatures: ["Risk discovery", "Submission triage", "Data enrichment"],
  },
]
