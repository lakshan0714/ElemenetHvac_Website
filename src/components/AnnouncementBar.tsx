import { siteConfig } from "@/lib/site-config";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function AnnouncementBar() {
  return (
    <div className="bg-brand-950 text-white">
      <div className="container-page flex items-center justify-center gap-3 py-2 text-center text-xs font-medium sm:text-sm">
        <span className="hidden sm:inline text-accent-400">●</span>
        <span>24/7 Emergency HVAC Service — Serving {siteConfig.serviceAreas[0]}</span>
        <PhoneLink
          variant="ghost"
          size="md"
          className="!p-0 !text-accent-400 underline underline-offset-2 hover:!bg-transparent hover:!text-white"
          label={siteConfig.phone}
          showIcon={false}
        />
      </div>
    </div>
  );
}
