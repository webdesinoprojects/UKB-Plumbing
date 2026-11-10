import type { Metadata } from "next";
import ServiceContentPage from "@/components/ServiceContentPage";

export const metadata: Metadata = {
  title: "Boiler Installation Southampton | UKB Plumbing",
  description: "Boiler replacement and installation options in Southampton, with a property survey, system assessment and written quotation before work is agreed.",
  alternates: { canonical: "https://ukbplumbing.co.uk/services/boiler-installation" },
  openGraph: { title: "Boiler Installation Southampton", description: "Survey-led boiler replacement and installation options in Southampton.", url: "https://ukbplumbing.co.uk/services/boiler-installation", siteName: "UKB Plumbing", type: "website", images: ["/og-image.png"] },
};

export default function BoilerInstallationPage() {
  return <ServiceContentPage title="Boiler Installation in Southampton" description="Survey-led boiler replacement and installation, with system requirements, controls, preparation and warranty terms set out in a written quotation." path="/services/boiler-installation" sections={[
    { title: "Start with the property, not a product", paragraphs: ["A suitable boiler depends on the property, number of bathrooms, hot-water demand, existing system, gas supply, flue route and available space. A survey is needed before the final appliance and installation scope can be confirmed.", "The survey should also consider controls, condensate drainage, system water condition and whether existing pipework or radiators need attention. A like-for-like replacement and a system conversion have different requirements and timescales."], bullets: ["Combi boiler replacement", "System or conventional boiler options", "Controls and zoning review", "Heating-system condition checks"] },
    { title: "What a written quotation should explain", paragraphs: ["The quotation should identify the proposed boiler, installation work, controls, system preparation, disposal and any exclusions. Manufacturer warranty length depends on the selected product and compliance with its installation and servicing terms.", "Property-specific work can only be priced after the relevant access and system condition are understood. Any additional work discovered after installation begins should be explained and agreed before it proceeds."] },
    { title: "Installation and handover", paragraphs: ["Gas boiler installation is carried out by an appropriately Gas Safe registered engineer. The system is commissioned and the customer should receive operating guidance and the documents applicable to the installation.", "Keep manufacturer and commissioning records with the property documents. Arrange servicing in line with the manufacturer’s instructions and address pressure loss, leaks or unusual operation rather than repeatedly resetting the appliance."] },
  ]} faqs={[
    { question: "Can you quote a boiler from photographs alone?", answer: "Photographs can help with an initial discussion, but a survey is normally needed to confirm suitability, access, flue, gas supply and system work." },
    { question: "How long will installation take?", answer: "Timing depends on whether the work is like-for-like or a conversion, plus access and any system upgrades. The expected programme is confirmed after survey." },
    { question: "What warranty will I receive?", answer: "The written quotation confirms the selected boiler’s manufacturer warranty and any job-specific workmanship terms." },
    { question: "Will the old heating system be checked?", answer: "The survey considers system condition and preparation. Cleaning, filters, controls or radiator work are included only where stated in the quotation." },
  ]} related={[{ label: "Boiler repair", href: "/services/boiler-repair" }, { label: "Central heating and radiators", href: "/services/central-heating-radiators" }, { label: "Power flushing and hard water", href: "/services/power-flushing-hard-water" }]} />;
}
