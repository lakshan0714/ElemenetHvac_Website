import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ]}
      />
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-base text-ink-500">
            [Add your finalized terms of service here before launch. This placeholder
            should be replaced with terms reviewed for {siteConfig.name} covering website
            use, service estimates, and liability.]
          </p>
        </div>
      </section>
    </>
  );
}
