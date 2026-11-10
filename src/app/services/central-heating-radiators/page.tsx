import type { Metadata } from "next";
import ServiceContentPage from "@/components/ServiceContentPage";

export const metadata: Metadata = {
  title: "Central Heating & Radiator Repairs Southampton | UKB Plumbing",
  description: "Central heating and radiator fault assessment in Southampton, including cold radiators, valves, circulation and system balancing.",
  alternates: { canonical: "https://ukbplumbing.co.uk/services/central-heating-radiators" },
  openGraph: { title: "Central Heating & Radiator Repairs Southampton", description: "Heating and radiator repair support in Southampton.", url: "https://ukbplumbing.co.uk/services/central-heating-radiators", siteName: "UKB Plumbing", type: "website", images: ["/og-image.png"] },
};

export default function CentralHeatingRadiatorsPage() {
  return <ServiceContentPage title="Central Heating & Radiator Repairs in Southampton" description="Assessment and repair options for cold spots, noisy radiators, leaking valves, poor circulation and central-heating faults." path="/services/central-heating-radiators" sections={[
    { title: "Heating problems we assess", paragraphs: ["A radiator that stays cold does not always need replacing. Trapped air, a closed or failed valve, sludge, poor balancing, low system pressure or a circulation fault can produce similar symptoms. We start by checking the symptoms and system before recommending work."], bullets: ["One or more cold radiators", "Cold areas at the top or bottom", "Leaking radiator valves", "Noisy pipework or radiators", "Uneven room temperatures", "Heating pressure or circulation faults"] },
    { title: "A repair based on the cause", paragraphs: ["The proposed work depends on what the checks show. It may involve bleeding or balancing, a valve or thermostat replacement, a local repair, system cleaning or investigation of the boiler and pump. Gas work is assigned to an appropriately Gas Safe registered engineer."], bullets: ["Fault assessment before replacement", "Work scope and charge agreed first", "Applicable warranty confirmed per job", "Advice on maintenance after repair"] },
    { title: "When to call", paragraphs: ["Contact us when a leak is active, heating has failed, pressure keeps falling or repeated bleeding does not solve the problem. If you smell gas or suspect carbon monoxide, leave the property where safe and follow the emergency guidance from the National Gas Emergency Service rather than attempting a repair."] },
  ]} faqs={[
    { question: "Why is the bottom of my radiator cold?", answer: "Sludge or restricted circulation is one possible cause, but the system should be assessed before deciding whether cleaning, balancing or another repair is appropriate." },
    { question: "Do all cold radiators need power flushing?", answer: "No. A closed valve, trapped air, balancing issue or another fault can cause cold radiators. We recommend system cleaning only when the assessment supports it." },
    { question: "Can you replace radiator valves?", answer: "Valve replacement may be suitable after the valve, radiator and system condition have been checked. The work and price are agreed first." },
  ]} related={[{ label: "Boiler repair", href: "/services/boiler-repair" }, { label: "Power flushing", href: "/services/power-flushing-hard-water" }, { label: "Water leak repair", href: "/services/water-leakage-and-repair" }]} />;
}
