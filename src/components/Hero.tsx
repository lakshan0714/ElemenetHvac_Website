import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CheckCircle } from "@/components/ui/icons";

const trustLine = ["Licensed & Insured", "Veteran-Owned & Operated", "Same-Day Service"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(61,111,173,0.35),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(198,59,47,0.18),transparent_45%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-page relative grid grid-cols-1 gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-base font-semibold uppercase tracking-wide text-accent-400">
            24/7 Emergency HVAC Service · {siteConfig.serviceAreas[0]}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Keep Your Home Comfortable.
            <br />
            <span className="text-accent-400">We Keep Your HVAC Running.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-100/85">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PhoneLink size="lg" label={`Call Now: ${siteConfig.phone}`} />
            <Button href="/contact" variant="outline-light" size="lg">
              Get Free Estimate
            </Button>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {trustLine.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-base font-medium text-ink-100/90"
              >
                <CheckCircle className="h-4 w-4 text-accent-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lifted">
            <Image
              src="/images/hero-technician.jpg"
              alt="HVAC technician servicing a home comfort system"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
