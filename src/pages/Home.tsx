import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Scissors, ShieldCheck, Star, Clock, ArrowRight, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/garrison-hero/1920/1080?grayscale&blur=2" 
            alt="Garrison Barbershop" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/40 to-ink"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 border-2 border-gold rotate-45 flex items-center justify-center">
                <span className="font-serif text-4xl font-bold text-gold -rotate-45">G</span>
              </div>
            </div>
            <span className="text-gold uppercase tracking-[0.6em] text-xs font-bold mb-6 block">The Elite Standard</span>
            <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-tight tracking-tighter">
              GARRISON<br />
              <span className="italic text-gold-gradient font-serif font-normal">Est. 2018</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
              Precision grooming for the modern gentleman. <br />
              Where discipline meets craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/booking" 
                className="bg-gold hover:bg-gold-hover text-ink px-12 py-5 font-bold tracking-widest uppercase transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Book Appointment
              </Link>
              <Link 
                to="/services" 
                className="border border-white/20 hover:border-gold hover:text-gold px-12 py-5 font-bold tracking-widest uppercase transition-all backdrop-blur-sm"
              >
                Our Services
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
      <section className="py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white h-full"></div>)}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {[
              { icon: Scissors, title: "Mastery", desc: "Elite barbers with a decade of precision experience." },
              { icon: ShieldCheck, title: "Discipline", desc: "Military-grade attention to every single detail." },
              { icon: Star, title: "Prestige", desc: "Exclusively using the world's finest grooming kits." },
              { icon: Clock, title: "Punctual", desc: "We respect your time as much as your style." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-none border border-gold/20 flex items-center justify-center mx-auto mb-8 group-hover:bg-gold group-hover:text-ink transition-all duration-500 rotate-45">
                  <item.icon size={28} className="-rotate-45" />
                </div>
                <h3 className="text-xl font-serif mb-4 uppercase tracking-[0.2em]">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">The Menu</span>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-tighter">REFINED <br />GROOMING.</h2>
              <p className="text-gray-500 text-lg">From classic cuts to full grooming experiences, we define the standard of excellence.</p>
            </div>
            <Link to="/services" className="flex items-center gap-3 text-gold uppercase tracking-[0.3em] text-xs font-bold hover:gap-5 transition-all border-b border-gold/30 pb-2">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "The Garrison Cut", price: "£45", img: "barber-chair" },
              { title: "Signature Fade", price: "£35", img: "sharp-fade" },
              { title: "Full Grooming", price: "£75", img: "grooming-kit" }
            ].map((service, i) => (
              <div key={i} className="group relative overflow-hidden aspect-[3/4] border border-white/5">
                <img 
                  src={`https://picsum.photos/seed/${service.img}/800/1100?grayscale`} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl font-serif mb-3 uppercase tracking-tight">{service.title}</h3>
                      <span className="text-gold font-bold tracking-widest">{service.price}</span>
                    </div>
                    <Link to="/booking" className="w-14 h-14 bg-gold/10 backdrop-blur-md border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-ink transition-all">
                      <Scissors size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Instagram className="text-gold mx-auto mb-6" size={40} />
            <h2 className="text-4xl font-bold uppercase tracking-[0.3em] mb-4">FOLLOW THE DISCIPLINE</h2>
            <a 
              href="https://www.instagram.com/garrisonbarbers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold transition-colors uppercase tracking-widest text-sm font-bold"
            >
              @garrisonbarbers
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <a 
                key={i} 
                href="https://www.instagram.com/garrisonbarbers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden group relative"
              >
                <img 
                  src={`https://picsum.photos/seed/insta-${i}/600/600?grayscale`} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-forest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-[0.4em]">TRUSTED BY THE ELITE</h2>
            <div className="w-32 h-px bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: "James Wilson", role: "CEO", text: "Garrison is more than a barbershop. It's a ritual. The precision is unmatched in the city." },
              { name: "Marcus Thorne", role: "Architect", text: "I've tried every high-end shop. Garrison is the only one that gets the fade right every single time." },
              { name: "David Chen", role: "Creative Director", text: "The atmosphere, the discipline, the result. It's the standard I expect for my grooming." }
            ].map((t, i) => (
              <div key={i} className="glass-card p-12 relative border-gold/10">
                <div className="flex text-gold mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-10 leading-relaxed text-lg">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-widest text-sm">{t.name}</h4>
                    <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-ink text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold font-serif select-none">GARRISON</div>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold mb-12 uppercase tracking-tighter">JOIN THE <br /><span className="text-gold-gradient">GARRISON.</span></h2>
          <p className="text-gray-500 mb-16 text-xl max-w-2xl mx-auto font-light leading-relaxed">Limited slots available this week. Secure your appointment now to avoid disappointment.</p>
          <Link 
            to="/booking" 
            className="inline-block bg-gold hover:bg-gold-hover text-ink px-16 py-7 font-bold tracking-[0.3em] uppercase transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
          >
            Book Your Cut
          </Link>
        </div>
      </section>
    </div>
  );
}
