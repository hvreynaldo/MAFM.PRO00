import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/robi-left.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <h1 className="text-[4rem] md:text-[6rem] font-black text-primary-600 leading-none tracking-tighter mb-2">
                M.A.C.
              </h1>
              <div 
                className="text-[3rem] md:text-[4.5rem] font-black text-primary-500 italic leading-none"
                style={{ 
                  fontFamily: 'Arial Black, sans-serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                ATTACK
              </div>
            </motion.div>
          </div>

          <motion.h2 
            className="text-[2.5rem] md:text-[3.5rem] font-bold text-white mb-12 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Facilities Management
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              className="group inline-flex items-center space-x-2 text-lg px-8 py-3 bg-primary-600 hover:bg-primary-700"
              onClick={() => navigate('/contact')}
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}