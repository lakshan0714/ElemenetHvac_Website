import { ImageIcon } from "./icons";

interface PlaceholderImageProps {
  alt: string;
  className?: string;
  tone?: "light" | "dark";
}

/**
 * Stand-in for a real photo. Swap for a Next/Image once the corresponding
 * file (see each service's `image.src` / the image prompt reference) has
 * been generated and dropped into /public.
 */
export function PlaceholderImage({
  alt,
  className = "",
  tone = "light",
}: PlaceholderImageProps) {
  const toneClasses =
    tone === "dark"
      ? "bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 text-white/70"
      : "bg-gradient-to-br from-ink-50 via-ink-100 to-steel-100 text-brand-900/50";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden ${toneClasses} ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 16px)",
        }}
      />
      <ImageIcon className="relative h-8 w-8" />
    </div>
  );
}
