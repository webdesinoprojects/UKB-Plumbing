export type AreaServicePageState =
  | 'priority'
  | 'draft'
  | 'noindex'
  | 'redirect'
  | 'retired';

export type AreaServicePageRecord = {
  areaSlug: string;
  serviceSlug: string;
  state: AreaServicePageState;
  indexable: boolean;
};

export const AREA_SERVICE_SLUGS = [
  '247-emergency-plumber',
  'blocked-drains-and-jetting',
  'boiler-installation-and-upgrades',
  'boiler-repair-and-breakdown',
  'cp12-landlord-safety-certificates',
  'gas-safe-inspection-and-repairs',
  'radiator-and-heating-repairs',
  'water-leak-repairs-and-detection',
] as const;

/**
 * First content batch selected from the audit's highest-intent services and
 * Southampton/Eastleigh-area locations. These remain noindex until each page
 * passes the audit's local-page checklist in Phase 4.
 */
export const PRIORITY_AREA_SERVICE_PAGES = [
  ['shirley', '247-emergency-plumber'],
  ['shirley', 'boiler-repair-and-breakdown'],
  ['shirley', 'blocked-drains-and-jetting'],
  ['bitterne', '247-emergency-plumber'],
  ['bitterne', 'boiler-repair-and-breakdown'],
  ['portswood', '247-emergency-plumber'],
  ['portswood', 'boiler-repair-and-breakdown'],
  ['hedge-end', '247-emergency-plumber'],
  ['hedge-end', 'boiler-repair-and-breakdown'],
  ['chandlers-ford', '247-emergency-plumber'],
  ['chandlers-ford', 'boiler-repair-and-breakdown'],
  ['eastleigh-central', '247-emergency-plumber'],
  ['eastleigh-central', 'boiler-repair-and-breakdown'],
  ['romsey', '247-emergency-plumber'],
  ['totton', '247-emergency-plumber'],
] as const;

const priorityKeys = new Set(
  PRIORITY_AREA_SERVICE_PAGES.map(([areaSlug, serviceSlug]) =>
    `${areaSlug}/${serviceSlug}`
  )
);

export function getAreaServicePageState(
  areaSlug: string,
  serviceSlug?: string
): AreaServicePageRecord {
  const normalizedService = serviceSlug ?? 'unspecified';
  const isPriority = priorityKeys.has(`${areaSlug}/${normalizedService}`);

  return {
    areaSlug,
    serviceSlug: normalizedService,
    state: isPriority ? 'priority' : 'noindex',
    // Priority means "next to rewrite", not "ready for Google".
    indexable: false,
  };
}
