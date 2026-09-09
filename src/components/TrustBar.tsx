import { siteConfig } from "@/lib/site-config";
import { isPlaceholder } from "@/lib/placeholder";
import { Shield, Award, Clock, DollarSign, Star } from "@/components/ui/icons";

export function TrustBar() {
  const items = [
    {
      icon: Shield,
      label: "Licensed & Insured",
    },
    {
      icon: Award,
      label: siteConfig.yearsExperienceLabel,
    },
    {
      icon: Clock,
      label: "24/7 Emergency Service",
    },
    {
      icon: DollarSign,
      label: "Financing Available",
    },
  ];

  const showRating =
    !isPlaceholder(siteConfig.google.rating) &&
    !isPlaceholder(siteConfig.google.reviewCount);

  return (
    <section className="border-y border-ink-100 bg-ink-50">
      <div className="container-page grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-900 text-accent-400">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-brand-950">{label}</span>
          </div>
        ))}
      </div>
      {showRating && (
        <div className="border-t border-ink-100 py-3 text-center text-sm text-ink-500">
          <span className="inline-flex items-center gap-1 align-middle text-accent-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4" />
            ))}
          </span>{" "}
          {siteConfig.google.rating} rating from {siteConfig.google.reviewCount}+ Google
          reviews
        </div>
      )}
    </section>
  );
}
