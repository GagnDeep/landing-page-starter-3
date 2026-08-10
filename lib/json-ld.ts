import { siteMetadata } from "./site"

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMetadata.name,
    url: siteMetadata.url,
    logo: `${siteMetadata.url}/logo.png`,
    sameAs: [
      `https://twitter.com/${siteMetadata.social.twitter.replace("@", "")}`,
    ],
  }
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMetadata.name,
    url: siteMetadata.url,
    description: siteMetadata.description,
  }
}
