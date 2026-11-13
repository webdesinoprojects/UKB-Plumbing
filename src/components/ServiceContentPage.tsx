import Link from "next/link";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/ServiceStructuredData";
import { PRIORITY_AREA_SERVICE_PAGES } from "@/data/pageRegistry";
import { getAreaBySlug } from "@/data/allAreasData";

type Section = { title: string; paragraphs: string[]; bullets?: string[] };
type Faq = { question: string; answer: string };

interface ServiceContentPageProps {
  title: string;
  description: string;
  path: `/services/${string}`;
  sections: Section[];
  faqs: Faq[];
  related: { label: string; href: string }[];
  areaLinks?: { label: string; href: string }[];
  guidanceLink?: { label: string; href: string };
}

export default function ServiceContentPage({ title, description, path, sections, faqs, related, areaLinks, guidanceLink }: ServiceContentPageProps) {
  const serviceAreaSlug = ({
    "/services/emergency-plumber": "247-emergency-plumber",
    "/services/boiler-repair": "boiler-repair-and-breakdown",
    "/services/blocked-drains": "blocked-drains-and-jetting",
  } as Record<string, string>)[path];
  const priorityAreaLinks = serviceAreaSlug
    ? PRIORITY_AREA_SERVICE_PAGES
        .filter(([, slug]) => slug === serviceAreaSlug)
        .map(([areaSlug]) => ({ areaSlug, areaName: getAreaBySlug(areaSlug).areaName }))
    : [];
  return (
    <>
      <ServiceStructuredData name={title} description={description} path={path} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: title }]} />
      </div>
      <main className="bg-white pb-16">
        <section className="bg-[#0a3b7c] py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-300">Southampton and surrounding areas</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">{description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:+447359605766" data-tracking-location="service_hero" className="rounded-lg bg-amber-400 px-6 py-3 font-bold text-slate-950">Call Now: 07359 605766</a>
              <Link href="/inquiry-form" data-tracking-location="service_hero" className="rounded-lg bg-white px-6 py-3 font-bold text-[#1D3B8A]">Request a Quote</Link>
            </div>
            <p className="mt-5 max-w-3xl text-sm text-white/80">Arrival times depend on engineer availability, traffic and location. Any call-out or diagnostic charge is explained before a visit, and work is agreed before it starts.</p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-3xl font-bold text-ukb-darkblue">{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="leading-relaxed text-slate-700">{paragraph}</p>)}
              {section.bullets && <ul className="grid gap-3 pl-5 text-slate-700 sm:grid-cols-2">{section.bullets.map((item) => <li key={item} className="list-disc">{item}</li>)}</ul>}
            </section>
          ))}

          <section className="space-y-4" aria-labelledby="service-faqs">
            <h2 id="service-faqs" className="text-3xl font-bold text-ukb-darkblue">Frequently asked questions</h2>
            <div className="space-y-4">{faqs.map((faq) => <div key={faq.question} className="rounded-xl border border-slate-200 p-5"><h3 className="font-bold text-slate-900">{faq.question}</h3><p className="mt-2 text-sm leading-relaxed text-slate-700">{faq.answer}</p></div>)}</div>
            {guidanceLink && <a href={guidanceLink.href} target="_blank" rel="noopener noreferrer" className="inline-flex font-bold text-ukb-blue underline">{guidanceLink.label}</a>}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-ukb-darkblue">Related services</h2>
            <div className="flex flex-wrap gap-3">{related.map((item) => <Link key={item.href} href={item.href} className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-ukb-blue hover:bg-slate-50">{item.label}</Link>)}</div>
          </section>

          {areaLinks && areaLinks.length > 0 && (
            <section className="space-y-4" aria-labelledby="service-area-links">
              <h2 id="service-area-links" className="text-2xl font-bold text-ukb-darkblue">Boiler repair areas</h2>
              <p className="text-slate-700">Find local plumbing and heating information for the areas we cover.</p>
              <div className="flex flex-wrap gap-3">
                {areaLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-ukb-blue hover:bg-slate-50">
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {priorityAreaLinks.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ukb-darkblue">Priority local service pages</h2>
              <p className="text-slate-700">View service information for selected local areas.</p>
              <div className="flex flex-wrap gap-3">
                {priorityAreaLinks.map(({ areaSlug, areaName }) => (
                  <Link key={areaSlug} href={`/services/${areaSlug}/${serviceAreaSlug}`} className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-ukb-blue hover:bg-slate-50">
                    {title.replace(/ in Southampton$/, "")} in {areaName}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
