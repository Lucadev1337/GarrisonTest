import { motion } from 'motion/react';
import { useState } from 'react';

const categories = ["All", "Fades", "Beards", "Classic", "Modern"];

const galleryItems = [
  { id: 1, category: "Fades", img: "fade-1" },
  { id: 2, category: "Beards", img: "beard-1" },
  { id: 3, category: "Classic", img: "classic-1" },
  { id: 4, category: "Modern", img: "modern-1" },
  { id: 5, category: "Fades", img: "fade-2" },
  { id: 6, category: "Beards", img: "beard-2" },
  { id: 7, category: "Modern", img: "modern-2" },
  { id: 8, category: "Classic", img: "classic-2" },
  { id: 9, category: "Fades", img: "fade-3" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Visual Inspiration</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase">THE LOOKBOOK</h1>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 text-xs font-bold uppercase tracking-widest transition-all border ${
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={item.id}
              className="aspect-square overflow-hidden group relative"
            >
              <img 
                src={`https://picsum.photos/seed/${item.img}/800/800?grayscale`} 
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-gold uppercase tracking-[0.3em] font-bold text-sm border-b border-gold pb-1">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-24 text-center">
          <p className="text-gray-500 mb-8 italic">Ready for your transformation?</p>
          <a 
            href="/booking" 
            className="inline-block bg-white text-ink px-12 py-4 font-bold uppercase tracking-widest hover:bg-gold transition-all"
          >
            Book Your Style
          </a>
        </div>
      </section>
    </div>
  );
}
