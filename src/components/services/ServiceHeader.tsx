import React from 'react';
import { Button } from '../Button';

interface ServiceHeaderProps {
  title: string;
  tagline: string;
  backgroundImage: string;
}

export function ServiceHeader({ title, tagline, backgroundImage }: ServiceHeaderProps) {
  return (
    <div className="relative min-h-[60vh] flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-black/80" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-gray-200 mb-8">{tagline}</p>
          <Button>Get a Quote</Button>
        </div>
      </div>
    </div>
  );
}