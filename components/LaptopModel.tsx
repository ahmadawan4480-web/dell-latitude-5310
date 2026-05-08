"use client";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function LaptopBase({ hovered }: { hovered: boolean }) {
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  useEffect(() => {
    if (matRef.current) {
      matRef.current.emissiveIntensity = hovered ? 0.15 : 0.05;
    }
  }, [hovered]);

  return (
    <group>
      {/* Base body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.12, 2.1]} />
        <meshStandardMaterial
          ref={matRef}
          color="#1a1a2e"
          metalness={0.9}
          roughness={0.15}
          emissive="#001133"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Keyboard deck */}
      <mesh position={[0, 0.065, 0.1]}>
        <boxGeometry args={[2.8, 0.01, 1.6]} />
        <meshStandardMaterial color="#111122" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.065, 0.65]}>
        <boxGeometry args={[0.9, 0.008, 0.55]} />
        <meshStandardMaterial color="#0d0d1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Keyboard key rows */}
      {[-0.6, -0.3, 0, 0.3].map((row, ri) =>
        Array.from({ length: 12 }).map((_, ki) => (
          <mesh
            key={`key-${ri}-${ki}`}
            position={[-1.3 + ki * 0.22, 0.072, row - 0.2]}
          >
            <boxGeometry args={[0.18, 0.01, 0.16]} />
            <meshStandardMaterial
              color={hovered ? "#001a33" : "#0a0a18"}
              metalness={0.5}
              roughness={0.5}
              emissive={hovered ? "#003366" : "#000011"}
              emissiveIntensity={hovered ? 0.4 : 0.1}
            />
          </mesh>
        ))
      )}

      {/* USB-C port (left) */}
      <mesh position={[-1.62, 0, 0.3]}>
        <boxGeometry args={[0.04, 0.06, 0.12]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
      </mesh>
      {/* HDMI port (left) */}
      <mesh position={[-1.62, 0, 0]}>
        <boxGeometry args={[0.04, 0.06, 0.12]} />
        <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* USB-A port (right) */}
      <mesh position={[1.62, 0, 0.2]}>
        <boxGeometry args={[0.04, 0.06, 0.12]} />
        <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Ground shadow plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.07, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial
          color="#050510"
          metalness={0.6}
          roughness={0.4}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}

function LaptopScreen({ hovered }: { hovered: boolean }) {
  const screenRef = useRef<THREE.MeshStandardMaterial>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.emissiveIntensity = hovered ? 0.8 : 0.5;
    }
    if (glowRef.current) {
      glowRef.current.intensity = hovered ? 2 : 1;
    }
  }, [hovered]);

  return (
    <group position={[0, 0.06, -1.0]} rotation={[-Math.PI * 0.38, 0, 0]}>
      {/* Lid */}
      <mesh castShadow>
        <boxGeometry args={[3.2, 2.0, 0.1]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.9}
          roughness={0.1}
          emissive="#000011"
          emissiveIntensity={0.02}
        />
      </mesh>

      {/* Bezel */}
      <mesh position={[0, 0, 0.052]}>
        <boxGeometry args={[3.0, 1.85, 0.01]} />
        <meshStandardMaterial color="#050510" metalness={0.5} roughness={0.8} />
      </mesh>

      {/* Display panel */}
      <mesh position={[0, 0, 0.058]}>
        <boxGeometry args={[2.75, 1.65, 0.005]} />
        <meshStandardMaterial
          ref={screenRef}
          color="#001a33"
          emissive="#003366"
          emissiveIntensity={0.5}
          metalness={0.1}
          roughness={0.05}
        />
      </mesh>

      {/* Screen glow light */}
      <pointLight
        ref={glowRef}
        position={[0, 0, 0.5]}
        color="#00d4ff"
        intensity={1}
        distance={3}
      />

      {/* UI bar 1 */}
      <mesh position={[0, 0.3, 0.062]}>
        <boxGeometry args={[2.0, 0.08, 0.001]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={1}
          transparent
          opacity={0.6}
        />
      </mesh>
      {/* UI bar 2 */}
      <mesh position={[-0.6, 0, 0.062]}>
        <boxGeometry args={[0.8, 0.06, 0.001]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={1}
          transparent
          opacity={0.5}
        />
      </mesh>
      {/* UI bar 3 */}
      <mesh position={[0.5, -0.2, 0.062]}>
        <boxGeometry args={[0.5, 0.04, 0.001]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.8}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Dell logo (back of lid) */}
      <mesh position={[0, 0, -0.052]}>
        <circleGeometry args={[0.18, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={hovered ? 1.5 : 0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Webcam dot */}
      <mesh position={[0, 0.88, 0.056]}>
        <circleGeometry args={[0.04, 16]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function LaptopModel({ hovered = false }: { hovered?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    // Subtle idle sway (Float component adds the main float)
    groupRef.current.rotation.y = Math.sin(t * 0.25) * 0.12;
  });

  return (
    <group ref={groupRef} rotation={[0.1, 0.3, 0]}>
      <LaptopBase hovered={hovered} />
      <LaptopScreen hovered={hovered} />
    </group>
  );
}
