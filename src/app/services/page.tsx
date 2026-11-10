import React from "react";
import Link from "next/link";
import QuotePromptCard from "@/components/QuotePromptCard";
import Footer from "@/components/Footer";
import { Phone, Clock, Check, Home } from "lucide-react";
import type { Metadata } from "next";
import { pageTitle } from '@/utils/metadataHelpers';
import { southamptonAreas } from "@/data/southamptonAreasData";
import { newForestAreas } from "@/data/newForestAreasData";
import { salisburyAreas } from "@/data/salisburyAreasData";
import { winchesterAreas } from "@/data/winchesterAreasData";
import { eastleighAreas } from "@/data/eastleighAreasData";
import ReviewLinksBadge from "@/components/ReviewLinksBadge";

export const metadata: Metadata = {
  title: pageTitle('Plumbing Services | UKB Plumbing'),
  description: 'Explore UKB Plumbing services in Southampton, including emergency plumbing, boiler work, leak detection, blocked drains, pipework and bathroom plumbing.',
  alternates: { canonical: 'https://ukbplumbing.co.uk/services' },
  openGraph: {
    title: 'Plumbing Services | UKB Plumbing',
    description: 'Emergency plumbing, boiler work, leak detection, blocked drains, pipework and bathroom plumbing in Southampton.',
    url: 'https://ukbplumbing.co.uk/services',
    siteName: 'UKB Plumbing',
    type: 'website',
    images: ['/og-image.png'],
  },
};

const defaultServicesList = [
  "24/7 Emergency Plumber",
  "Boiler Repair & Breakdown",
  "Blocked Drains & Jetting",
  "Water Leak Repairs & Detection",
  "Radiator & Heating Repairs",
  "Boiler Installation & Upgrades",
  "Gas Safe Inspection & Repairs",
  "CP12 Landlord Safety Certificates",
];

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

function ServicesPageContent() {
  const southamptonList = southamptonAreas || [];
  const newForestList = newForestAreas || [];
  const salisburyList = salisburyAreas || [];
  const winchesterList = winchesterAreas || [];
  const eastleighList = eastleighAreas || [];

  const allRegions = [
    {
      sectionTitle: "SOUTHAMPTON DISTRICT & NEIGHBORHOOD COVERAGE",
      hubBadge: "HAMPSHIRE REGIONAL HUB",
      postcodeBadge: "Postcodes: SO14 - SO19, SO30, SO31, SO40, SO45, SO50, SO51, SO53",
      heroTitle: "Southampton Plumbing & Heating",
      heroDescription: "Southampton plumbing & heating coverage. We combine managed plumbers with a trusted local partner network so we can help you across Southampton and surrounding areas 24/7.",
      defaultPostcode: "SO14",
      defaultRegionLabel: "Southampton",
      defaultHighlight: "Scale management & efficient combi upgrades essential.",
      areas: southamptonList,
    },
    {
      sectionTitle: "NEW FOREST DISTRICT & NEIGHBORHOOD COVERAGE",
      hubBadge: "NEW FOREST REGIONAL HUB",
      postcodeBadge: "Postcodes: SO40, SO41, SO42, SO43, SO45",
      heroTitle: "New Forest Plumbing & Heating",
      heroDescription: "New Forest plumbing & heating coverage. We combine managed plumbers with a trusted local partner network so we can help you across the New Forest and surrounding areas 24/7.",
      defaultPostcode: "SO40",
      defaultRegionLabel: "New Forest",
      defaultHighlight: "Eco-friendly heating & specialized rural plumbing care.",
      areas: newForestList,
    },
    {
      sectionTitle: "EASTLEIGH DISTRICT & NEIGHBORHOOD COVERAGE",
      hubBadge: "EASTLEIGH REGIONAL HUB",
      postcodeBadge: "Postcodes: SO50, SO53",
      heroTitle: "Eastleigh Plumbing & Heating",
      heroDescription: "Eastleigh plumbing & heating coverage. We combine managed plumbers with a trusted local partner network so we can help you across Eastleigh and surrounding areas 24/7.",
      defaultPostcode: "SO50",
      defaultRegionLabel: "Eastleigh",
      defaultHighlight: "Rapid emergency response & combi boiler care.",
      areas: eastleighList,
    },
    {
      sectionTitle: "SALISBURY DISTRICT & NEIGHBORHOOD COVERAGE",
      hubBadge: "WILTSHIRE REGIONAL HUB",
      postcodeBadge: "Postcodes: SP1 - SP5",
      heroTitle: "Salisbury Plumbing & Heating",
      heroDescription: "Salisbury plumbing & heating coverage. We combine managed plumbers with a trusted local partner network so we can help you across Salisbury and surrounding areas 24/7.",
      defaultPostcode: "SP1",
      defaultRegionLabel: "Salisbury",
      defaultHighlight: "Hard-water scale protection & emergency leak prevention.",
      areas: salisburyList,
    },
    {
      sectionTitle: "WINCHESTER DISTRICT & NEIGHBORHOOD COVERAGE",
      hubBadge: "HAMPSHIRE CATHEDRAL HUB",
      postcodeBadge: "Postcodes: SO21 - SO23",
      heroTitle: "Winchester Plumbing & Heating",
      heroDescription: "Winchester plumbing & heating coverage. We combine managed plumbers with a trusted local partner network so we can help you across Winchester and surrounding areas 24/7.",
      defaultPostcode: "SO23",
      defaultRegionLabel: "Winchester",
      defaultHighlight: "Period property care & emergency leak prevention.",
      areas: winchesterList,
    },
  ];

  return (
    <>
      <section className="relative min-h-[800px] flex items-center overflow-hidden bg-[#0a3b7c] hero-section-main pt-2.5">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(8, 34, 82, 0.92) 0%, rgba(13, 55, 120, 0.88) 0%, rgba(10, 59, 124, 0.92) 50%), url('/lovable-uploads/plumbing-team-background.webp')`,
          }}
        >
          <img
            src="/lovable-uploads/plumbing-team-background.webp"
            alt=""
            aria-hidden="true"
            width="1920"
            height="1080"
            className="hidden"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2.5 pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            <div className="w-full lg:max-w-2xl text-white">
              <div className="text-xs text-white/80 flex items-center gap-2 flex-wrap mb-6">
                <Link prefetch={false}
                  href="/"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Home size={14} />
                </Link>
                <span className="opacity-50">›</span>
                <span className="text-white break-words">Services</span>
              </div>

              <ReviewLinksBadge />

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 break-words">
                Our Plumbing Services
              </h1>

              <p className="text-base md:text-lg mb-5 text-white/90 leading-relaxed">
                We offer comprehensive plumbing services for residential and commercial properties in surrounding areas. Our skilled team is available 24/7 to handle all your plumbing needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    24/7 emergency service available
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Appropriately registered engineers for gas work
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Residential and commercial
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Charges agreed before work
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:+447359605766"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-500 transition font-semibold text-center"
                >
                  <Phone size={20} />
                  <span>Call Now: 07359605766</span>
                </a>
                <Link prefetch={false} href="/inquiry-form"
                 className="bg-white text-blue-600 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition font-semibold"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col items-start lg:items-center">
              <div className="hero-form-wrapper w-full max-w-md lg:max-w-none">
                <div className="hero-form-card">
                  <h2 className="hero-form-title">
                    Send Us a Message
                  </h2>

                  <QuotePromptCard />
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-3 border-2 border-yellow-400/60 rounded-full px-6 py-3 bg-[#0a3b7c]/40 backdrop-blur-sm max-w-full text-center">
                <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-xs sm:text-sm font-bold text-yellow-400 tracking-wide uppercase">
                  Arrival estimate confirmed when you call
                </span>
              </div>
            </div>
          </div>
        </div>

      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <Link prefetch={false} href="https://www.gassaferegister.co.uk/businesscompetencies?ep=1xPOGK1AdTeDy4hfLti5P2suaiAfkgrUN0FAz91sbiuBv2%252fAVPRsfqLCaLBxH42HVXP6X2H0tU7wnaWL3fuUQwxGr9VjFTUyEYsIOpxxiIE%253d&backurl=%252ffindbusinessresults%253fep%253d1xPOGK1AdTeDy4hfLti5P2suaiAfkgrUN0FAz91sbis41eO4MxUIdHAaMgU2gRiE&searchurl=%252Ffindbusinessresults%253Fep%253D1xPOGK1AdTeDy4hfLti5P2suaiAfkgrUN0FAz91sbis41eO4MxUIdHAaMgU2gRiE" target="_blank" rel="noopener noreferrer">
          <img
            src="/lovable-uploads/gassafe.png"
            alt="Gas Safe Registered"
            width="120"
            height="40"
            className="h-8 md:h-10 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
          />
        </Link>
      </div>
      </section>

      <main className="min-h-screen bg-white pt-10 pb-16 relative z-0">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-16">
          {allRegions.map((region, rIndex) => {
            if (!region.areas || region.areas.length === 0) return null;

            return (
              <section key={rIndex} className="max-w-7xl mx-auto">
                <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-8">
                  <div className="bg-[#1e293b] border-b-4 border-amber-400 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden">
                    <div className="max-w-3xl z-10 w-full">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] sm:text-[11px] tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                          {region.hubBadge}
                        </span>
                        <span className="bg-slate-800 text-slate-300 font-medium text-[11px] sm:text-xs px-3 py-1 rounded-full border border-slate-700">
                          {region.postcodeBadge}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white mb-2 flex items-center gap-2.5">
                        <span className="p-2 rounded-xl bg-slate-800 text-amber-400 border border-slate-700 inline-flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </span>
                        <span className="break-words">{region.heroTitle}</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {region.heroDescription}
                      </p>
                    </div>

                    <div className="w-full lg:w-auto bg-slate-900/90 border border-slate-700 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-inner z-10 flex-shrink-0 lg:min-w-[220px]">
                      <a
                        href="tel:07359605766"
                        className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base px-4 py-2.5 rounded-xl transition shadow-md whitespace-nowrap flex items-center justify-center gap-2 mb-2"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        07359 605766
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {region.areas.map((area: any, index: number) => {
                      const areaSlug = (area.slug || area.name || "")
                        .toLowerCase()
                        .trim()
                        .replace(/\s+/g, "-");

                      const postcodeText = Array.isArray(area.postcodes)
                        ? area.postcodes.join(", ")
                        : area.postcodes || region.defaultPostcode;

                      const descriptionText =
                        area.inShort ||
                        (Array.isArray(area.whatItLooksLike)
                          ? area.whatItLooksLike[0]
                          : area.whatItLooksLike) ||
                        `${area.name} features local residential properties and plumbing services across ${postcodeText}.`;

                      const highlightText =
                        area.typicalProblems?.[0]?.detail ||
                        area.typicalProblems?.[0] ||
                        region.defaultHighlight;

                      return (
                        <div
                          key={areaSlug || index}
                          className="bg-[#f8fafc] rounded-2xl border-2 border-slate-200 hover:border-blue-900 transition-all duration-300 p-4 sm:p-5 shadow-sm hover:shadow-lg flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <div className="flex items-start gap-3 min-w-0">
                                <span className="w-8 h-8 rounded-lg bg-blue-100/80 text-blue-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                                  {index + 1}
                                </span>
                                <div className="min-w-0">
                                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight truncate">
                                    {area.name}
                                  </h3>
                                  <p className="text-xs text-slate-500 font-medium mt-0.5 truncate">
                                    {area.regionLabel || region.defaultRegionLabel} •{" "}
                                    <span className="text-blue-600 font-bold">{postcodeText}</span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 mb-3 text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                              {descriptionText}
                            </div>

                            <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-2.5 mb-4 text-xs font-medium text-amber-900 flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-sparkles w-3 h-3 text-amber-600 shrink-0"
                                aria-hidden="true"
                              >
                                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                <path d="M20 2v4"></path>
                                <path d="M22 4h-4"></path>
                                <circle cx="4" cy="20" r="2"></circle>
                              </svg>
                              <span className="line-clamp-1 font-semibold">{highlightText}</span>
                            </div>

                            <div className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider mb-2.5">
                              AVAILABLE SERVICES:
                            </div>

                            <div className="space-y-2">
                              {defaultServicesList.map((serviceName, sIndex) => {
                                const fullServiceTitle = `${serviceName} in ${area.name}`;
                                const serviceSlug = slugify(serviceName);
                                const serviceUrl = `/services/${areaSlug}/${serviceSlug}`;

                                return (
                                  <Link prefetch={false}
                                    key={sIndex}
                                    href={serviceUrl}
                                    className="group bg-white hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 rounded-xl px-3 py-2 flex items-center justify-between text-xs font-semibold text-slate-800 transition-all cursor-pointer shadow-2xs"
                                  >
                                    <div className="flex items-center gap-2 min-w-0 pr-2">
                                      <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                                      <span className="truncate text-slate-800 group-hover:text-blue-950 font-bold">
                                        {fullServiceTitle}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function ServicesPage() {
  return <ServicesPageContent />;
}
