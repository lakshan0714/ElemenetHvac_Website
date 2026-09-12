import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { ChevronRight } from "@/components/ui/icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
        />
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-bold text-brand-950">{service.name}</h3>
        <p className="mt-1.5 text-base leading-relaxed text-ink-500">{service.summary}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-base font-semibold text-accent-700 transition-all group-hover:gap-2">
          Learn More <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
