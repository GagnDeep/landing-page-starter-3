import { MetadataRoute } from "next"
import { siteMetadata } from "@/lib/site"
import { topics } from "@/content/topics"
import { vendors } from "@/content/vendors"
import { issues } from "@/content/issues"
import { jobs } from "@/content/jobs"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/topics", "/vendors", "/issues", "/jobs"]

  topics.forEach((t) => routes.push(`/topics/${t.slug}`))
  vendors.forEach((v) => routes.push(`/vendors/${v.slug}`))
  issues.forEach((i) => routes.push(`/issues/${i.id}`))
  jobs.forEach((j) => routes.push(`/jobs/${j.id}`))

  return routes.map((route) => ({
    url: `${siteMetadata.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))
}
