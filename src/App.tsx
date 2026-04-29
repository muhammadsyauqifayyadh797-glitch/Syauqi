/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { Instagram, MapPin, Clock, ArrowRight, Diamond } from 'lucide-react';

const LOGO_URL = "https://myimgs.org/storage/images/20581/IMG_20260429_200604.jpg";

const IMAGES = {
  hero: "https://myimgs.org/storage/images/20582/IMG_20260429_202012.jpg",
  spaghettiIce: "https://myimgs.org/storage/images/20585/IMG_20260429_201914.jpg",
  bananaSplit: "https://myimgs.org/storage/images/20586/IMG_20260429_202843.jpg",
  cassata: "https://myimgs.org/storage/images/20587/IMG_20260429_203206.jpg",
  archive1: "https://myimgs.org/storage/images/20583/IMG_20260429_202221.jpg",
  archive2: "https://myimgs.org/storage/images/20584/IMG_20260429_202303.jpg",
  experience: "https://myimgs.org/storage/images/20581/IMG_20260429_200604.jpg",
};

export default function App() {
  const archiveRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: archiveRef,
    offset: ["start end", "end start"]
  });

  const scrollOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <div className="min-h-screen bg-almond-cream">
      {/* Ultra Luxury Navbar */}
      <nav className="fixed top-0 w-full z-[100] px-10 py-10 flex justify-between items-center mix-blend-difference text-almond-cream">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <img src={LOGO_URL} alt="Ragusa" className="h-12 w-12 object-contain" />
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-tighter leading-none">Ragusa</span>
            <span className="text-[8px] uppercase tracking-[0.6em] opacity-40">Elite Heritage</span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex gap-12 text-[9px] uppercase tracking-[0.4em] font-medium">
          {["Collection", "Heritage", "Experience"].map((link) => (
            <motion.a 
              key={link}
              href={`#${link.toLowerCase()}`} 
              whileHover={{ color: "#D4AF37", y: -2 }}
              className="transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-champagne-gold after:transition-all hover:after:w-full"
            >
              {link}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero: The Renaissance */}
      <section className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-vintage-navy">
        <motion.div 
          style={{ scale: useTransform(useScroll().scrollYProgress, [0, 0.3], [1, 1.2]) }}
          className="absolute inset-0"
        >
          <img 
            src={IMAGES.hero} 
            alt="Ragusa Legacy" 
            className="w-full h-full object-cover grayscale opacity-30 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vintage-navy/60 via-transparent to-vintage-navy" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-champagne-gold uppercase tracking-[0.8em] text-[10px] mb-8 block font-semibold">EST. 1932 • Jakarta Imperial</span>
            <h1 className="text-almond-cream text-6xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter mb-12">
              The Art of <br />
              <span className="italic text-luxury-gradient px-4">Preservation.</span>
            </h1>
            
            <div className="flex flex-col items-center gap-6">
              <p className="text-almond-cream/40 text-xs italic tracking-widest max-w-sm mx-auto font-extralight lowercase leading-loose">
                "Where time stands still, and every delicate scoop tells the grand narrative of Italian craftsmanship in the heart of Batavia."
              </p>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="w-px h-20 bg-gradient-to-b from-champagne-gold to-transparent" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Archive: Curated History */}
      <section id="heritage" ref={archiveRef} className="py-40 bg-vintage-navy/[0.02] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vintage-navy/[0.02] transform skew-x-12" />
        
        <div className="max-w-7xl mx-auto px-10">
          <motion.div 
            style={{ opacity: scrollOpacity, scale: scrollScale }}
            className="grid lg:grid-cols-2 gap-24 items-center"
          >
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-heritage-bronze text-[10px] uppercase tracking-[0.5em] block">Imperial Archive</span>
                <h2 className="text-5xl md:text-8xl font-serif text-vintage-navy leading-[0.9] tracking-tighter">
                  Nearly a Century <br />
                  <span className="italic font-light">of Excellence.</span>
                </h2>
              </div>
              
              <div className="space-y-8 border-l border-heritage-bronze/20 pl-10 italic">
                <p className="text-vintage-navy/60 leading-relaxed text-lg font-light">
                  "Authentic luxury is not merely seen, it is felt. For 94 years, 
                  Ragusa has been the quiet curator of Jakarta's most refined moments."
                </p>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-vintage-navy">Explore The Legacy</span>
                  <div className="w-12 h-px bg-vintage-navy group-hover:w-20 transition-all duration-700" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-7">
                <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  className="relative group overflow-hidden rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.1)]"
                >
                  <img src={IMAGES.archive1} className="w-full aspect-[4/5] object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000" alt="Archive I" />
                  <div className="absolute inset-0 border border-almond-cream/20 m-6" />
                </motion.div>
              </div>
              <div className="col-span-12 md:col-span-5 self-end">
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="relative group overflow-hidden rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.1)] -mb-12"
                >
                  <img src={IMAGES.archive2} className="w-full aspect-square object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000" alt="Archive II" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Collection: The Masterpieces */}
      <section id="collection" className="py-40 bg-vintage-navy text-almond-cream relative">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-32 text-center">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block border-y border-champagne-gold/30 px-10 py-4 mb-4"
             >
                <span className="text-[10px] uppercase tracking-[0.6em] text-champagne-gold font-bold">The Signature Collection</span>
             </motion.div>
             <h2 className="text-4xl md:text-7xl font-serif mt-6">Crowned Creations</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-x border-t border-almond-cream/5">
            {[
              { 
                name: "Spaghetti Gelato", 
                price: "Rp40.000", 
                img: IMAGES.spaghettiIce,
                note: "The Imperial Signature"
              },
              { 
                name: "Banana Versailles", 
                price: "Rp40.000", 
                img: IMAGES.bananaSplit,
                note: "Asymmetrical Balance"
              },
              { 
                name: "Cassata Royale", 
                price: "Rp35.000", 
                img: IMAGES.cassata,
                note: "Sicillian Heritage"
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group relative p-16 border-b border-r border-almond-cream/5 cursor-pointer hover:bg-almond-cream/[0.02] transition-colors"
              >
                <div className="relative mb-12 aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                  />
                  <div className="absolute inset-0 bg-vintage-navy/20 group-hover:bg-transparent transition-colors" />
                </div>
                
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-champagne-gold block font-semibold">{item.note}</span>
                  <h3 className="text-3xl font-serif tracking-tight italic group-hover:text-luxury-gradient transition-all">{item.name}</h3>
                  <div className="flex justify-between items-center pt-6 border-t border-almond-cream/5">
                    <span className="text-[10px] tracking-[0.3em] opacity-40 font-bold">{item.price}</span>
                    <Diamond className="w-3 h-3 text-champagne-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience: Imperial Jakarta */}
      <section id="experience" ref={experienceRef} className="py-40 bg-almond-cream">
        <div className="max-w-7xl mx-auto px-10">
          <div className="relative group overflow-hidden rounded-sm shadow-[0_50px_150px_rgba(0,0,0,0.15)]">
            <div className="h-[90vh]">
              <img 
                src={IMAGES.experience} 
                alt="Imperial Experience" 
                className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:scale-105 transition-transform duration-[3s] ease-out"
              />
            </div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="max-w-4xl space-y-12"
              >
                <div className="flex justify-center gap-6 text-champagne-gold opacity-50">
                  <Diamond className="w-4 h-4 fill-current" />
                  <Diamond className="w-4 h-4 fill-current" />
                  <Diamond className="w-4 h-4 fill-current" />
                </div>
                
                <h2 className="text-almond-cream text-5xl md:text-9xl font-serif italic leading-none tracking-tighter">
                  Jakarta's House <br />
                  <span className="not-italic text-luxury-gradient">of Pure Joy.</span>
                </h2>
                
                <p className="text-almond-cream/60 max-w-2xl mx-auto font-light leading-relaxed italic text-lg">
                  "Step into a sanctuary where heritage is the only protagonist. 
                  In every crack of our vintage flooring and every sweep of 
                  vanilla, luxury resides in simplicity."
                </p>

                <div className="grid md:grid-cols-2 gap-16 pt-12 border-t border-almond-cream/10">
                  <div className="flex items-center justify-center gap-4 group">
                    <div className="p-4 rounded-full border border-almond-cream/10 group-hover:border-champagne-gold transition-colors">
                      <MapPin className="w-6 h-6 text-champagne-gold" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[8px] uppercase tracking-[0.4em] opacity-40 font-bold mb-1">Location</span>
                      <span className="text-almond-cream/80 text-xs tracking-[0.2em] uppercase font-medium">Jl. Veteran I No.10</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 group">
                     <div className="p-4 rounded-full border border-almond-cream/10 group-hover:border-champagne-gold transition-colors">
                      <Clock className="w-6 h-6 text-champagne-gold" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[8px] uppercase tracking-[0.4em] opacity-40 font-bold mb-1">Concierge</span>
                      <span className="text-almond-cream/80 text-xs tracking-[0.2em] uppercase font-medium">10:00 — 22:00 Daily</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer: The Eternal Mark */}
      <footer className="py-32 bg-vintage-navy text-almond-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <div className="flex items-center gap-6">
               <img src={LOGO_URL} alt="Ragusa Logo" className="h-16 w-16 object-contain" />
               <div className="flex flex-col">
                  <span className="font-serif text-4xl tracking-tighter italic">Ragusa</span>
                  <span className="text-[10px] uppercase tracking-[0.8em] text-champagne-gold font-bold">Imperial Es Italia</span>
               </div>
            </div>
            <p className="text-lg font-light text-almond-cream/40 max-w-md italic leading-relaxed">
              "We don't serve ice cream; we preserve a century of Italian elegance in the heart of Indonesia."
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/ragusa.jkt?igsh=aWxvdmkzcWkweHNt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-almond-cream/10 rounded-full hover:border-champagne-gold group transition-all"
              >
                <Instagram className="w-5 h-5 text-almond-cream/40 group-hover:text-champagne-gold" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
            {[
              { title: "Maison", links: ["Our Legacy", "Philosophy", "Artisanship"] },
              { title: "Service", links: ["The Menu", "Private Events", "Locations"] },
              { title: "Membership", links: ["Elite Circle", "Newsletter", "Concierge"] }
            ].map((group) => (
              <div key={group.title} className="space-y-8">
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-champagne-gold">{group.title}</h4>
                <ul className="space-y-4 text-[10px] font-medium tracking-[0.3em] uppercase">
                  {group.links.map(link => (
                    <li key={link}><a href="#" className="opacity-40 hover:opacity-100 transition-opacity">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-almond-cream/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">
          <span>&copy; MCMXXXII — Ragusa Es Italia</span>
          <span className="italic">Purveyor of Fine Desserts.</span>
        </div>
      </footer>
    </div>
  );
}
