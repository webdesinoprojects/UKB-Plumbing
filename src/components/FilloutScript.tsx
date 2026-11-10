"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { COOKIE_CONSENT_EVENT, readCookieConsent } from "@/lib/cookieConsent";

const ADS_CONVERSION_DESTINATION = "AW-16916032947/kU9LCO_wlaAbELPbmII_";

function isFilloutOrigin(origin: string) {
  try {
    const hostname = new URL(origin).hostname.toLowerCase();
    return hostname === "fillout.com" || hostname.endsWith(".fillout.com");
  } catch {
    return false;
  }
}

export default function FilloutScript() {
  const [allowed, setAllowed] = useState(false);
  const submitted = useRef(new Set<string>());

  useEffect(() => {
    const sync = () => setAllowed(readCookieConsent()?.externalMedia === true);
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  useEffect(() => {
    if (!allowed) return;

    const onMessage = (event: MessageEvent) => {
      if (!isFilloutOrigin(event.origin)) return;
      const data = event.data as { type?: string; submissionUuid?: string; embedId?: string } | null;
      if (!data || typeof data !== "object" || data.type !== "form_submit") return;

      const key = data.submissionUuid || data.embedId || "single-submission";
      if (submitted.current.has(key)) return;
      submitted.current.add(key);

      const consent = readCookieConsent();
      if (consent?.analytics) {
        window.gtag?.("event", "quote_form_submit", { form_provider: "fillout" });
      }
      if (consent?.advertising) {
        window.gtag?.("event", "conversion", { send_to: ADS_CONVERSION_DESTINATION });
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [allowed]);

  if (!allowed) return null;

  return <Script id="fillout-embed-loader" src="https://server.fillout.com/embed/v1/" strategy="afterInteractive" />;
}
