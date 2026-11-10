import Link from "next/link";
import { Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-ukb-gray py-16" aria-labelledby="help-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-subtle md:p-12">
          <h2 id="help-heading" className="text-3xl font-bold text-ukb-darkblue md:text-4xl">Need plumbing or heating help?</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">Call for an urgent fault, or send the postcode, symptoms and any useful photographs through the quote form. Availability and charges are confirmed before a visit.</p>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <a href="tel:+447359605766" data-tracking-location="home_cta" className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-bold text-slate-950"><Phone className="h-5 w-5" aria-hidden="true" />Call Now: 07359 605766</a>
            <Link href="/inquiry-form" data-tracking-location="home_cta" className="inline-flex items-center justify-center rounded-lg bg-[#1D3B8A] px-6 py-3 font-bold text-white">Request a Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
