import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import {
  ChevronRight,
  Flame,
  Snowflake,
  Wind,
  Wrench,
  Sparkles,
  Droplet,
  Clock,
} from "@/components/ui/icons";

const categoryIcon: Record<Service["category"], typeof Flame> = {
  Cooling: Snowflake,
  Heating: Flame,
  Installation: Wrench,
  Maintenance: Sparkles,
  "Air Quality": Wind,
  Commercial: Droplet,
  Emergency: Clock,
};

interface CardProps {
  service: Service;
  className?: string;
}

/** Full-bleed photo card with a gradient scrim and copy anchored at the bottom. */
export function ServicePhotoCard({ service, className = "" }: CardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative block aspect-[4/3] overflow-hidden rounded-xl lg:aspect-auto lg:h-full ${className}`}
    >
      <Image
        src={service.image.src}
        alt={service.image.alt}
        fill
        sizes="(min-width: 1024px) 25vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-xl font-bold text-white">{service.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-100/80">
          {service.summary}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-400 transition-all group-hover:gap-2">
          Learn More <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

/** Solid dark feature card — the widest slot, more room for description copy. */
export function ServiceFeatureCard({ service, className = "" }: CardProps) {
  const Icon = categoryIcon[service.category];

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-xl bg-brand-950 p-7 ${className}`}
    >
      <Icon
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 text-white/[0.06]"
      />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-accent-400">
        <Icon className="h-6 w-6" />
      </span>
      <div className="relative mt-8">
        <h3 className="text-2xl font-bold text-white">{service.name}</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-100/75">
          {service.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-400 transition-all group-hover:gap-2">
          Learn More <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

/** Compact dark card — pairs of these fill a single column in the bento grid. */
export function ServiceCompactCard({ service, className = "" }: CardProps) {
  const Icon = categoryIcon[service.category];

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group flex items-center justify-between gap-3 overflow-hidden rounded-xl bg-brand-900 px-5 py-5 transition-colors hover:bg-brand-800 ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-accent-400">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-sm font-bold text-white">{service.name}</h3>
      </div>
      <ChevronRight className="h-4 w-4 shrink-0 text-white/50 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
