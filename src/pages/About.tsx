import { motion } from 'motion/react';
import { Scissors, Award, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-tight uppercase">
              NOT JUST A CUT. <br />
              <span className="text-gold-gradient italic">A DISCIPLINE.</span>
            </h1>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Garrison was founded on the principle that grooming is a discipline, not a chore. We saw a world of generic, rushed haircuts and decided to build a sanctuary for the man who values precision.
              </p>
              <p>
                Inspired by the sharp lines of military uniforms and the timeless elegance of London's finest gentlemen's clubs, we've created a space where craftsmanship is the only currency.
              </p>
              <p className="text-white font-medium italic">
                "We don't follow trends. We define standards."
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-gold/30"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-gold/30"></div>
            <img 
              src="https://picsum.photos/seed/barber-craft/800/1000?grayscale" 
              alt="Barber Craft" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal py-32 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: Target, title: "Precision", text: "Every line is measured. Every blend is seamless. We settle for nothing less than perfection." },
              { icon: Award, title: "Exclusivity", text: "A premium experience designed for those who understand that status is in the details." },
              { icon: Users, title: "Community", text: "Garrison is a brotherhood. A place to connect, refine, and emerge ready for the world." }
            ].map((v, i) => (
              <div key={i} className="text-center">
                <v.icon className="mx-auto text-gold mb-8" size={48} strokeWidth={1} />
                <h3 className="text-2xl font-serif uppercase tracking-widest mb-4">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barbers */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold uppercase tracking-widest mb-4">THE MASTER BARBERS</h2>
          <p className="text-gray-500">The hands behind the discipline.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Viktor 'The Blade'", role: "Head Barber", bio: "15 years of elite grooming. Specialist in traditional razor work.", img: "viktor" },
            { name: "Julian Thorne", role: "Master Stylist", bio: "Architect of the modern fade. Precision is his second language.", img: "julian" },
            { name: "Marcus Vane", role: "Senior Barber", bio: "Expert in beard sculpting and facial structure analysis.", img: "marcus" }
          ].map((b, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <img 
                  src={`https://picsum.photos/seed/${b.img}/600/800?grayscale`} 
                  alt={b.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h4 className="text-xl font-bold uppercase tracking-widest mb-1">{b.name}</h4>
              <span className="text-gold text-xs uppercase tracking-widest font-bold mb-4 block">{b.role}</span>
              <p className="text-gray-500 text-sm leading-relaxed">{b.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
