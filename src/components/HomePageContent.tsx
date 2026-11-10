import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import HeroSection from "@/components/HeroSection";
import CoreServicesOverview from "@/components/CoreServicesOverview";
import ServicesSection from "@/components/ServicesSection";
import BrandCarousel from "@/components/BrandCarousel";
import AreasWeCover from "@/components/areas-we-cover";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePageContent() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <LocalBusinessSchema />
      <HeroSection />
      <CoreServicesOverview />
      <ServicesSection />
      <BrandCarousel />
      <AreasWeCover />
      <WhyChooseUs />
      <AboutUs />
      <Testimonials />
      <CallToAction />
      <ContactSection />
      <Footer />
    </main>
  );
}
