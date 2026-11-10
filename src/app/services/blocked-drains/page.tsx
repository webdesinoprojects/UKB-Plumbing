import type { Metadata } from "next";
import ServiceContentPage from "@/components/ServiceContentPage";

export const metadata: Metadata = {
  title: "Blocked Drains Southampton | UKB Plumbing",
  description: "Blocked sink, toilet, shower, gully and drain assessment in Southampton. The clearing method is selected for the access and pipe condition.",
  alternates: { canonical: "https://ukbplumbing.co.uk/services/blocked-drains" },
  openGraph: { title: "Blocked Drains Southampton", description: "Blocked sink, toilet, shower and drain assessment in Southampton.", url: "https://ukbplumbing.co.uk/services/blocked-drains", siteName: "UKB Plumbing", type: "website", images: ["/og-image.png"] },
};

export default function BlockedDrainsPage() {
  return <ServiceContentPage title="Blocked Drains in Southampton" description="Assessment and clearance of blocked sinks, toilets, showers, gullies and accessible drainage, using a method suitable for the fault and pipe condition." path="/services/blocked-drains" sections={[
    { title: "Work out where the blockage is", paragraphs: ["A slow single fixture may have a local trap or branch restriction, while several affected fixtures can point to a blockage farther along the system. Tell us which outlets are affected, whether water backs up elsewhere and whether the problem changes during rain.", "Reduce water use if wastewater is overflowing. Sewage is a health hazard, so keep people and pets away from contaminated areas and do not lift a heavy or unsafe inspection cover."], bullets: ["Slow or blocked sinks and basins", "Blocked toilets and showers", "Full gullies or accessible chambers", "Recurring drainage restrictions"] },
    { title: "Choose the clearing method after assessment", paragraphs: ["The correct method depends on pipe material, diameter, access and the suspected cause. Mechanical tools or water jetting may be considered, but high pressure is not automatically suitable for every old or damaged pipe.", "Any call-out or diagnostic charge is explained when booking. If the blockage is cleared but a recurring or structural cause is suspected, further investigation or repair is discussed and quoted separately."] },
    { title: "Prevent avoidable blockages", paragraphs: ["Keep fats, oils, food waste, wipes and sanitary products out of household drains. Remove accessible leaves from ground-level gullies and use sink or shower strainers where appropriate.", "Do not mix drain chemicals. They can create fumes, burns and a hazard for anyone opening the system. Tell the engineer about any chemical already used before work starts."] },
  ]} faqs={[
    { question: "Is water jetting always required?", answer: "No. The method depends on the blockage, access and pipe condition. The engineer should assess suitability before using high-pressure equipment." },
    { question: "Why does the same drain keep blocking?", answer: "Recurring faults can be caused by deposits, displaced joints, roots, damaged pipework or poor falls. Further investigation may be recommended after flow is restored." },
    { question: "Can I use chemical drain cleaner first?", answer: "Avoid mixing or repeatedly using chemicals. Tell the engineer about any product already used because residue can be hazardous." },
    { question: "Who is responsible for a shared sewer?", answer: "Responsibility depends on where the fault lies. The relevant water company may be responsible for some shared or public sewers." },
  ]} related={[{ label: "Emergency plumber", href: "/services/emergency-plumber" }, { label: "Bathroom and kitchen plumbing", href: "/services/bathroom-kitchen-plumbing" }, { label: "Water leak repair", href: "/services/water-leakage-and-repair" }]} />;
}
