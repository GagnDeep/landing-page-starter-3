import { MetadataRoute } from "next"
import { siteMetadata } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about"].map((route) => ({
    url: `${siteMetadata.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes]
}
