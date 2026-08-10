import type { Metadata } from "next"

export const siteConfig = {
  name: "AI and Investing",
  url: "https://aiandinvesting.com",
  description:
    "An independent lab publishing dated, reproducible tracking of what AI stock-picking tools claim and how those claims perform against a buy-and-hold S&P 500 benchmark.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiandinvesting.com",
    title: "AI and Investing",
    description:
      "An independent lab publishing dated tracking of AI stock-picking tools claims and how those claims perform against a buy-and-hold S&P 500 benchmark.",
    siteName: "AI and Investing",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI and Investing",
    description:
      "An independent lab publishing dated tracking of AI stock-picking tools claims and how those claims perform against a buy-and-hold S&P 500 benchmark.",
  },
}

interface BuildMetadataParams {
  title?: string
  description?: string
  path?: string
  image?: string
}

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og.jpg",
}: BuildMetadataParams = {}): Metadata {
  const finalTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name

  // Hardcode a safe description for root if not provided
  let defaultDescription =
    "An independent lab publishing dated, reproducible tracking of AI stock-picking claims and performance vs buy-and-hold S&P 500."
  const finalDescription = description || defaultDescription
  const url = `${siteConfig.url}${path}`

  return {
    title: finalTitle,
    description: finalDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...siteConfig.openGraph,
      title: finalTitle,
      description: finalDescription,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      ...siteConfig.twitter,
      title: finalTitle,
      description: finalDescription,
      images: [image],
    },
  }
}
