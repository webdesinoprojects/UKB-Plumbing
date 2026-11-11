"use client";

import { useEffect, useState } from "react";
import { allowExternalServices, COOKIE_CONSENT_EVENT, readCookieConsent } from "@/lib/cookieConsent";

interface ConsentIframeProps {
  src: string;
  title: string;
  className?: string;
}

export default function ConsentIframe({ src, title, className = "h-[320px] w-full" }: ConsentIframeProps) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(readCookieConsent()?.externalMedia === true);
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  if (!allowed) {
    return (
      <div className={`${className} flex flex-col items-center justify-center bg-slate-50 p-6 text-center`}>
        <p className="max-w-md text-sm text-slate-700">Allow external services to load this content.</p>
        <button type="button" onClick={allowExternalServices} className="mt-4 rounded-lg bg-[#1D3B8A] px-5 py-3 text-sm font-bold text-white hover:bg-blue-900">
          Allow map
        </button>
      </div>
    );
  }

  return <iframe title={title} src={src} className={className} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />;
}
