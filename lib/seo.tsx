import React from "react"
import { Metadata } from "next"
import { siteConfig } from "./site"

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og-image.png",
  type = "website",
}: {
  title: string
  description: string
  path?: string
  image?: string
  type?: "website" | "article"
}): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}


export function generateJsonLd(schema: Record<string, unknown>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
