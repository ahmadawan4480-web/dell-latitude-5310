"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ChevronDown, ShoppingCart, MessageCircle, FileText } from "lucide-react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border border-blue-500/20 animate-pulse" />
    </div>
  ),
});

const tv = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i*0.15+0.5, duration: 0.8, ease: [0.16,1,0.3,1] as [number,number,number,number] } }),
};

export default function HeroSection() {
  const scrollTo = (href: string) => { const el = document.querySelector(href); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="gradient-orb w-[600px] h-[600px] bg-blue-600/8 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="gradient-orb w-[400px] h-[400px] bg-purple-600/8 bottom-1/4 right-1/4" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,100,200,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[80vh]">
          <div className="flex flex-col gap-6 lg:gap-8">
            <motion.div custom={0} variants={tv} initial="hidden" animate="visible" className="inline-flex items-center gap-2 w-fit">
              <div className="flex items-center gap-2 glass neon-border rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-white/70 tracking-wider uppercase">Available Now</span>
              </div>
            </motion.div>
            <div className="space-y-2">
              <motion.p custom={1} variants={tv} initial="hidden" animate="visible" className="text-sm font-medium tracking-[0.3em] text-blue-400/80 uppercase">Dell Latitude Series</motion.p>
              <motion.h1 custom={2} variants={tv} initial="hidden" animate="visible" className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight">
                <span className="gradient-text">Latitude</span><br /><span className="text-white">5310</span>
              </motion.h1>
              <motion.p custom={3} variants={tv} initial="hidden" animate="visible" className="text-lg sm:text-xl text-white/50 font-light mt-2">10th Gen Intel Core i7 Business Laptop</motion.p>
            </div>
            <motion.p custom={4} variants={tv} initial="hidden" animate="visible" className="text-white/40 text-sm sm:text-base leading-relaxed max-w-md">
              Powerful Performance&nbsp;•&nbsp;Premium Build&nbsp;•&nbsp;Ready for Work &amp; Study
            </motion.p>
            <motion.div custom={5} variants={tv} initial="hidden" animate="visible" className="flex flex-wrap gap-2">
              {["Core i7-10610U","16GB DDR4","256GB NVMe","13.3\" FHD"].map((spec) => (
                <span key={spec} className="glass neon-border text-xs text-blue-300/80 px-3 py-1.5 rounded-full font-mono">{spec}</span>
              ))}
            </motion.div>
            <motion.div custom={6} variants={tv} initial="hidden" animate="visible" className="flex flex-wrap gap-3">
              <motion.button onClick={() => scrollTo("#pricing")} className="btn-primary flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <ShoppingCart size={16} />Buy Now
              </motion.button>
              <motion.a href="https://wa.me/923001234567?text=Hi, I'm interested in Dell Latitude 5310" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm glass neon-border text-green-400 hover:bg-green-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <MessageCircle size={16} />WhatsApp
              </motion.a>
              <motion.button onClick={() => scrollTo("#specifications")} className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <FileText size={16} />View Specs
              </motion.button>
            </motion.div>
            <motion.div custom={7} variants={tv} initial="hidden" animate="visible" className="flex gap-8 pt-2">
              {[{ value: "4.9GHz", label: "Turbo Boost" },{ value: "16GB", label: "DDR4 RAM" },{ value: "256GB", label: "NVMe SSD" }].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-white/30 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 1.2, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
            </div>
            <HeroScene />
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute top-8 left-0 glass neon-border rounded-xl p-3 hidden sm:block">
              <p className="text-xs text-white/40">Processor</p>
              <p className="text-sm font-bold text-white">Core i7-10610U</p>
              <p className="text-xs text-blue-400">4.9 GHz Turbo</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.7, duration: 0.6 }}
              className="absolute bottom-16 right-0 glass neon-border rounded-xl p-3 hidden sm:block">
              <p className="text-xs text-white/40">Display</p>
              <p className="text-sm font-bold text-white">13.3&quot; Full HD</p>
              <p className="text-xs text-blue-400">1920×1080 IPS</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer" onClick={() => scrollTo("#features")}>
          <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="text-blue-400/60 scroll-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
