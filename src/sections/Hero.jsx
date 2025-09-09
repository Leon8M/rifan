import { motion } from 'framer-motion';

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
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center text-white bg-gradient-fluid">
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      <motion.div 
        className="container mx-auto px-4 relative z-10 bg-neutral-dark/10 backdrop-blur-sm p-10 rounded-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-4 animate-fade-in-up text-primary"
          variants={itemVariants}
        >
          Your Brand, Our Water
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl font-sub mb-8 max-w-3xl mx-auto animate-fade-in-up text-primary"
          variants={itemVariants}
        >
          Premium water, personalized for your events, businesses, and clubs.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
          variants={itemVariants}
        >
          <a href="#contact" className="bg-accent text-primary font-bold py-3 px-8 rounded-full shadow-lg transition-all-300 hover:scale-105 hover:shadow-xl animate-button-pulse font-sub">
            Get a Quote
          </a>
          <a href="#services" className="border-2 border-primary text-primary font-bold py-3 px-8 rounded-full shadow-lg transition-all-300 hover:bg-primary hover:text-white font-sub">
            Our Services
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
