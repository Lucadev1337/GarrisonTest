import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Scissors, Check } from 'lucide-react';

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
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
          >
            Menu of Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 uppercase"
          >
            ELITE GROOMING
          </motion.h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Transparent pricing. Uncompromising quality. Choose your discipline.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-3xl font-serif uppercase tracking-widest">{section.category}</h2>
                <div className="flex-grow h-px bg-white/10"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
                {section.items.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative p-8 border border-white/5 hover:border-gold/30 transition-all group ${item.popular ? 'bg-forest/20 border-gold/20' : 'bg-charcoal/30'}`}
                  >
                    {item.popular && (
                      <span className="absolute -top-3 left-8 bg-gold text-ink text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                        Most Requested
                      </span>
                    )}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider group-hover:text-gold transition-colors">{item.name}</h3>
                        <span className="text-xs text-gray-500 uppercase tracking-widest">{item.duration}</span>
                      </div>
                      <span className="text-2xl font-serif text-gold">{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      {item.desc}
                    </p>
                    <Link 
                      to="/booking" 
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-gold transition-colors"
                    >
                      Book This Service <Scissors size={14} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Membership Teaser */}
        <div className="mt-32 p-12 bg-gold text-ink text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="grid grid-cols-6 h-full">
              {[...Array(12)].map((_, i) => <div key={i} className="border-r border-ink h-full"></div>)}
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight relative z-10">The Garrison Membership</h2>
          <p className="max-w-2xl mx-auto mb-10 font-medium relative z-10">
            Join our exclusive circle for priority booking, complimentary drinks, and monthly maintenance at a fixed rate.
          </p>
          <button className="bg-ink text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-ink/90 transition-all relative z-10">
            Inquire About Membership
          </button>
        </div>
      </section>
    </div>
  );
}
