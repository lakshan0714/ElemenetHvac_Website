import { siteConfig } from "@/lib/site-config";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-brand-950 py-20 sm:py-24">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready for Reliable Comfort? Let&apos;s Get Started.
        </h2>
        <p className="max-w-xl text-ink-100/80">
          Reach out today for fast, honest HVAC service from a team that treats your home
          like it&apos;s our own.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <PhoneLink size="lg" label={`Call Now: ${siteConfig.phone}`} />
          <Button href="/contact" variant="outline-light" size="lg">
            Request Service Online
          </Button>
        </div>
      </div>
    </section>
  );
}
