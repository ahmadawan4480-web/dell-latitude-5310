"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-16 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="gradient-orb w-96 h-96 bg-blue-600/4 bottom-0 left-1/2 -translate-x-1/2" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl glass neon-border flex items-center justify-center">
                <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
                  <rect x="2" y="4" width="16" height="11" rx="1" stroke="#00d4ff" strokeWidth="1.5" />
                  <rect x="6" y="15" width="8" height="1" fill="#00d4ff" />
                  <rect x="4" y="16" width="12" height="1" rx="0.5" fill="#00d4ff" opacity="0.5" />
                </svg>
              </div>
              <div>
                <p className="font-black text-white text-lg leading-none"><span className="gradient-text">Dell</span> Latitude 5310</p>
                <p className="text-white/30 text-xs">Premium Business Laptop</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">10th Gen Intel Core i7 business laptop. Powerful, portable, and built for professionals who demand the best.</p>
            <div className="flex gap-3 mt-4">
              {[{ icon: MessageCircle, href: "https://wa.me/923001234567", color: "#25d366" },{ icon: Phone, href: "tel:+923001234567", color: "#00d4ff" },{ icon: Mail, href: "mailto:sales@techstore.pk", color: "#7c3aed" }].map((social, i) => (
                <motion.a key={i} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }} style={{ color: social.color }}>
                  <social.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {[{ label: "Features", href: "#features" },{ label: "Specifications", href: "#specifications" },{ label: "Performance", href: "#performance" },{ label: "Gallery", href: "#gallery" },{ label: "Pricing", href: "#pricing" }].map((link) => (
                <li key={link.label}>
                  <button onClick={() => { const el = document.querySelector(link.href); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Key Specs</h4>
            <ul className="space-y-2">
              {["Intel Core i7-10610U","16GB DDR4 RAM","256GB NVMe SSD","13.3\" Full HD","Thunderbolt 3","Windows 11"].map((spec) => (
                <li key={spec} className="text-white/40 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400/60" />{spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs text-center sm:text-left">© 2026 Dell Latitude 5310 Showcase. All rights reserved. • Built with Next.js & Three.js</p>
          <div className="flex items-center gap-4">
            <span className="text-white/20 text-xs">Made with ❤️ in Pakistan</span>
            <motion.button onClick={scrollTop} className="w-8 h-8 rounded-full glass neon-border flex items-center justify-center" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
              <ArrowUp size={14} className="text-blue-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
