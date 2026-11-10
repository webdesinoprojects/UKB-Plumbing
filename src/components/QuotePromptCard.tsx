import Link from "next/link";

export default function QuotePromptCard() {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl bg-slate-50 p-6 text-center">
      <h3 className="text-xl font-bold text-ukb-darkblue">Tell us what you need</h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-700">
        Use the secure enquiry form to send your postcode, contact details, a description of the work and any useful photographs.
      </p>
      <Link href="/inquiry-form" data-tracking-location="quote_prompt" className="mt-5 rounded-lg bg-[#1D3B8A] px-5 py-3 font-bold text-white hover:bg-blue-900">
        Request a Quote
      </Link>
    </div>
  );
}
