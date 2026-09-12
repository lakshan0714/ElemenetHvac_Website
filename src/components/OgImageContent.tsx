import { siteConfig } from "@/lib/site-config";

/**
 * Shared visual template for the Open Graph / Twitter card images, rendered
 * through next/og's ImageResponse (Satori). Kept as one component so both
 * image routes stay in sync — only real siteConfig facts are used, nothing
 * invented for the sake of filling space.
 */
export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#09111d",
        backgroundImage:
          "radial-gradient(circle at 15% -10%, rgba(61,111,173,0.35), transparent 55%), radial-gradient(circle at 90% 110%, rgba(165,49,39,0.25), transparent 45%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <div
          style={{
            width: 84,
            height: 84,
            borderRadius: 18,
            backgroundColor: "#142842",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="46" height="46" viewBox="0 0 38 38" fill="none">
            <path
              d="M9 22.5 19 13l10 9.5"
              stroke="#c63b2f"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 27h12"
              stroke="#ffffff"
              strokeOpacity="0.7"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontSize: 44, fontWeight: 800, color: "#ffffff", letterSpacing: -1 }}
          >
            ELEMENT
          </div>
          <div
            style={{ fontSize: 20, fontWeight: 600, color: "#d65d52", letterSpacing: 8 }}
          >
            HVAC
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 48,
          fontSize: 42,
          fontWeight: 700,
          color: "#ffffff",
          maxWidth: 920,
          lineHeight: 1.15,
        }}
      >
        Veteran-Owned Heating &amp; Cooling
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 18,
          fontSize: 26,
          color: "#9aa3b0",
          maxWidth: 850,
        }}
      >
        {siteConfig.tagline}
      </div>

      <div style={{ display: "flex", marginTop: 56, gap: 36, fontSize: 26 }}>
        <div style={{ display: "flex", color: "#ffffff", fontWeight: 600 }}>
          {siteConfig.phone}
        </div>
        <div style={{ display: "flex", color: "#8fb0da" }}>
          {siteConfig.serviceAreas[0]}
        </div>
      </div>
    </div>
  );
}
