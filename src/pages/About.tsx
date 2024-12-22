import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { AboutContent } from '../components/about/AboutContent';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <AboutContent />
    </div>
  );
}