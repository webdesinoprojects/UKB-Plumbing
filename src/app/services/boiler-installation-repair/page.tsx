import { NextPage } from 'next';
import { getServiceMetadata } from '@/utils/metadataHelpers';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import CallToAction from '@/components/CallToAction';
import ServicesHeroSection from '@/components/ServicesHeroSection';

export async function generateMetadata() {
  return {
    ...getServiceMetadata('boiler-installation-repair'),
    robots: { index: false, follow: true },
    alternates: { canonical: 'https://ukbplumbing.co.uk/services/boiler-installation' },
  };
}

const BoilerInstallationRepairPage: NextPage = () => {
  const serviceTitle = "Boiler Repair & Installation";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* New Hero Section */}
      <ServicesHeroSection
        serviceName={serviceTitle}
        areaName="Southampton"
        cityName="Southampton"
        heroTitle="Boiler Repair & Installation"
        description="Professional installation, repair, and servicing of all boiler types to ensure efficient and safe operation. Our expert team provides high-quality boiler repair and installation services to ensure your plumbing system works efficiently."
        response="Arrival estimate confirmed when you call, based on engineer availability, traffic and location"
        water="Southampton is supplied largely from chalk aquifer sources, so hard-water scale can be an important consideration for plumbing and heating systems."
        postcodes={["SO14", "SO15", "SO16", "SO17", "SO18", "SO19"]}
      />

      <main className="container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-ukb-darkblue animate-fade-in">
            About {serviceTitle}
          </h2>
          <p className="text-lg text-ukb-darkgray mb-8 leading-relaxed">
            Our expert team provides high-quality {serviceTitle.toLowerCase()} services to ensure your
            plumbing system works efficiently. We use modern tools and techniques to deliver exceptional
            results every time.
          </p>
          <h3 className="text-2xl font-bold mb-6 text-ukb-darkblue">
            Why Choose UKB for {serviceTitle}?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-ukb-darkgray">
            {[
              'Available 24/7 for emergency callouts',
              'Fully qualified and certified plumbers',
              'Transparent pricing with no hidden fees',
              'Clear service information',
              'Latest tools and technology',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-ukb-blue">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default BoilerInstallationRepairPage;
