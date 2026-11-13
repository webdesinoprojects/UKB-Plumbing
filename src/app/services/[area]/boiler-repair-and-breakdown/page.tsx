import React from "react";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import { Phone, CheckCircle2, ShieldCheck, Award, Flame, MapPin } from "lucide-react";

import { getAllAreaSlugs, getAreaBySlug, getAreasByCity } from "@/data/allAreasData";
import { getAreaServiceMetadata, applyNoindexIfNecessary } from "@/utils/metadataHelpers";
import Batch1UniqueContent from "@/components/Batch1UniqueContent";
import AreaReviews from "@/components/AreaReviews";

interface FAQ {
  question?: string;
  q?: string;
  answer?: string;
  a?: string;
}

export const dynamicParams = false;

// Dynamic routes generation for SSG (Static Site Generation)
export async function generateStaticParams() {
  return getAllAreaSlugs();
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const resolvedParams = await props.params;
  const rawArea = resolvedParams?.area || "shirley";
  const metadata = getAreaServiceMetadata(rawArea, "boiler-repair-and-breakdown");
  return applyNoindexIfNecessary(metadata, rawArea, "boiler-repair-and-breakdown");
}

const defaultBoilerFaqs: FAQ[] = [
  {
    question: "How fast can an emergency engineer arrive for boiler repair & breakdown?",
    answer:
      "Arrival times depend on engineer availability, traffic and location. We confirm an estimated time when you call.",
  },
  {
    question: "Is there a call-out fee for boiler repair & breakdown?",
    answer:
      "We explain any call-out or diagnostic charge before you book, and agree the price before work begins.",
  },
  {
    question: "Are your engineers Gas Safe registered?",
    answer:
      "Gas work is assigned to an appropriately Gas Safe registered engineer. Ask to see the engineer's ID card and relevant work categories.",
  },
  {
    question: "What guarantee comes with boiler repair & breakdown?",
    answer:
      "Any applicable workmanship or manufacturer warranty is confirmed for your specific repair before the work is agreed.",
  },
  {
    question: "Do you cover hard water scale issues in boilers?",
    answer:
      "Yes, we specialize in hard water scale management, magnetic filter fitting, and rapid combi boiler descaling.",
  },
];

type PageProps = {
  params: Promise<{ area: string }>;
};

export default async function BoilerRepairPage(props: PageProps) {
  const resolvedParams = await props.params;
  const rawArea = resolvedParams?.area || "shirley";
  const { areaData, areaName, postcodeDisplay, cityName } = getAreaBySlug(rawArea);

  // Pull FAQs dynamically per area or fallback to defaults
  const boilerFaqs: FAQ[] = areaData.faqs || areaData.faqList || defaultBoilerFaqs;

  const serviceTitle = "Boiler Repair & Breakdown";

  return (
    <>
      {/* New Hero Section */}
      <ServicesHeroSection
        serviceName={serviceTitle}
        areaName={areaName}
        cityName={cityName}
        heroTitle={`24/7 Boiler Repair & Breakdown in ${areaName}`}
        description={`Boiler repair and breakdown support in ${areaName}. Contact us to confirm engineer availability, an estimated arrival time and the likely diagnostic or repair charges.`}
        response="Arrival estimate confirmed when you call, based on engineer availability, traffic and location"
        water={`${cityName} is supplied largely from chalk aquifer sources, so hard-water scale can be an important consideration for plumbing and heating systems.`}

      />

      <main className="min-h-screen bg-[#f8fafc] pt-2.5 pb-16">

        {/* BATCH 1 UNIQUE CONTENT */}
        <Batch1UniqueContent areaSlug={rawArea} serviceName={serviceTitle} />

        {/* MAIN CONTENT GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-10">
              {/* Expert Diagnostics Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <span className="bg-amber-100 text-amber-900 text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  EXPERT DIAGNOSTICS
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mt-3 mb-4">
                  Expert Boiler Repair & Breakdown Diagnostics in {areaName}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  In {areaName}, uninspected boiler repair & breakdown issues require rapid technical
                  intervention before structural property damage occurs. UKB Plumbing engineers conduct
                  appropriate safety testing and visual checks to
                  diagnose system faults accurately on the first visit.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Electronic Flue Gas Analysis (Kane/Testo)
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Digital Gas Tightness & Soundness Test
                  </div>
               
                </div>
              </div>

              {/* EMERGENCY CALLOUT BANNER */}
              <div className="bg-[#1C3B8B] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                <div>
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                    URGENT DISPATCH
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-2 mb-1">
                    Facing a sudden boiler repair & breakdown problem in {areaName}?
                  </h3>
                  
                </div>

                <a
                  href="tel:+447359605766"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl transition whitespace-nowrap shadow-sm"
                >
                  Request Emergency Callout
                </a>
              </div>

              {/* LOCAL ADVANTAGE SECTION */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <div className="text-[11px] font-black uppercase tracking-wider text-[#1D3B8A] mb-2">
                  LOCAL HAMPSHIRE ADVANTAGE
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mb-6 flex items-center gap-2">
                  <span className="text-[#FF9900] text-3xl leading-none">•</span>
                  <span>Why {areaName} Residents Choose UKB Plumbing</span>
                </h2>

                <div className="space-y-3.5">
                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Local {areaName} Coverage:
                      </strong>{" "}
                      Arrival estimates are confirmed when you call and depend on availability and traffic.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Clear charges:
                      </strong>{" "}
                      Transparent fixed pricing with no hidden mileage or late-night surcharges.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Gas Safe Registered
                      </strong>{" "}
                      You can ask the attending engineer to show relevant identification.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Warranty information:
                      </strong>{" "}
                      Any applicable workmanship or manufacturer warranty is confirmed for the specific repair.
                    </p>
                  </div>
                </div>
              </div>

              {/* COMPREHENSIVE SERVICES GRID */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <span className="bg-blue-100 text-blue-900 text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  FULL SERVICE SCOPE
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mt-3 mb-6">
                  Comprehensive Boiler Repair & Breakdown Services in {areaName}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-800">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Emergency Pipe Isolation
                      </span>
                      Pressurised copper pipe repairs and leak containment.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Diverter Valve & PCB Repairs
                      </span>
                      Fault code diagnosis and electronic board fixes.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        High-Pressure Water Jetting
                      </span>
                      HPWJ drain unblocking and descaling operations.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        CP12 Gas Safety Certificates
                      </span>
                      Landlord safety checks and digital reporting.
                    </div>
                  </div>
                </div>
              </div>

              {/* Area Reviews Section */}
              <AreaReviews areaSlug={rawArea} />

              {/* FAQS SECTION */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-3">
                  {boilerFaqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                      open={idx === 0}
                    >
                      <summary className="w-full text-left p-4 font-extrabold text-xs sm:text-sm text-slate-900 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3 cursor-pointer select-none">
                        <span>{faq.question || faq.q}</span>
                        <span className="text-blue-600 font-black text-base group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-100">
                        {faq.answer || faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* FOOTER CALLOUT BANNER */}
              <div className="bg-[#1C3B8B] rounded-3xl p-8 sm:p-10 text-center shadow-lg border-b-4 border-amber-400">
                             <div className="inline-block bg-[#FFC000] text-[#0B1736] font-black text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
                               CLEAR SERVICE INFORMATION
                             </div>
             
                             <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug mb-3">
                               Get a free quote for 24/7 emergency plumber in {areaName}
                             </h2>
             
                             <p className="text-slate-200 text-xs sm:text-sm font-semibold mb-8">
                               Work scope, charges and any applicable warranty are agreed before the job begins.
                             </p>
             
                             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                               <a
                                 href="tel:+447359605766"
                                 className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#003B7A] hover:bg-[#002B5B] text-white px-6 py-3.5 text-sm sm:text-base font-bold shadow-md transition-colors text-center"
                               >
                                 <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                 <span>Call 07359605766</span>
                               </a>
             
                               <a
                                 href="/inquiry-form"
                                 className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#003B7A] hover:bg-[#002B5B] text-white px-6 py-3.5 text-sm sm:text-base font-bold shadow-md transition-colors text-center"
                               >
                                 <span>Get Free Quote</span>
                                 <span className="text-base sm:text-lg font-bold">→</span>
                               </a>
                             </div>
                           </div>
                         </div>
            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
            

              {/* LOCAL COVERAGE BOX */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm max-w-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-amber-500 text-amber-500">
                    <MapPin className="w-3 h-3 fill-amber-500 stroke-white" />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0B1736]">
                    {`LOCAL ${cityName.toUpperCase()} COVERAGE`}
                  </h3>
                </div>

                <hr className="border-slate-100 mb-4" />

                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                  {`Providing direct Hampshire local coverage across all ${cityName} districts:`}
                </p>

                {/* Dynamic Locations List */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                  {getAreasByCity(cityName).map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-[#F3F6FA] hover:bg-slate-100 border border-slate-200/60 text-[#0B1736] font-extrabold text-[11px] px-3 py-1.5 rounded-xl transition cursor-default"
                    >
                      <span className="text-red-600 text-xs leading-none font-bold">📍</span>
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
