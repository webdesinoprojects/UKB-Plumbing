"use client";
import CityAreasPage from "@/components/CityAreasPage";
import { getCityBySlug } from "@/data/citiesData";

const AreasWeCoverContent = () => {
  const southampton = getCityBySlug("southampton")!;
  return <CityAreasPage city={southampton} />;
};

export default AreasWeCoverContent;