type ServiceStructuredDataProps = {
  name: string;
  description: string;
  path: `/services/${string}`;
};

export function ServiceStructuredData({
  name,
  description,
  path,
}: ServiceStructuredDataProps) {
  const url = `https://ukbplumbing.co.uk${path}`;
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@id': 'https://ukbplumbing.co.uk/#business',
    },
  };
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ukbplumbing.co.uk',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://ukbplumbing.co.uk/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}
