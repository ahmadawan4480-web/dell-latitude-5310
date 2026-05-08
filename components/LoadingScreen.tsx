"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); setTimeout(() => setLoading(false), 400); return 100; }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508]"
          exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}>
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}
              className="w-20 h-20 rounded-2xl glass neon-border flex items-center justify-center pulse-glow">
              <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                <rect x="4" y="8" width="32" height="22" rx="2" stroke="#00d4ff" strokeWidth="2" />
                <rect x="12" y="30" width="16" height="2" fill="#00d4ff" />
                <rect x="8" y="32" width="24" height="2" rx="1" fill="#00d4ff" opacity="0.5" />
                <circle cx="20" cy="19" r="3" fill="#00d4ff" opacity="0.8" />
              </svg>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-center">
              <p className="text-xs tracking-[0.4em] text-blue-400/60 uppercase mb-2">Loading Experience</p>
              <h1 className="text-2xl font-bold gradient-text">Dell Latitude 5310</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <div className="h-[2px] bg-white/5 rounded-full overflow-hidden" style={{ width: "280px" }}>
                <motion.div className="h-full rounded-full" style={{ width: `${Math.min(progress, 100)}%`, background: "linear-gradient(90deg,#00d4ff,#7c3aed)", boxShadow: "0 0 10px rgba(0,212,255,0.8)" }} transition={{ duration: 0.1 }} />
              </div>
              <p className="text-center text-xs text-white/30 mt-3 font-mono">{Math.min(Math.round(progress), 100)}%</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
