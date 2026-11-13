import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import CookieSettingsButton from "@/components/CookieSettingsButton";

const services = [
  ["Emergency Plumbing", "/services/emergency-plumber"],
  ["Blocked Drains", "/services/blocked-drains"],
  ["Water Leak Repairs", "/services/water-leakage-and-repair"],
  ["Boiler Repair", "/services/boiler-repair"],
  ["Boiler Installation", "/services/boiler-installation"],
  ["Central Heating & Radiators", "/services/central-heating-radiators"],
] as const;

const topAreas = [
  ["Southampton", "/areas-we-cover"],
  ["Eastleigh", "/areas-we-cover/eastleigh"],
  ["New Forest", "/areas-we-cover/new-forest"],
  ["Salisbury", "/areas-we-cover/salisbury"],
  ["Winchester", "/areas-we-cover/winchester"],
  ["Hedge End", "/areas-we-cover/southampton/hedge-end"],
  ["Chandler’s Ford", "/areas-we-cover/eastleigh/chandlers-ford"],
  ["Romsey", "/areas-we-cover/southampton/romsey"],
  ["Totton", "/areas-we-cover/southampton/totton"],
] as const;

const keyLinks = [
  ["About", "/about"],
  ["Call-Out & Diagnostic", "/call-out-and-diagnostic"],
  ["All Services", "/services"],
  ["All Areas", "/areas-we-cover"],
  ["Blog", "/blogs"],
  ["Request a Quote", "/inquiry-form"],
  ["Privacy Policy", "/privacy-policy"],
  ["Cookie Policy", "/cookie-policy"],
  ["Terms & Conditions", "/terms-and-conditions"],
] as const;

const linkClass = "text-sm leading-snug text-white/80 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-ukb-darkblue pb-6 pt-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-9 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img src="/lovable-uploads/ukb-plumbing-logo-white.png" alt="UKB Plumbing" className="mb-4 h-14 w-auto" loading="lazy" width="180" height="56" />
            <p className="max-w-md text-sm leading-relaxed text-white/80">
              Plumbing and heating support based in Southampton. Call to explain the problem, confirm availability and understand any call-out or diagnostic charge before a visit.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="https://www.facebook.com/ukbplumbing" target="_blank" rel="noopener noreferrer" aria-label="UKB Plumbing on Facebook" className="text-white/70 hover:text-white"><Facebook size={19} /></a>
              <a href="https://www.instagram.com/ukb_plumbing/" target="_blank" rel="noopener noreferrer" aria-label="UKB Plumbing on Instagram" className="text-white/70 hover:text-white"><Instagram size={19} /></a>
              <a href="https://share.google/AxYHVoXlWDlionhUp" target="_blank" rel="noopener noreferrer" className={linkClass}>Google profile</a>
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:+447359605766" data-tracking-location="footer" className="flex items-center gap-2 text-white/80 hover:text-white"><Phone size={16} />07359 605766</a>
              <a href="mailto:info@ukbplumbing.co.uk" className="flex items-center gap-2 text-white/80 hover:text-white"><Mail size={16} />info@ukbplumbing.co.uk</a>
            </div>
          </div>

          <nav aria-labelledby="footer-services-heading">
            <h2 id="footer-services-heading" className="mb-4 text-lg font-bold">Main Services</h2>
            <ul className="space-y-2.5">{services.map(([label, href]) => <li key={href}><Link href={href} className={linkClass}>{label}</Link></li>)}</ul>
          </nav>

          <nav aria-labelledby="footer-areas-heading">
            <h2 id="footer-areas-heading" className="mb-4 text-lg font-bold">Top Areas</h2>
            <ul className="space-y-2.5">{topAreas.map(([label, href]) => <li key={href}><Link href={href} className={linkClass}>{label}</Link></li>)}</ul>
          </nav>

          <nav aria-labelledby="footer-links-heading">
            <h2 id="footer-links-heading" className="mb-4 text-lg font-bold">Key Pages</h2>
            <ul className="space-y-2.5">{keyLinks.map(([label, href]) => <li key={href}><Link href={href} className={linkClass}>{label}</Link></li>)}</ul>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center text-sm text-white/70 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} UKB Plumbing Ltd · Company 16028683 · VAT 519845848</p>
          <CookieSettingsButton className="hover:text-white" />
        </div>
      </div>
    </footer>
  );
}
