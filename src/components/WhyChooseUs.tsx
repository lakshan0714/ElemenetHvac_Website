import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Shield, Award, Wrench, Clock } from "@/components/ui/icons";

const points = [
  {
    icon: Shield,
    title: "Veteran-Owned Discipline",
    description:
      "Our veteran-owned team brings military-grade discipline, integrity, and attention to detail to every job — no shortcuts, no excuses.",
  },
  {
    icon: Award,
    title: `${siteConfig.yearsExperience} Years Combined Experience`,
    description:
      "Decades of hands-on HVAC experience across our team means your system is diagnosed correctly the first time.",
  },
  {
    icon: Wrench,
    title: "Expert Craftsmanship",
    description:
      "We treat every installation and repair like it's our own home — clean work, quality parts, and lasting results.",
  },
  {
    icon: Clock,
    title: "Fast, Reliable Response",
    description:
      "When your comfort is on the line, you need a team that shows up when they say they will — including for emergencies.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Your Home Is In Safe Hands"
          description="Element HVAC was built on the values our team carried in service: integrity, discipline, and doing the job right."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {points.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-950 text-accent-400">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-brand-950">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
