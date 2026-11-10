import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { businessFacts } from "@/config/businessFacts";

export const metadata: Metadata = {
  title: "Call-Out & Diagnostic Visits | UKB Plumbing",
  description: "Learn what is included in a UKB Plumbing call-out and diagnostic visit in Southampton, how charges work and what happens before repair work begins.",
  alternates: { canonical: "https://ukbplumbing.co.uk/call-out-and-diagnostic" },
};

const included = [
  "A qualified UKB Plumbing engineer attends your property in Southampton or the surrounding area",
  "A full assessment to find the cause of the fault",
  "A clear, honest explanation of what is wrong",
  "A fixed, no-obligation quote for the repair",
] as const;

const feeCovers = [
  ["Travel and time", "The engineer’s journey to you and the time set aside for your job."],
  ["Van and tool costs", "Fuel, running costs and the equipment brought to each visit."],
  ["Proper diagnosis", "Time spent finding the real cause of the problem rather than guessing."],
] as const;

export default function CallOutAndDiagnosticPage() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Call-Out & Diagnostic" }]} /></div>
      <main className="bg-white pb-16">
        <section className="bg-[#0a3b7c] py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-300">Clear service information</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black sm:text-5xl">Call-Out &amp; Diagnostic Visits</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">Not sure what is causing the problem? Our call-out and diagnostic service gets you answers fast.</p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
          <section><h2 className="text-3xl font-bold text-ukb-darkblue">What is included</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{included.map((item) => <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700">{item}</li>)}</ul></section>

          <section className="rounded-2xl bg-ukb-lightblue p-7"><h2 className="text-3xl font-bold text-ukb-darkblue">No surprises</h2><p className="mt-4 text-lg text-slate-700">We never start work until you have seen and agreed the price.</p></section>

          <section><h2 className="text-3xl font-bold text-ukb-darkblue">Good to know</h2><ul className="mt-5 space-y-3 pl-5 text-slate-700"><li className="list-disc">Payment is due on the day of the visit.</li><li className="list-disc">Evening, weekend and emergency call-outs are charged differently.</li><li className="list-disc">Repairs and parts are quoted separately.</li></ul></section>

          <section>
            <h2 className="text-3xl font-bold text-ukb-darkblue">Why do we charge a call-out fee?</h2>
            <p className="mt-4 leading-relaxed text-slate-700">Every visit involves time and cost before repair work begins. The call-out fee covers:</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">{feeCovers.map(([title, copy]) => <div key={title} className="rounded-xl border border-slate-200 p-5"><h3 className="font-bold text-ukb-darkblue">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-700">{copy}</p></div>)}</div>
          </section>

          <section><h2 className="text-3xl font-bold text-ukb-darkblue">What you get in return</h2><ul className="mt-5 space-y-3 pl-5 text-slate-700"><li className="list-disc">An accurate, fixed quote for the repair.</li><li className="list-disc">A fix that solves the problem properly the first time.</li><li className="list-disc">No work starts until you have seen and agreed the price.</li></ul></section>

          <section className="rounded-2xl bg-[#0a3b7c] p-8 text-white">
            <h2 className="text-3xl font-bold">Book your call-out</h2>
            <p className="mt-3 text-white/85">Call us or message us on WhatsApp and we will arrange a time that suits you.</p>
            <p className="mt-2 text-sm text-white/80">Have a question about our pricing? Call us or message us on WhatsApp and we will be happy to explain.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href={businessFacts.phoneHref} className="rounded-lg bg-amber-400 px-6 py-3 font-bold text-slate-950">Call {businessFacts.phoneDisplay}</a>
              <a href={businessFacts.whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white px-6 py-3 font-bold text-ukb-blue">Message on WhatsApp</a>
              <Link href="/inquiry-form" className="rounded-lg border border-white/50 px-6 py-3 font-bold text-white">Request a quote</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
