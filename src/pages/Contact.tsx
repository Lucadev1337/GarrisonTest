import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase">CONTACT US</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Located in the heart of the city. Visit us for the elite standard of grooming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-charcoal border border-white/10 flex items-center justify-center text-gold shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Location</h3>
                <p className="text-gray-500 leading-relaxed">
                  123 Precision Way, London, UK<br />
                  EC1A 1BB
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-charcoal border border-white/10 flex items-center justify-center text-gold shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Phone</h3>
                <p className="text-gray-500 leading-relaxed">
                  +44 20 7123 4567
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-charcoal border border-white/10 flex items-center justify-center text-gold shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Email</h3>
                <p className="text-gray-500 leading-relaxed">
                  hq@garrisonbarbers.com
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-charcoal border border-white/10 flex items-center justify-center text-gold shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Hours</h3>
                <div className="text-gray-500 space-y-1">
                  <p className="flex justify-between w-64"><span>Mon - Fri</span> <span>09:00 - 20:00</span></p>
                  <p className="flex justify-between w-64"><span>Saturday</span> <span>10:00 - 18:00</span></p>
                  <p className="flex justify-between w-64"><span>Sunday</span> <span>Closed</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-10">
            <h3 className="text-2xl font-serif uppercase tracking-widest mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold outline-none" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold outline-none resize-none"></textarea>
              </div>
              <button className="w-full bg-white text-ink py-5 font-bold uppercase tracking-widest hover:bg-gold transition-all flex items-center justify-center gap-2">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-32 h-[500px] bg-charcoal border border-white/10 relative overflow-hidden group">
          <img 
            src="https://picsum.photos/seed/london-map/1920/1080?grayscale" 
            alt="Location Map" 
            className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-ink/80 backdrop-blur-md border border-gold/30 p-8 text-center">
              <MapPin className="text-gold mx-auto mb-4" size={32} />
              <h4 className="text-xl font-bold uppercase tracking-widest mb-2">GARRISON HQ</h4>
              <p className="text-gray-400 text-sm mb-6">123 Precision Way, London</p>
              <button className="text-gold uppercase text-xs font-bold tracking-widest border-b border-gold pb-1 hover:text-white hover:border-white transition-all">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
