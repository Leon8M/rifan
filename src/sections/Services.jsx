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
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  return (
    <Section id="services" className="bg-neutral-light py-20">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-2">Our Services</h2>
        <p className="text-lg md:text-xl text-gray-600 font-body mt-2">Customized water for every occasion.</p>
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
            className="bg-white p-10 rounded-xl shadow-lg text-center transition-all-300 hover:scale-105 hover:shadow-2xl"
            variants={itemVariants}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-secondary/20 transition-all-300 hover:bg-secondary/40 text-secondary">
                {service.icon}
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">{service.title}</h3>
            <p className="text-gray-600 font-body leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Services;
