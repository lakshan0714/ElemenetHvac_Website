import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Button } from "@/components/ui/Button";
import { Shield, Award, Wrench, CheckCircle } from "@/components/ui/icons";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}, a veteran-owned HVAC company with ${siteConfig.yearsExperience} years of combined experience serving ${siteConfig.serviceAreas[0]}.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We tell you what's actually wrong and what it actually costs — no games.",
  },
  {
    icon: CheckCircle,
    title: "Discipline",
    description:
      "The same standards our team carried in service, applied to every job we do.",
  },
  {
    icon: Wrench,
    title: "Craftsmanship",
    description:
      "Clean installs, careful diagnostics, and work we're proud to put our name on.",
  },
  {
    icon: Award,
    title: "Experience",
    description: `${siteConfig.yearsExperience} years of combined hands-on HVAC experience across our team.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <section className="bg-brand-950 py-16 sm:py-20">
        <div className="container-page">
          <p className="text-base font-bold uppercase tracking-[0.18em] text-accent-400">
            About {siteConfig.name}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Veteran-Owned. Built on Integrity.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-100/80">
            {siteConfig.description}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-start gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-950 text-accent-400">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-bold text-brand-950">{title}</h2>
              <p className="text-base leading-relaxed text-ink-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-950 sm:text-3xl">Our Story</h2>
            <p className="mt-4 leading-relaxed text-ink-700">
              {siteConfig.name} was founded by a team of veterans who brought the same
              standards they held in service — integrity, discipline, and attention to
              detail — into HVAC work. With {siteConfig.yearsExperience} years of combined
              experience, we&apos;ve built a company around doing the job right,
              communicating honestly, and treating every home like it&apos;s our own.
            </p>
            <p className="mt-4 leading-relaxed text-ink-700">
              Today, we proudly serve homeowners and businesses throughout{" "}
              {siteConfig.serviceAreas[0]} with heating, cooling, installation, and
              maintenance services built to last.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneLink size="lg" />
              <Button href="/contact" variant="secondary" size="lg">
                Get Free Estimate
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-ink-100 bg-white p-8 shadow-soft">
            <h3 className="text-lg font-bold text-brand-950">Credentials</h3>
            <ul className="mt-5 space-y-3 text-base text-ink-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle className="h-4 w-4 shrink-0 text-accent-600" />
                Veteran-Owned & Operated
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="h-4 w-4 shrink-0 text-accent-600" />
                Licensed & Insured
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="h-4 w-4 shrink-0 text-accent-600" />
                {siteConfig.yearsExperienceLabel}
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="h-4 w-4 shrink-0 text-accent-600" />
                {siteConfig.license.label}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
