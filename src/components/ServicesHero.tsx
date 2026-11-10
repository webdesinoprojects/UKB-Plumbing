import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ServicesHeroProps {
  title: string;
  description: string;
  image: string;
}

const ServicesHero = ({ title, description, image }: ServicesHeroProps) => {
  return (
    <div className="relative pt-2.5 pb-20 overflow-hidden bg-ukb-lightblue">
      <div
        className="absolute inset-0 opacity-20 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-ukb-blue/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="mt-[30px] md:mt-0 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-ukb-darkblue">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-ukb-darkgray max-w-2xl">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link prefetch={false}
              href="/inquiry-form"
              className={cn(
                "bg-ukb-blue text-white py-3 px-6 rounded-md",
                "hover:bg-ukb-darkblue transition-colors duration-300"
              )}
            >
              Book This Service
            </Link>
            <a
              href="tel:07359605766"
              className={cn(
                "bg-white text-ukb-blue py-3 px-6 rounded-md border border-ukb-blue",
                "hover:bg-ukb-lightblue transition-colors duration-300"
              )}
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>

         <div className="absolute right-3 top-1/2 -translate-y-1/2">
           <Link prefetch={false} href="https://www.gassaferegister.co.uk/businesscompetencies?ep=1xPOGK1AdTeDy4hfLti5P2suaiAfkgrUN0FAz91sbiuBv2%252fAVPRsfqLCaLBxH42HVXP6X2H0tU7wnaWL3fuUQwxGr9VjFTUyEYsIOpxxiIE%253d&backurl=%252ffindbusinessresults%253fep%253d1xPOGK1AdTeDy4hfLti5P2suaiAfkgrUN0FAz91sbis41eO4MxUIdHAaMgU2gRiE&searchurl=%252Ffindbusinessresults%253Fep%253D1xPOGK1AdTeDy4hfLti5P2suaiAfkgrUN0FAz91sbis41eO4MxUIdHAaMgU2gRiE" target="_blank" rel="noopener noreferrer">
             <img
               src="/lovable-uploads/gassafe.png"
               alt="Gas Safe Registered"
               width="120"
               height="40"
               className="h-8 md:h-10 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
             />
           </Link>
         </div>
                       </div>
  );
};

export default ServicesHero;
