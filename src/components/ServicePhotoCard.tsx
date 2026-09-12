import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { ChevronRight } from "@/components/ui/icons";

/** Full-bleed photo card with a gradient scrim and copy anchored at the bottom. */
export function ServicePhotoCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[5/8]"
    >
      <Image
        src={service.image.src}
        alt={service.image.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-xl font-bold text-white">{service.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-base leading-relaxed text-ink-100/80">
          {service.summary}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-base font-semibold text-accent-400 transition-all group-hover:gap-2">
          Learn More <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
