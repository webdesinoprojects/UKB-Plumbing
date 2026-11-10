import Image from "next/image";
import { businessFacts } from "@/config/businessFacts";

export default function ReviewLinksBadge() {
  return (
    <div className="mb-8 inline-flex items-center gap-4 rounded-2xl border border-white/20 bg-white/15 px-5 py-3 backdrop-blur-sm">
      <a
        href={businessFacts.googleProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-white underline underline-offset-4"
      >
        Read reviews on Google
      </a>
      <span className="h-8 w-px bg-white/30" aria-hidden="true" />
      <a
        href={businessFacts.gasSafeProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View UKB Plumbing on the Gas Safe Register"
      >
        <Image
          src="/lovable-uploads/gassafe.png"
          alt="Gas Safe Register"
          width={120}
          height={40}
          className="h-10 w-auto object-contain"
        />
      </a>
    </div>
  );
}
