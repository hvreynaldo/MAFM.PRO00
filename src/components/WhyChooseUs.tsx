import React from 'react';
import { Award, Lightbulb, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Expertise',
    description: 'Over 15 years of industry experience delivering excellence in facilities management.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Cutting-edge solutions and technology-driven approaches to optimize operations.'
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: '24/7 support and commitment to maintaining the highest service standards.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine expertise, innovation, and reliability to deliver exceptional facility management solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}