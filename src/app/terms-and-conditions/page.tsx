
import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { pageTitle } from '@/utils/metadataHelpers';

export const metadata: Metadata = {
  title: pageTitle('Terms and Conditions | UKB Plumbing'),
  description: 'Read the terms and conditions of UKB Plumbing to understand your rights and responsibilities when using our emergency plumbing services.',
  alternates: { canonical: 'https://ukbplumbing.co.uk/terms-and-conditions' },
  openGraph: {
    title: 'Terms and Conditions | UKB Plumbing',
    description: 'Read the terms and conditions of UKB Plumbing to understand your rights and responsibilities when using our emergency plumbing services.',
    url: 'https://ukbplumbing.co.uk/terms-and-conditions',
    siteName: 'UKB Plumbing',
    type: 'website',
    images: ['/og-image.png'],
  },
};

const TermsConditions = () => {
  // useEffect(() => {
  //   document.title = "Terms & Conditions - UKB Plumbing - Emergency Plumbing Services";
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-ukb-darkblue mb-8">Terms and Conditions</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Last Updated: April 9, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ukb-blue mb-4">1. Introduction</h2>
              <p>Welcome to UKB Plumbing. These Terms and Conditions govern your use of our website and the services provided by UKB Plumbing, including our 24/7 emergency plumbing services. By accessing our website or using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our website or services.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ukb-blue mb-4">2. Service Scope</h2>
              <p>UKB Plumbing provides a range of plumbing services, including but not limited to:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>24/7 emergency plumbing services</li>
                <li>Urgent plumbing repair for leaking toilets, showers, and taps</li>
                <li>Gas leak repair and gas safety checks</li>
                <li>Washing machine installation</li>
                <li>Radiator repairs for radiators not working or leaking radiators</li>
                <li>Same-day plumbing services for critical issues</li>
                <li>General plumbing maintenance and repairs</li>
              </ul>
              <p>For same-day plumbing services or emergency plumbing company assistance, we prioritize our service delivery based on the severity of the emergency and our current workload.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ukb-blue mb-4">3. Availability and Response Times</h2>
              <p>As a local emergency plumber service, we strive to respond to all emergency calls as quickly as possible, 24 hours a day, 7 days a week. While we aim to provide immediate service for emergency plumbing situations, response times may vary based on:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>The nature and severity of the emergency</li>
                <li>Current demand for our services</li>
                <li>Your location</li>
                <li>Weather conditions and other factors beyond our control</li>
              </ul>
              <p>Our affordable emergency plumber services cover surrounding areas. For non-emergency services, appointments will be scheduled at mutually convenient times.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ukb-blue mb-4">4. Pricing and Payment</h2>
              <p>Our pricing structure is as follows:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>For standard services, we charge based on our current rate card which will be provided upon request</li>
                <li>Emergency callouts may incur an additional fee which will be clearly communicated</li>
                <li>We provide free estimates for planned work</li>
                <li>Additional charges may apply for work performed outside normal business hours, on weekends, or public holidays</li>
              </ul>
              <p>Payment is due upon completion of work unless otherwise agreed in writing. We accept various payment methods including cash, credit/debit cards, and bank transfers.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ukb-blue mb-4">5. Warranties</h2>
              <p>Any warranty that applies to a job will be confirmed in the written quote, invoice or other job documentation.</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Workmanship warranty terms depend on the work agreed</li>
                <li>Manufacturer warranty terms depend on the specific parts or equipment supplied</li>
                <li>A warranty does not affect your statutory rights</li>
              </ul>
              <p>Contact us if you believe an issue is covered by the written warranty provided for your job.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ukb-blue mb-4">6. Cancellation Policy</h2>
              <p>Our cancellation policy is as follows:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>For scheduled appointments, we require a minimum of 24 hours' notice for cancellation</li>
                <li>Late cancellations (less than 24 hours' notice) may incur a cancellation fee</li>
                <li>No-shows will be charged a call-out fee</li>
                <li>Emergency callouts that are cancelled after a plumber has been dispatched may incur a call-out fee</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ukb-blue mb-4">7. Customer Responsibilities</h2>
              <p>When using our services, you agree to:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Provide accurate information about the plumbing emergency or issue</li>
                <li>Ensure reasonable access to your property and the affected area</li>
                <li>Inform us of any known complications or hazards</li>
                <li>Obtain necessary permissions (e.g., from landlords) if you are not the property owner</li>
                <li>Make timely payment for services rendered</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ukb-blue mb-4">8. Liability and Limitations</h2>
              <p>While we always endeavor to provide the highest quality service, our liability is limited as follows:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>We are not responsible for damage caused by pre-existing conditions or defects</li>
                <li>Our liability is limited to direct damages caused by our negligence</li>
                <li>We are not liable for consequential or indirect losses</li>
                <li>Our total liability shall not exceed the amount paid for the services</li>
              </ul>
              <p>Nothing in these terms excludes or limits our liability for death or personal injury resulting from our negligence or any other liability that cannot be excluded by law.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ukb-blue mb-4">9. Force Majeure</h2>
              <p>We shall not be liable for any delay or failure to perform our obligations if such delay or failure results from events, circumstances or causes beyond our reasonable control, including but not limited to natural disasters, severe weather conditions, civil unrest, or pandemic restrictions.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ukb-blue mb-4">10. Complaints and Dispute Resolution</h2>
              <p>We strive to provide excellent service, but if you are dissatisfied:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Please contact us immediately to discuss the issue</li>
                <li>We will investigate all complaints thoroughly and fairly</li>
                <li>We aim to resolve complaints within 14 days</li>
                <li>If we cannot resolve the dispute amicably, you may refer the matter to an alternative dispute resolution service</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ukb-blue mb-4">11. Governing Law</h2>
              <p>These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ukb-blue mb-4">12. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes indicates your acceptance of the modified terms.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ukb-blue mb-4">13. Contact Information</h2>
              <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
              <div className="mt-4">
                <p><strong>UKB Plumbing - 24/7 Emergency Plumbing Services</strong></p>
                <p>Email: info@ukbplumbing.co.uk</p>
                <p>Phone: 07359605766</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;
