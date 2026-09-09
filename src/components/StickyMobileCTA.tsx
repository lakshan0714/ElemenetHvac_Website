import { siteConfig } from "@/lib/site-config";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Button } from "@/components/ui/Button";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink-100 bg-white p-2.5 shadow-lifted lg:hidden [padding-bottom:calc(0.625rem+env(safe-area-inset-bottom))]">
      <PhoneLink size="lg" className="flex-1" label={siteConfig.phone} />
      <Button href="/contact" variant="secondary" size="lg" className="flex-1">
        Request Service
      </Button>
    </div>
  );
}
