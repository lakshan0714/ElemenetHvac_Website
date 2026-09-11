import type { Metadata } from "next";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "HVAC Services",
  description: `Complete heating, cooling, installation, and maintenance services from ${siteConfig.name}, proudly serving ${siteConfig.serviceAreas[0]}.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <section className="bg-brand-950 py-16 sm:py-20">
        <div className="container-page text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-400">
            Our Services
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Complete HVAC Services for {siteConfig.serviceAreas[0]}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-ink-100/80">
            From emergency repairs to full system replacements, our licensed technicians
            handle every part of your home&apos;s comfort — heating, cooling, air quality,
            and more.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <EmergencyBanner />
      <FinalCTA />
    </>
  );
}
