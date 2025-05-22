import React from 'react';
import { motion } from 'framer-motion';
import { CTASectionProps } from '../types';
import Button from './ui/Button';

const CTAMidSection: React.FC<CTASectionProps> = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink,
  bgColor = 'primary-500' 
}) => {
  return (
    <section className={`py-20 bg-${bgColor}`}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          
          <Button 
            href={ctaLink}
            size="large"
            variant="light"
            className="px-8"
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CTAMidSection;