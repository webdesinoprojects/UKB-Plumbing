import { ExternalLink } from "lucide-react";

interface AreaReviewsProps {
  areaSlug: string;
}

const GOOGLE_PROFILE_URL = "https://share.google/AxYHVoXlWDlionhUp";

export default function AreaReviews({ areaSlug }: AreaReviewsProps) {
  return (
    <section
      aria-labelledby={`area-reviews-${areaSlug}`}
      className="mb-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-8"
    >
      <h3 id={`area-reviews-${areaSlug}`} className="mb-3 text-xl font-bold text-ukb-darkblue">
        Customer reviews
      </h3>
      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-slate-700">
        Read current customer feedback on our Google Business Profile. Reviews are shown at their
        original source so you can check the reviewer, date and full wording directly.
      </p>
      <a
        href={GOOGLE_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-[#1D3B8A] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-900"
      >
        Read reviews on Google
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}
