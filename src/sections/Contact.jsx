import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Section id="contact" className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
          Let’s Talk
        </h2>
        <p className="text-lg text-gray-600 font-body mt-3">
          Have a question or want to get started? Drop us a line.
        </p>
      </div>

      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
      >
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-full bg-primary/10 text-primary shadow-inner">
              <FaEnvelope size={24} />
            </div>
            <p className="text-gray-700 font-body">info@brandwater.co.ke</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-full bg-primary/10 text-primary shadow-inner">
              <FaPhoneAlt size={24} />
            </div>
            <p className="text-gray-700 font-body">+254 700 123 456</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-full bg-primary/10 text-primary shadow-inner">
              <FaMapMarkerAlt size={24} />
            </div>
            <p className="text-gray-700 font-body">
              Nairobi, Kenya
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-100">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-body">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-secondary/60"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-body">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-secondary/60"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 font-body">
              Service of Interest
            </label>
            <select
              id="service"
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-secondary/60"
            >
              <option>Corporate Events</option>
              <option>Weddings & Parties</option>
              <option>Clubs & Organizations</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-body">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-secondary/60"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-secondary text-white font-bold py-3 px-10 rounded-full 
                         hover:bg-blue-400 transition duration-300 text-lg font-body shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </Section>
  );
};

export default Contact;
