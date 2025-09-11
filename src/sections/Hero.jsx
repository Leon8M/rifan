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
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background gradient + overlay */}
      <div className="absolute inset-0 bg-gradient-fluid"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-6 relative z-10 backdrop-blur-md bg-white/10 p-10 md:p-16 rounded-3xl shadow-2xl"
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
          <a
            href="#contact"
            className="bg-accent text-primary font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-sub text-lg animate-button-pulse"
          >
            Get a Quote
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-primary font-sub text-lg"
          >
            Our Services
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
