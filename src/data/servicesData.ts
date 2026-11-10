
import { 
    Droplet, WrenchIcon, Radiation, FlameKindling, 
    PenLineIcon, ShowerHead,
  } from 'lucide-react';
  
  export interface ServiceType {
    id: number;
    title: string;
    description: string;
    icon: any; // Using 'any' to store the icon component reference
    image: string;
    slug: string;
  }
  
  export const servicesList: ServiceType[] = [
    {
      id: 1,
      title: "Emergency Plumber",
      description: "Fast response to all emergency plumbing issues, including burst pipes, leaks, and fixture failures.",
      icon: WrenchIcon,
      image: "/images/real-work/service-van-equipment.webp",
      slug: "emergency-plumber"
    },
    {
      id: 2,
      title: "Blocked Drains",
      description: "Professional removal of blockages in sinks, toilets, showers, and main drainage systems.",
      icon: PenLineIcon,
      image: "/lovable-uploads/drain.png",
      slug: "blocked-drains"
    },
    {
      id: 3,
      title: "Water Leak Repairs",
      description: "Detection and repair of visible and hidden water leaks to prevent property damage and water waste.",
      icon: Droplet,
      image: "/lovable-uploads/leak-detection.webp",
      slug: "water-leakage-and-repair"
    },
    {
      id: 4,
      title: "Radiator Repairs",
      description: "Expert repair, installation, and maintenance of all types of radiators and heating systems.",
      icon: Radiation,
      image: "/images/real-work/radiator-installation.webp",
      slug: "radiator-repairs"
    },
    {
      id: 5,
      title: "Boiler Repair",
      description: "Professional diagnosis and repair of boiler faults to restore heating and hot water safely.",
      icon: FlameKindling,
      image: "/images/real-work/engineer-boiler-work.webp",
      slug: "boiler-repair"
    },
    {
      id: 6,
      title: "Pipe Repairs & Replacement",
      description: "Expert repair and replacement of damaged, burst, or corroded pipes using high-quality materials.",
      icon: PenLineIcon,
      image: "/lovable-uploads/pipework-repair.webp",
      slug: "pipe-repairs-replacement"
    },
    {
      id: 7,
      title: "Bathroom & Kitchen Plumbing",
      description: "Installation and repair of all bathroom and kitchen fixtures, including sinks, toilets, showers, and appliances.",
      icon: ShowerHead,
      image: "/images/real-work/completed-bathroom-installation.webp",
      slug: "bathroom-kitchen-plumbing"
    },
    {
      id: 8,
      title: "Boiler Installation",
      description: "Professional installation and replacement of efficient combi, system, and conventional boilers.",
      icon: FlameKindling,
      image: "/lovable-uploads/gas-heating-service.webp",
      slug: "boiler-installation"
    },
    {
      id: 9,
      title: "Central Heating & Radiators",
      description: "Assessment and repair options for cold radiators, leaking valves, circulation and heating faults.",
      icon: Radiation,
      image: "/lovable-uploads/heating-repair.webp",
      slug: "central-heating-radiators"
    },
    {
      id: 10,
      title: "Landlord Gas Safety",
      description: "Landlord gas safety checks and records completed by an appropriately Gas Safe registered engineer.",
      icon: FlameKindling,
      image: "/lovable-uploads/gas-heating-service.webp",
      slug: "landlord-gas-safety-certificate"
    },
    {
      id: 11,
      title: "Power Flushing & Hard Water",
      description: "Assessment-led heating-system cleaning and scale-protection options for Southampton properties.",
      icon: Droplet,
      image: "/lovable-uploads/leak-detection.webp",
      slug: "power-flushing-hard-water"
    }
  ];
