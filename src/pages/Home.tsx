import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Scissors, ShieldCheck, Star, Clock, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/barber-shop/1920/1080?grayscale" 
            alt="Garrison Barbershop" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.5em] text-sm font-bold mb-6 block">Est. 2018</span>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              PRECISION IS OUR <br />
              <span className="italic text-gold-gradient">DISCIPLINE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Experience the elite standard of grooming. Sharp lines, refined style, zero compromise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/booking" 
                className="bg-gold hover:bg-gold-hover text-ink px-10 py-5 font-bold tracking-widest uppercase transition-all transform hover:scale-105"
              >
                Secure Your Slot
              </Link>
              <Link 
                to="/services" 
                className="border border-white/20 hover:border-gold hover:text-gold px-10 py-5 font-bold tracking-widest uppercase transition-all"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
        >
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Scissors, title: "Master Craft", desc: "Barbers with 10+ years of elite experience." },
              { icon: ShieldCheck, title: "Sharp Precision", desc: "Military-grade attention to every detail." },
              { icon: Star, title: "Premium Products", desc: "Exclusively using high-end grooming kits." },
              { icon: Clock, title: "Respect Time", desc: "Punctual service for the modern gentleman." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:text-ink transition-all duration-500">
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-serif mb-3 uppercase tracking-widest">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Our Expertise</span>
              <h2 className="text-5xl font-bold mb-6">REFINED GROOMING <br />SERVICES.</h2>
              <p className="text-gray-500">From classic cuts to full grooming experiences, we define the standard of excellence.</p>
            </div>
            <Link to="/services" className="flex items-center gap-2 text-gold uppercase tracking-widest text-sm font-bold hover:gap-4 transition-all">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Garrison Cut", price: "£45", img: "barber-cut" },
              { title: "Signature Fade", price: "£35", img: "fade" },
              { title: "Full Grooming", price: "£75", img: "grooming" }
            ].map((service, i) => (
              <div key={i} className="group relative overflow-hidden aspect-[4/5]">
                <img 
                  src={`https://picsum.photos/seed/${service.img}/800/1000`} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                      <span className="text-gold font-bold">{service.price}</span>
                    </div>
                    <Link to="/booking" className="w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-gold hover:text-ink transition-all">
                      <Scissors size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-forest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 uppercase tracking-widest">TRUSTED BY THE ELITE</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "James Wilson", role: "CEO", text: "Garrison is more than a barbershop. It's a ritual. The precision is unmatched in London." },
              { name: "Marcus Thorne", role: "Architect", text: "I've tried every high-end shop in the city. Garrison is the only one that gets the fade right every single time." },
              { name: "David Chen", role: "Creative Director", text: "The atmosphere, the discipline, the result. It's the standard I expect for my grooming." }
            ].map((t, i) => (
              <div key={i} className="glass-card p-10 relative">
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-sm">{t.name}</h4>
                  <span className="text-xs text-gold uppercase tracking-widest">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-ink text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-10">READY TO JOIN <br />THE <span className="text-gold-gradient">GARRISON?</span></h2>
          <p className="text-gray-500 mb-12 text-lg">Limited slots available this week. Secure your appointment now to avoid disappointment.</p>
          <Link 
            to="/booking" 
            className="inline-block bg-gold hover:bg-gold-hover text-ink px-12 py-6 font-bold tracking-[0.2em] uppercase transition-all transform hover:scale-105"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
