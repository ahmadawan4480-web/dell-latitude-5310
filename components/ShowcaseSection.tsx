"use client";
import { Suspense, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls, Float } from "@react-three/drei";
import dynamic from "next/dynamic";

const LaptopModel = dynamic(() => import("./LaptopModel"), { ssr: false });

function ShowcaseLights({ hovered }: { hovered: boolean }) {
  return (
    <>
      <ambientLight intensity={0.4} color="#001133" />
      <directionalLight position={[5, 8, 5]} intensity={2} color="#ffffff" castShadow />
      <pointLight position={[-4, 3, 2]} intensity={hovered ? 3 : 2} color="#00d4ff" distance={12} />
      <pointLight position={[4, 2, -2]} intensity={hovered ? 2.5 : 1.5} color="#7c3aed" distance={10} />
      <pointLight position={[0, -1, 3]} intensity={1} color="#0066ff" distance={8} />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={0.9} intensity={3} color="#00aaff" castShadow />
    </>
  );
}

export default function ShowcaseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <section id="showcase" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="gradient-orb w-[600px] h-[600px] bg-blue-600/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium tracking-[0.4em] text-blue-400/60 uppercase mb-4">
            Interactive 3D
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Explore in{" "}
            <span className="gradient-text">3D</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
            Drag to rotate. Hover to illuminate. Experience the laptop from every angle.
          </p>
        </motion.div>

        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <div
            className="glass rounded-3xl border border-white/5 overflow-hidden"
            style={{ height: "500px" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-blue-400/30 rounded-tl-lg z-10" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-blue-400/30 rounded-tr-lg z-10" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-blue-400/30 rounded-bl-lg z-10" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-blue-400/30 rounded-br-lg z-10" />

            {/* Hint text */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="text-xs text-white/30 tracking-widest">DRAG TO ROTATE</span>
            </div>

            <Canvas
              shadows
              camera={{ position: [0, 2, 7], fov: 40 }}
              gl={{ antialias: true, alpha: true }}
              style={{ background: "transparent" }}
            >
              <ShowcaseLights hovered={hovered} />
              <Stars radius={100} depth={50} count={1000} factor={2} saturation={0.3} fade speed={0.3} />
              <Suspense fallback={null}>
                <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
                  <LaptopModel hovered={hovered} />
                </Float>
              </Suspense>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate={!hovered}
                autoRotateSpeed={1.5}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 1.8}
              />
            </Canvas>
          </div>

          {/* Info cards below */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {[
              { label: "Metallic Chassis", desc: "Aluminum alloy build", color: "#00d4ff" },
              { label: "Backlit Keys", desc: "RGB keyboard glow", color: "#7c3aed" },
              { label: "Slim Profile", desc: "17mm thin design", color: "#10b981" },
              { label: "Dell Logo", desc: "Illuminated badge", color: "#f59e0b" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                className="glass rounded-xl p-3 border border-white/5 text-center"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mx-auto mb-2"
                  style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }}
                />
                <p className="text-white text-xs font-semibold">{item.label}</p>
                <p className="text-white/30 text-xs mt-0.5">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
