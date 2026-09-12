import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-ink-500">
            [Add your finalized privacy policy here before launch. This placeholder should
            be replaced with policy language reviewed for your business and jurisdiction,
            covering what information {siteConfig.name} collects through this website
            (e.g. contact form submissions), how it is used, and how visitors can request
            it be deleted.]
          </p>
        </div>
      </section>
    </>
  );
}
