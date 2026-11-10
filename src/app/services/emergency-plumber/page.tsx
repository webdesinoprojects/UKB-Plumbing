import type { Metadata } from "next";
import ServiceContentPage from "@/components/ServiceContentPage";

export const metadata: Metadata = {
  title: "Emergency Plumber Southampton | UKB Plumbing",
  description: "Urgent plumbing help in Southampton for burst pipes, active leaks and overflowing fixtures. Emergency response is typically 30–60 minutes, subject to availability and traffic.",
  alternates: { canonical: "https://ukbplumbing.co.uk/services/emergency-plumber" },
  openGraph: { title: "Emergency Plumber Southampton", description: "Urgent plumbing help for leaks, burst pipes and overflowing fixtures in Southampton.", url: "https://ukbplumbing.co.uk/services/emergency-plumber", siteName: "UKB Plumbing", type: "website", images: ["/og-image.png"] },
};

export default function EmergencyPlumberPage() {
  return <ServiceContentPage title="Emergency Plumber in Southampton" description="Urgent plumbing support for active leaks, burst pipes, overflowing fixtures, loss of water and other faults that cannot safely wait. Emergency response is typically 30–60 minutes, subject to engineer availability, traffic and location." path="/services/emergency-plumber" sections={[
    { title: "Problems that may need urgent help", paragraphs: ["An uncontrolled leak, burst pipe or overflowing fixture can damage a property quickly. If it is safe, turn off the nearest isolation valve or the main stop tap, move belongings away from water and keep clear of electrical fittings.", "Tell us where the water appears, which rooms or fixtures are affected and what has already been isolated. If gas, carbon monoxide or damaged electrics may be involved, leave the unsafe area and contact the appropriate emergency service first."], bullets: ["Burst or split pipes", "Leaking tanks, valves or radiators", "Overflowing toilets or fixtures", "Sudden loss of water"] },
    { title: "How an emergency visit works", paragraphs: ["When you call, we ask for the postcode, symptoms, access details and any immediate safety concern. Emergency response is typically 30–60 minutes, subject to engineer availability, traffic and location. The call-out and diagnostic charge is confirmed before the visit.", "The first aim may be to make the situation safe and stop further damage. A permanent repair can depend on access, pipe condition and parts. The engineer explains the diagnosis and agrees the proposed work and price before proceeding."] },
    { title: "What to have ready", paragraphs: ["Photographs of the affected area, the location of the stop tap and details of any recent plumbing work can help. Do not remove appliance covers, disturb suspected asbestos-containing materials or attempt a repair beyond what you can do safely.", "Arrival times vary with location, traffic and earlier jobs. Call if the condition changes after booking so the engineer can reassess the urgency."] },
  ]} faqs={[
    { question: "How quickly can an emergency plumber arrive?", answer: "Emergency response is typically 30–60 minutes, subject to engineer availability, traffic and location." },
    { question: "Will you tell me the call-out charge first?", answer: "Yes. The call-out and diagnostic fee is explained before booking. Evening, weekend and emergency call-outs are charged differently; repairs and parts are quoted separately, and no work starts until you agree the price." },
    { question: "What should I do while waiting?", answer: "If safe, isolate the water, contain small amounts of water and keep people away from electrical hazards. Do not take risks to reach a valve or damaged fitting." },
    { question: "Can the first visit always provide a permanent repair?", answer: "Not always. Access, pipe condition and parts availability can mean the first visit makes the fault safe before a permanent repair is arranged." },
  ]} related={[{ label: "Water leak detection and repair", href: "/services/water-leakage-and-repair" }, { label: "Blocked drains", href: "/services/blocked-drains" }, { label: "Boiler repair", href: "/services/boiler-repair" }]} />;
}
