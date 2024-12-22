import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ icon: Icon, title, description, className }: ServiceCardProps) {
  const navigate = useNavigate();

  return (
    <div className={cn("bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow", className)}>
      <Icon className="w-12 h-12 text-primary-600 mb-6" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button 
        onClick={() => navigate('/contact')}
        className="group inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
      >
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}