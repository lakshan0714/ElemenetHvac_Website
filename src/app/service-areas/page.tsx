import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceAreaGrid } from "@/components/ServiceAreaGrid";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `See the towns and communities across ${siteConfig.serviceAreas[0]} where ${siteConfig.name} provides HVAC service.`,
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ]}
      />
      <section className="bg-brand-950 py-16 text-center sm:py-20">
        <div className="container-page">
          <p className="text-base font-bold uppercase tracking-[0.18em] text-accent-400">
            Where We Work
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            HVAC Service Across {siteConfig.serviceAreas[0]}
          </h1>
        </div>
      </section>
      <ServiceAreaGrid />
      <FinalCTA />
    </>
  );
}
