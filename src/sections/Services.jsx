import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaGlassWhiskey, FaBirthdayCake, FaUsers } from 'react-icons/fa';

const services = [
  {
    icon: <FaGlassWhiskey className="text-secondary" size={50} />,
    title: 'Corporate Events',
    description: 'Impress your clients and colleagues with custom-branded water bottles at your next corporate event.',
  },
  {
    icon: <FaBirthdayCake className="text-secondary" size={50} />,
    title: 'Weddings & Parties',
    description: 'Add a personal touch to your special day with beautifully designed water bottles for your guests.',
  },
  {
    icon: <FaUsers className="text-secondary" size={50} />,
    title: 'Clubs & Organizations',
    description: 'Showcase your brand or club pride with custom labels on refreshing bottled water.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <Section id="services" className="bg-neutral-light">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold text-primary">Our Services</h2>
        <p className="text-lg text-gray-600 font-sub mt-2">Customized water for every occasion.</p>
      </div>
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-8 rounded-lg shadow-lg text-center"
            variants={itemVariants}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-2">{service.title}</h3>
            <p className="text-gray-600 font-body">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Services;
