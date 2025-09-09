import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Services', to: 'services' },
    { title: 'Our Work', to: 'work' },
    { title: 'Process', to: 'process' },
    { title: 'Testimonials', to: 'testimonials' },
    { title: 'Contact', to: 'contact' },
  ];

  // Conditional classes for text and icon color
  const linkTextColor = scroll ? 'text-primary' : 'text-white';
  const iconColor = scroll ? 'text-primary' : 'text-white';

  return (
    <header className={`fixed w-full top-0 z-50 transition-colors duration-300 ${scroll ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src="/logo.png" alt="RIFAN logo" className="h-16 w-auto transition-transform duration-300 hover:scale-105" />
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <a 
                    href={`#${link.to}`} 
                    className={`${linkTextColor} hover:text-secondary transition-colors duration-300 font-sub relative group`}
                  >
                    {link.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <div onClick={handleNav} className={`md:hidden z-10 cursor-pointer transition-transform duration-300 ${iconColor}`}>
            {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center transition-transform duration-300 ${nav ? 'transform-none' : '-translate-y-full'}`}>
            <ul className="text-center">
              {navLinks.map((link) => (
                <li key={link.to} className="py-4 animate-fade-in-up">
                  <a href={`#${link.to}`} onClick={() => setNav(false)} className="text-2xl text-white hover:text-secondary transition-colors duration-300 font-sub">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
