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
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-neutral-light py-20">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-2">Testimonials</h2>
        <p className="text-lg md:text-xl text-gray-600 font-body mt-2">What our clients are saying.</p>
      </div>
      <motion.div 
        className="grid md:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-10 rounded-xl shadow-lg transition-all-300 hover:scale-105 hover:shadow-2xl"
            variants={itemVariants}
          >
            <div className="flex justify-start mb-6">
              <div className="text-primary opacity-20">
                <FaQuoteLeft size={40} />
              </div>
            </div>
            <p className="text-gray-700 font-body italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
            <div className="text-left">
              <p className="font-bold text-primary font-heading">{testimonial.client}</p>
              <p className="text-gray-500 font-sub text-sm">{testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Testimonials;
