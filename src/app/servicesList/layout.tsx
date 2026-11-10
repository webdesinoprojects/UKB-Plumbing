import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "https://ukbplumbing.co.uk/services" },
};

export default function ServicesListLayout({ children }: { children: ReactNode }) {
  return children;
}
