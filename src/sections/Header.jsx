import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Services", to: "services" },
    { title: "Our Work", to: "work" },
    { title: "Process", to: "process" },
    { title: "Testimonials", to: "testimonials" },
    { title: "Contact", to: "contact" },
  ];

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 14 } }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 300, damping: 25 } 
    },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed w-full top-0 z-50 transition-all duration-500 rounded-b-3xl ${
        scroll ? "bg-white/80 backdrop-blur-lg shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="RIFAN logo"
              className={`h-16 w-auto transition-transform duration-300 hover:scale-105 drop-shadow-lg ${
                scroll ? "[filter:drop-shadow(0_0_2px_#003366)]" : "[filter:drop-shadow(0_0_2px_white)]"
              }`}
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <a
                    href={`#${link.to}`}
                    className={`relative font-sub font-medium ${
                      scroll ? "text-primary" : "text-white"
                    } hover:text-secondary transition-colors duration-300 group`}
                  >
                    {link.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <div
            onClick={handleNav}
            className={`md:hidden z-20 cursor-pointer transition-colors duration-300 ${
              scroll ? "text-primary" : "text-white"
            }`}
          >
            {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
          </div>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {nav && (
              <motion.div
                key="mobile-menu"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:hidden absolute top-20 right-4 w-64 glass-card p-6 transform origin-top-right rounded-2xl"
              >
                <ul className="space-y-4 text-right">
                  {navLinks.map((link) => (
                    <motion.li 
                      key={link.to} 
                      initial={{ opacity: 0, x: 20 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <a
                        href={`#${link.to}`}
                        onClick={() => setNav(false)}
                        className="text-lg font-sub text-primary hover:text-secondary transition-colors duration-300"
                      >
                        {link.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
