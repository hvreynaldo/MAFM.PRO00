import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../Button';

const letterAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

export function MacHero() {
  return (
    <div className="relative min-h-screen flex items-center bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            className="mb-4"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold text-primary-600 tracking-wider"
              variants={letterAnimation}
              transition={{ duration: 0.5 }}
            >
              M.A.C.
            </motion.h2>
            <motion.div 
              className="text-4xl md:text-6xl font-bold text-primary-500 font-serif italic mt-2"
              variants={letterAnimation}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ATTACK
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Facilities Management
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Transform your workspace with our comprehensive facilities management solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button className="group inline-flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-100 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
}