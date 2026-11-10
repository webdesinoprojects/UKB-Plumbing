"use client";

import { useEffect, useRef, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_SETTINGS_EVENT,
  readCookieConsent,
} from "@/lib/cookieConsent";

interface FilloutEmbedProps {
  className?: string;
}

export default function FilloutEmbed({ className = "min-h-[520px]" }: FilloutEmbedProps) {
  const [allowed, setAllowed] = useState(false);
  const [inView, setInView] = useState(false);
  const embedRef = useRef<HTMLDivElement>(null);
  const viewTracked = useRef(false);

  useEffect(() => {
    const sync = () => setAllowed(readCookieConsent()?.externalMedia === true);
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  useEffect(() => {
    if (!allowed || !embedRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { rootMargin: "200px" });
    observer.observe(embedRef.current);
    return () => observer.disconnect();
  }, [allowed]);

  useEffect(() => {
    if (!allowed || !inView || viewTracked.current) return;
    viewTracked.current = true;
    if (readCookieConsent()?.analytics) {
      window.gtag?.("event", "quote_form_start", { form_provider: "fillout" });
    }
  }, [allowed, inView]);

  const openCookieSettings = () => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));

  return (
    <div ref={embedRef} className={className}>
      {!allowed ? (
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h2 className="text-xl font-bold text-ukb-darkblue">Allow the enquiry form</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-700">
            The form is supplied by Fillout and loads only when External services are allowed. You can also call 07359 605766 or email info@ukbplumbing.co.uk.
          </p>
          <button type="button" onClick={openCookieSettings} className="mt-5 rounded-lg bg-[#1D3B8A] px-5 py-3 font-bold text-white">
            Manage cookie choices
          </button>
        </div>
      ) : inView ? (
        <div
          className="hero-fillout-embed min-h-[520px] w-full overflow-hidden"
          data-fillout-id="s5uwzWcheNus"
          data-fillout-embed-type="standard"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
          aria-label="Request a plumbing quote form"
        />
      ) : (
        <div className="flex min-h-[300px] items-center justify-center text-sm text-slate-600" role="status">
          Loading enquiry form…
        </div>
      )}
    </div>
  );
}
