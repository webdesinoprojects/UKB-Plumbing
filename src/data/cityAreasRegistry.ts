import type { AreaWeCover } from "./areaTypes";
import { newForestAreas } from "./newForestAreasData";
import { salisburyAreas } from "./salisburyAreasData";
import { southamptonAreas } from "./southamptonAreasData";
import { winchesterAreas } from "./winchesterAreasData";
import { eastleighAreas } from "./eastleighAreasData";
import { slugify } from "./allAreasData";

export const cityAreasMap: Record<string, AreaWeCover[]> = {
  southampton: southamptonAreas.filter((area) => area.slug !== "chandlers-ford"),
  "new-forest": newForestAreas,
  salisbury: salisburyAreas,
  winchester: winchesterAreas,
  eastleigh: eastleighAreas,
};

export const getCityAreas = (citySlug: string): AreaWeCover[] =>
  cityAreasMap[citySlug] ?? [];

export const getAreaByCityAndSlug = (
  citySlug: string,
  areaSlug: string
): AreaWeCover | undefined =>
  getCityAreas(citySlug).find((area) => area.slug === areaSlug);

export const getAllCityAreaParams = () => {
  const result: { citySlug: string; areaSlug: string }[] = [];
  for (const [citySlug, areas] of Object.entries(cityAreasMap)) {
    for (const area of areas) {
      result.push({ citySlug, areaSlug: area.slug });
    }
  }
  return result;
};

export const getCityHref = (citySlug: string) => {
  if (citySlug === "southampton") {
    return "/areas-we-cover";
  }
  return `/areas-we-cover/${citySlug}`;
};

export const findCityAreaRoute = (nameOrSlug: string) => {
  const rawSlug = slugify(nameOrSlug);
  const requestedSlug = rawSlug === "chandler-s-ford" ? "chandlers-ford" : rawSlug;
  const canonicalCity = requestedSlug === "chandlers-ford" ? "eastleigh" : undefined;

  if (canonicalCity) {
    const area = cityAreasMap[canonicalCity].find(
      (candidate) =>
        candidate.slug === requestedSlug || slugify(candidate.name) === requestedSlug
    );
    if (area) {
      return {
        citySlug: canonicalCity,
        areaSlug: area.slug,
        href: `/areas-we-cover/${canonicalCity}/${area.slug}`,
      };
    }
  }

  for (const [citySlug, areas] of Object.entries(cityAreasMap)) {
    const area = areas.find(
      (candidate) =>
        candidate.slug === requestedSlug || slugify(candidate.name) === requestedSlug
    );

    if (area) {
      return {
        citySlug,
        areaSlug: area.slug,
        href: `/areas-we-cover/${citySlug}/${area.slug}`,
      };
    }
  }

  return undefined;
};
