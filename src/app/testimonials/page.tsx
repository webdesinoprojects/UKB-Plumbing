"use client";

import React from "react";
import { ExternalLink, Phone, Clock, Check, Home } from "lucide-react";
import Footer from "@/components/Footer";
import Link from "next/link";
import QuotePromptCard from "@/components/QuotePromptCard";
import ExternalReviews from '@/components/ExternalReviews';
import ReviewLinksBadge from '@/components/ReviewLinksBadge';

const Testimonials = () => {
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
                <span className="text-white break-words">Testimonials</span>
              </div>

              <ReviewLinksBadge />

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 break-words">
                What Our Customers Say
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg mb-5 text-white/90 leading-relaxed">
                Don't just take our word for it - hear from the people who have experienced our service firsthand. Read genuine reviews from our satisfied customers.
              </p>

              {/* Checkmarks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Genuine customer reviews
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Ratings shown by the review provider
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Verified Google reviews
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">
                    Source-linked customer feedback
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

      {/* Testimonials Section */}
      <section className="section-padding bg-white overflow-hidden py-16">
        <div className="container mx-auto px-4 pb-[50px]">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ukb-darkblue">
              Customer Reviews
            </h2>
            <p className="text-lg text-ukb-darkgray">
              Read what our customers have to say about our plumbing and heating services.
            </p>
          </div>

          <div className="max-w-6xl mx-auto featurable-custom-wrapper mb-6">
            <ExternalReviews />
          </div>

          {/* WRITE A REVIEW BUTTON ALIGNED TO THE RIGHT */}
          <div className="max-w-6xl mx-auto flex justify-end ">
            <a
              href="https://g.page/r/CR8tEmhNfDHjEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D3B8A] hover:bg-blue-900 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-xl shadow-md transition flex items-center gap-2"
            >
              <span>Review Us</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .featurable-custom-wrapper div[class*="card"],
        .featurable-custom-wrapper iframe,
        .featurable-custom-wrapper > div > div > div {
          height: 280px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          box-sizing: border-box !important;
        }

        .featurable-custom-wrapper p,
        .featurable-custom-wrapper [class*="text"] {
          display: -webkit-box !important;
          -webkit-line-clamp: 4 !important;
          -webkit-box-orient: vertical !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
        }
      `}</style>

      </main>
      <Footer />
    </>
  );
};

export default Testimonials;
