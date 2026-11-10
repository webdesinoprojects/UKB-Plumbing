import type { Metadata } from 'next';
import CityAreasPage from '@/components/CityAreasPage';
import { getCityBySlug } from '@/data/citiesData';
import { getCityAreasMetadata } from '@/utils/metadataHelpers';

export const metadata: Metadata = getCityAreasMetadata('southampton');

export default function AreasWeCoverSouthamptonPage() {
  const southampton = getCityBySlug('southampton')!;
  return <CityAreasPage city={southampton} />;
}
