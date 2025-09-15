'use client';

import { motion } from 'framer-motion';

const Button = ({ text, onClick, variant = 'primary', type = 'button' }) => {
  const baseClasses = 'font-bold py-3 px-6 rounded-xl shadow-lg transition-all-300';
  
  // Class names based on the defined color variants from globals.css
  const variantClasses = {
    primary: 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-primary)]',
    secondary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)]',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </motion.button>
  );
};

export default Button;
