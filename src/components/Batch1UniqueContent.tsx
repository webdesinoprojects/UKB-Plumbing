import { getAreaBySlug } from "@/data/allAreasData";
import Link from "next/link";
import { findCityAreaRoute } from "@/data/cityAreasRegistry";
import { getAreaServicePageState } from "@/data/pageRegistry";
import { isBatch1Town } from "@/utils/metadataHelpers";

interface Batch1UniqueContentProps {
  areaSlug: string;
  serviceName: string;
}

const serviceDetails: Record<string, { slug: string; parentHref: `/services/${string}`; checks: string[]; context: string }> = {
  emergency: {
    slug: "247-emergency-plumber",
    parentHref: "/services/emergency-plumber",
    checks: ["Where the water is coming from", "Whether the stop tap can be reached", "Which fixtures or rooms are affected", "Any electrical or safety concern"],
    context: "For an urgent leak or loss of water, tell us what has happened, what you have safely isolated and whether water is still escaping. Availability and an arrival estimate are confirmed when you call.",
  },
  boiler: {
    slug: "boiler-repair-and-breakdown",
    parentHref: "/services/boiler-repair",
    checks: ["Boiler make and model", "Display message or fault code", "System pressure reading", "Whether heating, hot water or both are affected"],
    context: "A fault code is useful but does not by itself identify the failed part. An appropriately Gas Safe registered engineer assesses the boiler before repair work and pricing are agreed.",
  },
  drain: {
    slug: "blocked-drains-and-jetting",
    parentHref: "/services/blocked-drains",
    checks: ["Which fixtures drain slowly", "Whether more than one outlet is affected", "Any overflow or sewage outside", "Whether the problem changes during rain"],
    context: "The suitable clearing method depends on the location, access and condition of the pipework. Any further investigation or repair is explained separately if a recurring or structural fault is suspected.",
  },
};

function getServiceDetail(serviceName: string) {
  const normalized = serviceName.toLowerCase();
  if (normalized.includes("boiler")) return serviceDetails.boiler;
  if (normalized.includes("drain")) return serviceDetails.drain;
  return serviceDetails.emergency;
}

export default function Batch1UniqueContent({ areaSlug, serviceName }: Batch1UniqueContentProps) {
  const detail = getServiceDetail(serviceName);
  const serviceNameInSentence = serviceName.toLowerCase().replace(/^cp12\b/, "CP12");
  const pageState = getAreaServicePageState(areaSlug, detail.slug);
  if (pageState.state !== "priority" && !isBatch1Town(areaSlug)) return null;

  const { areaData, areaName, postcodeDisplay, cityName } = getAreaBySlug(areaSlug);
  if (!areaData) return null;

  const housingContext = Array.isArray(areaData.whatItLooksLike)
    ? areaData.whatItLooksLike.slice(0, 2)
    : [];
  const areaRoute = findCityAreaRoute(areaSlug);
  const neighbourLinks = Array.isArray(areaData.nearestTowns)
    ? areaData.nearestTowns
        .map((town: { name: string }) => ({ name: town.name, route: findCityAreaRoute(town.name) }))
        .filter((town: { name: string; route: ReturnType<typeof findCityAreaRoute> }) => Boolean(town.route))
        .slice(0, 3)
    : [];

  return (
    <section className="mb-8 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-slate-50 p-6 md:p-8" aria-labelledby="local-service-heading">
      <h2 id="local-service-heading" className="text-2xl font-bold text-ukb-darkblue">
        {serviceName} in {areaName}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ukb-darkgray">
        This page covers {serviceNameInSentence} enquiries in {areaName}, {cityName}, including the {postcodeDisplay} postcode area. {detail.context}
      </p>

      {housingContext.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="font-semibold text-ukb-blue">Local property context</h3>
          {housingContext.map((paragraph: string) => (
            <p key={paragraph} className="text-sm leading-relaxed text-ukb-darkgray">{paragraph}</p>
          ))}
        </div>
      )}

      <div className="mt-6">
        <h3 className="font-semibold text-ukb-blue">Information to have ready</h3>
        <ul className="mt-3 grid gap-2 pl-5 text-sm text-ukb-darkgray sm:grid-cols-2">
          {detail.checks.map((item) => <li key={item} className="list-disc">{item}</li>)}
        </ul>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-ukb-darkgray">
        Property age, alterations and access can change both diagnosis and repair options. The engineer should inspect the fault, explain the proposed work and confirm the price before non-emergency repair work begins.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-blue-100 pt-5 text-sm font-semibold">
        <Link href={detail.parentHref} className="text-ukb-blue underline">Parent service</Link>
        {areaRoute && <Link href={areaRoute.href} className="text-ukb-blue underline">{areaName} area guide</Link>}
        {neighbourLinks.map(({ name, route }) => route && <Link key={route.href} href={route.href} className="text-ukb-blue underline">{name}</Link>)}
      </div>
    </section>
  );
}
