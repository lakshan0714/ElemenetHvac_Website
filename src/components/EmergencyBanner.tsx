import { siteConfig } from "@/lib/site-config";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { AlertTriangle } from "@/components/ui/icons";

export function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden bg-accent-600">
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #000 0, #000 2px, transparent 2px, transparent 14px)",
        }}
      />
      <div className="container-page relative flex flex-col items-center gap-6 py-14 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-start gap-4">
          <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black/15 text-white sm:flex">
            <AlertTriangle className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              HVAC Stopped Working?
            </h2>
            <p className="mt-1.5 max-w-md text-white/85">
              We provide fast, 24/7 emergency heating and cooling service throughout{" "}
              {siteConfig.serviceAreas[0]}.
            </p>
          </div>
        </div>
        <PhoneLink
          variant="secondary"
          size="lg"
          label={`Call Now: ${siteConfig.phone}`}
          className="shrink-0"
        />
      </div>
    </section>
  );
}
