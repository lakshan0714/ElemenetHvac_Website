type AnalyticsEvent =
  | "phone_click"
  | "estimate_form_started"
  | "estimate_form_submitted"
  | "service_page_view"
  | "booking_started"
  | "booking_completed";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: AnalyticsEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}
