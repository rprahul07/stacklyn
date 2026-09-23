declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type LeadMethod = "whatsapp" | "phone" | "email" | "contact_form" | "whatsapp_fallback";

/**
 * Sends a GA4 `generate_lead` event. Mark `generate_lead` as a key event in
 * Google Analytics to see which pages and channels produce enquiries.
 */
export function trackLead(method: LeadMethod) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "generate_lead", { method, page_path: window.location.pathname });
}
