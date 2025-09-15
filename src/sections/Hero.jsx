import { motion } from 'framer-motion';
import Button from '../components/Button';

// SVG icons for floating animation
const WaterDropIcon = ({ size, color, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 21C12 21 4 12.186 4 8.5C4 4.977 7.582 2 12 2C16.418 2 20 4.977 20 8.5C20 12.186 12 21 12 21Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

const BubbleIcon = ({ size, color, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="2" />
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

  const floatVariants = {
    animate: (i) => ({
      y: [0, -30, 0],
      x: [0, 20, 0],
      rotate: [0, 360],
      opacity: [0, 0.5, 0],
      scale: [0, 1, 0.8],
      transition: {
        duration: 20 + Math.random() * 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: i * 2,
      },
    }),
  };

  const icons = [
    { component: WaterDropIcon, size: 40, color: 'var(--color-secondary)' },
    { component: BubbleIcon, size: 60, color: 'var(--color-tertiary)' },
    { component: WaterDropIcon, size: 50, color: 'var(--color-accent)' },
    { component: BubbleIcon, size: 30, color: 'var(--color-secondary)' },
    { component: WaterDropIcon, size: 70, color: 'var(--color-tertiary)' },
    { component: BubbleIcon, size: 45, color: 'var(--color-accent)' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-fluid animate-gradient-flow"></div>
      
      {/* Floating Icons */}
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          variants={floatVariants}
          custom={i}
          initial="animate"
          animate="animate"
          className="absolute z-0"
          style={{ 
            top: `${Math.random() * 100}vh`, 
            left: `${Math.random() * 100}vw`,
          }}
        >
          <icon.component size={icon.size} color={icon.color} className="opacity-0"/>
        </motion.div>
      ))}

      {/* Main Content */}
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
          <Button href="#contact" text="Get a Quote" variant="secondary" />
          <Button href="#services" text="Our Services" variant="primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
