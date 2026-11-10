import type { Metadata } from 'next'
import BlogsContent from '@/components/BlogsContent'
import { pageTitle } from '@/utils/metadataHelpers'

export const metadata: Metadata = {
  title: pageTitle('Plumbing Blogs & Expert Tips | UKB Plumbing'),
  description: 'Read UKB Plumbing guides about boiler care, leak prevention, blocked drains, hard water and preparing for common plumbing problems at home.',
  alternates: { canonical: 'https://ukbplumbing.co.uk/blogs' },
  openGraph: {
    title: 'Plumbing Blogs & Expert Tips | UKB Plumbing',
    description: 'Practical UKB Plumbing guides about boiler care, leaks, blocked drains, hard water and common plumbing problems.',
    url: 'https://ukbplumbing.co.uk/blogs',
    type: 'website',
    images: ['/og-image.png'],
  },
}

export default function Blogs() {
  return <BlogsContent />
}
