import { siteConfig } from "./site-config";

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
}

/** True for values that are still bracketed placeholders, e.g. "[ZIP CODE]". */
function isPlaceholder(value: string | undefined | null): boolean {
  return !value || value.trim().startsWith("[");
}

export function buildOrganizationSchema() {
  const url = getSiteUrl();
  const { address } = siteConfig;

  const streetAddress = isPlaceholder(address.line1) ? undefined : address.line1;
  const postalCode = isPlaceholder(address.zip) ? undefined : address.zip;
  // Only emit a PostalAddress once every field we'd populate is real —
  // a partial address (e.g. city/state but no real street or ZIP) isn't
  // a fact worth asserting in structured data.
  const hasCompleteAddress = Boolean(streetAddress && postalCode);

  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url,
    telephone: siteConfig.phone,
    ...(isPlaceholder(siteConfig.email) ? {} : { email: siteConfig.email }),
    ...(hasCompleteAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress,
            addressLocality: address.city,
            addressRegion: address.state,
            postalCode,
            addressCountry: "US",
          },
        }
      : {}),
    areaServed: siteConfig.serviceAreas,
    // No priceRange — never confirmed by the business, don't invent one.
  };
}

export function buildWebsiteSchema() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: siteConfig.name,
    url,
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${url}${item.path}`,
    })),
  };
}

export function buildServiceSchema(options: {
  name: string;
  description: string;
  path: string;
}) {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: options.name,
    name: options.name,
    description: options.description,
    url: `${url}${options.path}`,
    provider: {
      "@type": "HVACBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
    },
    areaServed: siteConfig.serviceAreas,
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
