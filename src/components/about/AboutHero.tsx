import React from 'react';
import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <div className="relative min-h-[60vh] flex items-center bg-gradient-to-r from-primary-900 to-primary-800">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>
        <motion.div 
          className="w-24 h-2 bg-white rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </div>
    </div>
  );
}