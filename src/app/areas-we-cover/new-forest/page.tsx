import type { Metadata } from 'next';
import CityAreasPage from '@/components/CityAreasPage';
import { getCityBySlug } from '@/data/citiesData';
import { getCityAreasMetadata } from '@/utils/metadataHelpers';

export const metadata: Metadata = getCityAreasMetadata('new-forest');

export default function NewForestAreasPage() {
  const city = getCityBySlug('new-forest')!;
  return <CityAreasPage city={city} areasLabel="Featured areas in the New Forest" />;
}
