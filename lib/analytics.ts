type AnalyticsEvent = {
  event: string;
  cta_position?: "primary" | "secondary";
  cta_label?: string;
  cta_href?: string;
  page_path?: string;
};

declare global {
  interface Window {
    dataLayer?: AnalyticsEvent[];
  }
}

export function trackEvent(payload: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", payload);
  }
}

export function trackMobileCtaClick({
  position,
  label,
  href,
  pagePath,
}: {
  position: "primary" | "secondary";
  label: string;
  href: string;
  pagePath: string;
}) {
  trackEvent({
    event: "mobile_cta_click",
    cta_position: position,
    cta_label: label,
    cta_href: href,
    page_path: pagePath,
  });
}
