import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Shield, Award, Wrench, Clock, Home, Sparkles } from "@/components/ui/icons";

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

function FeatureCard({
  point,
  index,
}: {
  point: (typeof points)[number];
  index: number;
}) {
  const isBrand = index % 2 === 0;
  const tint = isBrand
    ? "bg-brand-600/10 text-brand-700"
    : "bg-accent-600/10 text-accent-700";
  const bar = isBrand ? "bg-brand-600" : "bg-accent-600";
  const Icon = point.icon;

  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
      <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${tint}`}>
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-base font-bold text-brand-950">{point.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{point.description}</p>
      <span className={`mt-4 block h-1 w-10 rounded-full ${bar}`} />
    </div>
  );
}

export function WhyChooseUs() {
  const [left, right] = [points.slice(0, 2), points.slice(2)];

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-600/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-brand-700">
            <Home className="h-4 w-4" />
            Why Choose Us
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
            Your Home Is In <span className="text-accent-600">Safe Hands</span>
          </h2>
          <p className="text-base leading-relaxed text-ink-500">
            Element HVAC was built on the values our team carried in service: integrity,
            discipline, and doing the job right.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.05fr_1fr] lg:gap-6">
          <div className="order-2 grid grid-cols-1 gap-6 sm:order-2 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
            {left.map((point, i) => (
              <FeatureCard key={point.title} point={point} index={i} />
            ))}
          </div>

          <div className="relative order-1 mx-auto w-full max-w-md sm:order-1 lg:order-2">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[3rem] bg-brand-600/10"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lifted">
              <Image
                src="/images/why-choose-us-home.jpg"
                alt="A comfortable, well-maintained home exterior"
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover object-[center_38%]"
              />
            </div>
            <Sparkles
              aria-hidden
              className="absolute -right-3 -top-3 h-9 w-9 text-accent-500"
            />
            <p className="font-script absolute -bottom-6 left-2 rotate-[-3deg] text-3xl leading-none text-brand-800 sm:text-4xl">
              Comfort you can
              <br />
              come home to
            </p>
          </div>

          <div className="order-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:order-3 lg:grid-cols-1">
            {right.map((point, i) => (
              <FeatureCard key={point.title} point={point} index={i + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
