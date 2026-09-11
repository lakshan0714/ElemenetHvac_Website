import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import { Logo } from "@/components/Logo";
import { Facebook, MapPin, Phone } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-ink-100">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
            {siteConfig.description}
          </p>
          {siteConfig.social.facebook && (
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Element HVAC on Facebook"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Facebook className="h-4 w-4" />
            </a>
          )}
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-300">
            {services.slice(0, 7).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="font-semibold text-accent-400 hover:text-accent-300"
              >
                View All Services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-300">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/service-areas" className="hover:text-white">
                Service Areas
              </Link>
            </li>
            <li>
              <Link href="/#reviews" className="hover:text-white">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/#financing" className="hover:text-white">
                Financing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-300">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <span>
                Proudly serving {siteConfig.serviceAreas[0]} and surrounding areas
              </span>
            </li>
            <li className="pt-2 text-sm text-ink-300">{siteConfig.hours.emergency}</li>
            <li className="text-sm text-ink-300">{siteConfig.license.label}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-sm text-ink-300 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved. Veteran-Owned & Operated.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
