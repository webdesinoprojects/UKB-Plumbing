"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { COOKIE_CONSENT_EVENT, COOKIE_SETTINGS_EVENT, readCookieConsent } from "@/lib/cookieConsent";

export default function ExternalReviews() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(readCookieConsent()?.externalMedia === true);
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  if (!allowed) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
        <p className="text-sm text-slate-700">
          The live review feed is supplied by Featurable and is not loaded until you allow external services.
        </p>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
          className="mt-4 rounded-lg bg-[#1D3B8A] px-5 py-3 text-sm font-bold text-white hover:bg-blue-900"
        >
          Review cookie choices
        </button>
      </div>
    );
  }

  return (
    <>
      <div id="featurable-ec9871d9-c7d9-475b-b10f-9b8f4c72df3e" data-featurable-async />
      <Script src="https://featurable.com/assets/bundle.js" strategy="afterInteractive" charSet="UTF-8" />
    </>
  );
}
