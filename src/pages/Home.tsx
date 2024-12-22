import React from 'react';
import Hero from '../components/Hero';
import { ServicesSection } from '../components/services/ServicesSection';
import { motion } from 'framer-motion';
import { Users, Target, TrendingUp } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const values = [
  {
    icon: Users,
    title: 'People First',
    description: 'We prioritize the well-being of both our clients and team members.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Unparalleled service quality that exceeds expectations.'
  },
  {
    icon: TrendingUp,
    title: 'Value',
    description: 'Superior solutions at competitive prices for optimal ROI.'
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-xl leading-relaxed mb-8 text-gray-700"
              variants={fadeInUp}
            >
              At MAFM, we redefine excellence in facilities management and corporate services solutions. 
              As a dedicated one-stop-shop, we bring unparalleled convenience to our clients, 
              streamlining their operations and elevating their workspace experiences.
            </motion.p>
            
            <motion.p 
              className="text-xl leading-relaxed mb-8 text-gray-700"
              variants={fadeInUp}
            >
              Committed to a 'people first' approach, we prioritize the well-being of both our clients 
              and our team, ensuring a harmonious partnership that extends beyond conventional service delivery.
            </motion.p>

            <motion.p 
              className="text-xl leading-relaxed text-gray-700"
              variants={fadeInUp}
            >
              In a landscape where competitors are overvalued, we take pride in providing top-notch solutions 
              at a fraction of the cost. Choose MAFM for a transformative approach to facilities management 
              that blends innovation, efficiency, and unbeatable value.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <value.icon className="w-12 h-12 text-primary-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}