import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { ReviewSection } from "@/components/ReviewSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/schema";
import { AlertTriangle, Check, ChevronRight } from "@/components/ui/icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title = `${service.name} in ${siteConfig.serviceAreas[0]}`;
  return {
    title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title, description: service.summary },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd
        data={buildServiceSchema({
          name: service.name,
          description: service.summary,
          path: `/services/${service.slug}`,
        })}
      />
      <JsonLd data={buildFaqSchema(service.faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      <section className="bg-brand-950 py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-base font-bold uppercase tracking-[0.18em] text-accent-400">
              {service.category} Services · {siteConfig.serviceAreas[0]}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-100/80">
              {service.heroSubhead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneLink size="lg" label={`Call Now: ${siteConfig.phone}`} />
              <Button href="/contact" variant="outline-light" size="lg">
                Get Free Estimate
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-brand-950">Overview</h2>
            <p className="mt-4 leading-relaxed text-ink-700">{service.solution}</p>

            <h2 className="mt-12 text-2xl font-bold text-brand-950">
              Common {service.name} Problems
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.commonProblems.map((problem) => (
                <li
                  key={problem}
                  className="flex items-start gap-2.5 text-base text-ink-700"
                >
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  {problem}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-brand-950">
              Signs You Need Service
            </h2>
            <ul className="mt-5 space-y-3">
              {service.symptoms.map((symptom) => (
                <li
                  key={symptom}
                  className="flex items-start gap-2.5 text-base text-ink-700"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-lg border border-ink-100 bg-ink-50 p-6 lg:sticky lg:top-24 lg:h-fit">
            <h3 className="text-lg font-bold text-brand-950">Our Process</h3>
            <ol className="mt-4 space-y-4">
              {service.process.map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-950 text-base font-bold text-accent-400">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-brand-950">{step.title}</p>
                    <p className="mt-0.5 text-base leading-relaxed text-ink-500">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 border-t border-ink-100 pt-5">
              <PhoneLink size="md" className="w-full" label={siteConfig.phone} />
            </div>
          </aside>
        </div>
      </section>

      <EmergencyBanner />
      <ReviewSection />
      <FAQSection faqs={service.faqs} title={`${service.name} FAQs`} id="service-faq" />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-950">Related Services</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-6">
            <Button href="/services" variant="ghost" className="!px-0">
              View All Services <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
