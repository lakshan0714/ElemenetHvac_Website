import { services, getFeaturedServices } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ServiceGrid({ featuredOnly = true }: { featuredOnly?: boolean }) {
  const list = featuredOnly ? getFeaturedServices() : services;

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Do"
          title="Complete Heating & Cooling Services"
          description="From emergency repairs to full system installations, our licensed technicians handle every part of your home's comfort system."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {featuredOnly && (
          <div className="mt-10 flex justify-center">
            <Button href="/services" variant="secondary" size="lg">
              View All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
