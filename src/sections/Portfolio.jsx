import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaPencilRuler, FaTint, FaShippingFast } from 'react-icons/fa';

const processSteps = [
  {
    icon: <FaPencilRuler size={50} />,
    title: 'Design & Consultation',
    description: 'We collaborate to create a custom label design that embodies your brand’s unique identity and vision.',
  },
  {
    icon: <FaTint size={50} />,
    title: 'Production & Quality',
    description: 'Our team meticulously produces and applies your custom labels to our premium bottled water, ensuring perfection.',
  },
  {
    icon: <FaShippingFast size={50} />,
    title: 'Delivery & Distribution',
    description: 'Your branded water is carefully delivered to your location, ready to impress at your next event.',
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
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Portfolio = () => {
  return (
    <Section id="work" className="bg-neutral-light py-20">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-2">Our Work Process</h2>
        <p className="text-lg md:text-xl text-gray-600 font-body mt-2">Turning your brand vision into a tangible product.</p>
      </div>
      <motion.div 
        className="grid md:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {processSteps.map((step, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-10 rounded-xl shadow-lg text-center transition-all-300 hover:scale-105 hover:shadow-2xl"
            variants={itemVariants}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-secondary/20 transition-all-300 hover:bg-secondary/40 text-secondary">
                {step.icon}
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">{step.title}</h3>
            <p className="text-gray-600 font-body leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Portfolio;
