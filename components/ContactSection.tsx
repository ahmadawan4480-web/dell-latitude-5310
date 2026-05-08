"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const contactMethods = [
  { icon: MessageCircle, label: "WhatsApp", value: "+92 300 123 4567", desc: "Fastest response", color: "#25d366", href: "https://wa.me/923001234567?text=Hi, I'm interested in Dell Latitude 5310", bg: "from-green-500/15 to-emerald-500/5" },
  { icon: Phone, label: "Call Us", value: "+92 300 123 4567", desc: "Mon–Sat, 9am–9pm", color: "#00d4ff", href: "tel:+923001234567", bg: "from-blue-500/15 to-cyan-500/5" },
  { icon: Mail, label: "Email", value: "sales@techstore.pk", desc: "Reply within 2 hours", color: "#7c3aed", href: "mailto:sales@techstore.pk", bg: "from-purple-500/15 to-violet-500/5" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="gradient-orb w-[500px] h-[500px] bg-green-600/5 top-1/2 left-0 -translate-y-1/2" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.4em] text-blue-400/60 uppercase mb-4">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Ready to <span className="gradient-text">Order?</span></h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">Ready to use – clean condition. Contact us through any channel and we&apos;ll get back to you instantly.</p>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 glass neon-border rounded-full px-4 py-2 mt-4">
            <CheckCircle size={14} className="text-green-400" />
            <span className="text-sm text-white/70">Ready to Use – Clean Condition</span>
          </motion.div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {contactMethods.map((method, i) => (
              <motion.a key={method.label} href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i*0.15, duration: 0.6, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
                className={`flex items-center gap-4 glass rounded-2xl p-5 border border-white/5 bg-gradient-to-r ${method.bg} group hover:border-white/10 transition-all duration-300 cursor-pointer`}
                whileHover={{ scale: 1.02, x: 4 }} whileTap={{ scale: 0.98 }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${method.color}15`, border: `1px solid ${method.color}30`, boxShadow: `0 0 20px ${method.color}10` }}>
                  <method.icon size={24} style={{ color: method.color }} />
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">{method.label}</p>
                  <p className="text-white font-bold text-base">{method.value}</p>
                  <p className="text-white/40 text-xs mt-0.5">{method.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.7 }} className="glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center"><MapPin size={16} className="text-blue-400" /></div>
                <h3 className="text-white font-bold text-sm">Location</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">Lahore, Pakistan<br /><span className="text-white/30 text-xs">Free delivery within Lahore city</span></p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.45, duration: 0.7 }} className="glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center"><Clock size={16} className="text-amber-400" /></div>
                <h3 className="text-white font-bold text-sm">Business Hours</h3>
              </div>
              <div className="space-y-2">
                {[{ day: "Monday – Friday", hours: "9:00 AM – 9:00 PM" },{ day: "Saturday", hours: "10:00 AM – 7:00 PM" },{ day: "Sunday", hours: "By Appointment" }].map((row) => (
                  <div key={row.day} className="flex justify-between text-sm">
                    <span className="text-white/40">{row.day}</span><span className="text-white/70">{row.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.6, duration: 0.7 }} className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-bold text-sm mb-4">Send Quick Message</h3>
              <div className="space-y-3">
                <input type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-400/50 transition-colors" />
                <textarea placeholder="Your message..." rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-400/50 transition-colors resize-none" />
                <motion.a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white text-sm btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <MessageCircle size={16} />Send via WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
