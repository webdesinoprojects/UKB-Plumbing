import type { Metadata } from "next";
import BookingContent from "@/components/BookingContent";

export const metadata: Metadata = {
  title: "Quote Form Moved | UKB Plumbing",
  description: "UKB Plumbing now handles online enquiries through the Request a Quote form.",
  alternates: { canonical: "https://ukbplumbing.co.uk/inquiry-form" },
  robots: { index: false, follow: true },
};

export default function BookingPage() {
  return <BookingContent />;
}
