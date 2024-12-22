import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800"
        >
          <div className="p-8 md:p-12">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}