import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaGlassWhiskey, FaBirthdayCake, FaUsers } from 'react-icons/fa';

const services = [
  {
    icon: <FaGlassWhiskey size={50} />,
    title: 'Corporate Events',
    description: 'Impress your clients and colleagues with custom-branded water bottles at your next corporate event.',
  },
  {
    icon: <FaBirthdayCake size={50} />,
    title: 'Weddings & Parties',
    description: 'Add a personal touch to your special day with beautifully designed water bottles for your guests.',
  },
  {
    icon: <FaUsers size={50} />,
    title: 'Clubs & Organizations',
    description: 'Showcase your brand or club pride with custom labels on refreshing bottled water.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  return (
    <Section id="services" className="relative py-24 bg-neutral-light">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-4">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-body max-w-2xl mx-auto">
          Customized water for <span className="text-tertiary font-semibold">every occasion</span>.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative group bg-white p-10 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            variants={itemVariants}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/20 to-tertiary/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="p-6 rounded-full bg-secondary/10 group-hover:bg-secondary/30 transition duration-300 text-secondary mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Services;
