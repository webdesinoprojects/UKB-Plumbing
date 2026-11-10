import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { servicesList } from "@/data/servicesData";

const recentWork = [
  { src: "/images/real-work/completed-bathroom-installation.webp", alt: "Completed bathroom installation with bath, shower, toilet and basin", title: "Completed bathroom installation" },
  { src: "/images/real-work/radiator-installation.webp", alt: "New dark column radiator installed on a tiled wall", title: "Column radiator installation" },
  { src: "/images/real-work/engineer-boiler-work.webp", alt: "Engineer working on boiler pipework", title: "Boiler and heating work" },
  { src: "/images/real-work/service-van-equipment.webp", alt: "UKB Plumbing service van carrying tools and equipment", title: "Equipped service van" },
] as const;

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding overflow-hidden bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-ukb-lightblue px-3 py-1 text-sm font-medium text-ukb-blue">Our Expertise</span>
          <h2 className="mb-6 text-3xl font-bold text-ukb-darkblue md:text-4xl">Comprehensive Plumbing Services</h2>
          <p className="text-lg text-ukb-darkgray">From emergency repairs to planned installations, UKB Plumbing provides plumbing and heating support across Southampton and surrounding areas.</p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link prefetch={false} href={`/services/${service.slug}`} key={service.id || index} className="group flex flex-col justify-between overflow-hidden rounded-lg border border-gray-100 bg-white shadow-subtle card-hover" style={{ animationDelay: `${index * 100}ms` }}>
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} width="800" height="450" className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-ukb-blue/40 transition-colors duration-300 group-hover:bg-ukb-blue/30" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 p-2 backdrop-blur-sm"><IconComponent className="h-8 w-8 text-ukb-blue" /></div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-ukb-darkblue transition-colors group-hover:text-ukb-blue">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-ukb-darkgray">{service.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mb-20 mt-8 text-center"><Link prefetch={false} href="/services" className="inline-flex items-center justify-center rounded-md bg-ukb-blue px-8 py-3 font-medium text-white shadow-md transition-colors duration-300 hover:bg-ukb-darkblue">View All Services</Link></div>

        <div className="mx-auto mb-20 max-w-5xl overflow-hidden animate-fade-in">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-ukb-lightblue px-3 py-1 text-sm font-medium text-ukb-blue">Our Work</span>
            <h3 className="mb-4 text-2xl font-bold text-ukb-darkblue md:text-3xl">See The Difference We Make</h3>
            <p className="mx-auto max-w-3xl text-lg text-ukb-darkgray">A before-and-after view of completed kitchen sink pipework.</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-elevated transition-all duration-300 hover:shadow-lg">
            <img src="/lovable-uploads/kitchen-sink-plumbing-before-after.webp" alt="Before and after view of repaired kitchen sink pipework" width="1200" height="675" className="h-auto w-full" loading="lazy" decoding="async" />
            <div className="flex items-center justify-between bg-white p-5">
              <div><h4 className="text-xl font-semibold text-ukb-darkblue">Kitchen sink pipework</h4><p className="text-ukb-darkgray">Replacement and reconfiguration of damaged pipework.</p></div>
              <div className="flex items-center gap-1 text-ukb-blue"><BadgeCheck className="h-5 w-5" /><span className="font-medium">Completed work</span></div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-ukb-lightblue px-3 py-1 text-sm font-medium text-ukb-blue">Recent Projects</span>
            <h3 className="mb-4 text-2xl font-bold text-ukb-darkblue md:text-3xl">Real UKB Plumbing Work</h3>
            <p className="mx-auto max-w-3xl text-lg text-ukb-darkgray">Genuine photographs of recent plumbing and heating work, our engineer and service equipment.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recentWork.map((item) => (
              <figure key={item.src} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <img src={item.src} alt={item.alt} width="900" height="1200" className="h-72 w-full object-cover" loading="lazy" decoding="async" />
                <figcaption className="p-4 font-semibold text-ukb-darkblue">{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
