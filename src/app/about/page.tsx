import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About UKB Plumbing | Southampton Plumbing Support",
  description: "Learn how UKB Plumbing handles enquiries, assigns appropriate engineers and agrees plumbing and heating work in Southampton.",
  alternates: { canonical: "https://ukbplumbing.co.uk/about" },
  openGraph: {
    title: "About UKB Plumbing",
    description: "How UKB Plumbing handles plumbing and heating enquiries in Southampton.",
    url: "https://ukbplumbing.co.uk/about",
    siteName: "UKB Plumbing",
    type: "website",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      </div>
      <main className="bg-white pb-16 pt-10 sm:pt-16">
        <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <h1 className="text-4xl font-black text-ukb-darkblue sm:text-5xl">About UKB Plumbing</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              UKB Plumbing Ltd coordinates plumbing and heating work from Southampton. We help customers describe the fault, identify the type of engineer required and understand the likely next step before a visit is arranged.
            </p>
          </header>

          <section className="mt-12 grid gap-6 md:grid-cols-3" aria-labelledby="call-process-heading">
            <h2 id="call-process-heading" className="sr-only">What happens when you call</h2>
            {[
              ["1. Tell us the problem", "Share the postcode, urgency, symptoms and any immediate safety concern. Photographs may help us understand visible faults."],
              ["2. We confirm the next step", "We check availability, give an estimated arrival time where possible and explain any call-out or diagnostic charge."],
              ["3. Work is agreed", "The engineer assesses the fault and explains the proposed work and price before repair or installation work begins."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-ukb-darkblue">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{text}</p>
              </div>
            ))}
          </section>

          <section className="mt-12 space-y-4">
            <div className="grid gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:p-8">
              <img src="/images/real-work/sukdev-bhakar-engineer-van.webp" alt="UKB Plumbing engineer beside a service van" width="1600" height="900" className="h-full min-h-72 w-full rounded-xl object-cover" />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-ukb-blue">Engineer profile</p>
                <h2 className="mt-2 text-3xl font-bold text-ukb-darkblue">Sukdev Bhakar</h2>
                <p className="mt-4 leading-relaxed text-slate-700">Sukdev holds a City &amp; Guilds Level 3 Diploma in Gas Engineering (Pathway D), awarded in July 2025. His supplied training documents also cover heat-pump technology and mental-health awareness.</p>
                <ul className="mt-5 space-y-2 pl-5 text-slate-700">
                  <li className="list-disc">City &amp; Guilds Level 3 Diploma in Gas Engineering</li>
                  <li className="list-disc">Heat-pump technology training</li>
                  <li className="list-disc">NCFE CACHE Level 1 Award in Mental Health Awareness</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-12 space-y-4">
            <h2 className="text-3xl font-bold text-ukb-darkblue">Credentials and gas work</h2>
            <p className="leading-relaxed text-slate-700">
              Gas work is assigned to an appropriately Gas Safe registered engineer. Customers should ask to see the attending engineer&apos;s Gas Safe ID card and check that the work categories on the card cover the job. Ask us for any job-specific credentials or insurance details you need before booking.
            </p>
            <a href="https://www.gassaferegister.co.uk/find-an-engineer-or-check-the-register/" target="_blank" rel="noopener noreferrer" className="inline-flex font-bold text-ukb-blue underline">
              Check the Gas Safe Register
            </a>
          </section>

          <section className="mt-12 space-y-4">
            <h2 className="text-3xl font-bold text-ukb-darkblue">Company details</h2>
            <p className="text-slate-700">UKB Plumbing Ltd · Company number 16028683 · VAT 519845848</p>
            <p className="text-slate-700">11 Fuchsia Gardens, Southampton, Hampshire, SO16 6TY</p>
            <p className="text-slate-700"><a className="underline" href="tel:+447359605766">07359 605766</a> · <a className="underline" href="mailto:info@ukbplumbing.co.uk">info@ukbplumbing.co.uk</a></p>
          </section>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="tel:+447359605766" className="rounded-lg bg-[#1D3B8A] px-6 py-3 font-bold text-white">Call UKB Plumbing</a>
            <Link href="/inquiry-form" className="rounded-lg border border-[#1D3B8A] px-6 py-3 font-bold text-[#1D3B8A]">Request a quote</Link>
            <Link href="/services" className="rounded-lg border border-slate-300 px-6 py-3 font-bold text-slate-700">View services</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
