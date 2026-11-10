"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { COOKIE_CONSENT_EVENT, readCookieConsent } from "@/lib/cookieConsent";

const GOOGLE_TAG_ID = "AW-16916032947";
const GOOGLE_DESTINATION_ID = "GT-TB7RCZJR";

type ConsentState = { analytics: boolean; advertising: boolean };

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConsentScripts() {
  const [consent, setConsent] = useState<ConsentState>({ analytics: false, advertising: false });

  useEffect(() => {
    const sync = () => {
      const stored = readCookieConsent();
      const next = {
        analytics: stored?.analytics === true,
        advertising: stored?.advertising === true,
      };
      setConsent(next);
      window.gtag?.("consent", "update", {
        analytics_storage: next.analytics ? "granted" : "denied",
        ad_storage: next.advertising ? "granted" : "denied",
        ad_user_data: next.advertising ? "granted" : "denied",
        ad_personalization: next.advertising ? "granted" : "denied",
      });
    };

    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  if (!consent.analytics && !consent.advertising) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`} strategy="afterInteractive" />
      <Script id="google-tag-consented" strategy="afterInteractive">
        {`
          window.gtag('js', new Date());
          window.gtag('config', '${GOOGLE_TAG_ID}');
          window.gtag('config', '${GOOGLE_DESTINATION_ID}');
        `}
      </Script>
    </>
  );
}
