"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const ServicesContent = () => {
  // Update document title
  useEffect(() => {
    document.title = "Our Services - UKB Plumbing";
  }, []);

  const services = [
    {
      id: 1,
      title: "Emergency Plumbing Repairs",
      description: "Fast response to all emergency plumbing issues, including burst pipes, leaks, and fixture failures.",
      image: "/images/real-work/service-van-equipment.webp",
      path: "/services/emergency-plumbing-repairs"
    },
    {
      id: 2,
      title: "Blocked Drain Cleaning",
      description: "Professional removal of blockages in sinks, toilets, showers, and main drainage systems.",
      image: "/lovable-uploads/drain.png",
      path: "/services/blocked-drain-cleaning"
    },
    {
      id: 3,
      title: "Water Leak Repairs",
      description: "Detection and repair of visible and hidden water leaks to prevent property damage and water waste.",
      image: "/lovable-uploads/leak-detection.webp",
      path: "/services/water-leak-repairs"
    },
    {
      id: 4,
      title: "Radiator & Heating Repairs",
      description: "Expert repair, installation, and maintenance of all types of radiators and heating systems.",
      image: "/images/real-work/radiator-installation.webp",
      path: "/services/radiator-repairs"
    },
    {
      id: 5,
      title: "Boiler Repair & Installation",
      description: "Professional installation, repair, and servicing of all boiler types to ensure efficient and safe operation.",
      image: "/images/real-work/engineer-boiler-work.webp",
      path: "/services/boiler-installation-repair"
    },
    {
      id: 6,
      title: "Pipe Repairs & Replacement",
      description: "Expert repair and replacement of damaged, burst, or corroded pipes using high-quality materials.",
      image: "/lovable-uploads/pipework-repair.webp",
      path: "/services/pipe-repairs-replacement"
    },
    {
      id: 7,
      title: "Bathroom & Kitchen Plumbing",
      description: "Installation and repair of all bathroom and kitchen fixtures, including sinks, toilets, showers, and appliances.",
      image: "/images/real-work/completed-bathroom-installation.webp",
      path: "/services/bathroom-kitchen-plumbing"
    },
    {
      id: 8,
      title: "24/7 Emergency Call-Out",
      description: "Emergency response is typically 30–60 minutes, subject to engineer availability, traffic and location.",
      image: "/images/real-work/sukdev-bhakar-engineer-van.webp",
      path: "/services/emergency-call-out"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-32 pb-20 bg-ukb-lightblue py-[130px] my-[30px]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-ukb-darkblue animate-fade-in">
            Our Plumbing Services
          </h1>
          <p className="text-lg text-ukb-darkgray max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive plumbing services for residential and commercial properties in surrounding areas.
            Our skilled team is available 24/7 to handle all your plumbing needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link prefetch={false}
              href={service.path}
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
                  loading="lazy"
                />
                <div className="absolute inset-0 transition-colors duration-300"></div>
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

      <Footer />
    </div>
  );
};

export default ServicesContent;
