import { southamptonAreas } from "@/data/southamptonAreasData";
import { newForestAreas } from "@/data/newForestAreasData";
import { salisburyAreas } from "@/data/salisburyAreasData";
import { winchesterAreas } from "@/data/winchesterAreasData";
import { eastleighAreas } from "@/data/eastleighAreasData";

export interface AreaData {
  name: string;
  slug?: string;
  postcodes?: string | string[];
  faqs?: any[];
  faqList?: any[];
  regionLabel?: string;
  city?: string;
  [key: string]: any;
}

// Single shared slugify — use this EVERYWHERE a slug is built or compared
// (this file, AreaDetailPage.tsx, service link builders, etc.) so that
// generateStaticParams(), the links you render, and the lookup logic
// below always agree on the exact same slug for the same area/service.
export function slugify(value: string) {
  return (value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // any run of non-alphanumeric chars -> single hyphen
    .replace(/(^-|-$)/g, "");    // trim leading/trailing hyphens
}


function tagCity(areas: any[] | undefined, city: string): AreaData[] {
  return (areas || []).map((a) => ({ ...a, city: a.city || city }));
}

export const allAreas: AreaData[] = [
  ...tagCity(
    southamptonAreas.filter((area) => area.slug !== "chandlers-ford"),
    "Southampton"
  ),
  ...tagCity(newForestAreas, "New Forest"),
  ...tagCity(salisburyAreas, "Salisbury"),
  ...tagCity(winchesterAreas, "Winchester"),
  ...tagCity(eastleighAreas, "Eastleigh"),
];

// Use this inside generateStaticParams() on every service page.tsx
export function getAllAreaSlugs() {
  return allAreas.map((area) => {
    const slug = slugify(area.slug || area.name || "");
    return { area: slug };
  });
}

// Use this to resolve the current [area] slug to its full area data,
// regardless of which city it belongs to.
export function getAreaBySlug(rawArea: string) {
  const areaSlug = slugify(rawArea || "");

  const areaData =
    allAreas.find((a) => {
      const candidateSlug = slugify(a.slug || "");
      const candidateNameSlug = slugify(a.name || "");
      return candidateSlug === areaSlug || candidateNameSlug === areaSlug;
    }) || null;

  const areaName =
    areaData?.name ||
    rawArea
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  const postcodeDisplay = Array.isArray(areaData?.postcodes)
    ? areaData.postcodes.join(", ")
    : areaData?.postcodes || "SO14";

  const cityName = areaData?.city || "Southampton";

  return { areaData, areaName, postcodeDisplay, areaSlug, cityName };
}

// Use this for the sidebar "coverage" chips so each city shows its own areas.
export function getAreasByCity(city: string) {
  return allAreas.filter((a) => a.city === city);
}
