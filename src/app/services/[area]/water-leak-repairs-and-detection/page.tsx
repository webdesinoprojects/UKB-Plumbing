import React from "react";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import { Phone, CheckCircle2, ShieldCheck, Award, MapPin, Search } from "lucide-react";

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

// Required for Next.js "output: export" static build
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllAreaSlugs();
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const resolvedParams = await props.params;
  const rawArea = resolvedParams?.area || "shirley";
  const metadata = getAreaServiceMetadata(rawArea, "water-leak-repairs-and-detection");
  return applyNoindexIfNecessary(metadata, rawArea, "water-leak-repairs-and-detection");
}

const defaultLeakFaqs: FAQ[] = [
  {
    question: "How do you detect hidden water leaks behind walls or under floors?",
    answer:
      "We use non-destructive acoustic leak detectors, thermal imaging cameras, tracer gas testing, and damp meters to pinpoint hidden pipe leaks without damaging your property.",
  },
  {
    question: "How quickly can an engineer attend a emergency water leak?",
    answer:
      "UKB Plumbing provides a 30 to 60-minute emergency arrival across Southampton postcodes, 24 hours a day, 7 days a week.",
  },
  {
    question: "Is there a call-out fee for leak detection and repairs?",
    answer:
      "We explain any call-out or diagnostic charge before you book, and agree the price before work begins.",
  },
  {
    question: "Will my trace and access costs be covered by home insurance?",
    answer:
      "Most UK home insurance policies include 'Trace and Access' coverage. We provide comprehensive digital report forms suitable for direct insurance claims.",
  },
  {
    question: "What types of leaks do you repair?",
    answer:
      "We fix burst pipes, hidden underfloor heating leaks, dripping copper joints, leaking main stopcocks, central heating pressure drops, and underground supply pipe leaks.",
  },
];

type PageProps = {
  params: Promise<{ area: string }>;
};

export default async function WaterLeakRepairsDetectionPage(props: PageProps) {
  const resolvedParams = await props.params;
  const rawArea = resolvedParams?.area || "shirley";
  const { areaData, areaName, postcodeDisplay, cityName } = getAreaBySlug(rawArea);

  // Pull FAQs dynamically per area or fallback to leak defaults
  const leakFaqs: FAQ[] = areaData.faqs || areaData.faqList || defaultLeakFaqs;

  const serviceTitle = "Water Leak Repairs & Detection";

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceTitle,
    provider: {
      '@type': 'Plumber',
      name: 'UKB Plumbing',
      telephone: '+44 7359 605766',
      areaServed: areaName,
    },
    areaServed: {
      '@type': 'City',
      name: areaName,
    },
    url: `https://ukbplumbing.co.uk/services/${rawArea}/water-leak-repairs-and-detection`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* New Hero Section */}
      <ServicesHeroSection
        serviceName={serviceTitle}
        areaName={areaName}
        cityName={cityName}
        heroTitle={`Non-Destructive Water Leak Repairs & Detection in ${areaName}`}
        description={`Water leak assessment and repair support in ${areaName}. Contact us to confirm engineer availability, the appropriate detection approach and the likely diagnostic or repair charges.`}
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
                  ADVANCED LEAK TRACING & REPAIRS
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mt-3 mb-4">
                  Precision Thermal & Acoustic Leak Detection in {areaName}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  Water leaks under concrete floors or inside cavities can cause costly structural damage if left untreated. UKB Plumbing brings advanced leak-finding technology directly to your property in {areaName}. We locate hidden water escapes accurately without ripping up walls or floorboards unnecessarily.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Appropriate leak-detection methods
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Acoustic Ground Microphone Tracing
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Tracer Gas & Pressure Drop Testing
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Trace & Access Insurance Reports
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
                    Active water leak or burst pipe emergency in {areaName}?
                  </h3>
                  
                </div>

                <a
                  href="tel:+447359605766"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl transition whitespace-nowrap shadow-sm"
                >
                  Dispatch Engineer Instantly
                </a>
              </div>

              {/* LOCAL ADVANTAGE SECTION */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <div className="text-[11px] font-black uppercase tracking-wider text-[#1D3B8A] mb-2">
                  LOCAL HAMPSHIRE ADVANTAGE
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mb-6 flex items-center gap-2">
                  <span className="text-[#FF9900] text-3xl leading-none">•</span>
                  <span>Why {areaName} Property Owners Choose UKB Plumbing</span>
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
                      Any visit, diagnostic or out-of-hours charge is explained before you book.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Non-Invasive Diagnostic Equipment:
                      </strong>{" "}
                      We locate leaks precise to the exact centimeter, preventing unwanted structural damage.
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
                  COMPLETE WATER LEAK SERVICES
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mt-3 mb-6">
                  Comprehensive Leak Detection & Repair in {areaName}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-800">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Burst Pipe Isolation & Repair
                      </span>
                      Fast emergency response to prevent ongoing water damage.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Underfloor & Wall Leak Detection
                      </span>
                      Thermal cameras to trace unseen central heating pipe leaks.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Main Supply & Stopcock Repairs
                      </span>
                      Fixing high-pressure main supply pipes and leaking valves.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Central Heating Pressure Loss
                      </span>
                      Locating small leaks causing boiler pressure drop.
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
                  {leakFaqs.map((faq, idx) => (
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
                  {`Providing direct Hampshire local plumbing coverage across all ${cityName} districts:`}
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
