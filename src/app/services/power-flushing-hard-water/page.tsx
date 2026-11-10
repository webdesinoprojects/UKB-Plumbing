import type { Metadata } from "next";
import ServiceContentPage from "@/components/ServiceContentPage";

export const metadata: Metadata = {
  title: "Power Flushing & Hard-Water Protection Southampton",
  description: "Heating-system cleaning and hard-water protection options in Southampton, recommended only after the system and symptoms are assessed.",
  alternates: { canonical: "https://ukbplumbing.co.uk/services/power-flushing-hard-water" },
  openGraph: { title: "Power Flushing & Hard-Water Protection Southampton", description: "Heating system cleaning and scale-protection options.", url: "https://ukbplumbing.co.uk/services/power-flushing-hard-water", siteName: "UKB Plumbing", type: "website", images: ["/og-image.png"] },
};

export default function PowerFlushingHardWaterPage() {
  return <ServiceContentPage title="Power Flushing & Hard-Water Protection in Southampton" description="Assessment-led options for heating sludge, poor circulation and limescale-related plumbing or hot-water problems." path="/services/power-flushing-hard-water" sections={[
    { title: "Start with the symptoms", paragraphs: ["Cold radiator areas, noisy circulation, dirty system water and repeated valve problems can suggest contamination, but they do not prove that a power flush is required. A failed valve, trapped air, poor balancing, a pump issue or another fault can create similar symptoms."], bullets: ["Cold spots on radiators", "Dark or contaminated system water", "Noisy heating circulation", "Repeated blockages or valve faults", "Slow warm-up", "Known scale-related hot-water restriction"] },
    { title: "Cleaning and protection options", paragraphs: ["After checking the system, the appropriate option may be local cleaning, balancing, chemical cleaning, a power flush, filter maintenance or replacement of a failed component. For potable-water scale, the suitable treatment depends on the appliance, water system and manufacturer instructions.", "We do not present a single hard-water figure as applying to every property. Water hardness varies by supply and should be checked using current supplier information or a suitable test when the exact value matters."] },
    { title: "What the quote should confirm", paragraphs: ["The written quote should identify the system being treated, the proposed process, exclusions, disposal or refill arrangements, chemicals or filters included, price and applicable warranty. Boiler or gas work is assigned to an appropriately Gas Safe registered engineer."] },
  ]} faqs={[
    { question: "Will a power flush fix every cold radiator?", answer: "No. The cause must be assessed first. Valves, balancing, trapped air, circulation components and pipe restrictions can also be responsible." },
    { question: "Is Southampton a hard-water area?", answer: "Hard water and limescale are common concerns locally, but the exact hardness depends on the water supply. Use current supplier data or testing for a property-specific figure." },
    { question: "Can a magnetic filter prevent all heating problems?", answer: "No. A suitable filter can help collect magnetic debris, but it does not replace correct installation, maintenance, water treatment or fault diagnosis." },
  ]} related={[{ label: "Central heating and radiators", href: "/services/central-heating-radiators" }, { label: "Boiler repair", href: "/services/boiler-repair" }, { label: "Boiler installation", href: "/services/boiler-installation" }]} />;
}
