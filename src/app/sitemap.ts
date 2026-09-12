import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { getSiteUrl } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${url}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${url}/service-areas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    {
      url: `${url}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${url}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${url}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${url}/service-areas/${location.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}
