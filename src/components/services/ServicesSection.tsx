import React from 'react';
import { ServicesGrid } from './ServicesGrid';

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional services designed to enhance your workplace efficiency and productivity.
          </p>
        </div>
        <ServicesGrid />
      </div>
    </section>
  );
}