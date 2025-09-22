import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: 'The custom water bottles were a huge hit at our conference. The quality and service from RIFAN were exceptional.',
    client: 'Michael Mwenda',
    company: 'Tech Innovators Ltd',
  },
  {
    quote: 'RIFAN added such a classy, personal touch to our wedding. Our guests loved the custom labels!',
    client: 'Aisha and John',
    company: 'Newlyweds',
  },
  {
    quote: 'Fast, reliable, and a fantastic product. Our club members were thrilled with the branded water bottles.',
    client: 'Mary Kamau',
    company: 'City Sports Club',
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
    <Section id="testimonials" className="bg-gradient-to-b from-neutral-light to-white py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-4">Testimonials</h2>
        <p className="text-lg md:text-xl text-gray-600 font-body">What our clients are saying.</p>
      </div>
      <motion.div 
        className="grid md:grid-cols-3 gap-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="relative bg-white p-10 rounded-2xl shadow-lg border border-transparent hover:border-accent/30 hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
          >
            {/* Floating quote mark */}
            <FaQuoteLeft className="absolute -top-6 -left-4 text-primary/10 text-6xl" />

            <p className="text-gray-700 font-body italic mb-6 leading-relaxed relative z-10">
              "{testimonial.quote}"
            </p>
            <div className="text-left relative z-10">
              <p className="font-bold text-primary font-heading relative inline-block after:content-[''] after:block after:h-0.5 after:bg-accent after:mt-1 after:rounded-full">
                {testimonial.client}
              </p>
              <p className="text-gray-500 font-sub text-sm">{testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Testimonials;
