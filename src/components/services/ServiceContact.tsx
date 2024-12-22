import React from 'react';
import { Button } from '../Button';

export function ServiceContact() {
  return (
    <div className="py-16 bg-primary-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Contact us today to learn more about how we can help transform your workspace
        </p>
        <Button variant="secondary">Contact Us Now</Button>
      </div>
    </div>
  );
}