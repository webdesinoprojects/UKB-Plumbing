"use client";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0070B3] shadow-[0_-2px_10px_rgba(0,0,0,0.15)]" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <a href="tel:07359605766" data-tracking-location="mobile_call_bar" className="flex items-center justify-center gap-2 w-full py-3.5 text-white font-semibold text-base active:bg-[#005a91] transition-colors" aria-label="Call UKB Plumbing now">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" />
        </svg>
        <span>Call 24/7 Emergency Plumber</span>
      </a>
    </div>
  );
}
