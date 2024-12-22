import React from 'react';
import { 
  Move, 
  Sparkles, // Replace Spray with Sparkles for Covid spray service
  Building2, 
  Wrench, 
  Ruler, 
  Droplets, 
  Cable, 
  FileText, 
  Network, 
  Laptop 
} from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: Move,
    title: 'Moves, Adds, and Changes (M.A.C.)',
    description: 'Efficiently manage workspace relocations, expansions, and modifications with minimal disruption.',
    href: '/services/mac'
  },
  {
    icon: Building2,
    title: 'Janitorial Services',
    description: 'Maintain clean, hygienic, and professional work environments with customized cleaning solutions.',
    href: '/services/janitorial'
  },
  {
    icon: Sparkles, // Updated icon
    title: 'Covid Electrostatic Spray',
    description: 'Advanced disinfection services ensuring workplace safety and compliance with health guidelines.',
    href: '/services/covid-spray'
  },
  {
    icon: Wrench,
    title: 'Site Support Services',
    description: 'Comprehensive on-site support ensuring smooth facility operations and maintenance.',
    href: '/services/site-support'
  },
  {
    icon: Ruler,
    title: 'AutoCAD Services',
    description: 'Precise design and drafting solutions for optimized facility layouts and planning.',
    href: '/services/autocad'
  },
  {
    icon: Droplets,
    title: 'Power Washing',
    description: 'Professional exterior cleaning services to maintain and enhance property appearance.',
    href: '/services/power-washing'
  },
  {
    icon: Cable,
    title: 'Cable Management',
    description: 'Organized and efficient cable solutions for optimal workspace functionality.',
    href: '/services/cable-management'
  },
  {
    icon: FileText,
    title: 'Playbook Creation',
    description: 'Develop comprehensive operational guides for improved efficiency and consistency.',
    href: '/services/playbooks'
  },
  {
    icon: Network,
    title: 'Systems Integration',
    description: 'Seamless integration of technology systems for enhanced operational efficiency.',
    href: '/services/systems-integration'
  },
  {
    icon: Laptop,
    title: 'IT Support',
    description: 'Reliable technical assistance ensuring uninterrupted business operations.',
    href: '/services/it-support'
  }
];

export function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          href={service.href}
        />
      ))}
    </div>
  );
}