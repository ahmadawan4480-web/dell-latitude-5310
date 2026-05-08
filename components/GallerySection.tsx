"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  { id: 1, title: "Front View", desc: "Clean, minimal bezel design", bg: "from-blue-900/40 to-slate-900/60", accent: "#00d4ff", icon: "💻", size: "col-span-2 row-span-2" },
  { id: 2, title: "Side Profile", desc: "Ultra-slim 17mm chassis", bg: "from-purple-900/40 to-slate-900/60", accent: "#7c3aed", icon: "📐", size: "" },
  { id: 3, title: "Keyboard", desc: "Backlit precision keys", bg: "from-cyan-900/40 to-slate-900/60", accent: "#06b6d4", icon: "⌨️", size: "" },
  { id: 4, title: "Back Logo", desc: "Illuminated Dell badge", bg: "from-emerald-900/40 to-slate-900/60", accent: "#10b981", icon: "🔵", size: "" },
  { id: 5, title: "Open Angle", desc: "180° hinge flexibility", bg: "from-amber-900/40 to-slate-900/60", accent: "#f59e0b", icon: "🖥️", size: "" },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <p className="text-xs font-medium tracking-[0.4em] text-blue-400/60 uppercase mb-4">Visual Showcase</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Every <span className="gradient-text">Angle</span></h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">Explore the premium design and craftsmanship of the Dell Latitude 5310.</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-[180px]">
          {galleryItems.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i*0.1, duration: 0.6, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
              className={`gallery-item relative rounded-2xl overflow-hidden cursor-pointer group border border-white/5 ${item.size}`}
              onClick={() => setSelected(item)}>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-3xl opacity-30" style={{ background: item.accent, transform: "scale(2)" }} />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-32 h-20 rounded-lg border-2 flex items-center justify-center text-3xl"
                      style={{ borderColor: `${item.accent}60`, background: `${item.accent}10`, boxShadow: `0 0 30px ${item.accent}20` }}>{item.icon}</div>
                    <div className="w-36 h-2 rounded-full" style={{ background: `${item.accent}30` }} />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <ZoomIn size={14} className="text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <p className="text-white/50 text-xs">{item.desc}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ borderColor: `${item.accent}40` }} />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
              className="relative z-10 w-full max-w-2xl aspect-video glass rounded-3xl overflow-hidden border border-white/10" onClick={(e) => e.stopPropagation()}>
              <div className={`absolute inset-0 bg-gradient-to-br ${selected.bg}`} />
              <div className="absolute inset-0 flex items-center justify-center text-6xl">{selected.icon}</div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white font-bold text-xl">{selected.title}</h3>
                <p className="text-white/60 text-sm mt-1">{selected.desc}</p>
              </div>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <X size={18} className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
