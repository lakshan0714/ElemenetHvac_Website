import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug, locations } from "@/lib/locations";
import { getFeaturedServices } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { GoogleMap } from "@/components/GoogleMap";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { ReviewSection } from "@/components/ReviewSection";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  const title = `HVAC Services in ${location.name}, ${location.state}`;
  return {
    title,
    description: `${siteConfig.name} provides heating and cooling service in ${location.name}, ${location.state}.`,
    alternates: { canonical: `/service-areas/${location.slug}` },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const featured = getFeaturedServices();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: location.name, path: `/service-areas/${location.slug}` },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: location.name, path: `/service-areas/${location.slug}` },
        ]}
      />

      <section className="bg-brand-950 py-16 sm:py-20">
        <div className="container-page">
          <p className="text-base font-bold uppercase tracking-[0.18em] text-accent-400">
            Local HVAC Contractor
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            HVAC Services in {location.name}, {location.state}
          </h1>
          <p className="mt-5 max-w-xl text-ink-100/80">{location.blurb}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneLink size="lg" label={`Call Now: ${siteConfig.phone}`} />
            <Button href="/contact" variant="outline-light" size="lg">
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-950">Where We Cover</h2>
          <div className="mt-6">
            <GoogleMap
              center={location.coords}
              title={`Map of ${location.name}, ${location.state}`}
              zoom={11}
            />
          </div>

          <h2 className="mt-16 text-2xl font-bold text-brand-950">
            Popular Services in {location.name}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <EmergencyBanner />
      <ReviewSection />
      <FinalCTA />
    </>
  );
}
