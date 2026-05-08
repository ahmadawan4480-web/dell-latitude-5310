"use client";
import { Suspense, useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import LaptopModel from "./LaptopModel";
import * as THREE from "three";

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.3} color="#001133" />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" castShadow />
      <pointLight position={[-4, 3, 2]} intensity={2} color="#00d4ff" distance={10} />
      <pointLight position={[4, 2, -2]} intensity={1.5} color="#7c3aed" distance={8} />
      <pointLight position={[0, -1, 3]} intensity={0.8} color="#0066ff" distance={6} />
      <spotLight position={[0, 8, 0]} angle={0.4} penumbra={0.8} intensity={2} color="#00aaff" castShadow />
    </>
  );
}

export default function HeroScene() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <SceneLights />
        <Stars
          radius={100}
          depth={50}
          count={1500}
          factor={3}
          saturation={0.5}
          fade
          speed={0.5}
        />
        <Suspense fallback={null}>
          <Float
            speed={1.5}
            rotationIntensity={0.3}
            floatIntensity={0.5}
            floatingRange={[-0.1, 0.1]}
          >
            <LaptopModel hovered={hovered} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
