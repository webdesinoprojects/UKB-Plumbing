import React from "react";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import { Phone, CheckCircle2, ShieldCheck, Award, MapPin } from "lucide-react";

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

export async function generateStaticParams() {
  const slugs = getAllAreaSlugs();
  return slugs.map((slug) => ({
    area: typeof slug === 'string' ? slug : slug.area,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const resolvedParams = await props.params;
  const rawArea = resolvedParams?.area || "shirley";
  const serviceSlug = "radiator-and-heating-repairs";
  const metadata = getAreaServiceMetadata(rawArea, serviceSlug);
  return applyNoindexIfNecessary(metadata, rawArea, serviceSlug);
}

const defaultHeatingFaqs: FAQ[] = [
  {
    question: "Why are my radiators cold at the top but hot at the bottom?",
    answer:
      "This usually indicates trapped air inside the radiator panels. Bleeding your radiators using a standard bleed key will typically release the trapped air and restore full heat circulation.",
  },
  {
    question: "How fast can an engineer arrive for a central heating breakdown?",
    answer:
      "UKB Plumbing provides a 30 to 60-minute emergency arrival across Southampton and surrounding postcodes, 24 hours a day, 7 days a week.",
  },
  {
    question: "Is there a call-out fee for heating repairs?",
    answer:
      "We explain any call-out or diagnostic charge before you book, and agree the price before work begins.",
  },
  {
    question: "How often should I powerflush my central heating system?",
    answer:
      "A powerflush is generally recommended every 5 to 7 years, or when you notice cold spots, sludge buildup, noisy boilers, or discolored radiator water.",
  },
  {
    question: "Do you install new radiators and smart thermostats?",
    answer:
      "Yes, we supply and install designer radiators, standard panel radiators, towel rails, and advanced smart heating controls like Nest and Hive.",
  },
];

type PageProps = {
  params: Promise<{ area: string }>;
};

export default async function RadiatorHeatingPage(props: PageProps) {
  const resolvedParams = await props.params;
  const rawArea = resolvedParams?.area;
  
  if (!rawArea) {
    notFound();
  }

  const { areaData, areaName, postcodeDisplay, cityName } = getAreaBySlug(rawArea);

  if (!areaData) {
    notFound();
  }

  const heatingFaqs: FAQ[] = areaData.faqs || areaData.faqList || defaultHeatingFaqs;

  const serviceTitle = "Radiator & Heating Services";

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
    url: `https://ukbplumbing.co.uk/services/${rawArea}/radiator-and-heating-repairs`,
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
        heroTitle={`Expert Radiator & Central Heating Services in ${areaName}`}
        description={`Radiator and heating repair support in ${areaName}. Contact us to confirm engineer availability, an estimated arrival time and the likely diagnostic or repair charges.`}
        response="Arrival estimate confirmed when you call, based on engineer availability, traffic and location"
        water={`${cityName} is supplied largely from chalk aquifer sources, so hard-water scale can be an important consideration for plumbing and heating systems.`}

      />

      <main className="min-h-screen bg-[#f8fafc] pt-2.5 pb-16">

        {/* BATCH 1 UNIQUE CONTENT */}
        <Batch1UniqueContent areaSlug={rawArea} serviceName={serviceTitle} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-10">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  HEATING & RADIATOR SPECIALISTS
                </span>

                <h2 className="text-xl sm:text-2xl font-black text-[#0B1736] mt-3 mb-4">
                  Professional Heating Maintenance & Radiator Repairs in {areaName}
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  A faulty radiator or sluggish central heating system can leave your home cold and drive up energy bills. UKB Plumbing provides specialized diagnostic and repair solutions across {areaName}, ensuring your heating network runs at peak performance year-round.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Central Heating Powerflushing
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Radiator Valve & Lockshield Replacements
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Smart Thermostat & TRV Installation
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Hot Water Cylinder & Pump Repairs
                  </div>
                </div>
              </div>

              <div className="bg-[#1C3B8B] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                <div>
                  <span className="bg-amber-400 text-slate-950 text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                    EMERGENCY DISPATCH
                  </span>
                  <h3 className="text-lg sm:text-xl font-black mt-2 mb-1">
                    Central heating breakdown or leaking radiator in {areaName}?
                  </h3>
                </div>

                <a
                  href="tel:+447359605766"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-6 py-3.5 rounded-xl transition whitespace-nowrap shadow-sm"
                >
                  Dispatch Engineer Instantly
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <div className="text-[10px] font-black uppercase tracking-wider text-[#1D3B8A] mb-2">
                  LOCAL HAMPSHIRE ADVANTAGE
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-[#0B1736] mb-6 flex items-center gap-2">
                  <span className="text-[#FF9900] text-2xl leading-none">•</span>
                  <span>Why {areaName} Homeowners Trust UKB Plumbing</span>
                </h2>

                <div className="space-y-3.5">
                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1C3B8B] text-white font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Rapid Local Response in {areaName}:
                      </strong>{" "}
                      Arrival estimates are confirmed when you call and depend on availability and traffic.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1C3B8B] text-white font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Clear charges:
                      </strong>{" "}
                      Completely transparent pricing model with no hidden diagnostic charges.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1C3B8B] text-white font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Gas Safe Accredited Engineers:
                      </strong>{" "}
                      Fully qualified professionals equipped to handle complex boiler and heating networks.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1C3B8B] text-white font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Warranty information:
                      </strong>{" "}
                      Any applicable workmanship or manufacturer warranty is confirmed for the specific job.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <span className="bg-blue-100 text-blue-900 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  COMPLETE HEATING SOLUTIONS
                </span>

                <h2 className="text-xl sm:text-2xl font-black text-[#0B1736] mt-3 mb-6">
                  Comprehensive Radiator & Heating Services in {areaName}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-800">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Radiator Balancing & Bleeding
                      </span>
                      Ensuring even heat distribution across all rooms.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        System Powerflushing
                      </span>
                      Clearing sludge and debris to restore boiler efficiency.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        TRV & Valve Upgrades
                      </span>
                      Installing thermostatic valves for precise room temperature control.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Central Heating Leaks
                      </span>
                      Locating and repairing hidden pipework leaks safely.
                    </div>
                  </div>
                </div>
              </div>

              {/* Area Reviews Section */}
              <AreaReviews areaSlug={rawArea} />

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-black text-[#0B1736] mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-3">
                  {heatingFaqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                      open={idx === 0}
                    >
                      <summary className="w-full text-left p-4 font-extrabold text-xs text-slate-900 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3 cursor-pointer select-none">
                        <span>{faq.question || faq.q}</span>
                        <span className="text-blue-600 font-black text-sm group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <div className="p-4 bg-white text-[11px] text-slate-600 leading-relaxed font-normal border-t border-slate-100">
                        {faq.answer || faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

               <div className="bg-[#1C3B8B] rounded-3xl p-8 sm:p-10 text-center shadow-lg border-b-4 border-amber-400">
                <div className="inline-block bg-[#FFC000] text-[#0B1736] font-black text-[10px] sm:text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
                  CLEAR SERVICE INFORMATION
                </div>
                
                <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-3">
                  Get a free quote for heating services in {areaName}
                </h2>
                
                <p className="text-slate-200 text-xs font-semibold mb-8">
                  Work scope, charges and any applicable warranty are agreed before the job begins.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <a
                    href="tel:+447359605766"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#003B7A] hover:bg-[#002B5B] text-white px-6 py-3.5 text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 07359605766</span>
                  </a>
                  
                  <a
                    href="/inquiry-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#003B7A] hover:bg-[#002B5B] text-white px-6 py-3.5 text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
                  >
                    <span>Get Free Quote</span>
                    <span className="text-sm font-bold">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm max-w-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-amber-500 text-amber-500">
                    <MapPin className="w-3 h-3 fill-amber-500 stroke-white" />
                  </div>
                  <h3 className="text-[11px] font-black uppercase tracking-wider text-[#0B1736]">
                    {`LOCAL ${cityName.toUpperCase()} COVERAGE`}
                  </h3>
                </div>

                <hr className="border-slate-100 mb-4" />

                <p className="text-[11px] text-slate-600 leading-relaxed font-medium mb-4">
                  {`Providing direct Hampshire local heating coverage across all ${cityName} districts:`}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                  {getAreasByCity(cityName).map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-[#F3F6FA] hover:bg-slate-100 border border-slate-200/60 text-[#0B1736] font-extrabold text-[10px] px-3 py-1.5 rounded-xl transition cursor-default"
                    >
                      <span className="text-red-600 text-[10px] leading-none font-bold">📍</span>
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
