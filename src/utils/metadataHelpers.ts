import type { Metadata } from 'next';
import { getAreaBySlug } from '@/data/allAreasData';
import { getCityBySlug } from '@/data/citiesData';
import { servicesList } from '@/data/servicesData';
import { getAreaServicePageState } from '@/data/pageRegistry';

const SITE_NAME = 'UKB Plumbing';
const BASE_URL = 'https://ukbplumbing.co.uk';
const DEFAULT_OG_IMAGE = '/og-image.png';

/** Prevents the root layout title template from duplicating the brand suffix. */
export function pageTitle(title: string): Metadata['title'] {
  return { absolute: title };
}

function formatPostcodes(postcodes?: string[]): string {
  if (!postcodes?.length) return '';
  return postcodes.join(', ');
}

export function getCityAreasMetadata(citySlug: string): Metadata {
  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      title: pageTitle(`${SITE_NAME} | Areas We Cover`),
      description: `Plumbing and heating coverage information for Southampton and the Hampshire areas currently listed by ${SITE_NAME}.`,
    };
  }

  const canonical =
    citySlug === 'southampton'
      ? `${BASE_URL}/areas-we-cover`
      : `${BASE_URL}/areas-we-cover/${citySlug}`;

  // Custom metadata for specific cities
  if (citySlug === 'new-forest') {
    const title = 'Plumbers in the New Forest | UKB Plumbing';
    const description = 'Plumbing and heating support across the New Forest. Contact UKB Plumbing to confirm availability, an arrival estimate and charges.';
    return {
      title: pageTitle(title),
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: 'website',
        images: [DEFAULT_OG_IMAGE],
      },
    };
  }

  if (citySlug === 'winchester') {
    const title = 'Plumbers in Winchester | UKB Plumbing';
    const description = 'Plumbing and heating support across Winchester. Contact UKB Plumbing to confirm availability, an arrival estimate and charges.';
    return {
      title: pageTitle(title),
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: 'website',
        images: [DEFAULT_OG_IMAGE],
      },
    };
  }

  if (citySlug === 'salisbury') {
    const title = 'Plumbers in Salisbury | UKB Plumbing';
    const description = 'Plumbing and heating support across Salisbury. Contact UKB Plumbing to confirm availability, an arrival estimate and charges.';
    return {
      title: pageTitle(title),
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: 'website',
        images: [DEFAULT_OG_IMAGE],
      },
    };
  }

  if (citySlug === 'eastleigh') {
    const title = 'Plumbers in Eastleigh | UKB Plumbing';
    const description = 'Plumbing and heating support across Eastleigh. Contact UKB Plumbing to confirm availability, an arrival estimate and charges.';
    return {
      title: pageTitle(title),
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: 'website',
        images: [DEFAULT_OG_IMAGE],
      },
    };
  }

  return {
    title: pageTitle(
      `${SITE_NAME} | Plumbers & Heating Engineers in ${city.name}`
    ),
    description: `${city.heroDescription} Contact UKB Plumbing to confirm engineer availability, an arrival estimate and any call-out or diagnostic charge.`,
    alternates: { canonical },
    openGraph: {
      title: `Plumbers in ${city.name} | ${SITE_NAME}`,
      description: city.heroDescription,
      url: canonical,
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function getAreaDetailMetadata(
  citySlug: string,
  areaSlug: string,
  areaName: string,
  _areaDescription: string,
  postcodes?: string[]
): Metadata {
  const city = getCityBySlug(citySlug);
  const cityName = city?.name ?? citySlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const postcodeDisplay = formatPostcodes(postcodes);
  const canonical = `${BASE_URL}/areas-we-cover/${citySlug}/${areaSlug}`;
  const locationLabel = postcodeDisplay
    ? `${areaName}, ${cityName} (${postcodeDisplay})`
    : `${areaName}, ${cityName}`;

  return {
    title: pageTitle(`Plumber in ${areaName}, ${cityName} | ${SITE_NAME}`),
    description: `${SITE_NAME} provides plumbing and heating support in ${locationLabel}. Contact us to confirm availability, an arrival estimate and charges.`,
    alternates: { canonical },
    openGraph: {
      title: `Plumber in ${areaName}, ${cityName} | ${SITE_NAME}`,
      description: `Plumbing and heating support in ${locationLabel}. Contact ${SITE_NAME} to confirm availability and charges.`,
      url: canonical,
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

type AreaServiceMetaConfig = {
  slug: string;
  title: (areaName: string, postcodeDisplay: string) => string;
  description: (areaName: string, postcodeDisplay: string, cityName: string) => string;
  ogTitle?: (areaName: string) => string;
};

export const areaServiceMeta: Record<string, AreaServiceMetaConfig> = {
  '247-emergency-plumber': {
    slug: '247-emergency-plumber',
    title: (area, postcode) =>
      `24/7 Emergency Plumber in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Need an emergency plumber in ${area}, ${city} (${postcode})? Contact ${SITE_NAME} to confirm availability, an estimated arrival time and charges.`,
    ogTitle: (area) => `24/7 Emergency Plumber in ${area} | ${SITE_NAME}`,
  },
  'water-leak-repairs-and-detection': {
    slug: 'water-leak-repairs-and-detection',
    title: (area, postcode) =>
      `Water Leak Repairs & Detection in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Water leak assessment and repairs in ${area}, ${city} (${postcode}). Contact us to discuss the fault, suitable detection options, availability and charges.`,
    ogTitle: (area) => `Water Leak Repairs & Detection in ${area} | ${SITE_NAME}`,
  },
  'gas-safe-inspection-and-repairs': {
    slug: 'gas-safe-inspection-and-repairs',
    title: (area, postcode) =>
      `Gas Safe Inspection & Repairs in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Gas safety inspections and repairs in ${area}, ${city} (${postcode}). Contact us to confirm an appropriately Gas Safe registered engineer and the charges.`,
    ogTitle: (area) => `Gas Safe Inspection & Repairs in ${area} | ${SITE_NAME}`,
  },
  'cp12-landlord-safety-certificates': {
    slug: 'cp12-landlord-safety-certificates',
    title: (area, postcode) =>
      `CP12 Landlord Gas Safety Certificates in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Landlord gas safety checks in ${area}, ${city} (${postcode}). Contact us to confirm a Gas Safe registered engineer, appointment availability and charges.`,
    ogTitle: (area) => `CP12 Landlord Gas Safety Certificates in ${area} | ${SITE_NAME}`,
  },
  'boiler-installation-and-upgrades': {
    slug: 'boiler-installation-and-upgrades',
    title: (area, postcode) =>
      `Boiler Installation & Upgrades in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Boiler replacement and upgrade options in ${area}, ${city} (${postcode}). Contact us to discuss suitability, installation requirements, warranties and pricing.`,
    ogTitle: (area) => `Boiler Installation & Upgrades in ${area} | ${SITE_NAME}`,
  },
  'boiler-repair-and-breakdown': {
    slug: 'boiler-repair-and-breakdown',
    title: (area, postcode) =>
      `Boiler Repair & Breakdown in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Boiler repair and breakdown support in ${area}, ${city} (${postcode}). Contact us to confirm engineer availability, arrival estimate, charges and applicable warranty.`,
    ogTitle: (area) => `Boiler Repair & Breakdown in ${area} | ${SITE_NAME}`,
  },
  'radiator-and-heating-repairs': {
    slug: 'radiator-and-heating-repairs',
    title: (area, postcode) =>
      `Radiator & Heating Repairs in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Radiator and central heating repair support in ${area}, ${city} (${postcode}). Contact us to discuss the fault, availability and likely charges.`,
    ogTitle: (area) => `Radiator & Heating Repairs in ${area} | ${SITE_NAME}`,
  },
  'blocked-drains-and-jetting': {
    slug: 'blocked-drains-and-jetting',
    title: (area, postcode) =>
      `Blocked Drains & Jetting in ${area} (${postcode}) | ${SITE_NAME}`,
    description: (area, postcode, city) =>
      `Blocked drain clearing and jetting support in ${area}, ${city} (${postcode}). Contact us to confirm availability, suitable equipment and likely charges.`,
    ogTitle: (area) => `Blocked Drains & Jetting in ${area} | ${SITE_NAME}`,
  },
};

export function getAreaServiceMetadata(
  areaSlug: string,
  serviceSlug: string
): Metadata {
  const config = areaServiceMeta[serviceSlug];
  const { areaName, postcodeDisplay, cityName } = getAreaBySlug(areaSlug || 'shirley');

  if (!config) {
    return {
      title: pageTitle(`${SITE_NAME} | Plumbing Services in ${areaName}`),
      description: `Professional plumbing and heating services in ${areaName}, ${cityName} by ${SITE_NAME}.`,
    };
  }

  const canonical = `${BASE_URL}/services/${areaSlug}/${serviceSlug}`;
  const title = config.title(areaName, postcodeDisplay);
  const description = config.description(areaName, postcodeDisplay, cityName);
  const ogTitle = config.ogTitle?.(areaName) ?? title;

  return {
    title: pageTitle(title),
    description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      type: 'article',
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

const serviceMetaDescriptions: Record<string, string> = {
  'emergency-plumbing-repairs':
    'Emergency plumbing repair support in Southampton and the currently listed surrounding areas. Contact us to confirm availability and charges.',
  'blocked-drain-cleaning':
    'Blocked drain cleaning in Southampton and Hampshire. Contact us to discuss the fault, suitable clearance method, availability and charges.',
  'water-leak-repairs':
    'Water leak assessment and repair in Southampton and surrounding areas. Contact us to discuss the fault and appropriate detection options.',
  'radiator-repairs':
    'Radiator and central heating repair support across Southampton and Hampshire. Contact us to discuss the fault, availability and charges.',
  'boiler-installation-repair':
    'Boiler installation, repair and servicing in Southampton. Contact us to discuss the boiler, appropriately registered engineer and applicable warranty.',
  'pipe-repairs-replacement':
    'Pipe repair and replacement in Southampton and Hampshire. Contact us to discuss the damage, repair options, pricing and applicable warranty.',
  'bathroom-kitchen-plumbing':
    'Bathroom and kitchen plumbing installation and repairs in Southampton. Sinks, toilets, showers, appliances and pipework fitted by certified local plumbers.',
  'emergency-call-out':
    'Emergency plumbing call-out support in Southampton and the currently listed surrounding areas. Contact us to confirm availability, an arrival estimate and charges.',
};

export function getServiceMetadata(serviceName: string): Metadata {
  const service = servicesList.find((s) => s.slug === serviceName);

  if (!service) {
    return {
      title: pageTitle(`Service Not Found | ${SITE_NAME}`),
      description: `The requested plumbing service could not be found on ${SITE_NAME}. Browse our full range of plumbing and heating services across Hampshire.`,
    };
  }

  const canonical = `${BASE_URL}/services/${serviceName}`;
  const description =
    serviceMetaDescriptions[serviceName] ??
    `${service.description} Available in Southampton and the currently listed surrounding areas. Gas work is assigned to an appropriately registered engineer. Call 07359 605766.`;

  return {
    title: pageTitle(`${service.title} | ${SITE_NAME}`),
    description,
    alternates: { canonical },
    openGraph: {
      title: `${service.title} | ${SITE_NAME}`,
      description,
      url: canonical,
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function getNotFoundMetadata(): Metadata {
  return {
    title: pageTitle(`Page Not Found | ${SITE_NAME}`),
    description: `The page you requested could not be found. Visit ${SITE_NAME} for emergency plumbing, boiler repairs, and heating services across Southampton and Hampshire.`,
    robots: { index: false, follow: true },
  };
}

export function shouldNoindexTown(areaSlug: string, serviceSlug?: string): boolean {
  return getAreaServicePageState(areaSlug, serviceSlug).indexable === false;
}

export function applyNoindexIfNecessary(
  metadata: Metadata,
  areaSlug: string,
  serviceSlug?: string
): Metadata {
  if (shouldNoindexTown(areaSlug, serviceSlug)) {
    return {
      ...metadata,
      robots: { index: false, follow: true },
    };
  }
  return metadata;
}

// Legacy content helper retained until Phase 4 rewrites the approved priority pages.
const BATCH_1_TOWNS = [
  'abbots-barton', 'badger-farm', 'bemerton-heath', 'britford', 'castle-road',
  'churchfields', 'colden-common', 'east-harnham', 'ford', 'friary',
  'fulflood', 'hursley', 'hyde', 'kings-worthy', 'kingsgate', 'littleton',
  'milford', 'netherhampton', 'old-sarum', 'owslebury', 'portswood',
  'quidhampton', 'salisbury-city-centre', 'shawford', 'st-cross',
  'st-pauls', 'twyford', 'weeke', 'wilton', 'winnall'
];

export function isBatch1Town(areaSlug: string): boolean {
  return BATCH_1_TOWNS.includes(areaSlug);
}

// Unique content data for Batch 1 towns
export interface UniqueContent {
  landmark: string;
  landmarkDescription: string;
  testimonial: string;
  testimonialSource: string;
  responseTime: string;
  photoAlt: string;
}

const BATCH_1_UNIQUE_CONTENT: Record<string, UniqueContent> = {
  'abbots-barton': {
    landmark: 'Abbots Barton Park and Winchester Cathedral',
    landmarkDescription: 'Abbots Barton is a quiet residential area just north of Winchester city centre, with easy access to historic landmarks like Winchester Cathedral and the River Itchen walking paths. Our local team knows the area well, from the charming St Cross Hospital to the nearby Winnall Moors nature reserve.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Abbots Barton residents',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Abbots Barton residential street showing typical Victorian and Edwardian housing with modern plumbing systems'
  },
  'badger-farm': {
    landmark: 'Badger Farm Community Centre and local green spaces',
    landmarkDescription: 'Badger Farm is a modern residential development in Winchester with excellent community facilities. Our engineers are familiar with the estate\'s plumbing infrastructure and provide rapid service across the SO21 postcode area.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Badger Farm',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Badger Farm community area with modern housing development'
  },
  'bemerton-heath': {
    landmark: 'Bemerton Heath Community Centre and local amenities',
    landmarkDescription: 'Bemerton Heath is a well-established residential area in Salisbury with strong community ties. Our local team serves this area regularly and understands the typical plumbing challenges faced by homes in the SP5 postcode.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Bemerton Heath',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Bemerton Heath residential area showing local community facilities'
  },
  'britford': {
    landmark: 'Britford Village and River Avon',
    landmarkDescription: 'Britford is a picturesque village near Salisbury, situated along the River Avon. The area features a mix of historic and modern properties, with many homes dating back to the 19th century requiring careful plumbing maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: 'Arrival estimate confirmed when you call',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Britford village showing traditional Hampshire countryside and residential properties'
  },
  'castle-road': {
    landmark: 'Salisbury Castle grounds and medieval heritage',
    landmarkDescription: 'Castle Road in Salisbury is steeped in history, located near the site of the former Salisbury Castle. The area features a mix of period properties and modern homes, with plumbing systems that vary significantly by age.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Castle Road area',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Castle Road Salisbury showing historic streets and residential properties'
  },
  'churchfields': {
    landmark: 'Churchfields recreation ground and local churches',
    landmarkDescription: 'Churchfields is a residential area in Salisbury with strong community connections. The area features a mix of housing types, from modern developments to traditional family homes, each with unique plumbing requirements.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Churchfields',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Churchfields Salisbury showing residential streets and local amenities'
  },
  'colden-common': {
    landmark: 'Colden Common village and wildlife reserves',
    landmarkDescription: 'Colden Common is a village in Hampshire surrounded by beautiful countryside, including the nearby Itchen Valley country park. Our team provides regular service to rural properties in this SO21 postcode area.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: 'Arrival estimate confirmed when you call',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Colden Common village showing rural Hampshire countryside and residential properties'
  },
  'east-harnham': {
    landmark: 'Harnham Recreation Ground and River Avon access',
    landmarkDescription: 'East Harnham is a popular residential area in Salisbury, located near the River Avon with excellent walking paths. The area features a mix of Victorian and Edwardian homes, many of which require careful plumbing maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for East Harnham',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] East Harnham Salisbury showing residential streets near River Avon'
  },
  'ford': {
    landmark: 'Ford village and agricultural heritage',
    landmarkDescription: 'Ford is a small village near Salisbury with a strong agricultural heritage. The area features traditional farmhouses and rural properties, many with unique plumbing systems that require specialist knowledge.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: 'Arrival estimate confirmed when you call',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Ford village showing rural Hampshire countryside and traditional farm buildings'
  },
  'friary': {
    landmark: 'The Friary and Salisbury Cathedral proximity',
    landmarkDescription: 'The Friary area in Salisbury is named after the medieval friary that once stood nearby. This historic location features period properties with complex plumbing systems that require careful maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for The Friary area',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] The Friary Salisbury showing historic streets and period properties'
  },
  'fulflood': {
    landmark: 'Fulflood area and Winchester city centre access',
    landmarkDescription: 'Fulflood is a residential area in Winchester with excellent access to the city centre. The area features a mix of housing types, from modern apartments to traditional family homes, each with specific plumbing needs.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Fulflood',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Fulflood Winchester showing residential streets and city views'
  },
  'hursley': {
    landmark: 'Hursley Park and IBM campus',
    landmarkDescription: 'Hursley is a village in Hampshire home to the historic Hursley Park and the IBM UK headquarters. The area features a mix of village properties and modern developments, with diverse plumbing requirements.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Hursley',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Hursley village showing rural Hampshire countryside and IBM campus proximity'
  },
  'hyde': {
    landmark: 'Hyde area and Winchester heritage sites',
    landmarkDescription: 'Hyde is a residential area in Winchester with close proximity to the city\'s historic sites. The area features traditional housing with older plumbing systems that require regular maintenance and occasional upgrades.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Hyde',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Hyde Winchester showing residential streets and historic architecture'
  },
  'kings-worthy': {
    landmark: 'Kings Worthy village and River Itchen',
    landmarkDescription: 'Kings Worthy is a village in Hampshire situated along the River Itchen. The area features a mix of village properties and modern housing, with many homes benefiting from scenic river views and traditional plumbing systems.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Kings Worthy',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Kings Worthy village showing River Itchen and residential properties'
  },
  'kingsgate': {
    landmark: 'Kingsgate area and Winchester city amenities',
    landmarkDescription: 'Kingsgate is a residential area in Winchester with excellent access to city amenities. The area features modern housing developments with contemporary plumbing systems that require regular maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Kingsgate',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Kingsgate Winchester showing modern residential development'
  },
  'littleton': {
    landmark: 'Littleton village and countryside',
    landmarkDescription: 'Littleton is a village in Hampshire surrounded by beautiful countryside. The area features traditional village properties and rural homes, many with unique plumbing requirements that our local team understands well.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: 'Arrival estimate confirmed when you call',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Littleton village showing rural Hampshire countryside and traditional properties'
  },
  'milford': {
    landmark: 'Milford-on-Sea and Hampshire coast',
    landmarkDescription: 'Milford is located near the Hampshire coast, with easy access to Milford-on-Sea. The area features coastal properties that require specific plumbing considerations due to the maritime environment.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Milford',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Milford area showing Hampshire countryside and coastal proximity'
  },
  'netherhampton': {
    landmark: 'Netherhampton village and River Avon',
    landmarkDescription: 'Netherhampton is a picturesque village near Salisbury, situated along the River Avon. The area features traditional village properties with older plumbing systems that require careful maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: 'Arrival estimate confirmed when you call',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Netherhampton village showing River Avon and traditional village properties'
  },
  'old-sarum': {
    landmark: 'Old Sarum hillfort and historic site',
    landmarkDescription: 'Old Sarum is an ancient hillfort and historic site near Salisbury. The area features properties with views of this significant archaeological site, with many homes having unique plumbing requirements due to the location.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Old Sarum',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Old Sarum showing historic hillfort and surrounding residential properties'
  },
  'owslebury': {
    landmark: 'Owslebury village and countryside',
    landmarkDescription: 'Owslebury is a village in Hampshire surrounded by beautiful countryside. The area features traditional village properties and rural homes, with plumbing systems that reflect the area\'s agricultural heritage.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: 'Arrival estimate confirmed when you call',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Owslebury village showing rural Hampshire countryside and traditional properties'
  },
  'portswood': {
    landmark: 'Portswood Road and Southampton amenities',
    landmarkDescription: 'Portswood is a residential area in Southampton with excellent access to the city centre and major roads. The area features a mix of Victorian terraces and modern housing, with diverse plumbing requirements.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Portswood',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Portswood Southampton showing residential streets and local amenities'
  },
  'quidhampton': {
    landmark: 'Quidhampton village and River Avon',
    landmarkDescription: 'Quidhampton is a village near Salisbury, situated along the River Avon. The area features traditional village properties with characterful homes that require careful plumbing maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: 'Arrival estimate confirmed when you call',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Quidhampton village showing River Avon and traditional village properties'
  },
  'salisbury-city-centre': {
    landmark: 'Salisbury Cathedral and Market Square',
    landmarkDescription: 'Salisbury city centre is home to the magnificent Salisbury Cathedral and historic Market Square. The area features a mix of period properties and commercial buildings, with complex plumbing systems that require specialist knowledge.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '15-30 minute response time for Salisbury city centre',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Salisbury city centre showing Cathedral and historic streets'
  },
  'shawford': {
    landmark: 'Shawford village and River Itchen',
    landmarkDescription: 'Shawford is a village in Hampshire situated along the River Itchen. The area features riverside properties with scenic views, many of which have unique plumbing requirements due to their riverside location.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Shawford',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Shawford village showing River Itchen and riverside properties'
  },
  'st-cross': {
    landmark: 'St Cross Hospital and Winchester heritage',
    landmarkDescription: 'St Cross is a historic area in Winchester, home to the famous St Cross Hospital. The area features period properties with historic significance, requiring careful plumbing maintenance to preserve their character.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for St Cross',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] St Cross Winchester showing historic hospital and period properties'
  },
  'st-pauls': {
    landmark: 'St Pauls area and Salisbury city centre',
    landmarkDescription: 'St Pauls is a residential area in Salisbury with close proximity to the city centre. The area features a mix of housing types, from Victorian terraces to modern apartments, each with specific plumbing needs.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for St Pauls',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] St Pauls Salisbury showing residential streets and city proximity'
  },
  'twyford': {
    landmark: 'Twyford village and River Itchen',
    landmarkDescription: 'Twyford is a village in Hampshire situated along the River Itchen. The area features traditional village properties with characterful homes, many of which have older plumbing systems requiring careful maintenance.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Twyford',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Twyford village showing River Itchen and traditional village properties'
  },
  'weeke': {
    landmark: 'Weeke area and Winchester city access',
    landmarkDescription: 'Weeke is a residential area in Winchester with excellent access to the city centre. The area features a mix of housing types, from 1930s semis to modern developments, each with specific plumbing requirements.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Weeke',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Weeke Winchester showing residential streets and housing diversity'
  },
  'wilton': {
    landmark: 'Wilton House and historic market town',
    landmarkDescription: 'Wilton is a historic market town near Salisbury, home to the magnificent Wilton House. The area features a mix of period properties and modern homes, with plumbing systems that reflect the town\'s rich history.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '25-45 minute response time for Wilton',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Wilton town showing historic market square and Wilton House proximity'
  },
  'winnall': {
    landmark: 'Winnall industrial area and residential zones',
    landmarkDescription: 'Winnall is an area in Winchester featuring both industrial and residential zones. The area has diverse plumbing requirements, from commercial properties to family homes, all of which our local team is experienced in servicing.',
    testimonial: '[PLACEHOLDER - NEEDS REAL TESTIMONIAL]',
    testimonialSource: '[PLACEHOLDER - NEEDS CUSTOMER NAME]',
    responseTime: '20-40 minute response time for Winnall',
    photoAlt: '[PLACEHOLDER - NEEDS REAL PHOTO] Winnall Winchester showing industrial and residential mix'
  }
};

export function getUniqueContentForTown(areaSlug: string): UniqueContent | null {
  return BATCH_1_UNIQUE_CONTENT[areaSlug] || null;
}
