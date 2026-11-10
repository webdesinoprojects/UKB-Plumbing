import type { Metadata } from "next";
import ServiceContentPage from "@/components/ServiceContentPage";

export const metadata: Metadata = {
  title: "Landlord Gas Safety Certificate Southampton | UKB Plumbing",
  description: "Arrange a landlord gas safety check in Southampton with an appropriately Gas Safe registered engineer.",
  alternates: { canonical: "https://ukbplumbing.co.uk/services/landlord-gas-safety-certificate" },
  openGraph: { title: "Landlord Gas Safety Certificate Southampton", description: "Landlord gas safety checks in Southampton.", url: "https://ukbplumbing.co.uk/services/landlord-gas-safety-certificate", siteName: "UKB Plumbing", type: "website", images: ["/og-image.png"] },
};

export default function LandlordGasSafetyCertificatePage() {
  return <ServiceContentPage title="Landlord Gas Safety Certificates in Southampton" description="Arrange an annual landlord gas safety check and record for relevant gas appliances and flues at a rented property." path="/services/landlord-gas-safety-certificate" sections={[
    { title: "What the check is for", paragraphs: ["The Health and Safety Executive says landlords must arrange an annual gas safety check every 12 months by a Gas Safe registered engineer for relevant appliances and flues they provide for tenants. The resulting landlord gas safety record is often called a gas safety certificate or CP12.", "The exact appliances and flues included depend on the property and who owns them. Maintenance and repair are separate from the safety record, so any remedial work identified is explained and quoted separately."], bullets: ["Appointment at the rented property", "Appropriately registered engineer", "Record of the appliances and flues checked", "Faults or required action explained"] },
    { title: "Records and tenant copies", paragraphs: ["Current HSE guidance says the landlord must give an existing tenant a copy of the completed record within 28 days and give a new tenant a copy before they move in. Landlords should retain the record in line with the current HSE requirements.", "This page is general service information, not legal advice. Landlords and agents should check the current HSE guidance for the property and tenancy."] },
    { title: "Before the appointment", paragraphs: ["Provide the property address, landlord or agent contact details, tenant access arrangements and a list of known gas appliances. Tell us about any known fault or safety concern before the visit. If gas is suspected to be escaping, follow the National Gas Emergency Service guidance immediately."] },
  ]} faqs={[
    { question: "Is a CP12 the same as a landlord gas safety record?", answer: "CP12 is a commonly used name for the record produced after a landlord gas safety check. HSE guidance refers to it as the gas safety check record." },
    { question: "How often is the check required?", answer: "HSE guidance states that the relevant annual gas safety check must be carried out every 12 months. Check the current HSE rules for timing and any permitted flexibility." },
    { question: "Does the check include a boiler service or repairs?", answer: "A safety check record is not automatically a service or repair. Any additional work identified is explained and agreed separately." },
  ]} guidanceLink={{ label: "Read the HSE landlord gas-safety guidance", href: "https://www.hse.gov.uk/gas/landlords/index.htm" }} related={[{ label: "Boiler repair", href: "/services/boiler-repair" }, { label: "Boiler installation", href: "/services/boiler-installation" }, { label: "Central heating", href: "/services/central-heating-radiators" }]} />;
}
