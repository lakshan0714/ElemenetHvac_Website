import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline-light" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-white hover:bg-accent-600 focus-visible:outline-accent-600 shadow-soft",
  secondary: "bg-brand-900 text-white hover:bg-brand-800 focus-visible:outline-brand-900",
  "outline-light":
    "border border-white/40 text-white hover:bg-white/10 focus-visible:outline-white",
  ghost: "text-brand-900 hover:bg-ink-50",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  external = false,
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
