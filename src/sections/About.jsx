'use client';

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
        {/* Text content card */}
        <motion.div variants={itemVariants} className="glass-card text-slate-700 p-8 rounded-2xl shadow-xl border border-white/20 relative animate-border-glow">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[--color-primary] mb-6">
            About Us
          </h2>
          <p className="text-lg font-body leading-relaxed mb-4 text-black">
            At <span className="font-bold text-secondary">RIFAN</span>, we go beyond water. 
            Our mission is to deliver premium bottled water customized to your brand, 
            whether for businesses, weddings, or events.
          </p>
          <p className="text-lg font-body leading-relaxed mb-4 text-black">
            We source our water from the pristine springs of 
            <span className="font-bold text-secondary"> Mt. Kenya</span>, 
            and purify it through advanced reverse osmosis technology. 
            Every bottle reflects our promise of <span className="text-secondary font-semibold">
            quality, freshness, and trust
            </span>.
          </p>
          <p className="text-lg font-body leading-relaxed mb-4 text-black">
            With attention to detail and dedication to service, 
            we ensure your brand leaves a lasting impression on every guest.
          </p>
        </motion.div>

        {/* Image side with animated card */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl glass-card animate-pulse-slow"
          variants={itemVariants}
        >
          <img
            src="/about-water.jpeg"
            alt="Pure bottled water from Mt. Kenya"
            width={800}
            height={600}
            className="w-full h-auto object-cover transform transition-transform duration-500 rounded-3xl"
          />
          {/* Subtle overlay glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[--color-primary]/30 via-transparent to-transparent"></div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default About;
