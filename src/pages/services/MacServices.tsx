import React from 'react';
import { Move, Users, Clock, Tool } from 'lucide-react';
import { ServiceHeader } from '../../components/services/ServiceHeader';
import { ServiceFeatures } from '../../components/services/ServiceFeatures';
import { ServiceBenefits } from '../../components/services/ServiceBenefits';
import { ServiceUseCases } from '../../components/services/ServiceUseCases';
import { ServiceContact } from '../../components/services/ServiceContact';

const features = [
  {
    icon: Move,
    title: 'Office Relocation',
    description: 'Complete planning and execution of office moves with minimal disruption'
  },
  {
    icon: Tool,
    title: 'Furniture Assembly',
    description: 'Professional assembly and reconfiguration of office furniture'
  },
  {
    icon: Users,
    title: 'Vendor Coordination',
    description: 'Seamless coordination with suppliers and service providers'
  }
];

const benefits = [
  {
    title: 'Minimize Downtime',
    description: 'Our efficient processes ensure minimal disruption to your operations'
  },
  {
    title: 'Expert Planning',
    description: 'Detailed planning and execution by experienced professionals'
  },
  {
    title: 'Cost Efficiency',
    description: 'Optimized resource allocation and budget management'
  },
  {
    title: 'Peace of Mind',
    description: 'Full project management and accountability'
  }
];

const useCases = [
  {
    industry: 'Corporate Offices',
    description: 'Complete office relocations and reconfigurations'
  },
  {
    industry: 'Healthcare Facilities',
    description: 'Specialized moves for medical equipment and facilities'
  },
  {
    industry: 'Educational Institutions',
    description: 'Campus-wide furniture and equipment management'
  }
];

export default function MacServices() {
  return (
    <div>
      <ServiceHeader
        title="Moves, Adds, and Changes (M.A.C.) Services"
        tagline="Streamlined workspace transitions tailored to your needs"
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
      />
      <ServiceFeatures features={features} />
      <ServiceBenefits benefits={benefits} />
      <ServiceUseCases useCases={useCases} />
      <ServiceContact />
    </div>
  );
}