"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Globe, Briefcase, GraduationCap, DollarSign, Layers, Play, Bot } from "lucide-react";

const performanceData = [
  { label: "Programming", icon: Code2, value: 95, color: "#00d4ff" },
  { label: "Web Development", icon: Globe, value: 92, color: "#7c3aed" },
  { label: "Office Work", icon: Briefcase, value: 98, color: "#10b981" },
  { label: "Online Classes", icon: GraduationCap, value: 97, color: "#f59e0b" },
  { label: "Freelancing", icon: DollarSign, value: 94, color: "#06b6d4" },
  { label: "Multitasking", icon: Layers, value: 90, color: "#ef4444" },
  { label: "Streaming", icon: Play, value: 96, color: "#8b5cf6" },
  { label: "AI Chatbot Dev", icon: Bot, value: 88, color: "#ec4899" },
];

function ProgressBar({ value, color, animate }: { value: number; color: string; animate: boolean }) {
  return (
    <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
      <motion.div className="absolute inset-y-0 left-0 rounded-full" initial={{ width: 0 }}
        animate={animate ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: [0.16,1,0.3,1] as [number,number,number,number], delay: 0.2 }}
        style={{ background: `linear-gradient(90deg, ${color}aa, ${color})`, boxShadow: `0 0 12px ${color}80` }} />
    </div>
  );
}

export default function PerformanceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="performance" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="gradient-orb w-[500px] h-[500px] bg-cyan-600/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.4em] text-blue-400/60 uppercase mb-4">Use Case Performance</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Handles <span className="gradient-text">Everything</span></h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">From coding to streaming, the Latitude 5310 excels at every task you throw at it.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-5">
            {performanceData.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i*0.08, duration: 0.6, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
                className="glass rounded-xl p-4 border border-white/5 group hover:border-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                      <item.icon size={15} style={{ color: item.color }} />
                    </div>
                    <span className="text-white/80 text-sm font-medium">{item.label}</span>
                  </div>
                  <motion.span className="text-sm font-bold font-mono" style={{ color: item.color }} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: i*0.08+0.8 }}>
                    {item.value}%
                  </motion.span>
                </div>
                <ProgressBar value={item.value} color={item.color} animate={inView} />
              </motion.div>
            ))}
          </div>
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.7 }}
              className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-bold mb-4 text-sm tracking-wide uppercase">Performance Benchmarks</h3>
              <div className="space-y-4">
                {[{ label: "Single-Core Score", value: "1,280", max: "1500", color: "#00d4ff" },{ label: "Multi-Core Score", value: "4,850", max: "6000", color: "#7c3aed" },{ label: "SSD Read Speed", value: "3,200 MB/s", max: null, color: "#10b981" },{ label: "SSD Write Speed", value: "2,800 MB/s", max: null, color: "#f59e0b" }].map((bench) => (
                  <div key={bench.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white/40">{bench.label}</span>
                      <span className="font-mono" style={{ color: bench.color }}>{bench.value}</span>
                    </div>
                    {bench.max && (
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div className="h-full rounded-full" initial={{ width: 0 }}
                          animate={inView ? { width: `${(parseInt(bench.value.replace(/,/g,""))/parseInt(bench.max))*100}%` } : {}}
                          transition={{ duration: 1.2, delay: 0.5, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
                          style={{ background: `linear-gradient(90deg, ${bench.color}80, ${bench.color})`, boxShadow: `0 0 8px ${bench.color}60` }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5, duration: 0.7 }}
              className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-bold mb-4 text-sm tracking-wide uppercase">Certified For</h3>
              <div className="grid grid-cols-2 gap-3">
                {["✔ Programming","✔ Web Development","✔ Office Work","✔ Online Classes","✔ Freelancing","✔ Multitasking","✔ Streaming","✔ AI Development"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-green-400 text-xs font-bold">{item.split(" ")[0]}</span>
                    <span className="text-white/60 text-xs">{item.split(" ").slice(1).join(" ")}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
