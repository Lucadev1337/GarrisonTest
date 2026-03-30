import { Link } from 'react-router-dom';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <Scissors className="text-gold w-6 h-6" />
            <span className="font-serif text-xl font-bold tracking-widest text-white uppercase">Garrison</span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed">
            The elite standard of grooming. Precision, discipline, and craftsmanship in every cut.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-white mb-6 uppercase tracking-widest text-sm">Navigation</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Lookbook</Link></li>
            <li><Link to="/booking" className="hover:text-gold transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-white mb-6 uppercase tracking-widest text-sm">Hours</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex justify-between"><span>Mon - Fri</span> <span>09:00 - 20:00</span></li>
            <li className="flex justify-between"><span>Saturday</span> <span>10:00 - 18:00</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-white mb-6 uppercase tracking-widest text-sm">Connect</h4>
          <div className="flex gap-4 mb-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-ink transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-ink transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-ink transition-all">
              <Twitter size={18} />
            </a>
          </div>
          <p className="text-xs text-gray-600">
            123 Precision Way, London, UK<br />
            +44 20 7123 4567
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-600 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Garrison Barbershop. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-xs text-gray-600 uppercase tracking-widest">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
