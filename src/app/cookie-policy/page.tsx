import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Cookie Policy | UKB Plumbing",
  description: "How UKB Plumbing uses necessary storage, Google tags, Fillout forms and Featurable reviews.",
  alternates: { canonical: "https://ukbplumbing.co.uk/cookie-policy" },
  openGraph: {
    title: "Cookie Policy | UKB Plumbing",
    description: "How UKB Plumbing uses cookies and similar technologies.",
    url: "https://ukbplumbing.co.uk/cookie-policy",
    siteName: "UKB Plumbing",
    type: "website",
    images: ["/og-image.png"],
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]} />
      </div>
      <main className="min-h-screen bg-white pb-16 pt-10 sm:pt-16">
        <article className="mx-auto max-w-4xl space-y-9 px-4 text-sm leading-relaxed text-slate-800 sm:px-6 sm:text-base lg:px-8">
          <header>
            <h1 className="text-4xl font-black text-[#003B7D] sm:text-5xl">Cookie Policy</h1>
            <p className="mt-3 text-slate-600">Last updated: 7 November 2026</p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#003B7D]">How this site uses storage</h2>
            <p>
              Cookies are small files stored by your browser. This site also uses local storage to remember your consent choice. Necessary storage is active without consent; optional services remain off until you choose to allow them.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#003B7D]">Services and categories</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead><tr className="bg-slate-100"><th className="border p-3">Category</th><th className="border p-3">Provider and purpose</th><th className="border p-3">Typical storage</th></tr></thead>
                <tbody>
                  <tr><td className="border p-3 font-semibold">Necessary</td><td className="border p-3">UKB Plumbing stores your consent preferences so the site can respect them.</td><td className="border p-3"><code>ukb-cookie-consent-v1</code> in local storage, retained until you clear it or change browser data.</td></tr>
                  <tr><td className="border p-3 font-semibold">Analytics</td><td className="border p-3">Google tags help measure visits and site use. They load only after analytics consent.</td><td className="border p-3">Google may set identifiers such as <code>_ga</code> and <code>_ga_*</code>; duration is controlled by Google and can be up to 2 years.</td></tr>
                  <tr><td className="border p-3 font-semibold">Advertising</td><td className="border p-3">Google Ads measures whether an advert led to an enquiry. It loads only after advertising consent.</td><td className="border p-3">Google may set conversion identifiers such as <code>_gcl_*</code>; duration is controlled by Google and is commonly up to 90 days.</td></tr>
                  <tr><td className="border p-3 font-semibold">External services</td><td className="border p-3">Fillout supplies enquiry forms and Featurable supplies the live reviews widget. These load only after external-services consent.</td><td className="border p-3">These providers may use cookies or similar storage under their own policies.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#003B7D]">Change or withdraw consent</h2>
            <p>You can accept, reject or change optional categories at any time. Withdrawing consent stops future optional loading; you may also clear existing cookies in your browser.</p>
            <CookieSettingsButton className="rounded-lg bg-[#1D3B8A] px-5 py-3 font-bold text-white hover:bg-blue-900" />
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#003B7D]">More information</h2>
            <p>See our <Link href="/privacy-policy" className="font-semibold underline">Privacy Policy</Link> for the personal data, purposes, legal bases, retention periods and rights that apply.</p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
