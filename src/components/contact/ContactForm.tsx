import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../Button';
import { StepIndicator } from './StepIndicator';
import { FormStep } from './FormStep';
import { useContactForm } from './useContactForm';

export function ContactForm() {
  const {
    step,
    formData,
    isSubmitting,
    isSubmitted,
    handleInputChange,
    handleNext,
    handleSubmit,
    canProceed
  } = useContactForm();

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/20">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-white">Thank You!</h2>
        <p className="text-gray-400">
          Your inquiry has been submitted. We'll get back to you shortly.
        </p>
      </motion.div>
    );
  }

  const inputClassName = "w-full px-4 py-3 text-lg rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors";

  return (
    <div className="max-w-lg mx-auto">
      <StepIndicator currentStep={step} />
      
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <FormStep
              key="step1"
              title="What's your name?"
              description="Let's start with your name"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={inputClassName}
                autoFocus
              />
            </FormStep>
          )}

          {step === 2 && (
            <FormStep
              key="step2"
              title="What's your email?"
              description="We'll use this to contact you about your inquiry"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className={inputClassName}
                autoFocus
              />
            </FormStep>
          )}

          {step === 3 && (
            <FormStep
              key="step3"
              title="Tell us about your inquiry"
              description="How can we help you today?"
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="E.g., I need help with cable management for my office expansion"
                className={`${inputClassName} min-h-[150px] resize-none`}
                autoFocus
              />
            </FormStep>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8">
        <Button
          onClick={step === 3 ? handleSubmit : handleNext}
          disabled={!canProceed || isSubmitting}
          className="w-full py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            step === 3 ? 'Submit' : 'Next'
          )}
        </Button>
      </div>
    </div>
  );
}