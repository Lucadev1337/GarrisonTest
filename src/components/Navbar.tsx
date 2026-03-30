import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Scissors } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-gold rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
            <span className="font-serif text-xl font-bold text-gold relative z-10">G</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-[0.2em] text-white uppercase leading-none">Garrison</span>
            <span className="text-[8px] tracking-[0.4em] text-gold uppercase font-bold">Barbershop</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-gold ${
                location.pathname === link.path ? 'text-gold' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/booking" 
            className="bg-gold hover:bg-gold-hover text-ink px-6 py-2.5 rounded-none font-bold text-xs tracking-widest uppercase transition-all transform hover:scale-105 active:scale-95"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-charcoal border-b border-white/10 p-6 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-serif tracking-widest uppercase ${
                  location.pathname === link.path ? 'text-gold' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/booking" 
              onClick={() => setIsOpen(false)}
              className="bg-gold text-ink text-center py-4 font-bold tracking-widest uppercase"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
