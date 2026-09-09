"use client";

import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import { Button } from "./Button";
import { Phone } from "./icons";

interface PhoneLinkProps {
  variant?: "primary" | "secondary" | "outline-light" | "ghost";
  size?: "md" | "lg";
  className?: string;
  label?: string;
  showIcon?: boolean;
}

export function PhoneLink({
  variant = "primary",
  size = "md",
  className = "",
  label,
  showIcon = true,
}: PhoneLinkProps) {
  return (
    <Button
      href={siteConfig.phoneHref}
      variant={variant}
      size={size}
      className={className}
      onClick={() => trackEvent("phone_click", { source: label ?? "unknown" })}
    >
      {showIcon && <Phone className="h-4 w-4" />}
      {label ?? `Call ${siteConfig.phone}`}
    </Button>
  );
}
