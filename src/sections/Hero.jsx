'use client';

import { motion } from 'framer-motion';
import Button from '../components/Button';
import React from 'react';

// SVG icons for floating animation
const WaterDropIcon = ({ size, color, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 21C12 21 4 12.186 4 8.5C4 4.977 7.582 2 12 2C16.418 2 20 4.977 20 8.5C20 12.186 12 21 12 21Z" 
      stroke="rgba(255, 255, 255, 0.3)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

const BubbleIcon = ({ size, color, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
  </svg>
);

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fallVariants = {
    initial: (i) => ({
      y: `-10vh`,
      x: `${(Math.random() - 0.5) * 500}px`,
      scale: Math.random() * 0.5 + 0.5,
      opacity: 0.7,
    }),
    animate: {
      y: `110vh`,
      opacity: [0.7, 1, 0.7],
      scale: [1, 1.2, 1],
      transition: {
        y: {
          duration: Math.random() * 40 + 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        },
        opacity: {
          duration: Math.random() * 40 + 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        },
        scale: {
          duration: Math.random() * 2 + 1,
          repeat: Infinity,
          repeatType: "mirror",
        },
      },
    },
  };

  const icons = Array.from({ length: 50 }).map((_, i) => ({
    component: i % 2 === 0 ? WaterDropIcon : BubbleIcon,
    size: Math.random() * 40 + 20,
    color: ['rgba(0, 51, 102, 0.8)', 'rgba(89, 161, 212, 0.8)', 'rgba(0, 191, 166, 0.8)'][Math.floor(Math.random() * 3)],
  }));

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-fluid animate-fluid-gradient"></div>
      
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          variants={fallVariants}
          custom={i}
          initial="initial"
          animate="animate"
          className="absolute z-0"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
          }}
        >
          <icon.component size={icon.size} color={icon.color}/>
        </motion.div>
      ))}

      <motion.div
        className="container mx-auto px-6 relative z-10 glass-card p-10 md:p-16 rounded-3xl shadow-2xl max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-6 text-white drop-shadow-lg"
          variants={itemVariants}
        >
          Your Brand, Our Water
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl font-sub mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed"
          variants={itemVariants}
        >
          Premium water, personalized for your <span className="text-accent">events</span>,{" "}
          <span className="text-accent">businesses</span>, and <span className="text-accent">clubs</span>.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          variants={itemVariants}
        >
          <Button text="Get a Quote" href="#contact" variant="secondary" />
          <Button text="Our Services" href="#services" variant="primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
