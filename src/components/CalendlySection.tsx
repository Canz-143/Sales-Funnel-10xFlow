import React from 'react';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import { CalendlySectionProps } from '../types';

const CalendlySection: React.FC<CalendlySectionProps> = ({ 
  title, 
  subtitle, 
  embedUrl 
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg"
        >
          <div className="bg-white p-1 md:p-2">
            <InlineWidget url={embedUrl} styles={{ height: '650px' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalendlySection;