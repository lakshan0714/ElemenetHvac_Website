import { siteConfig } from "@/lib/site-config";

/**
 * Stylized, illustrative outline of Pennsylvania — not surveyed geography.
 * Good enough to signal "service area map" without implying precise
 * coverage boundaries.
 */
export function PennsylvaniaMap() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-ink-100 bg-ink-50 p-6 sm:p-10">
      <svg
        viewBox="0 0 320 220"
        className="mx-auto w-full max-w-md"
        role="img"
        aria-label={`Illustrative map highlighting ${siteConfig.serviceAreas[0]}, our HVAC service area`}
      >
        <path
          d="M50,30 L92,30 L92,50 L250,50 L272,76 L256,112 L262,140 L240,166 L50,166 Z"
          className="fill-steel-100 stroke-brand-700"
          strokeWidth={2.5}
          strokeLinejoin="round"
        />

        {/* Soft coverage radius around the primary service region */}
        <circle cx="160" cy="105" r="48" className="fill-accent-500/10" />
        <circle
          cx="160"
          cy="105"
          r="48"
          className="fill-none stroke-accent-500/40"
          strokeDasharray="4 5"
        />

        {/* Pin */}
        <g transform="translate(160,105)">
          <circle r="9" className="fill-accent-500" />
          <circle r="9" className="fill-none stroke-white" strokeWidth={2} />
          <circle r="16" className="fill-none stroke-accent-500/50" strokeWidth={1.5} />
        </g>

        <text
          x="160"
          y="140"
          textAnchor="middle"
          className="fill-brand-950 text-[13px] font-bold"
        >
          {siteConfig.serviceAreas[0]}
        </text>
      </svg>
      <p className="mt-4 text-center text-xs text-ink-500">
        Illustrative map — contact us to confirm coverage for your specific address.
      </p>
    </div>
  );
}
