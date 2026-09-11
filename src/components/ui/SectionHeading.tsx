interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClasses}`}>
      {eyebrow && (
        <span
          className={`text-xs font-bold uppercase tracking-[0.18em] ${
            dark ? "text-accent-400" : "text-accent-700"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-brand-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed ${dark ? "text-ink-100/80" : "text-ink-500"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
