import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Phone, MapPin, Clock } from "@/components/ui/icons";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Request HVAC service or a free estimate from ${siteConfig.name}, serving ${siteConfig.serviceAreas[0]}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="bg-brand-950 py-16 sm:py-20">
        <div className="container-page">
          <p className="text-base font-bold uppercase tracking-[0.18em] text-accent-400">
            Get In Touch
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Request Service in Under a Minute
          </h1>
          <p className="mt-5 max-w-xl text-ink-100/80">
            Fill out the form below or call us directly — we&apos;ll get back to you
            quickly.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-lg border border-ink-100 bg-white p-6 shadow-soft sm:p-8">
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-lg bg-accent-50 p-6">
              <h3 className="text-base font-bold uppercase tracking-wide text-accent-700">
                Emergency?
              </h3>
              <p className="mt-2 text-base text-ink-700">
                For urgent heating or cooling issues, call us directly — available 24/7.
              </p>
              <PhoneLink className="mt-4 w-full" size="lg" />
            </div>

            <div className="rounded-lg border border-ink-100 bg-white p-6 shadow-soft">
              <ul className="space-y-4 text-base text-ink-700">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  <a href={siteConfig.phoneHref} className="hover:text-brand-900">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  Serving {siteConfig.serviceAreas[0]} and surrounding areas
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  <span>
                    {siteConfig.hours.office}
                    <br />
                    {siteConfig.hours.emergency}
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
