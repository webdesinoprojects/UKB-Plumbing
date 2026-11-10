import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Reviews | UKB Plumbing',
  description: 'Read customer feedback about UKB Plumbing services in Southampton and surrounding areas, or follow the link to leave your own Google review.',
  alternates: { canonical: 'https://ukbplumbing.co.uk/testimonials' },
};

export default function TestimonialsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
