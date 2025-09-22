'use client';

import { motion } from 'framer-motion';
import React from 'react';

const animationVariants = {
  slideUp: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },

  fluidWave: {
    initial: { opacity: 0, x: -100, rotate: -5 },
    whileInView: { opacity: 1, x: 0, rotate: 0 },
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
      duration: 0.8,
    },
  },
};

const Section = ({ children, id, className = '', variant = 'slideUp' }) => {
  const finalAnimationProps = animationVariants[variant] || animationVariants.slideUp;
  
  return (
    <motion.section
      id={id}
      className={`py-20 ${className}`}
      viewport={{ once: true, amount: 0.3 }}
      {...finalAnimationProps}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
