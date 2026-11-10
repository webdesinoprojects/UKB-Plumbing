import React from "react";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import { Phone, CheckCircle2, ShieldCheck, Award, MapPin, Waves } from "lucide-react";

// Direct module import for SSG data fetching
import { getAllAreaSlugs, getAreaBySlug, getAreasByCity } from "@/data/allAreasData";
import { getAreaServiceMetadata, applyNoindexIfNecessary } from "@/utils/metadataHelpers";
import Batch1UniqueContent from "@/components/Batch1UniqueContent";
import AreaReviews from "@/components/AreaReviews";

// Data Interfaces
interface FAQ {
  question?: string;
  q?: string;
  answer?: string;
  a?: string;
}

interface AreaData {
  name: string;
  slug?: string;
  postcodes?: string | string[];
  faqs?: FAQ[];
  faqList?: FAQ[];
  [key: string]: any;
}

// Required for Next.js "output: export" static build
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllAreaSlugs();
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const resolvedParams = await props.params;
  const rawArea = resolvedParams?.area || "shirley";
  const metadata = getAreaServiceMetadata(rawArea, "blocked-drains-and-jetting");
  return applyNoindexIfNecessary(metadata, rawArea, "blocked-drains-and-jetting");
}

const defaultDrainFaqs: FAQ[] = [
  {
    question: "How fast can an emergency engineer arrive for blocked drains in my area?",
    answer:
      "Arrival times depend on engineer availability, traffic and location. We confirm an estimated time when you call.",
  },
  {
    question: "Is there a call-out fee for high-pressure drain jetting?",
    answer:
      "We explain any call-out or diagnostic charge before you book, and agree the price before work begins.",
  },
  {
    question: "Is high-pressure water jetting safe for domestic PVC and clay pipes?",
    answer:
      "Yes, our engineers use calibrated pressure controls (up to 4000 PSI) tailored specifically for domestic plastic, clay, or pitch fibre pipes to safely clear grease, silt, and roots.",
  },
  {
    question: "Do you offer CCTV drain surveys if the blockages keep returning?",
    answer:
      "Yes, we perform HD CCTV drain inspections with full video reports to pinpoint exact pipe fractures, collapse, or tree root ingress.",
  },
  {
    question: "What types of drainage blockages do you clear?",
    answer:
      "We clear blocked toilets, sinks, gulley drains, main stack pipes, external inspection chambers, commercial grease traps, and stormwater systems.",
  },
];

type PageProps = {
  params: Promise<{ area: string }>;
};

export default async function BlockedDrainsJettingPage(props: PageProps) {
  const resolvedParams = await props.params;
  const rawArea = resolvedParams?.area || "shirley";
  const { areaData, areaName, postcodeDisplay, cityName } = getAreaBySlug(rawArea);

  // Pull FAQs dynamically per area or fallback to defaults
  const drainFaqs: FAQ[] = areaData?.faqs || areaData?.faqList || defaultDrainFaqs;

  const serviceTitle = "Blocked Drains & Jetting";

  return (
    <>
      {/* New Hero Section */}
      <ServicesHeroSection
        serviceName={serviceTitle}
        areaName={areaName}
        cityName={cityName}
        heroTitle={`24/7 Blocked Drains & Water Jetting in ${areaName}`}
        description={`Blocked drain and jetting support in ${areaName}. Contact us to confirm availability, an estimated arrival time, the equipment suitable for the fault and the likely charges.`}
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
                  ADVANCED DRAIN UNBLOCKING
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mt-3 mb-4">
                  High-Pressure Water Jetting & Diagnostics in {areaName}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  Persistent foul odors, slow draining water, or overflowing external gulleys in {areaName} usually point to stubborn fatbergs, silt accumulation, or tree root encroachment. UKB Plumbing brings truck-mounted High-Pressure Water Jetting (HPWJ) machinery directly to your property to blast away scale and clear blockages without chemical contamination.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    High-Pressure Water Jetting (Up to 4000 PSI)
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    HD CCTV Color Camera Drain Inspections
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Electromechanical Rotary Rodding Machines
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Sonde Pipe Tracing & Structural Surveying
                  </div>
                </div>
              </div>

              {/* EMERGENCY CALLOUT BANNER */}
              <div className="bg-[#1C3B8B] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                <div>
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                    EMERGENCY DISPATCH
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-2 mb-1">
                    Overflowing drain or sewage backup in {areaName}?
                  </h3>
                 
                </div>

                <a
                  href="tel:07359605766"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl transition whitespace-nowrap shadow-sm"
                >
                  Request Emergency Clearance
                </a>
              </div>

              {/* LOCAL ADVANTAGE SECTION */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <div className="text-[11px] font-black uppercase tracking-wider text-[#1D3B8A] mb-2">
                  LOCAL HAMPSHIRE ADVANTAGE
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mb-6 flex items-center gap-2">
                  <span className="text-[#FF9900] text-3xl leading-none">•</span>
                  <span>Why {areaName} Residents Rely On UKB Drainage</span>
                </h2>

                <div className="space-y-3.5">
                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Rapid Local Response in {areaName}:
                      </strong>{" "}
                      We confirm availability, suitable equipment and an estimated arrival time when you call.
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
                      Transparent fixed pricing with no hidden travel fees or weekend evening extras.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Water Jetting Safety Certified:
                      </strong>{" "}
                      We confirm the engineer and equipment appropriate for the drainage work before attendance.
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
                  COMPLETE DRAINAGE SOLUTIONS
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mt-3 mb-6">
                  Comprehensive Drainage Services in {areaName}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-800">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        High-Pressure Water Jetting
                      </span>
                      Deep wall cleaning and total blockage removal.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Blocked Toilet & Sink Clearing
                      </span>
                      Rapid mechanical clearance for indoor fixtures.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        HD CCTV Drain Camera Surveys
                      </span>
                      Detailed video inspections for home buyers and insurance.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Drain Relining & Patch Repairs
                      </span>
                      No-dig structural pipe repair solutions.
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
                  {drainFaqs.map((faq, idx) => (
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
                                  href="tel:07359605766"
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
                  {`Providing direct Hampshire local drainage coverage across all ${cityName} districts:`}
                </p>

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
