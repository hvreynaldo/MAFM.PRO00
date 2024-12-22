import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "MAFM.pro has transformed our facility operations. Their expertise and dedication to excellence are unmatched.",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "Tech Solutions Inc."
  },
  {
    quote: "The level of professionalism and attention to detail from MAFM.pro has exceeded our expectations.",
    author: "Michael Chen",
    role: "Facility Manager",
    company: "Global Enterprises"
  },
  {
    quote: "Working with MAFM.pro has significantly improved our workplace efficiency and employee satisfaction.",
    author: "Emily Rodriguez",
    role: "HR Director",
    company: "Innovation Corp"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <Quote className="w-12 h-12 text-blue-100 absolute top-8 left-8" />
            
            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 text-center">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="text-center">
                <p className="font-bold text-gray-900">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                <p className="text-blue-600">{testimonials[currentIndex].company}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prev}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button 
                onClick={next}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}