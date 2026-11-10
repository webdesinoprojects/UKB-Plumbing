import type { Metadata } from 'next'
import PortfolioContent from '@/components/PortfolioContent'
import { pageTitle } from '@/utils/metadataHelpers'

export const metadata: Metadata = {
  title: pageTitle('Plumbing & Heating Project Portfolio | UKB Plumbing'),
  description: 'View examples of UKB Plumbing work, including boiler installations, heating systems, bathrooms and plumbing repairs in Southampton-area properties.',
  alternates: { canonical: 'https://ukbplumbing.co.uk/portfolio' },
  openGraph: {
    title: 'Our Projects Portfolio | UKB Plumbing',
    description: 'Examples of UKB Plumbing boiler, heating, bathroom and repair work in Southampton-area properties.',
    url: 'https://ukbplumbing.co.uk/portfolio',
    type: 'website',
    images: ['/og-image.png'],
  },
}

export default function PortfolioPage() {
  return <PortfolioContent />
}
