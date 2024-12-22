import React from 'react';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesGrid } from '../components/services/ServicesGrid';

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      <ServicesHero />
      <div className="container mx-auto px-4 py-20">
        <ServicesGrid />
      </div>
    </div>
  );
}