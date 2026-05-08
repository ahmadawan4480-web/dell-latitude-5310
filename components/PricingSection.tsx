"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, MessageCircle, Phone, Zap, Shield, Package } from "lucide-react";

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="gradient-orb w-[600px] h-[600px] bg-blue-600/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.4em] text-blue-400/60 uppercase mb-4">Investment</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Premium Value, <span className="gradient-text">Fair Price</span></h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">Get a business-grade laptop at a fraction of the retail price.</p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ delay: 0.2, duration: 0.8, ease: [0.16,1,0.3,1] as [number,number,number,number] }} className="relative w-full max-w-md">
            <div className="absolute -inset-[1px] rounded-3xl neon-border-animated opacity-60" />
            <div className="relative glass-strong rounded-3xl overflow-hidden border border-blue-400/20">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-6 py-3 border-b border-white/5 flex items-center justify-between">
                <span className="text-xs font-medium tracking-widest text-blue-400 uppercase">Suggested Resale Price</span>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /><span className="text-xs text-green-400">Available</span></div>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 200 }}>
                    <p className="text-white/30 text-sm mb-1">Starting from</p>
                    <div className="flex items-start justify-center gap-1">
                      <span className="text-2xl font-bold text-white/60 mt-2">PKR</span>
                      <span className="text-7xl font-black gradient-text leading-none">70K</span>
                    </div>
                    <p className="text-white/40 text-sm mt-2">Good Condition • Good Battery</p>
                  </motion.div>
                </div>
                <div className="flex gap-3 justify-center mb-8">
                  {[{ label: "Good Condition", icon: Shield, color: "#10b981" },{ label: "Good Battery", icon: Zap, color: "#f59e0b" },{ label: "Ready to Use", icon: Package, color: "#00d4ff" }].map((badge) => (
                    <div key={badge.label} className="flex flex-col items-center gap-1.5 glass rounded-xl p-3 border border-white/5 flex-1">
                      <badge.icon size={16} style={{ color: badge.color }} />
                      <span className="text-xs text-white/60 text-center leading-tight">{badge.label}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 mb-8">
                  {["Dell Latitude 5310 Laptop","Original Charger Included","Windows 11 Activated","Clean & Tested Unit","30-Day Warranty","Free Delivery (Lahore)"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={15} className="text-green-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <motion.a href="https://wa.me/923001234567?text=Hi, I want to buy Dell Latitude 5310 for PKR 70,000" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-white text-sm"
                    style={{ background: "linear-gradient(135deg,#25d366,#128c7e)", boxShadow: "0 0 30px rgba(37,211,102,0.3)" }}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <MessageCircle size={18} />Order on WhatsApp
                  </motion.a>
                  <motion.a href="tel:+923001234567" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-white/80 text-sm glass border border-white/10 hover:border-white/20 transition-all duration-300" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Phone size={16} />Call to Inquire
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="w-full max-w-sm space-y-4">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4, duration: 0.7 }} className="glass rounded-2xl p-5 border border-white/5">
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">Why Buy From Us</h3>
              <div className="space-y-3">
                {[{ icon: "🔍", text: "Thoroughly tested & verified" },{ icon: "🛡️", text: "30-day return guarantee" },{ icon: "🚀", text: "Same-day delivery in Lahore" },{ icon: "💬", text: "24/7 WhatsApp support" },{ icon: "✅", text: "Genuine Dell hardware" }].map((item) => (
                  <div key={item.text} className="flex items-center gap-3"><span className="text-base">{item.icon}</span><span className="text-white/60 text-sm">{item.text}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.6, duration: 0.7 }} className="glass rounded-2xl p-5 border border-white/5">
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">Value Comparison</h3>
              <div className="space-y-3">
                {[{ label: "New Retail Price", value: "~PKR 180K", highlight: false },{ label: "Our Price", value: "PKR 70K", highlight: true },{ label: "You Save", value: "~PKR 110K", highlight: false, color: "#10b981" }].map((row) => (
                  <div key={row.label} className={`flex justify-between items-center py-2 px-3 rounded-lg ${row.highlight ? "bg-blue-500/10 border border-blue-500/20" : ""}`}>
                    <span className="text-white/50 text-xs">{row.label}</span>
                    <span className="font-bold text-sm" style={{ color: (row as {color?: string}).color || (row.highlight ? "#00d4ff" : "rgba(255,255,255,0.7)") }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.8, duration: 0.7 }} className="glass rounded-2xl p-4 border border-amber-500/20 bg-amber-500/5">
              <div className="flex items-center gap-2 mb-1"><span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" /><span className="text-amber-400 text-xs font-semibold uppercase tracking-wide">Limited Stock</span></div>
              <p className="text-white/60 text-xs">Only a few units available. Contact us now to reserve yours before it&apos;s gone.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
