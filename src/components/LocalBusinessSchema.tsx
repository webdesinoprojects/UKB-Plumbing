export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': 'https://ukbplumbing.co.uk/#business',
    name: 'UKB Plumbing',
    description: 'Plumbing and heating services in Southampton and surrounding areas.',
    url: 'https://ukbplumbing.co.uk',
    telephone: '+44 7359 605766',
    email: 'info@ukbplumbing.co.uk',
    image: 'https://ukbplumbing.co.uk/og-image.png',
    sameAs: [
      'https://www.facebook.com/ukbplumbing',
      'https://www.instagram.com/ukb_plumbing/',
      'https://www.tiktok.com/@ukb.plumbing.ltd',
      'https://www.linkedin.com/in/ukb-plumbing-71224a360',
    ],
  }
 
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
