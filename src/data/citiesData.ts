import { getCityAreas } from "./cityAreasRegistry";

export type CityArea = {
  name: string;
  slug: string;
  inShort: string;
};

export type CityData = {
  slug: string;
  name: string;
  heroTitle: string;
  heroDescription: string;
  coverageLabel: string;
  areas: CityArea[];
};
const cityMeta: Omit<CityData, "areas">[] = [
  {
    slug: "southampton",
    name: "Southampton",
    coverageLabel: "Coverage",
    heroTitle: "Southampton Plumbing And Heating Experts",
    heroDescription:
      "Need a plumber in Southampton? We provide reliable plumbing support 24/7 across Southampton and the surrounding areas.",
  },
  {
    slug: "new-forest",
    name: "New Forest",
    coverageLabel: "Coverage",
    heroTitle: "New Forest plumbing coverage",
    heroDescription:
      "UKB Plumbing covers the New Forest, from Lyndhurst and Brockenhurst to Fordingbridge. Contact us to confirm availability; gas work is assigned to an appropriately Gas Safe registered engineer, and charges are agreed before work starts.",
  },
  {
    slug: "salisbury",
    name: "Salisbury",
    coverageLabel: "Coverage",
    heroTitle: "Salisbury plumbing coverage",
    heroDescription:
      "UKB Plumbing covers Salisbury and nearby villages. Contact us to confirm availability; gas work is assigned to an appropriately Gas Safe registered engineer, and charges are agreed before work starts.",
  },
  {
    slug: "winchester",
    name: "Winchester",
    coverageLabel: "Coverage",
    heroTitle: "Winchester plumbing coverage",
    heroDescription:
      "UKB Plumbing covers Winchester and nearby villages. Contact us to confirm availability; gas work is assigned to an appropriately Gas Safe registered engineer, and charges are agreed before work starts.",
  },
  {
    slug: "eastleigh",
    name: "Eastleigh",
    coverageLabel: "Coverage",
    heroTitle: "Eastleigh plumbing coverage",
    heroDescription:
      "UKB Plumbing covers Eastleigh and nearby areas. Contact us to confirm availability; gas work is assigned to an appropriately Gas Safe registered engineer, and charges are agreed before work starts.",
  },
];

function areasFromRegistry(citySlug: string): CityArea[] {
  return getCityAreas(citySlug).map((area) => ({
    name: area.name,
    slug: area.slug,
    inShort: area.inShort,
  }));
}

export const citiesData: CityData[] = cityMeta.map((city) => ({
  ...city,
  areas: areasFromRegistry(city.slug),
}));

export const getCityBySlug = (slug: string) =>
  citiesData.find((city) => city.slug === slug);

export const getAllCitySlugs = () => citiesData.map((city) => city.slug);
