import { SectionHeading } from "@/components/ui/SectionHeading";
import { Phone, Wrench, CheckCircle, Shield } from "@/components/ui/icons";

const steps = [
  {
    icon: Phone,
    title: "Call or Request Service",
    description: "Reach out by phone or online — we'll get you scheduled quickly.",
  },
  {
    icon: Wrench,
    title: "Diagnosis & Estimate",
    description:
      "A licensed technician inspects the issue and gives you upfront pricing.",
  },
  {
    icon: CheckCircle,
    title: "Expert Service",
    description:
      "We complete the work with the discipline and care our team is known for.",
  },
  {
    icon: Shield,
    title: "Warranty & Follow-Up",
    description: "Every job is backed by a clear warranty — we stand behind our work.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="How It Works" title="Comfort in Four Simple Steps" />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="relative h-14 w-14">
                <span className="pointer-events-none absolute -top-4 -right-4 text-4xl font-extrabold text-ink-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-950 text-accent-400">
                  <Icon className="h-6 w-6" />
                </span>
              </div>
              <h3 className="mt-5 text-base font-bold text-brand-950">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
