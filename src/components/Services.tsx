import React from 'react';
import { Building2, Shield, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Building2,
    title: 'Facility Management',
    description: 'Comprehensive facility management solutions to optimize your workspace operations and maintenance.'
  },
  {
    icon: Shield,
    title: 'Security Services',
    description: 'Professional security services to protect your assets and ensure a safe working environment.'
  },
  {
    icon: Users,
    title: 'Workforce Solutions',
    description: 'Flexible staffing solutions and workforce management to meet your business needs.'
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional services designed to enhance your workplace efficiency and productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button 
                onClick={() => navigate('/contact')}
                className="group text-blue-600 font-medium inline-flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}