import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaPencilRuler, FaTint, FaShippingFast } from 'react-icons/fa';

const processSteps = [
  {
    icon: <FaPencilRuler size={32} />,
    title: 'Design & Consultation',
    description: 'We collaborate to create a custom label design that embodies your brand’s unique identity and vision.',
  },
  {
    icon: <FaTint size={32} />,
    title: 'Production & Quality',
    description: 'Our team meticulously produces and applies your custom labels to our premium bottled water, ensuring perfection.',
  },
  {
    icon: <FaShippingFast size={32} />,
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
    <Section id="work" className="bg-neutral-light py-20 relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-4">
          Our Work Process
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-body">
          Turning your brand vision into a tangible product.
        </p>
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
            className="relative bg-white px-8 py-12 rounded-2xl shadow-lg text-center border border-transparent
                       transition-all duration-500 hover:shadow-2xl max-w-sm mx-auto"
            variants={itemVariants}
            whileHover={{
              rotateX: -5,
              rotateY: 5,
              scale: 1.05,
              transition: { type: "spring", stiffness: 300, damping: 15 }
            }}
          >
            {/* Faint step number as background watermark */}
            <div className="absolute top-6 right-8 text-7xl font-extrabold text-primary/5 select-none">
              {index + 1}
            </div>

            {/* Icon with soft bubble */}
            <div className="flex justify-center mb-6 relative z-10">
              <div className="p-6 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 backdrop-blur-sm shadow-inner">
                <div className="text-primary/80">{step.icon}</div>
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
