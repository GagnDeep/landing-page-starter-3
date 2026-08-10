import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/oci/',
    '/passport/',
    '/guides/',
    '/oci/eligibility/',
    '/passport/renewal/',
    '/passport/surrender-and-renunciation/',
    '/visa/',
    '/fees-and-timelines/',
    '/packages/',
    '/start/',
    '/about/'
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
export const dynamic = "force-static"
