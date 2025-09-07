import { motion } from 'framer-motion';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url('https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="h-screen bg-cover bg-center bg-no-repeat" style={heroStyle}>
      <div className="h-full bg-black bg-opacity-50 flex items-center justify-center text-center text-white">
        <motion.div 
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-heading font-bold mb-4"
            variants={itemVariants}
          >
            Your Brand, Our Water
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl font-sub mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Premium water, personalized for your events, clubs, and brand.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a href="#contact" className="bg-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-blue-400 transition duration-300 text-lg font-sub">
              Get a Quote
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
