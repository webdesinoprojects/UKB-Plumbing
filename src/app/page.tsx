import type { Metadata } from 'next'
import HomePageContent from "@/components/HomePageContent"
import { pageTitle } from '@/utils/metadataHelpers'

export const metadata: Metadata = {
  title: pageTitle('Emergency Plumber Southampton | 24/7 Call-Out | UKB Plumbing'),
  description: 'Need a plumber in Southampton? UKB Plumbing handles plumbing emergencies, boiler work, leaks and blocked drains. Call 07359 605766 for assistance.',
  alternates: { canonical: 'https://ukbplumbing.co.uk' },
  openGraph: {
    title: 'Emergency Plumber Southampton | 24/7 Call-Out | UKB Plumbing',
    description: 'Plumbing emergencies, boiler work, leak repairs and blocked drains in Southampton. Call UKB Plumbing on 07359 605766.',
    url: 'https://ukbplumbing.co.uk',
    siteName: 'UKB Plumbing',
    type: 'website',
    images: ['/og-image.png'],
  },
}

export default function Page() {
  return <HomePageContent />
}
