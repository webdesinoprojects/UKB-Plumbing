"use client";

import { useEffect } from "react";
import { readCookieConsent } from "@/lib/cookieConsent";

function track(eventName: string, parameters: Record<string, string> = {}) {
  const consent = readCookieConsent();
  if (!consent?.analytics && !consent?.advertising) return;
  window.gtag?.("event", eventName, parameters);
}

export default function ConversionTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a");
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.getAttribute("href") || "";
      const location = link.dataset.trackingLocation || "page";
      if (href.startsWith("tel:")) track("phone_click", { link_location: location });
      else if (href.includes("wa.me/")) track("whatsapp_click", { link_location: location });
      else if (href === "/inquiry-form" || href.startsWith("/inquiry-form?")) {
        track("quote_cta_click", { link_location: location });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
