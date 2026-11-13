import type { Metadata } from 'next'
import HomePageContent from "@/components/HomePageContent"
import { pageTitle } from '@/utils/metadataHelpers'

export const metadata: Metadata = {
  title: pageTitle('Emergency Plumber & Boiler Repair Southampton | UKB Plumbing'),
  description: 'Emergency plumber and boiler repair in Southampton for boiler breakdowns, leaks, no heating, hot-water faults and blocked drains. Call UKB Plumbing on 07359 605766.',
  alternates: { canonical: 'https://ukbplumbing.co.uk' },
  openGraph: {
    title: 'Emergency Plumber & Boiler Repair Southampton | UKB Plumbing',
    description: 'Emergency plumber and boiler repair in Southampton for boiler breakdowns, leaks, no heating, hot-water faults and blocked drains. Call UKB Plumbing on 07359 605766.',
    url: 'https://ukbplumbing.co.uk',
    siteName: 'UKB Plumbing',
    type: 'website',
    images: ['/og-image.png'],
  },
}

export default function Page() {
  return <HomePageContent />
}
