import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const navLinks = [
    { title: 'Services', to: 'services' },
    { title: 'Our Work', to: 'work' },
    { title: 'Process', to: 'process' },
    { title: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, to: '#' },
    { icon: <FaTwitter />, to: '#' },
    { icon: <FaInstagram />, to: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-primary via-tertiary to-secondary text-white overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          {/* About */}
          <div>
            <h3 className="text-3xl font-heading font-bold mb-3">RIFAN</h3>
            <p className="text-gray-300 font-sub">
              &copy; {new Date().getFullYear()} RIFAN. All Rights Reserved.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold font-heading mb-4 text-xl">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <a
                    href={`#${link.to}`}
                    className="hover:text-accent transition-colors duration-300 font-sub"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold font-heading mb-4 text-xl">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.to}
                  className="hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
          Built with ❤️ using React & TailwindCSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
