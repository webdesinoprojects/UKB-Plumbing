import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-ukb-gray">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-subtle md:p-12">
          <div className="text-center">
            <span className="inline-block rounded-full bg-ukb-lightblue px-3 py-1 text-sm font-medium text-ukb-blue">Get in touch</span>
            <h2 className="mt-4 text-3xl font-bold text-ukb-darkblue md:text-4xl">Call Now or Request a Quote</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ukb-darkgray">
              For an active leak or another urgent fault, call us. For planned work, send the postcode, a description and any useful photographs through the enquiry form.
            </p>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="tel:+447359605766" className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-bold text-slate-950 hover:bg-yellow-500">
              <Phone className="h-5 w-5" aria-hidden="true" /> Call Now: 07359 605766
            </a>
            <Link href="/inquiry-form" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1D3B8A] px-6 py-3 font-bold text-white hover:bg-blue-900">
              <Mail className="h-5 w-5" aria-hidden="true" /> Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
