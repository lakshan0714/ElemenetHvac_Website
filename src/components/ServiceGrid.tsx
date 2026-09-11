import { getServiceBySlug } from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  ServicePhotoCard,
  ServiceFeatureCard,
  ServiceCompactCard,
} from "@/components/ServiceBentoCards";

// A fixed, hand-picked showcase (not the full 15-service catalog — see
// /services for that). Curated as photo / feature / compact slots to form
// the mosaic below rather than a uniform grid.
const acRepair = getServiceBySlug("ac-repair");
const acInstallation = getServiceBySlug("ac-installation");
const heatingRepair = getServiceBySlug("heating-repair");
const hvacMaintenance = getServiceBySlug("hvac-maintenance");
const emergencyHvac = getServiceBySlug("emergency-hvac");

export function ServiceGrid() {
  if (
    !acRepair ||
    !acInstallation ||
    !heatingRepair ||
    !hvacMaintenance ||
    !emergencyHvac
  ) {
    return null;
  }

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Do"
          title="Complete Heating & Cooling Services"
          description="From emergency repairs to full system installations, our licensed technicians handle every part of your home's comfort system."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-12 lg:h-[460px]">
          <ServicePhotoCard
            service={acRepair}
            className="lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-2"
          />
          <ServiceFeatureCard
            service={acInstallation}
            className="sm:col-span-2 lg:col-start-4 lg:col-span-4 lg:row-start-1 lg:row-span-2"
          />
          <ServiceCompactCard
            service={heatingRepair}
            className="lg:col-start-8 lg:col-span-2 lg:row-start-1"
          />
          <ServiceCompactCard
            service={hvacMaintenance}
            className="lg:col-start-8 lg:col-span-2 lg:row-start-2"
          />
          <ServicePhotoCard
            service={emergencyHvac}
            className="sm:col-span-2 lg:col-start-10 lg:col-span-3 lg:row-start-1 lg:row-span-2"
          />
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/services" variant="secondary" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
