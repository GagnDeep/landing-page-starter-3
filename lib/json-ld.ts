export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI and Investing",
    url: "https://aiandinvesting.com",
    logo: "https://aiandinvesting.com/logo.png",
  }
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI and Investing",
    url: "https://aiandinvesting.com",
  }
}

export function buildBreadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://aiandinvesting.com${item.item}`,
    })),
  }
}
