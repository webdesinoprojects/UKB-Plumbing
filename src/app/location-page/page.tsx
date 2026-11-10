import { Suspense } from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import FormSkeleton from "@/components/FormSkeleton";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "https://ukbplumbing.co.uk/inquiry-form" },
};

export default function LocationPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Book Plumbing Service</h1>

      {/* Suspense handles the loading state asynchronously */}
      <Suspense fallback={<FormSkeleton />}>
        <HeroSection />
        <ServicesHeroSection serviceName="Plumbing" areaName="Your Area" />
      </Suspense>
    </main>
  );
}
