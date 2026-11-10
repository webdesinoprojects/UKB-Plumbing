import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quote Form Moved | UKB Plumbing",
  alternates: { canonical: "https://ukbplumbing.co.uk/inquiry-form" },
  robots: { index: false, follow: true },
};

export default function LegacyInquiryFormPage() {
  return (
    <main className="py-20 text-center">
      <h1 className="text-3xl font-bold text-ukb-darkblue">The quote form has moved</h1>
      <Link href="/inquiry-form" className="mt-6 inline-flex rounded-lg bg-[#1D3B8A] px-6 py-3 font-bold text-white">Open the Request a Quote form</Link>
    </main>
  );
}
