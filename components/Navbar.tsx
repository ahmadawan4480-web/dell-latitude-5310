"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Specs", href: "#specifications" },
  { label: "Performance", href: "#performance" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <motion.div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} whileHover={{ scale: 1.02 }}>
            <div className="w-8 h-8 rounded-lg glass neon-border flex items-center justify-center">
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                <rect x="2" y="4" width="16" height="11" rx="1" stroke="#00d4ff" strokeWidth="1.5" />
                <rect x="6" y="15" width="8" height="1" fill="#00d4ff" />
                <rect x="4" y="16" width="12" height="1" rx="0.5" fill="#00d4ff" opacity="0.5" />
              </svg>
            </div>
            <span className="font-bold text-sm tracking-wide"><span className="gradient-text">Dell</span><span className="text-white/70"> Latitude</span></span>
          </motion.div>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button key={link.label} onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 relative group">
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-blue-400 group-hover:w-4 transition-all duration-300" />
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <motion.button onClick={() => scrollTo("#pricing")} className="btn-primary px-5 py-2 rounded-full text-sm font-semibold text-white" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Buy Now</motion.button>
          </div>
          <button className="md:hidden glass p-2 rounded-lg" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={18} className="text-white" /> : <Menu size={18} className="text-white" />}
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
            className="fixed top-16 left-4 right-4 z-40 glass-strong rounded-2xl p-4 border border-white/10">
            {navLinks.map((link, i) => (
              <motion.button key={link.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)} className="w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-sm">
                {link.label}
              </motion.button>
            ))}
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              onClick={() => scrollTo("#pricing")} className="w-full mt-2 btn-primary py-3 rounded-xl text-sm font-semibold text-white">Buy Now</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
