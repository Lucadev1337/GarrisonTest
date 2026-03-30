import { motion } from 'motion/react';
import { useState } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const categories = ["All", "Fades", "Beards", "Classic", "Modern"];

const galleryItems = [
  { id: 1, category: "Fades", img: "fade-1", likes: "1.2k" },
  { id: 2, category: "Beards", img: "beard-1", likes: "850" },
  { id: 3, category: "Classic", img: "classic-1", likes: "2.1k" },
  { id: 4, category: "Modern", img: "modern-1", likes: "1.5k" },
  { id: 5, category: "Fades", img: "fade-2", likes: "920" },
  { id: 6, category: "Beards", img: "beard-2", likes: "1.1k" },
  { id: 7, category: "Modern", img: "modern-2", likes: "1.8k" },
  { id: 8, category: "Classic", img: "classic-2", likes: "1.3k" },
  { id: 9, category: "Fades", img: "fade-3", likes: "2.4k" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold uppercase tracking-[0.6em] text-xs font-bold mb-6 block">The Lookbook</span>
          <h1 className="text-5xl md:text-8xl font-bold mb-10 uppercase tracking-tighter">VISUAL <br /><span className="text-gold-gradient italic font-serif font-normal">DISCIPLINE.</span></h1>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-10 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border ${
                  activeCategory === cat 
                    ? 'bg-gold border-gold text-ink' 
                    : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={item.id}
              className="aspect-square overflow-hidden group relative border border-white/5"
            >
              <img 
                src={`https://picsum.photos/seed/${item.img}/1000/1000?grayscale`} 
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8">
                <Instagram className="text-gold mb-4" size={32} />
                <span className="text-white uppercase tracking-[0.3em] font-bold text-sm mb-2">
                  {item.category}
                </span>
                <span className="text-gold/60 text-[10px] uppercase tracking-widest mb-6">
                  {item.likes} Likes
                </span>
                <a 
                  href="https://www.instagram.com/garrisonbarbers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-all"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-32 text-center bg-charcoal p-20 border border-white/5">
          <Instagram className="text-gold mx-auto mb-8" size={48} />
          <h2 className="text-3xl font-bold uppercase tracking-[0.4em] mb-6">JOIN THE COMMUNITY</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
            Follow us for daily inspiration, behind-the-scenes discipline, and exclusive announcements.
          </p>
          <a 
            href="https://www.instagram.com/garrisonbarbers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border border-gold text-gold px-12 py-5 font-bold uppercase tracking-widest hover:bg-gold hover:text-ink transition-all"
          >
            @garrisonbarbers
          </a>
        </div>
      </section>
    </div>
  );
}
