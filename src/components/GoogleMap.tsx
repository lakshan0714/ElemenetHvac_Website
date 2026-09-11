import { siteConfig } from "@/lib/site-config";

interface GoogleMapProps {
  /** Center point. Defaults to the general service region. */
  center?: { lat: number; lng: number };
  title?: string;
  /** Wider zoom for a whole-region view, tighter for a single town. */
  zoom?: number;
  className?: string;
}

/**
 * Real Google Maps embed (no API key required), centered on coordinates
 * rather than a text search — the search (`q=`) form of this embed renders
 * an empty place-info panel over the map whenever the query doesn't resolve
 * to a single distinct listing, which happens even for real town names.
 * Centering on lat/lng avoids that entirely; the map's own tiles already
 * label nearby towns.
 */
export function GoogleMap({
  center = siteConfig.mapCenter,
  title = `Map of ${siteConfig.serviceAreas[0]} — ${siteConfig.name} service area`,
  zoom = 9,
  className = "h-[360px] w-full",
}: GoogleMapProps) {
  const src = `https://www.google.com/maps?ll=${center.lat},${center.lng}&z=${zoom}&output=embed`;

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
