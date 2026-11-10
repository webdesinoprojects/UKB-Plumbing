"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import QuotePromptCard from "@/components/QuotePromptCard";
import Footer from '@/components/Footer';
import { servicesList } from '@/data/servicesData';
import { Phone, Clock, Check, Home } from "lucide-react";
import ReviewLinksBadge from '@/components/ReviewLinksBadge';

const ServicesListPage = () => {
  // Update document title
  useEffect(() => {
    document.title = "Our Services - UKB Plumbing";
  }, []);

  return (
    <>
      <main className="min-h-screen bg-white">
      {/* Hero Section with main page design */}
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

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2.5 pb-16 lg:pb-20">
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
                <span className="text-white break-words">Services</span>
              </div>

              <ReviewLinksBadge />

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 break-words">
                Our Plumbing Services
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg mb-5 text-white/90 leading-relaxed">
                We offer comprehensive plumbing services for residential and commercial properties in surrounding areas. Our skilled team is available 24/7 to handle all your plumbing needs.
              </p>

              {/* Checkmarks Grid */}
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

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-ukb-darkblue">
            All Our Services
          </h2>
          <p className="mt-2 text-ukb-darkgray">
            Comprehensive plumbing and heating solutions for your home and business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <Link prefetch={false}
              href={`/services/${service.slug}`}
              key={service.id}
              className="group bg-white rounded-lg overflow-hidden shadow-subtle hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  width="800"
                  height="450"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-colors duration-300"></div> {/* Removed blue background */}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-ukb-darkblue group-hover:text-ukb-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-ukb-darkgray leading-relaxed">{service.description}</p>
              </div>
          </Link>
          ))}
        </div>
      </div>

      </main>
      <Footer />
    </>
  );
};

export default ServicesListPage;
