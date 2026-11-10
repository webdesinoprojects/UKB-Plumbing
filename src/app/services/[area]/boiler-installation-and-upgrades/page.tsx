import React from "react";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import { getAllAreaSlugs, getAreaBySlug, getAreasByCity } from "@/data/allAreasData";
import { getAreaServiceMetadata, applyNoindexIfNecessary } from "@/utils/metadataHelpers";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import Batch1UniqueContent from "@/components/Batch1UniqueContent";
import AreaReviews from "@/components/AreaReviews";
import { Phone, Award, ShieldCheck, MapPin, Flame, CheckCircle2 } from "lucide-react";

// Generate Static Params for SSG / Export
export async function generateStaticParams() {
  return getAllAreaSlugs();
}
type PageProps = {
  params: Promise<{ area: string }>;
};

// Dynamic Metadata Generation for SEO
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const resolvedParams = await props.params;
  const rawArea = resolvedParams?.area || "shirley";
  const metadata = getAreaServiceMetadata(rawArea, "boiler-installation-and-upgrades");
  return applyNoindexIfNecessary(metadata, rawArea, "boiler-installation-and-upgrades");
}

const defaultFaqs = [
  {
    question: "How quickly can a new boiler be installed in this area?",
    answer:
      "For urgent heating replacement needs, UKB Plumbing offers next-day boiler installations across all local postcodes subject to initial survey approval.",
  },
  {
    question: "What length of warranty comes with a new boiler upgrade?",
    answer:
      "Manufacturer warranty length depends on the selected boiler and installation terms and is confirmed in the written quote.",
  },
  {
    question: "Are your boiler installation engineers Gas Safe registered?",
    answer:
      "Gas installation work is assigned to an appropriately Gas Safe registered engineer. Ask to see the engineer's ID card and relevant work categories.",
  },
  {
    question: "Do you offer magnetic filter protection with new installations?",
    answer:
      "The written quote confirms the system preparation, filter and treatment included for the selected installation.",
  },
  {
    question: "Can I upgrade from an old conventional system to a modern combi boiler?",
    answer:
      "Yes, we specialize in full system conversions—converting old water tanks and cylinders into high-efficiency, space-saving combi boiler setups in as little as 1 to 2 days.",
  },
];



export default async function BoilerInstallationAndUpgradesPage(props: PageProps) {
  const resolvedParams = await props.params;
  const rawArea = resolvedParams?.area || "shirley";
  const { areaData, areaName, postcodeDisplay, cityName } = getAreaBySlug(rawArea);

  const serviceTitle = "Boiler Installation & Upgrades";
  const faqList = areaData?.faqs?.length ? areaData.faqs : defaultFaqs;

  // JSON-LD Schema for Boiler Installation & Heating Services
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": `UKB Plumbing - Boiler Installation & Upgrades in ${areaName}`,
    "description": `Boiler installation and heating system upgrade options across ${areaName} (${postcodeDisplay}), with an appropriately Gas Safe registered engineer assigned to gas work.`,
    "areaServed": areaName,
    "telephone": "07359605766",
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      

      {/* ANNOUNCEMENT BAR */}
      {/* New Hero Section */}
      <ServicesHeroSection
        serviceName={serviceTitle}
        areaName={areaName}
        cityName={cityName}
        heroTitle={`Expert ${serviceTitle} in ${areaName}`}
        description={`Considering a replacement heating system in ${areaName}? We discuss suitable boiler options, confirm an appropriately Gas Safe registered installer, and include the applicable manufacturer warranty in the written quote.`}
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
                  HIGH-EFFICIENCY HEATING
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mt-3 mb-4">
                  A-Rated Boiler Upgrades & Conversions in {areaName}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  Inconsistent hot water, noisy pipework, or rising energy bills in {areaName} are clear signs that your heating system requires an upgrade. UKB Plumbing provides complete supply, replacement, and system conversion services across {areaName} ({postcodeDisplay}) using energy-saving A-rated boilers designed to reduce home heating costs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    A-Rated Energy Efficient Combi & System Boilers
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Manufacturer warranty options confirmed with the quote
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Full Magnetic Filter & Chemical Scale Protection
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">✓</span>{" "}
                    Smart Thermostat Integration (Hive, Nest, Tado)
                  </div>
                </div>
              </div>

              {/* EMERGENCY CALLOUT BANNER */}
              <div className="bg-[#1C3B8B] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                <div>
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                    FAST DISPATCH
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-2 mb-1">
                    Boiler broken down or need a quick replacement in {areaName}?
                  </h3>
                  <p className="text-xs text-blue-100 font-medium">
                    Next-day installation available subject to initial survey.
                  </p>
                </div>

                <a
                  href="tel:07359605766"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl transition whitespace-nowrap shadow-sm"
                >
                  Request Fast Quote
                </a>
              </div>

              {/* LOCAL ADVANTAGE SECTION */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <div className="text-[11px] font-black uppercase tracking-wider text-[#1D3B8A] mb-2">
                  LOCAL HAMPSHIRE ADVANTAGE
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mb-6 flex items-center gap-2">
                  <span className="text-[#FF9900] text-3xl leading-none">•</span>
                  <span>Why {areaName} Residents Rely On UKB Plumbing</span>
                </h2>

                <div className="space-y-3.5">
                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Appropriately registered installer in {areaName}:
                      </strong>{" "}
                      Installation requirements and the appropriately registered engineer are confirmed before work begins.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Clear written quote:
                      </strong>{" "}
                      Itemised pricing is agreed before installation work begins, including any visit or assessment charge.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        Extended Manufacturer Warranties:
                      </strong>{" "}
                      Manufacturer warranty terms depend on the selected product and are confirmed with the written quote.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">
                        System preparation:
                      </strong>{" "}
                      The written quote confirms any flushing or system preparation included for the selected installation.
                    </p>
                  </div>
                </div>
              </div>

              {/* COMPREHENSIVE SERVICES GRID */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <span className="bg-blue-100 text-blue-900 text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  COMPLETE HEATING SOLUTIONS
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mt-3 mb-6">
                  Comprehensive Boiler Services in {areaName}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-800">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Combi Boiler Replacements
                      </span>
                      Instant hot water & space-saving installations.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        System & Conventional Boilers
                      </span>
                      Ideal setups for high water demand households.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Full System Conversions
                      </span>
                      Convert old tanks and cylinders to compact combi systems.
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Powerflushing & Filters
                      </span>
                      System cleaning and magnetic filter installation.
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
                  {faqList.map((faq: any, idx: number) => (
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

              {/* CALLOUT BANNER SECTION */}
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
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
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
