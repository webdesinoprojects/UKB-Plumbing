"use client";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import QuotePromptCard from "@/components/QuotePromptCard";
import { MapPin, Phone, Clock, Check, Home } from "lucide-react";
import type { CityData } from "@/data/citiesData";
import ReviewLinksBadge from "@/components/ReviewLinksBadge";

interface CityAreasPageProps {
  city: CityData;
  areasLabel?: string;
}

const CityAreasPage: React.FC<CityAreasPageProps> = ({ city, areasLabel }) => {
  return (
    <>
      <main className="min-h-screen bg-white">
      {/* Hero Section - Fixed Header ki approx height + 10px gap offset karne ke liye pt kullan gaya hai */}
      <section className="relative min-h-[650px] flex items-center overflow-hidden bg-[#0a3b7c] hero-section-main md:pt-[120px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(8, 34, 82, 0.92) 0%, rgba(13, 55, 120, 0.88) 0%, rgba(10, 59, 124, 0.92) 50%), url('/lovable-uploads/plumbing-team-background.webp')`,
          }}
        >
          <picture>
            <source
              srcSet="/lovable-uploads/plumbing-team-background.webp"
              type="image/webp"
            />
            <img
              src="/lovable-uploads/plumbing-team-background.webp"
              alt=""
              aria-hidden="true"
              width="1920"
              height="1080"
              className="hidden"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        {/* Content Container - Fixed 10px spacing ensure karne ke liye inner pt reset kiya gaya hai */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-[10px] pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            <div className="w-full lg:max-w-2xl text-white">
              {/* Breadcrumb */}
              <div className="text-xs text-white/80 flex items-center gap-2 flex-wrap mb-6">
                <Link prefetch={false}
                  href="/"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Home size={14} />
                </Link>
                <span className="opacity-50">›</span>
                <span className="text-white break-words">{city.name}</span>
              </div>

              <ReviewLinksBadge />

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 break-words">
                {city.heroTitle}
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg mb-5 text-white/90 leading-relaxed">
                {city.heroDescription}
              </p>

              {/* Checkmarks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Engineer on the phone in under 60 seconds
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Charges agreed before work starts
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Most emergencies fixed first visit
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Free advice, no obligation
                  </span>
                </div>
              </div>

              {/* Buttons */}
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

            {/* Form Container Right Side */}
            <div className="w-full lg:w-auto flex flex-col items-start lg:items-center">
              <div className="hero-form-wrapper w-full max-w-md lg:max-w-none">
                <div className="hero-form-card">
                  {/* Form Heading */}
                  <h2 className="hero-form-title">
                    Send Us a Message
                  </h2>

                  <QuotePromptCard />
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="mt-6 inline-flex items-center gap-3 border-2 border-yellow-400/60 rounded-full px-6 py-3 bg-[#0a3b7c]/40 backdrop-blur-sm max-w-full text-center">
                <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-xs sm:text-sm font-bold text-yellow-400 tracking-wide uppercase">
                  Arrival estimate confirmed when you call
                </span>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      <section className="pb-10 sm:pb-16 bg-[#f7f4ef]">
        <div className="w-full flex justify-center px-4 sm:px-6 pt-10">
          <div className="w-full max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-ukb-darkblue mb-6">
              {areasLabel || `Areas we cover in ${city.name}`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {city.areas.map((area) => {
                const href = `/areas-we-cover/${city.slug}/${area.slug}`;
                return (
                  <Link prefetch={false}
                    key={area.slug}
                    href={href}
                    className="group block rounded-2xl border border-black/10 bg-white/70 hover:bg-white transition-colors shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:shadow-subtle"
                  >
                    <div className="p-4 sm:p-6">
                      <div className="w-10 h-10 rounded-full border border-black/10 bg-white flex items-center justify-center text-ukb-blue">
                        <MapPin size={18} />
                      </div>

                      <h3 className="mt-3 sm:mt-5 text-lg sm:text-xl font-semibold text-ukb-darkblue">
                        {area.name}
                      </h3>
                      <div className="mt-1 text-xs tracking-[0.18em] uppercase text-ukb-darkgray/80">
                        {city.name}
                      </div>
                      <p className="mt-2 sm:mt-4 text-sm leading-relaxed text-ukb-darkgray line-clamp-2">
                        {area.inShort}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
};

export default CityAreasPage;
