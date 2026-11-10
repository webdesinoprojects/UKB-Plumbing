import type { Metadata } from 'next';
import CityAreasPage from '@/components/CityAreasPage';
import { getCityBySlug } from '@/data/citiesData';
import { getCityAreasMetadata } from '@/utils/metadataHelpers';

export const metadata: Metadata = getCityAreasMetadata('eastleigh');

export default function EastleighAreasPage() {
  const city = getCityBySlug('eastleigh')!;
  return <CityAreasPage city={city} />;
}
