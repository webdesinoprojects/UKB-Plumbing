export type AreaFaq = {
  question: string;
  answer: string;
};

export type AreaRecentJob = {
  quote: string;
  authorLine: string;
};

export type AreaNearestTown = {
  name: string;
  distanceKm: number;
  hreflink?: string;
};

export type AreaTypicalProblem =
  | string
  | {
      title: string;
      detail?: string;
      description?: string;
    };

export type AreaServiceItem =
  | string
  | {
      title: string;
      description?: string;
    };

export type AreaWeCover = {
  slug: string;
  name: string;
  regionLabel: string;
  heroTitle: string;
  inShort: string;
  response: string;
  water: string;
  postcodes: (string | { name: string; hreflink?: string })[];
  whatItLooksLikeTitle: string;
  whatItLooksLike: string[];
  neighbourhoods: (string | { name: string; hreflink?: string })[];
  typicalProblems: AreaTypicalProblem[];
  ourServices?: AreaServiceItem[];
  services?: AreaServiceItem[];
  mapQuery: string;
  recentJobs: AreaRecentJob[];
  faqsTitle: string;
  faqs: AreaFaq[];
  popularServices: { label: string; href: string }[];
  nearestTownsTitle: string;
  nearestTowns: AreaNearestTown[];
  // Optional custom metadata (will fallback to centralized registry if not provided)
  metaTitle?: string;
  metaDescription?: string;
};

export const POPULAR_SERVICES = [
  { label: "Emergency plumbing", href: "/services/emergency-plumber" },
  { label: "Boiler repair", href: "/services/boiler-repair" },
  { label: "Blocked drains", href: "/services/blocked-drains" },
] as const;
