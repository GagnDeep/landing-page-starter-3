import { ContentDataset } from "./schema"

export const dataset: ContentDataset = {
  vendors: [
    {
      slug: "vendor-a",
      name: "Vendor A Tracker",
      category: "Stock Picker",
      cost: {
        value: "{{VERIFY: Price 1}}",
        sourceUrl: "{{VERIFY: Pricing Page URL 1}}",
        verificationDate: "{{VERIFY: Pricing Date 1}}",
      },
      claimedWinRate: {
        value: "{{VERIFY: Win Rate 1}}",
        sourceUrl: "{{VERIFY: Win Rate Source 1}}",
        verificationDate: "{{VERIFY: Win Rate Date 1}}",
      },
      claimedAlpha: {
        value: "{{VERIFY: Claimed Alpha 1}}",
        sourceUrl: "{{VERIFY: Alpha Source 1}}",
        verificationDate: "{{VERIFY: Alpha Date 1}}",
      },
      status: "Baselining",
      description:
        "{{VERIFY: Vendor A Description. Needs to be fairly long to avoid errors.}}",
    },
    {
      slug: "vendor-b",
      name: "Vendor B Tracker",
      category: "Portfolio Optimizer",
      cost: {
        value: "{{VERIFY: Price 2}}",
        sourceUrl: "{{VERIFY: Pricing Page URL 2}}",
        verificationDate: "{{VERIFY: Pricing Date 2}}",
      },
      claimedWinRate: {
        value: "{{VERIFY: Win Rate 2}}",
        sourceUrl: "{{VERIFY: Win Rate Source 2}}",
        verificationDate: "{{VERIFY: Win Rate Date 2}}",
      },
      claimedAlpha: {
        value: "{{VERIFY: Claimed Alpha 2}}",
        sourceUrl: "{{VERIFY: Alpha Source 2}}",
        verificationDate: "{{VERIFY: Alpha Date 2}}",
      },
      status: "Baselining",
      description:
        "{{VERIFY: Vendor B Description. Needs to be fairly long to avoid errors.}}",
    },
    {
      slug: "vendor-c",
      name: "Vendor C Tracker",
      category: "Trading Bot",
      cost: {
        value: "{{VERIFY: Price 3}}",
        sourceUrl: "{{VERIFY: Pricing Page URL 3}}",
        verificationDate: "{{VERIFY: Pricing Date 3}}",
      },
      claimedWinRate: {
        value: "{{VERIFY: Win Rate 3}}",
        sourceUrl: "{{VERIFY: Win Rate Source 3}}",
        verificationDate: "{{VERIFY: Win Rate Date 3}}",
      },
      claimedAlpha: {
        value: "{{VERIFY: Claimed Alpha 3}}",
        sourceUrl: "{{VERIFY: Alpha Source 3}}",
        verificationDate: "{{VERIFY: Alpha Date 3}}",
      },
      status: "Baselining",
      description:
        "{{VERIFY: Vendor C Description. Needs to be fairly long to avoid errors.}}",
    },
  ],
  guides: [
    {
      slug: "evaluating-ai-claims",
      title: "How to Evaluate AI Trading Claims",
      description:
        "A framework for dissecting marketing materials and identifying survivorship bias in algorithmic trading tools.",
      category: "Education",
      publishedAt: "2024-03-20",
      updatedAt: "2024-03-20",
    },
    {
      slug: "understanding-alpha",
      title: "Understanding Alpha vs Absolute Returns",
      description:
        "Why absolute returns are misleading and how to properly compare a tool against a buy-and-hold S&P 500 strategy.",
      category: "Education",
      publishedAt: "2024-03-22",
      updatedAt: "2024-03-22",
    },
    {
      slug: "sec-enforcement-history",
      title: "History of AI-Washing SEC Actions",
      description:
        "A detailed timeline of regulatory actions against firms making false claims about AI capabilities, starting with the March 2024 actions.",
      category: "Regulation",
      publishedAt: "2024-03-25",
      updatedAt: "2024-03-25",
    },
  ],
}

export function getVendors() {
  return dataset.vendors
}

export function getVendorBySlug(slug: string) {
  return dataset.vendors.find((v) => v.slug === slug)
}

export function getGuides() {
  return dataset.guides
}

export function getGuideBySlug(slug: string) {
  return dataset.guides.find((g) => g.slug === slug)
}
