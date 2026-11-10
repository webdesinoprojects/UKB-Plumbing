export const COOKIE_CONSENT_KEY = "ukb-cookie-consent-v1";
export const COOKIE_SETTINGS_EVENT = "ukb-open-cookie-settings";
export const COOKIE_CONSENT_EVENT = "ukb-cookie-consent-changed";

export interface CookieConsentPreferences {
  analytics: boolean;
  advertising: boolean;
  externalMedia: boolean;
  updatedAt: string;
}

export function readCookieConsent(): CookieConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as Partial<CookieConsentPreferences>;
    if (
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.advertising !== "boolean" ||
      typeof parsed.externalMedia !== "boolean"
    ) {
      return null;
    }

    return {
      analytics: parsed.analytics,
      advertising: parsed.advertising,
      externalMedia: parsed.externalMedia,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
}

export function saveCookieConsent(
  preferences: Omit<CookieConsentPreferences, "updatedAt">,
): CookieConsentPreferences {
  const value = { ...preferences, updatedAt: new Date().toISOString() };
  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
  return value;
}
