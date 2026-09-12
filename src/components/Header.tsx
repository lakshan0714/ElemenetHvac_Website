"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Button } from "@/components/ui/Button";
import { Menu, Close } from "@/components/ui/icons";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container-page flex h-16 items-center justify-between py-3">
        <Link href="/" aria-label={`${siteConfig.name} — Home`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-semibold text-ink-700 transition-colors hover:text-brand-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <PhoneLink label={siteConfig.phone} />
          <Button href="/contact" variant="secondary">
            Get Free Estimate
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <PhoneLink size="md" showIcon={false} label="Call Now" />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-brand-950 hover:bg-ink-50 focus-visible:outline-2 focus-visible:outline-accent-500"
          >
            {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3.5 text-base font-semibold text-ink-900 hover:bg-ink-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-ink-100 pt-5">
              <PhoneLink size="lg" />
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                onClick={() => setOpen(false)}
              >
                Get Free Estimate
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
