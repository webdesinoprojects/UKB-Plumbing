import Link from "next/link";

const coreServices = [
  {
    title: "Emergency plumbing",
    href: "/services/emergency-plumber",
    description: "Help with burst pipes, active leaks, overflowing fixtures and other urgent plumbing faults. Call to confirm availability and an estimated arrival time.",
  },
  {
    title: "Boiler repair",
    href: "/services/boiler-repair",
    description: "Assessment and repair options for loss of heating, no hot water, pressure problems, unusual noises and boiler lockouts.",
  },
  {
    title: "Boiler installation",
    href: "/services/boiler-installation",
    description: "Advice on combi, system and conventional boiler replacement, with the installation scope, product warranty and price confirmed in writing.",
  },
  {
    title: "Blocked drains",
    href: "/services/blocked-drains",
    description: "Assessment and clearance options for blocked sinks, toilets, showers and external drains, using equipment suitable for the fault.",
  },
  {
    title: "Water leak repair",
    href: "/services/water-leakage-and-repair",
    description: "Investigation and repair options for visible or suspected hidden leaks, unexplained damp, pressure loss and rising water use.",
  },
];

export default function CoreServicesOverview() {
  return (
    <section aria-labelledby="core-services-heading" className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 id="core-services-heading" className="text-3xl font-bold text-ukb-darkblue md:text-4xl">
            Plumbing and heating services in Southampton
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Choose the service that best matches the problem. We confirm availability, likely charges and the next step when you contact us.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service) => (
            <article key={service.href} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-ukb-darkblue">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{service.description}</p>
              <Link href={service.href} className="mt-5 inline-flex font-bold text-ukb-blue underline-offset-4 hover:underline">
                View {service.title.toLowerCase()}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
