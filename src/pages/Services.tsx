import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Scissors, Check, ArrowRight } from 'lucide-react';

const services = [
  {
    category: "Haircutting",
    items: [
      { name: "The Garrison Cut", price: "£45", desc: "Our signature precision haircut, finished with a hot towel and straight razor neck shave.", duration: "45 min" },
      { name: "Signature Fade", price: "£35", desc: "Expert skin or taper fade with meticulous blending and sharp line-up.", duration: "40 min" },
      { name: "Buzz Cut & Line-up", price: "£25", desc: "Uniform length all over with a sharp, defined hairline finish.", duration: "20 min" },
      { name: "Long Hair Sculpt", price: "£55", desc: "Specialized cutting for longer styles, maintaining flow and texture.", duration: "60 min" }
    ]
  },
  {
    category: "Beard & Shave",
    items: [
      { name: "Beard Sculpt", price: "£30", desc: "Full beard shaping, length reduction, and razor line-up with premium oils.", duration: "30 min" },
      { name: "Traditional Hot Towel Shave", price: "£40", desc: "Multi-step luxury shave experience with hot towels and straight razor.", duration: "45 min" },
      { name: "Beard Trim & Maintenance", price: "£20", desc: "Quick tidy up and line-up for the busy gentleman.", duration: "15 min" }
    ]
  },
  {
    category: "Elite Bundles",
    items: [
      { name: "The Full Garrison", price: "£70", desc: "Signature Cut + Beard Sculpt. The complete transformation.", duration: "75 min", popular: true },
      { name: "The Executive", price: "£80", desc: "Signature Cut + Hot Towel Shave. Ultimate luxury.", duration: "90 min" },
      { name: "The Weekly Ritual", price: "£50", desc: "Signature Fade + Beard Maintenance. Keep it sharp.", duration: "50 min" }
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 border border-gold rotate-45 flex items-center justify-center mx-auto mb-8"
          >
            <Scissors className="text-gold -rotate-45" size={24} />
          </motion.div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.6em] text-xs font-bold mb-6 block"
          >
            Menu of Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-bold mb-10 uppercase tracking-tighter"
          >
            THE <span className="text-gold-gradient italic font-serif font-normal">DISCIPLINE.</span>
          </motion.h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl font-light">
            Transparent pricing. Uncompromising quality. <br />
            Select your grooming ritual.
          </p>
        </div>

        <div className="space-y-40">
          {services.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-8 mb-16">
                <h2 className="text-4xl font-serif uppercase tracking-[0.2em]">{section.category}</h2>
                <div className="flex-grow h-px bg-gradient-to-r from-gold/30 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
                {section.items.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`relative p-10 border border-white/5 hover:border-gold/30 transition-all group ${item.popular ? 'bg-forest/10 border-gold/20' : 'bg-charcoal/20'}`}
                  >
                    {item.popular && (
                      <span className="absolute -top-3 left-10 bg-gold text-ink text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-1">
                        Most Requested
                      </span>
                    )}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-gold transition-colors">{item.name}</h3>
                        <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mt-2 block">{item.duration}</span>
                      </div>
                      <span className="text-3xl font-serif text-gold-gradient">{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-md">
                      {item.desc}
                    </p>
                    <Link 
                      to="/booking" 
                      className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:text-gold transition-all group-hover:gap-5"
                    >
                      Book This Service <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Membership Teaser */}
        <div className="mt-40 p-20 bg-gold text-ink text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => <div key={i} className="border-r border-ink h-full"></div>)}
            </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 uppercase tracking-tighter">THE GARRISON CIRCLE</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg font-medium leading-relaxed">
              Join our exclusive membership for priority booking, complimentary drinks, and monthly maintenance at a fixed rate.
            </p>
            <button className="bg-ink text-white px-16 py-6 font-bold uppercase tracking-[0.3em] hover:bg-ink/90 transition-all shadow-xl">
              Inquire About Membership
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
