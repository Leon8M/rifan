'use client';

import { motion } from 'framer-motion';

const Button = ({ text, href, onClick, variant = 'primary', type = 'button' }) => {
  const baseClasses = 'font-bold py-3 px-6 rounded-xl shadow-lg transition-all-300';
  
  // Class names based on the defined color variants from globals.css
  const variantClasses = {
    primary: 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-primary)]',
    secondary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)]',
  };

  const commonProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    className: `${baseClasses} ${variantClasses[variant]}`,
  };

  if (href) {
    return (
      <motion.a href={href} onClick={onClick} {...commonProps}>
        {text}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} type={type} {...commonProps}>
      {text}
    </motion.button>
  );
};

export default Button;
