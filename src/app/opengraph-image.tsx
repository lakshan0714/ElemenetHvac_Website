import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";
import { OgImageContent } from "@/components/OgImageContent";

export const alt = `${siteConfig.name} — Heating & Cooling Services`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<OgImageContent />, size);
}
