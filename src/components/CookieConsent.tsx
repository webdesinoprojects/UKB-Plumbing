"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  COOKIE_SETTINGS_EVENT,
  readCookieConsent,
  saveCookieConsent,
} from "@/lib/cookieConsent";

type OptionalPreferences = {
  analytics: boolean;
  advertising: boolean;
  externalMedia: boolean;
};

const denied: OptionalPreferences = {
  analytics: false,
  advertising: false,
  externalMedia: false,
};

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [customising, setCustomising] = useState(false);
  const [preferences, setPreferences] = useState<OptionalPreferences>(denied);

  useEffect(() => {
    const stored = readCookieConsent();
    if (stored) {
      setPreferences({
        analytics: stored.analytics,
        advertising: stored.advertising,
        externalMedia: stored.externalMedia,
      });
    } else {
      setOpen(true);
    }

    const openSettings = () => {
      const current = readCookieConsent();
      if (current) {
        setPreferences({
          analytics: current.analytics,
          advertising: current.advertising,
          externalMedia: current.externalMedia,
        });
      }
      setCustomising(true);
      setOpen(true);
    };

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  const choose = (next: OptionalPreferences) => {
    saveCookieConsent(next);
    setPreferences(next);
    setOpen(false);
    setCustomising(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-slate-200 bg-white p-4 shadow-[0_-8px_30px_rgba(15,23,42,0.18)] sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
    >
      <div className="mx-auto max-w-5xl">
        <h2 id="cookie-consent-title" className="text-lg font-bold text-ukb-darkblue">
          Your cookie choices
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">
          Necessary storage keeps your consent choice and is always active. With your permission,
          we also use Google measurement and advertising tags and load third-party forms and reviews.
          See our <Link href="/cookie-policy" className="font-semibold underline">Cookie Policy</Link>.
        </p>

        {customising && (
          <fieldset className="mt-4 grid gap-3 sm:grid-cols-3">
            <legend className="sr-only">Optional cookie categories</legend>
            {[
              ["analytics", "Analytics", "Helps us understand website use."],
              ["advertising", "Advertising", "Measures advertising conversions."],
              ["externalMedia", "External services", "Loads Fillout forms and the reviews widget."],
            ].map(([key, label, description]) => (
              <label key={key} className="flex cursor-pointer gap-3 rounded-lg border border-slate-200 p-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4"
                  checked={preferences[key as keyof OptionalPreferences]}
                  onChange={(event) =>
                    setPreferences((current) => ({ ...current, [key]: event.target.checked }))
                  }
                />
                <span>
                  <span className="block text-sm font-bold text-slate-900">{label}</span>
                  <span className="block text-xs text-slate-600">{description}</span>
                </span>
              </label>
            ))}
          </fieldset>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          <button type="button" onClick={() => choose(denied)} className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50">
            Reject optional
          </button>
          {customising ? (
            <button type="button" onClick={() => choose(preferences)} className="rounded-lg bg-[#1D3B8A] px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-900">
              Save choices
            </button>
          ) : (
            <button type="button" onClick={() => setCustomising(true)} className="rounded-lg border border-[#1D3B8A] px-4 py-2.5 text-sm font-bold text-[#1D3B8A] hover:bg-blue-50">
              Manage choices
            </button>
          )}
          <button type="button" onClick={() => choose({ analytics: true, advertising: true, externalMedia: true })} className="rounded-lg bg-[#1D3B8A] px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-900">
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
