import type { Metadata } from 'next';
import CityAreasPage from '@/components/CityAreasPage';
import { getCityBySlug } from '@/data/citiesData';
import { getCityAreasMetadata } from '@/utils/metadataHelpers';

export const metadata: Metadata = getCityAreasMetadata('salisbury');

export default function SalisburyAreasPage() {
  const city = getCityBySlug('salisbury')!;
  return <CityAreasPage city={city} />;
}