import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaComments, FaPaintBrush, FaTruck, FaCheckCircle } from 'react-icons/fa';

const processSteps = [
  { icon: <FaComments size={40} className="text-secondary" />, title: '1. Consultation', description: 'We start with a conversation to understand your needs, brand, and event.' },
  { icon: <FaPaintBrush size={40} className="text-secondary" />, title: '2. Design', description: 'Our team creates a custom label design for your approval.' },
  { icon: <FaTruck size={40} className="text-secondary" />, title: '3. Production & Delivery', description: 'We produce and deliver your custom-branded water on time.' },
  { icon: <FaCheckCircle size={40} className="text-secondary" />, title: '4. Enjoy', description: 'Enjoy your premium, personalized water at your event.' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Process = () => {
  return (
    <Section id="process" className="bg-neutral-light">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold text-primary">Our Process</h2>
        <p className="text-lg text-gray-600 font-sub mt-2">Simple, from start to finish.</p>
      </div>
      <motion.div 
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-tertiary transform -translate-y-1/2"></div>
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div key={index} className="text-center relative" variants={itemVariants}>
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">{step.title}</h3>
              <p className="text-gray-600 font-body">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Process;
