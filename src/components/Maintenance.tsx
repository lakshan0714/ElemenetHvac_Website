import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "@/components/ui/icons";

const included = [
  "Full system inspection — heating & cooling",
  "Coil, filter, and component cleaning",
  "Priority scheduling for members",
  "Early detection of small issues before they become breakdowns",
];

export function Maintenance() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="order-2 rounded-lg bg-ink-50 p-8 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-700">
            Maintenance Plans
          </p>
          <p className="mt-3 text-2xl font-bold text-brand-950">
            Two Visits a Year. Year-Round Peace of Mind.
          </p>
          <ul className="mt-6 space-y-3">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-ink-700"
              >
                <Check className="h-4 w-4 shrink-0 text-accent-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Preventive Maintenance"
            title="Stop Breakdowns Before They Start"
            align="left"
            description="Routine maintenance is the most reliable way to avoid an emergency repair and keep your system running efficiently for years to come."
          />
          <div className="mt-8">
            <Button href="/services/hvac-maintenance" size="lg">
              Explore Maintenance Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
