import { notFound } from "next/navigation";
import AreaDetailPage from "@/components/AreaDetailPage";
import Footer from "@/components/Footer";
import {
  getAllCityAreaParams,
  getAreaByCityAndSlug,
} from "@/data/cityAreasRegistry";
import { getCityBySlug } from "@/data/citiesData";
import { getAreaDetailMetadata } from "@/utils/metadataHelpers";

interface Props {
  params: Promise<{ citySlug: string; areaSlug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { citySlug, areaSlug } = await params;

  // Normalize parameters to match case-sensitive datasets if necessary
  const normalizedCity = citySlug.toLowerCase();
  const normalizedArea = areaSlug.toLowerCase();

  const area = getAreaByCityAndSlug(normalizedCity, normalizedArea);

  if (!area) {
    return {};
  }

  const postcodes = area.postcodes
    ? area.postcodes.map((pc) => typeof pc === 'string' ? pc : pc.name)
    : undefined;

  // Generate safe, canonical metadata from the registered city and area data.
  return getAreaDetailMetadata(normalizedCity, normalizedArea, area.name, area.inShort, postcodes);
}

export default async function CityAreaDetailPage({ params }: Props) {
  const { citySlug, areaSlug } = await params;

  const normalizedCity = citySlug.toLowerCase();
  const normalizedArea = areaSlug.toLowerCase();

  const city = getCityBySlug(normalizedCity);
  const area = getAreaByCityAndSlug(normalizedCity, normalizedArea);

  if (!city || !area) {
    notFound();
  }

  return (
    <>
      <AreaDetailPage area={area} city={city} />
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  try {
    const params = await getAllCityAreaParams();
    return Array.isArray(params) ? params : [];
  } catch (error) {
    console.error("Failed to generate static params for city areas:", error);
    return [];
  }
}
