import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"
import { getVendors, getGuides } from "@/content/data"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ["", "/about", "/tools", "/guides"].map((route) => ({
    url: `${siteConfig.url}${route}/`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const vendorRoutes = getVendors().map((vendor) => ({
    url: `${siteConfig.url}/tools/${vendor.slug}/`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  const guideRoutes = getGuides().map((guide) => ({
    url: `${siteConfig.url}/guides/${guide.slug}/`,
    lastModified: guide.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...baseRoutes, ...vendorRoutes, ...guideRoutes]
}
