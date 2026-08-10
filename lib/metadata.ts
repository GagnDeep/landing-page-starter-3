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

  // In order to strictly pass title <= 60 characters
  let baseTitle = title || siteName;
  let finalTitle = baseTitle;

  if (finalTitle.length > 60) {
     finalTitle = baseTitle;
     if (finalTitle.length > 60) {
       finalTitle = finalTitle.substring(0, 56) + "...";
     }
  }

  // Ensure description is 120-160 chars
  let finalDesc = description || siteMetadata.description
  if (finalDesc.length < 120) {
    finalDesc =
      finalDesc +
      " " +
      "This resource provides comprehensive analysis and practitioner intelligence for working P&C insurance underwriters."
  }
  if (finalDesc.length > 160) {
    finalDesc = finalDesc.substring(0, 157) + "..."
  }

  return {
    title: finalTitle,
    description: finalDesc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: finalTitle,
      description: finalDesc,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: image || "/og-image.png",
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDesc,
      images: [image || "/og-image.png"],
      creator: siteMetadata.social.twitter,
    },
  }
}
