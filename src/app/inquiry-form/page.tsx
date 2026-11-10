import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FilloutEmbed from "@/components/FilloutEmbed";
import FilloutScript from "@/components/FilloutScript";

export const metadata: Metadata = {
  title: "Request a Plumbing Quote | UKB Plumbing",
  description: "Tell UKB Plumbing what help you need, including your contact details, postcode and plumbing issue. Submit the form and the team will respond.",
  alternates: { canonical: "https://ukbplumbing.co.uk/inquiry-form" },
  openGraph: {
    title: "Request a Plumbing Quote | UKB Plumbing",
    description: "Send UKB Plumbing your contact details, postcode and a description of the plumbing or heating work.",
    url: "https://ukbplumbing.co.uk/inquiry-form",
    type: "website",
    images: ["/og-image.png"],
  },
};

export default function InquiryFormPage() {
  return (
    <>
      <main className="bg-gradient-to-br from-[#0a3b7c] to-[#082252] py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="mb-8 text-center text-white">
              <h1 className="text-4xl font-black sm:text-5xl">Request a Plumbing Quote</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
                Share your postcode, contact details, the problem or planned work, and any useful photographs. For water escaping now or another urgent fault, call 07359 605766.
              </p>
            </header>

            <section className="rounded-2xl bg-white p-5 shadow-2xl sm:p-8" aria-label="Online quote form">
              <FilloutScript />
              <FilloutEmbed />
              <p className="mt-5 border-t border-slate-200 pt-5 text-sm leading-relaxed text-slate-600">
                Submitting the form does not confirm an appointment or price. The team will review the enquiry and contact you to confirm availability, any diagnostic or call-out charge, and the next step.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
