
import React from 'react';
import { Clock, CheckCircle, BadgeCheck, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: "Clear availability",
    description: "We confirm engineer availability and an estimated arrival time when you call.",
    icon: <Clock className="w-12 h-12 text-ukb-blue" />,
  },
  {
    id: 2,
    title: "Appropriate engineer",
    description: "We match the work to an appropriately qualified engineer and explain the proposed scope before it starts.",
    icon: <BadgeCheck className="w-12 h-12 text-ukb-blue" />,
  },
  {
    id: 3,
    title: "Repair options explained",
    description: "The diagnosis, proposed work, parts and price are explained before non-emergency work begins.",
    icon: <CheckCircle className="w-12 h-12 text-ukb-blue" />,
  },
  {
    id: 4,
    title: "Job-specific terms",
    description: "Any applicable workmanship or manufacturer warranty is confirmed for the individual job.",
    icon: <HeartHandshake className="w-12 h-12 text-ukb-blue" />,
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-ukb-gray relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-ukb-lightblue text-ukb-blue text-sm font-medium rounded-full mb-4 animate-fade-in">
            Why UKB Plumbing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in delay-100 text-ukb-darkblue" >Why Choose Our Services?</h2>
          <p className="text-lg text-ukb-darkgray animate-fade-in delay-200">
            Clear information helps you understand who is attending, what the work involves and which charges or terms apply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.id} 
              className="bg-white rounded-lg p-8 text-center shadow-subtle hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1"
              style={{
                animationDelay: `${300 + index * 100}ms`,
              }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-ukb-lightblue rounded-full mb-6 animate-fade-in">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-ukb-darkblue animate-fade-in delay-100">{reason.title}</h3>
              <p className="text-ukb-darkgray animate-fade-in delay-200">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
