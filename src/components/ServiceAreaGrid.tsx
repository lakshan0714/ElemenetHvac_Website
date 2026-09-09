import Link from "next/link";
import { locations } from "@/lib/locations";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PennsylvaniaMap } from "@/components/PennsylvaniaMap";
import { MapPin } from "@/components/ui/icons";

export function ServiceAreaGrid() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Service Areas"
          title={`Proudly Serving ${siteConfig.serviceAreas[0]}`}
          description="We provide heating and cooling service throughout our local service area. Don't see your town listed? Give us a call — we likely still cover it."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <PennsylvaniaMap />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}`}
                className="flex items-center gap-3 rounded-md border border-ink-100 bg-white px-5 py-4 text-sm font-semibold text-brand-950 shadow-soft transition-colors hover:border-accent-500 hover:text-accent-600"
              >
                <MapPin className="h-4 w-4 shrink-0 text-accent-600" />
                {location.name}
                {location.state !== "[State]" && `, ${location.state}`}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
