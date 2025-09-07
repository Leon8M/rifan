import Section from '../components/Section';
import { motion } from 'framer-motion';

const Contact = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Section id="contact" className="bg-neutral-light">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold text-primary">Let's Talk</h2>
        <p className="text-lg text-gray-600 font-sub mt-2">Have a question or want to get started? Drop us a line.</p>
      </div>
      <motion.div 
        className="max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
      >
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-sub">Name</label>
            <input type="text" id="name" className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-sub">Email</label>
            <input type="email" id="email" className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 font-sub">Service of Interest</label>
            <select id="service" className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary">
              <option>Corporate Events</option>
              <option>Weddings & Parties</option>
              <option>Clubs & Organizations</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-sub">Message</label>
            <textarea id="message" rows="4" className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-blue-400 transition duration-300 text-lg font-sub">
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </Section>
  );
};

export default Contact;
