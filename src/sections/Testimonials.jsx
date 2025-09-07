import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: 'The custom water bottles were a huge hit at our conference. The quality and service from RIFAN were exceptional.',
    client: 'John Doe',
    company: 'Tech Corp',
  },
  {
    quote: 'RIFAN added such a classy, personal touch to our wedding. Our guests loved the custom labels!',
    client: 'Jane Smith',
    company: 'Newlyweds',
  },
  {
    quote: 'Fast, reliable, and a fantastic product. Our club members were thrilled with the branded water bottles.',
    client: 'Sam Wilson',
    company: 'City Runners Club',
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

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold text-primary">Testimonials</h2>
        <p className="text-lg text-gray-600 font-sub mt-2">What our clients are saying.</p>
      </div>
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="bg-neutral-light p-8 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <FaQuoteLeft className="text-primary mb-4" size={30} />
            <p className="text-gray-700 font-body italic mb-4">{testimonial.quote}</p>
            <p className="font-bold text-primary font-heading">{testimonial.client}</p>
            <p className="text-gray-500 font-sub">{testimonial.company}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Testimonials;
