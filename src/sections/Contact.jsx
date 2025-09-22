'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle, XCircle } from 'lucide-react';
import Button from './../components/Button';

// SuccessModal Component - A self-contained modal for success/error messages
const SuccessModal = ({ isSuccess, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, scale: 0.8, y: 20 }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
    >
      <div className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-sm w-full">
        {isSuccess ? (
          <CheckCircle className="mx-auto h-16 w-16 text-[--color-tertiary] mb-4 animate-bounce-in" />
        ) : (
          <XCircle className="mx-auto h-16 w-16 text-red-500 mb-4 animate-bounce-in" />
        )}
        <h3 className="text-2xl font-heading font-bold text-[--color-primary] mb-4">
          {isSuccess ? 'Message Sent!' : 'Error'}
        </h3>
        <p className="text-[--color-primary] font-body mb-8">
          {isSuccess
            ? 'Thank you for contacting us. We will get back to you shortly.'
            : 'Something went wrong. Please try again later.'}
        </p>
        <Button onClick={onClose} text="Close" variant="secondary" />
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setIsSuccess(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
      setShowModal(true);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-[--color-neutral-light] overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-heading font-extrabold text-[--color-primary] text-center mb-12"
        >
          Let's Talk
        </motion.h2>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto glass-card p-8 rounded-3xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="user_name" className="block text-sm font-sub mb-2 text-[--color-primary]">Name</label>
              <input 
                type="text" 
                id="user_name" 
                name="name"
                className="w-full px-4 py-3 rounded-lg bg-white/50 text-[--color-primary] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[--color-secondary] border border-white/20 transition-all duration-300"
                placeholder="Your Name"
                required
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="user_email" className="block text-sm font-sub mb-2 text-[--color-primary]">Email</label>
              <input 
                type="email" 
                id="user_email" 
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-white/50 text-[--color-primary] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[--color-secondary] border border-white/20 transition-all duration-300" 
                placeholder="you@example.com"
                required
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="md:col-span-2">
              <label htmlFor="service" className="block text-sm font-sub mb-2 text-[--color-primary]">Service of Interest</label>
              <div className="relative">
                <select 
                  id="service" 
                  name="service"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 text-[--color-primary] appearance-none focus:outline-none focus:ring-2 focus:ring-[--color-secondary] border border-white/20 transition-all duration-300"
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="Weddings">Weddings</option>
                  <option value="Events">Events</option>
                  <option value="Clubs & Organizations">Clubs & Organizations</option>
                </select>
                {/* Custom dropdown arrow to ensure visibility */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[--color-primary]">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-sub mb-2 text-[--color-primary]">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={5} 
                className="w-full px-4 py-3 rounded-lg bg-white/50 text-[--color-primary] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[--color-secondary] border border-white/20 transition-all duration-300"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="text-center mt-8">
            <Button 
              text={isSubmitting ? 'Sending...' : 'Submit Inquiry'} 
              variant="secondary"
              type="submit"
            />
          </motion.div>
        </motion.form>
      </div>
      
      <AnimatePresence>
        {showModal && (
          <SuccessModal isSuccess={isSuccess} onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
