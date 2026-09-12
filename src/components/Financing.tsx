import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "@/components/ui/icons";

const points = [
  "Flexible monthly payment plans",
  "Options for qualifying installations & replacements",
  "Simple application process",
  "No pressure — decide what works for your budget",
];

export function Financing() {
  return (
    <section id="financing" className="bg-brand-950 py-20 sm:py-28">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Financing"
            title="Comfort Now. Flexible Payments."
            align="left"
            dark
            description="A new HVAC system is an investment in your home. We offer financing options to help make it manageable."
          />
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-base font-medium text-ink-100/90"
              >
                <Check className="h-4 w-4 shrink-0 text-accent-400" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Ask About Financing
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/images/financing.jpg"
            alt="Homeowner reviewing HVAC financing options with an advisor"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
