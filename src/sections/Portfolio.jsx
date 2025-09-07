import Section from '../components/Section';
import { motion } from 'framer-motion';

const portfolioItems = [
  { img: 'https://images.pexels.com/photos/605408/pexels-photo-605408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Corporate Branding' },
  { img: 'https://images.pexels.com/photos/1300327/pexels-photo-1300327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Wedding Favors' },
  { img: 'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Fitness Club' },
  { img: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Music Festival' },
  { img: 'https://images.pexels.com/photos/2531180/pexels-photo-2531180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Charity Event' },
  { img: 'https://images.pexels.com/photos/2531188/pexels-photo-2531188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Hotel & Spa' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
};

const Portfolio = () => {
  return (
    <Section id="work">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold text-primary">Our Work</h2>
        <p className="text-lg text-gray-600 font-sub mt-2">A glimpse into our custom branding.</p>
      </div>
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {portfolioItems.map((item, index) => (
          <motion.div 
            key={index} 
            className="relative rounded-lg overflow-hidden shadow-lg group"
            variants={itemVariants}
          >
            <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-heading">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Portfolio;
