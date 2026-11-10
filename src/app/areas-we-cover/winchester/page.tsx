import type { Metadata } from 'next';
import CityAreasPage from '@/components/CityAreasPage';
import { getCityBySlug } from '@/data/citiesData';
import { getCityAreasMetadata } from '@/utils/metadataHelpers';

export const metadata: Metadata = getCityAreasMetadata('winchester');

export default function WinchesterAreasPage() {
  const city = getCityBySlug('winchester')!;
  return <CityAreasPage city={city} />;
}