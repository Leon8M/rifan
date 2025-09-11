import Section from "../components/Section";
import { motion } from "framer-motion";

const About = () => {
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
    <Section id="about" className="bg-white py-20">
      <motion.div
        className="container mx-auto grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Text content */}
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 font-body leading-relaxed mb-4">
            At <span className="font-bold text-secondary">RIFAN</span>, we go beyond water. 
            Our mission is to deliver premium bottled water customized to your brand, 
            whether for businesses, weddings, or events.
          </p>
          <p className="text-lg text-gray-700 font-body leading-relaxed mb-4">
            We source our water from the pristine springs of 
            <span className="font-bold text-primary"> Mt. Kenya</span>, 
            and purify it through advanced reverse osmosis technology. 
            Every bottle reflects our promise of <span className="text-secondary font-semibold">
            quality, freshness, and trust
            </span>.
          </p>
          <p className="text-lg text-gray-700 font-body leading-relaxed">
            With attention to detail and dedication to service, 
            we ensure your brand leaves a lasting impression on every guest.
          </p>
        </motion.div>

        {/* Image side */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          variants={itemVariants}
        >
          <img
            src="/about-water.jpeg" // put your image in public/ or src/assets/
            alt="Pure bottled water from Mt. Kenya"
            className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default About;
