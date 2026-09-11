interface LogoProps {
  className?: string;
  dark?: boolean;
}

/**
 * Custom brand mark: a navy badge with an amber chevron (nods to the
 * veteran-owned service stripe) above an airflow line. Paired with a
 * two-line wordmark lockup.
 */
export function Logo({ className = "", dark = false }: LogoProps) {
  const textColor = dark ? "text-white" : "text-brand-950";
  const subColor = dark ? "text-accent-400" : "text-accent-700";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="38" height="38" rx="8" className="fill-brand-900" />
        <path
          d="M9 22.5 19 13l10 9.5"
          stroke="#c63b2f"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 27h12"
          stroke="#ffffff"
          strokeOpacity="0.7"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading text-lg font-extrabold tracking-tight ${textColor}`}
        >
          ELEMENT
        </span>
        <span className={`text-[12.5px] font-semibold tracking-[0.24em] ${subColor}`}>
          HVAC
        </span>
      </span>
    </span>
  );
}
