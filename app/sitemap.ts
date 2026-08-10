import { MetadataRoute } from 'next';
import { siteConfig } from '../lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/countries',
    '/compare',
    '/methodology',
    '/countries/portugal',
    '/countries/panama',
    '/visas',
    '/healthcare',
    '/taxes',
    '/dossiers',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
