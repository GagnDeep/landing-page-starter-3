import { Metadata } from "next"
import { siteMetadata } from "./site"

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
  image,
}: BuildMetadataParams = {}): Metadata {
  const url = `${siteMetadata.url}${path}`
  const siteName = siteMetadata.name

  return {
    title: title ? `${title} | ${siteName}` : siteName,
    description: description || siteMetadata.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title || siteName,
      description: description || siteMetadata.description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: image || "/og-image.png",
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title || siteName,
      description: description || siteMetadata.description,
      images: [image || "/og-image.png"],
      creator: siteMetadata.social.twitter,
    },
  }
}
