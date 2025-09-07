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
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-2">RIFAN</h3>
            <p className="text-neutral-light font-sub">&copy; {new Date().getFullYear()} RIFAN. All Rights Reserved.</p>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h4 className="font-bold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.to}>
                  <a href={`#${link.to}`} className="hover:text-secondary transition-colors duration-300 font-sub">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h4 className="font-bold font-heading mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.to} className="hover:text-secondary transition-colors duration-300">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
