import { getServiceBySlug } from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServicePhotoCard } from "@/components/ServicePhotoCard";

// A fixed, hand-picked showcase (not the full 15-service catalog — see
// /services for that).
const acRepair = getServiceBySlug("ac-repair");
const acInstallation = getServiceBySlug("ac-installation");
const heatingRepair = getServiceBySlug("heating-repair");
const hvacMaintenance = getServiceBySlug("hvac-maintenance");
const emergencyHvac = getServiceBySlug("emergency-hvac");
const indoorAirQuality = getServiceBySlug("indoor-air-quality");

export function ServiceGrid() {
  if (
    !acRepair ||
    !acInstallation ||
    !heatingRepair ||
    !hvacMaintenance ||
    !emergencyHvac ||
    !indoorAirQuality
  ) {
    return null;
  }

  const featured = [
    acRepair,
    acInstallation,
    heatingRepair,
    hvacMaintenance,
    emergencyHvac,
    indoorAirQuality,
  ];

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Do"
          title="Complete Heating & Cooling Services"
          description="From emergency repairs to full system installations, our licensed technicians handle every part of your home's comfort system."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <ServicePhotoCard key={service.slug} service={service} />
          ))}
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
