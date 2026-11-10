import type { Metadata } from "next";
import ServiceContentPage from "@/components/ServiceContentPage";

export const metadata: Metadata = {
  title: "Boiler Repair Southampton | UKB Plumbing",
  description: "Boiler fault diagnosis and repair in Southampton for heating, hot-water, pressure and lockout problems. Call to discuss the fault and availability.",
  alternates: { canonical: "https://ukbplumbing.co.uk/services/boiler-repair" },
  openGraph: { title: "Boiler Repair Southampton", description: "Boiler fault diagnosis and repair for heating and hot-water problems in Southampton.", url: "https://ukbplumbing.co.uk/services/boiler-repair", siteName: "UKB Plumbing", type: "website", images: ["/og-image.png"] },
};

export default function BoilerRepairPage() {
  return <ServiceContentPage title="Boiler Repair in Southampton" description="Assessment and repair of boiler lockouts, pressure problems, unusual noises, heating faults and loss of hot water." path="/services/boiler-repair" sections={[
    { title: "Boiler faults we assess", paragraphs: ["A fault code is a useful starting point, but it does not confirm which component has failed. Note the code, boiler make and model, pressure reading and whether the problem affects heating, hot water or both.", "Gas boiler cases and combustion components must only be opened by an appropriately Gas Safe registered engineer. If you smell gas, suspect carbon monoxide or an alarm sounds, stop using the appliance and follow current emergency guidance."], bullets: ["Boiler lockouts and fault codes", "Loss of heating or hot water", "Pressure that repeatedly drops or rises", "Leaks, noises and control faults"] },
    { title: "Diagnosis before repair", paragraphs: ["The engineer checks the reported symptoms and relevant boiler, control and system components. A diagnosis may require testing rather than simply replacing the part associated with an online fault-code description.", "The proposed repair, available parts and price are explained before work begins. If a repair cannot be completed at the first visit, the engineer should explain how the appliance has been left and what the next step involves."] },
    { title: "Repair or replacement", paragraphs: ["A breakdown does not automatically mean the boiler must be replaced. Age, condition, parts availability, repair cost and the wider heating system all influence the decision.", "If replacement is worth considering, request a separate survey and written quotation so boiler size, hot-water demand, controls, system preparation and warranty terms can be assessed properly."] },
  ]} faqs={[
    { question: "What details should I provide?", answer: "Share the boiler make and model, fault code, pressure reading, symptoms and whether heating, hot water or both are affected." },
    { question: "Are gas boiler repairs carried out by Gas Safe engineers?", answer: "Gas work is assigned to an appropriately Gas Safe registered engineer. Ask to see the attending engineer’s ID card and relevant work categories." },
    { question: "Is a fault code a complete diagnosis?", answer: "No. A code narrows the investigation but testing may be needed to identify the failed component or system cause." },
    { question: "What warranty applies to a repair?", answer: "Any applicable workmanship or manufacturer parts warranty is confirmed for the specific repair before the work is agreed." },
  ]} related={[{ label: "Boiler installation", href: "/services/boiler-installation" }, { label: "Central heating and radiators", href: "/services/central-heating-radiators" }, { label: "Emergency plumber", href: "/services/emergency-plumber" }]} />;
}
