import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | UKB Plumbing",
  description: "How UKB Plumbing collects, uses, shares and retains personal data, and the rights available to you.",
  alternates: { canonical: "https://ukbplumbing.co.uk/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | UKB Plumbing",
    description: "How UKB Plumbing handles personal data.",
    url: "https://ukbplumbing.co.uk/privacy-policy",
    siteName: "UKB Plumbing",
    type: "website",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      </div>
      <main className="min-h-screen bg-white pb-16 pt-10 sm:pt-16">
        <article className="mx-auto max-w-4xl space-y-9 px-4 text-sm leading-relaxed text-slate-800 sm:px-6 sm:text-base lg:px-8">
          <header>
            <h1 className="text-4xl font-black text-[#003B7D] sm:text-5xl">Privacy Policy</h1>
            <p className="mt-3 text-slate-600">Last updated: 7 November 2026</p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#003B7D]">1. Who controls your data</h2>
            <p>UKB Plumbing Ltd is the controller of personal data handled through this website and our plumbing services.</p>
            <p>Company number: 16028683. Contact: <a className="underline" href="mailto:info@ukbplumbing.co.uk">info@ukbplumbing.co.uk</a> or <a className="underline" href="tel:+447359605766">07359 605766</a>.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#003B7D]">2. Data we collect</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Contact details, including your name, telephone number, email and service address.</li>
              <li>Details of the fault, property, appointment and work requested or completed.</li>
              <li>Messages, photographs or other information you choose to send.</li>
              <li>Invoice, payment-status and accounting records. We do not ask you to send payment-card details through the website.</li>
              <li>Consent choices and, only after consent, website measurement or advertising-conversion data.</li>
              <li>Basic technical and security data produced when the website is requested, such as IP address and browser information.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#003B7D]">3. Purposes and legal bases</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Enquiries, quotes, appointments and work:</strong> to take steps at your request and perform our contract with you.</li>
              <li><strong>Customer service, site security and business administration:</strong> our legitimate interests in operating a safe, effective plumbing business.</li>
              <li><strong>Invoices, tax and legal records:</strong> compliance with legal obligations and the establishment or defence of legal claims.</li>
              <li><strong>Analytics, advertising measurement and optional external services:</strong> your consent, which you can withdraw at any time.</li>
              <li><strong>Direct marketing:</strong> consent where required, or legitimate interests where the law permits; every marketing message will provide an opt-out.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#003B7D]">4. Where data comes from</h2>
            <p>Most data comes directly from you by phone, email, WhatsApp, an enquiry form or during a visit. Fillout processes information submitted through embedded website forms. Optional Google and Featurable services are not loaded until the relevant consent is given.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#003B7D]">5. Who receives data</h2>
            <p>We share only what is needed with staff or engineers assigned to the work, professional advisers, insurers, accounting or IT providers, and authorities where legally required. Website providers may include Fillout for forms, Google for consented measurement and advertising, and Featurable for consented review display.</p>
            <p>Some providers may process data outside the UK. Where this occurs, we rely on an adequacy regulation or approved contractual safeguards as required by UK data-protection law.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#003B7D]">6. Retention</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Unsuccessful enquiries are normally deleted or anonymised within 12 months unless a longer period is needed for an ongoing matter.</li>
              <li>Customer, job, invoice and tax records are normally retained for up to 6 years after the relevant transaction or relationship.</li>
              <li>Marketing data is kept until you opt out or it is no longer needed.</li>
              <li>Consent choices remain in your browser until you change or clear them.</li>
            </ul>
            <p>We may keep data longer when required by law, a complaint, insurance matter or legal claim.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#003B7D]">7. Your rights</h2>
            <p>Depending on the circumstances, you may ask for access, correction, deletion, restriction, portability or objection. You may withdraw consent at any time without affecting earlier lawful processing. You may also object to direct marketing at any time.</p>
            <p>To exercise a right, contact us using the details above. We may need to confirm your identity. You also have the right to complain to the UK Information Commissioner&apos;s Office at <a className="underline" href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#003B7D]">8. Cookies and choices</h2>
            <p>Our <Link href="/cookie-policy" className="font-semibold underline">Cookie Policy</Link> identifies the services and categories used on this site and explains how to accept, reject or withdraw consent.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#003B7D]">9. Changes</h2>
            <p>We may update this notice when our processing or legal obligations change. The date at the top shows the current version.</p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
