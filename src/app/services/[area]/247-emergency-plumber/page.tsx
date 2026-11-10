import React from "react";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAllAreaSlugs, getAreaBySlug, getAreasByCity } from "@/data/allAreasData";
import { getAreaServiceMetadata, applyNoindexIfNecessary } from "@/utils/metadataHelpers";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import Batch1UniqueContent from "@/components/Batch1UniqueContent";
import AreaReviews from "@/components/AreaReviews";
import { businessFacts } from "@/config/businessFacts";
import {
  Phone,
  Award,
  ShieldCheck,
  MapPin,
  Clock,
  Wrench,
  CheckCircle2, // <--- Add this import
  ChevronRight
} from "lucide-react";

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
  const metadata = getAreaServiceMetadata(rawArea, "247-emergency-plumber");
  return applyNoindexIfNecessary(metadata, rawArea, "247-emergency-plumber");
}

const defaultFaqs = [
  {
    question: "How fast can an emergency engineer arrive in this area?",
    answer: businessFacts.emergencyResponseWording,
  },
  {
    question: "Is there a call-out fee for emergency plumbing?",
    answer:
      businessFacts.pricingWording,
  },
  {
    question: "Are your engineers Gas Safe registered?",
    answer:
      "Gas work is assigned to an appropriately Gas Safe registered engineer. Ask to see the engineer's ID card and relevant work categories.",
  },
  {
    question: "What guarantee comes with emergency repairs?",
    answer:
      "Any applicable workmanship or manufacturer warranty is confirmed for your specific repair before the work is agreed.",
  },
  {
    question: "Do you cover hard water scale issues in boilers?",
    answer:
      "Yes, we specialize in hard water scale management, magnetic filter fitting, and rapid combi boiler descaling.",
  },
];



export default async function EmergencyPlumber247Page(props: PageProps) {
  const resolvedParams = await props.params;
  const rawArea = resolvedParams?.area || "shirley";
  const { areaData, areaName, postcodeDisplay, cityName } = getAreaBySlug(rawArea);

  const serviceTitle = "24/7 Emergency Plumber";
  const faqList = areaData?.faqs?.length ? areaData.faqs : defaultFaqs;

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
    url: `https://ukbplumbing.co.uk/services/${rawArea}/247-emergency-plumber`,
  };

  // JSON-LD Schema for Local Emergency Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "name": `UKB Plumbing - 24/7 Emergency Plumber in ${areaName}`,
    "description": `Emergency plumbing support across ${areaName} (${postcodeDisplay}), subject to engineer availability and traffic.`,
    "areaServed": areaName,
    "telephone": "07359605766",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* New Hero Section */}
      <ServicesHeroSection
        serviceName={serviceTitle}
        areaName={areaName}
        cityName={cityName}
        heroTitle={`${serviceTitle} in ${areaName}`}
        description={`Facing an urgent plumbing issue in ${areaName}? Contact UKB Plumbing to confirm engineer availability, an estimated arrival time and the likely charges before work begins.`}
        response={businessFacts.emergencyResponseWording}
        water={`${cityName} is supplied largely from chalk aquifer sources, so hard-water scale can be an important consideration for plumbing and heating systems.`}
      />

      <main className="min-h-screen bg-[#f8fafc] pt-2.5 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* BATCH 1 UNIQUE CONTENT */}
          <Batch1UniqueContent areaSlug={rawArea} serviceName={serviceTitle} />

          {/* MAIN CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-10">
              {/* Expert Diagnostics Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <span className="bg-amber-100 text-amber-900 text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  EXPERT DIAGNOSTICS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mt-3 mb-4">
                  Expert {serviceTitle} Diagnostics in {areaName}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  In {areaName}, uninspected emergency plumbing issues require
                  rapid technical intervention before structural property damage
                  occurs. UKB Plumbing engineers conduct digital gas soundness
                  appropriate testing and visual checks to
                  diagnose system faults accurately on the first visit.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">
                      ✓
                    </span>{" "}
                    Electronic Flue Gas Analysis (Kane/Testo)
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">
                      ✓
                    </span>{" "}
                    Digital Gas Tightness & Soundness Test
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">
                      ✓
                    </span>{" "}
                    Pipework and leak assessment
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500 font-extrabold text-sm">
                      ✓
                    </span>{" "}
                    Adey magnetic sludge density analysis
                  </div>
                </div>
              </div>
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

              {/* LOCAL HAMPSHIRE ADVANTAGE SECTION */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <div className="text-[11px] font-black uppercase tracking-wider text-[#1D3B8A] mb-2">
                  LOCAL HAMPSHIRE ADVANTAGE
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1736] mb-6 flex items-center gap-2">
                  <span className="text-[#FF9900] inline-block text-3xl leading-none">
                    •
                  </span>
                  <span>Why {areaName === "Southampton" ? "Southampton" : `${areaName}`} Homeowners Trust UKB Plumbing</span>
                </h2>

                <div className="space-y-3.5">
                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">Local system knowledge:</strong> Hard-water scale can affect plumbing and heating systems in {areaName}, so we consider scale when assessing a fault.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">Emergency response:</strong> Typically 30–60 minutes, subject to engineer availability, traffic and location.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">Clear charges:</strong> The call-out and diagnostic fee is explained before booking. Repairs and parts are quoted separately, and work starts only after you agree the price.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">Appropriate credentials:</strong> Gas work is assigned to a suitably Gas Safe registered engineer. You can ask to see the engineer&apos;s ID card.
                    </p>
                  </div>

                  <div className="bg-[#F4F6FB] border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#1C3B8B] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">Warranty information:</strong> Any applicable workmanship or manufacturer warranty is confirmed for the specific job.
                    </p>
                  </div>
                </div>
              </div>

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

              {/* FAQs Section */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  
                 
                </div>

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
                        <span>{faq.question}</span>
                        <span className="text-blue-600 font-black text-base group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-100">
                        {faq.answer}
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
