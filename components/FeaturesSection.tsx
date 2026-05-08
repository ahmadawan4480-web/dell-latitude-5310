"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Zap, Shield, Wifi, Battery, Monitor } from "lucide-react";

const features = [
  { icon: Cpu, title: "10th Gen Intel Core i7", description: "Quad-core processor with 8 threads, up to 4.9GHz Turbo Boost for blazing-fast performance.", color: "#00d4ff", gradient: "from-blue-500/20 to-cyan-500/5" },
  { icon: Zap, title: "Ultra-Fast NVMe SSD", description: "256GB M.2 PCIe NVMe storage delivers instant boot times and rapid file transfers.", color: "#7c3aed", gradient: "from-purple-500/20 to-violet-500/5" },
  { icon: Monitor, title: "Full HD Anti-Glare Display", description: "13.3\" 1920×1080 IPS panel with anti-glare coating for comfortable all-day use.", color: "#06b6d4", gradient: "from-cyan-500/20 to-teal-500/5" },
  { icon: Shield, title: "Business-Grade Security", description: "TPM 2.0, fingerprint reader, and enterprise-level security features built-in.", color: "#10b981", gradient: "from-emerald-500/20 to-green-500/5" },
  { icon: Wifi, title: "Thunderbolt 3 & USB-C", description: "Next-gen connectivity with Thunderbolt 3, USB-C, HDMI, and Wi-Fi 6 support.", color: "#f59e0b", gradient: "from-amber-500/20 to-yellow-500/5" },
  { icon: Battery, title: "All-Day Battery Life", description: "Long-lasting battery keeps you productive through full workdays without interruption.", color: "#ef4444", gradient: "from-red-500/20 to-rose-500/5" },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="gradient-orb w-96 h-96 bg-blue-600/5 top-1/2 left-0 -translate-y-1/2" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.4em] text-blue-400/60 uppercase mb-4">Why Choose This Laptop</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Built for <span className="gradient-text">Professionals</span></h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">Every component engineered for peak performance, reliability, and the demands of modern business.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i*0.1, duration: 0.7, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
              className={`spec-card glass rounded-2xl p-6 border border-white/5 bg-gradient-to-br ${feature.gradient} group cursor-default`}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${feature.color}15`, border: `1px solid ${feature.color}30`, boxShadow: `0 0 20px ${feature.color}10` }}>
                <feature.icon size={22} style={{ color: feature.color }} />
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-300 transition-colors duration-300">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
              <div className="mt-4 h-[1px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
