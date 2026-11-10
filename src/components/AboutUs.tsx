import Link from "next/link";
import { Clock, ShieldCheck, Wrench } from "lucide-react";

const features = [
  { title: "Availability confirmed", text: "An arrival estimate is provided when you call.", icon: Clock },
  { title: "Appropriate engineer", text: "The work is matched to the qualifications required.", icon: ShieldCheck },
  { title: "Scope agreed first", text: "Proposed work, charges and job-specific terms are explained.", icon: Wrench },
] as const;

export default function AboutUs() {
  return (
    <section id="about" className="section-padding bg-white" aria-labelledby="home-about-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-5xl gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-8 md:grid-cols-[1fr_1.25fr] md:p-12">
          <img src="/images/real-work/sukdev-bhakar-engineer-van.webp" alt="UKB Plumbing engineer beside a service van" width="1600" height="900" className="h-full min-h-72 w-full rounded-xl object-cover" loading="lazy" />
          <div>
            <span className="inline-block rounded-full bg-ukb-lightblue px-3 py-1 text-sm font-medium text-ukb-blue">About UKB Plumbing</span>
            <h2 id="home-about-heading" className="mt-4 text-3xl font-bold text-ukb-darkblue md:text-4xl">Southampton plumbing and heating support</h2>
            <p className="mt-5 text-lg leading-relaxed text-ukb-darkgray">UKB Plumbing coordinates emergency and planned work from Southampton. The team asks about the fault, property and postcode, confirms availability, and explains the next step before arranging a visit.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {features.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-xl bg-white p-5">
                <Icon className="h-7 w-7 text-ukb-blue" aria-hidden="true" />
                <h3 className="mt-3 font-bold text-ukb-darkblue">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ukb-darkgray">{text}</p>
              </div>
            ))}
          </div>
            <Link href="/about" className="mt-7 inline-flex font-bold text-ukb-blue underline">Read about UKB Plumbing</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
