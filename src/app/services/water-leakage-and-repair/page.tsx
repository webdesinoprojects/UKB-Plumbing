import type { Metadata } from "next";
import ServiceContentPage from "@/components/ServiceContentPage";

export const metadata: Metadata = {
  title: "Water Leak Detection Southampton | UKB Plumbing",
  description: "Assessment and repair of visible or suspected water leaks in Southampton, with the detection method chosen for the symptoms and property.",
  alternates: { canonical: "https://ukbplumbing.co.uk/services/water-leakage-and-repair" },
  openGraph: { title: "Water Leak Detection and Repair Southampton", description: "Assessment and repair of visible or suspected water leaks in Southampton.", url: "https://ukbplumbing.co.uk/services/water-leakage-and-repair", siteName: "UKB Plumbing", type: "website", images: ["/og-image.png"] },
};

export default function WaterLeakageAndRepairPage() {
  return <ServiceContentPage title="Water Leak Detection & Repair in Southampton" description="Assessment of visible and suspected leaks, followed by an appropriate access, detection or repair plan for the property." path="/services/water-leakage-and-repair" sections={[
    { title: "Signs that need investigation", paragraphs: ["Visible dripping is only one sign of a leak. Unexplained meter movement, damp patches, staining, a loss of heating-system pressure or the sound of running water can also need investigation.", "First confirm which fixtures and appliances were in use when the symptom appeared. If water is escaping, isolate it only where this can be done safely and keep away from affected electrical fittings."], bullets: ["Leaking pipes, valves and joints", "Damp or staining with no clear source", "Heating-system pressure loss", "Leaks around toilets, showers or radiators"] },
    { title: "Use the least disruptive suitable method", paragraphs: ["The first checks use the symptoms, meter, accessible pipework and likely route of services. Further detection methods are selected only where suitable for the property and fault; no single device can locate every leak.", "Access may be required to confirm and repair the source. The engineer explains the next step, likely disruption and price before opening concealed areas or carrying out non-emergency work."] },
    { title: "Repair and follow-up", paragraphs: ["The repair depends on the failed material, access and condition of surrounding pipework. A local repair may be appropriate, while deteriorated pipework can require a wider replacement proposal.", "Drying and redecoration are separate from stopping the leak unless specifically included. Keep photographs and repair information if the issue may form part of an insurance claim, and ask the insurer what evidence it requires."] },
  ]} faqs={[
    { question: "Can every hidden leak be found without opening a wall or floor?", answer: "No. Non-invasive checks can narrow the search, but access may still be required to confirm the source and complete a repair." },
    { question: "Which leak-detection equipment will be used?", answer: "The method depends on the symptoms, pipework and property. Suitable options are discussed after initial checks rather than promised before diagnosis." },
    { question: "What should I do during an active leak?", answer: "If safe, isolate the relevant supply or main stop tap, contain water and keep away from electrical hazards. Call for urgent help if you cannot control it." },
    { question: "Is damage repair included?", answer: "The plumbing repair scope is agreed separately from drying, building work or decoration unless the quotation specifically includes those items." },
  ]} related={[{ label: "Emergency plumber", href: "/services/emergency-plumber" }, { label: "Pipe repair and replacement", href: "/services/pipe-repairs-replacement" }, { label: "Central heating and radiators", href: "/services/central-heating-radiators" }]} />;
}
