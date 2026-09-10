import { siteConfig } from "@/lib/site-config";

interface GoogleMapProps {
  /** Place/address to center the map on. Defaults to the general service region. */
  query?: string;
  title?: string;
  /** Wider zoom for a whole-region view, tighter for a single town. */
  zoom?: number;
  className?: string;
}

/**
 * Real Google Maps embed (no API key required). Defaults to the general
 * service region rather than a specific pin, since this is a service-area
 * business with no public storefront — pass `query` for a specific town or
 * update `siteConfig.mapQuery` if a real street address becomes public.
 */
export function GoogleMap({
  query = siteConfig.mapQuery,
  title = `Map of ${siteConfig.serviceAreas[0]} — ${siteConfig.name} service area`,
  zoom = 9,
  className = "h-[360px] w-full",
}: GoogleMapProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`;

  return (
    <div className="overflow-hidden rounded-lg border border-ink-100 shadow-soft">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={className}
        style={{ border: 0 }}
      />
    </div>
  );
}
