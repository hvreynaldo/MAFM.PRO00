import React from 'react';
import { motion } from 'framer-motion';

export function ServicesHero() {
  return (
    <div className="relative min-h-[40vh] flex items-center bg-gradient-to-r from-primary-900 to-primary-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Comprehensive facilities management solutions tailored to your needs
          </p>
          <motion.div 
            className="w-24 h-2 bg-white rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
}