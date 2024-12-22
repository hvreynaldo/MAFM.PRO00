import React from 'react';

interface UseCase {
  industry: string;
  description: string;
}

interface ServiceUseCasesProps {
  useCases: UseCase[];
}

export function ServiceUseCases({ useCases }: ServiceUseCasesProps) {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{useCase.industry}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}