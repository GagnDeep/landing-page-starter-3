// Strict typings for the typed content layer
// Any verifiable claim MUST be accompanied by a source and date.

export interface VerifiableClaim {
  value: string
  sourceUrl: string
  verificationDate: string
}

export interface Vendor {
  slug: string
  name: string
  category: "Stock Picker" | "Portfolio Optimizer" | "Trading Bot"
  cost: VerifiableClaim
  claimedWinRate: VerifiableClaim
  claimedAlpha: VerifiableClaim
  status: "Baselining" | "Tracked"
  description: string
}

export interface Guide {
  slug: string
  title: string
  description: string
  category: string
  publishedAt: string
  updatedAt: string
}

export interface ContentDataset {
  vendors: Vendor[]
  guides: Guide[]
}
