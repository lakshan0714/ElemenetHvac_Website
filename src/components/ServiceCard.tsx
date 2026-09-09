import Link from "next/link";
import type { Service } from "@/lib/services";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ChevronRight } from "@/components/ui/icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group flex flex-col">
      <div className="overflow-hidden rounded-lg">
        <PlaceholderImage
          alt={service.image.alt}
          className="aspect-[4/3] transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-bold text-brand-950">{service.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{service.summary}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 transition-all group-hover:gap-2">
          Learn More <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
