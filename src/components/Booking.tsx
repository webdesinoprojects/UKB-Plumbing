import Link from "next/link";

export default function Booking() {
  return (
    <main className="bg-slate-50 py-20">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h1 className="text-4xl font-black text-ukb-darkblue">Request a Plumbing Quote</h1>
        <p className="mt-5 leading-relaxed text-slate-700">Online enquiries now use one secure form so the team receives the information in a consistent format.</p>
        <Link href="/inquiry-form" className="mt-7 inline-flex rounded-lg bg-[#1D3B8A] px-6 py-3 font-bold text-white">Continue to the quote form</Link>
      </div>
    </main>
  );
}
