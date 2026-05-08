"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, HardDrive, Monitor, Wifi, Layers, Settings } from "lucide-react";

const specs = [
  { icon: Cpu, category: "Processor", color: "#00d4ff", items: [{ label: "Model", value: "Intel Core i7-10610U" },{ label: "Generation", value: "10th Generation" },{ label: "Cores / Threads", value: "4 Cores / 8 Threads" },{ label: "Turbo Boost", value: "Up to 4.90 GHz" }] },
  { icon: Layers, category: "Memory", color: "#7c3aed", items: [{ label: "RAM", value: "16GB DDR4" },{ label: "Type", value: "DDR4 SDRAM" },{ label: "Slots", value: "2 RAM Slots" },{ label: "Expandable", value: "Yes" }] },
  { icon: HardDrive, category: "Storage", color: "#06b6d4", items: [{ label: "Capacity", value: "256GB NVMe SSD" },{ label: "Interface", value: "M.2 PCIe NVMe" },{ label: "Speed", value: "Ultra Fast Boot" },{ label: "Form Factor", value: "M.2 2280" }] },
  { icon: Monitor, category: "Display", color: "#10b981", items: [{ label: "Size", value: "13.3\" Full HD" },{ label: "Resolution", value: "1920 × 1080" },{ label: "Panel", value: "IPS Anti-Glare" },{ label: "Graphics", value: "Intel UHD Graphics" }] },
  { icon: Wifi, category: "Connectivity", color: "#f59e0b", items: [{ label: "USB-C", value: "Yes (Thunderbolt 3)" },{ label: "Video Out", value: "HDMI" },{ label: "Wireless", value: "Wi-Fi + Bluetooth" },{ label: "USB-A", value: "USB 3.1 Gen 1" }] },
  { icon: Settings, category: "System", color: "#ef4444", items: [{ label: "OS Support", value: "Windows 11" },{ label: "Office", value: "Microsoft Office Ready" },{ label: "Security", value: "TPM 2.0" },{ label: "Form Factor", value: "Ultrabook" }] },
];

export default function SpecificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="specifications" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="gradient-orb w-[500px] h-[500px] bg-purple-600/5 top-1/2 right-0 -translate-y-1/2" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.4em] text-blue-400/60 uppercase mb-4">Technical Details</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Full <span className="gradient-text">Specifications</span></h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">Every detail matters. Here&apos;s what powers the Dell Latitude 5310.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {specs.map((spec, i) => (
            <motion.div key={spec.category} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i*0.1, duration: 0.7, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
              className="spec-card glass rounded-2xl overflow-hidden border border-white/5 group">
              <div className="px-5 py-4 flex items-center gap-3 border-b border-white/5" style={{ background: `${spec.color}08` }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${spec.color}15`, border: `1px solid ${spec.color}30` }}>
                  <spec.icon size={18} style={{ color: spec.color }} />
                </div>
                <h3 className="font-bold text-white text-sm">{spec.category}</h3>
                <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: spec.color, boxShadow: `0 0 6px ${spec.color}` }} />
              </div>
              <div className="p-5 space-y-3">
                {spec.items.map((item, j) => (
                  <div key={item.label} className="flex items-center justify-between gap-4">
                    <span className="text-white/35 text-xs">{item.label}</span>
                    <span className="text-xs font-semibold text-right" style={{ color: j===0 ? spec.color : "rgba(255,255,255,0.75)" }}>{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="h-[1px] w-0 group-hover:w-full transition-all duration-700" style={{ background: `linear-gradient(90deg, transparent, ${spec.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-10 glass rounded-2xl p-6 border border-white/5 flex flex-wrap gap-6 justify-center">
          {[{ label: "Weight", value: "~1.37 kg" },{ label: "Dimensions", value: "307 × 209 × 17mm" },{ label: "Battery", value: "42 WHr" },{ label: "Webcam", value: "720p HD" },{ label: "Audio", value: "Stereo Speakers" }].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-white font-bold text-sm">{item.value}</p>
              <p className="text-white/30 text-xs mt-0.5">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
