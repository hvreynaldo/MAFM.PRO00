import React from 'react';
import { motion } from 'framer-motion';

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex justify-center space-x-4">
      {[1, 2, 3].map((step) => (
        <motion.div
          key={step}
          className="relative"
          initial={false}
        >
          <motion.div
            className={`w-4 h-4 rounded-full ${
              step === currentStep ? 'bg-primary-500' : 'bg-gray-700'
            }`}
            animate={{
              scale: step === currentStep ? 1.2 : 1,
              backgroundColor: step === currentStep ? '#ef4444' : '#374151'
            }}
            transition={{ duration: 0.3 }}
          />
          {step === currentStep && (
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-primary-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}