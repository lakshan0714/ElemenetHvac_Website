"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BLADE_COUNT = 7;

function FanBlades({ reduceMotion }: { reduceMotion: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (reduceMotion || !group.current) return;
    group.current.rotation.z -= delta * 0.6;
  });

  const blades = useMemo(
    () =>
      Array.from({ length: BLADE_COUNT }, (_, i) => {
        const angle = (i / BLADE_COUNT) * Math.PI * 2;
        return angle;
      }),
    [],
  );

  return (
    <group ref={group}>
      {blades.map((angle, i) => (
        <mesh
          key={i}
          position={[Math.cos(angle) * 0.55, Math.sin(angle) * 0.55, 0]}
          rotation={[0, 0, angle + Math.PI / 2]}
        >
          <boxGeometry args={[0.34, 1.15, 0.05]} />
          <meshStandardMaterial color="#224673" metalness={0.35} roughness={0.45} />
        </mesh>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.32, 0.32, 0.14, 24]} />
        <meshStandardMaterial color="#c63b2f" metalness={0.4} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Housing() {
  return (
    <group>
      {Array.from({ length: 10 }, (_, i) => (
        <mesh key={i} position={[0, 0, -0.06]} rotation={[0, 0, (i / 10) * Math.PI * 2]}>
          <torusGeometry args={[1.55, 0.015, 8, 64, (Math.PI * 2) / 40]} />
          <meshStandardMaterial color="#142842" metalness={0.5} roughness={0.4} />
        </mesh>
      ))}
      <mesh position={[0, 0, -0.08]}>
        <ringGeometry args={[1.45, 1.62, 64]} />
        <meshStandardMaterial
          color="#1b3659"
          metalness={0.4}
          roughness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function Scene({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <directionalLight position={[-3, -2, 2]} intensity={0.35} color="#8fb0da" />
      <group rotation={[0.15, -0.35, 0]}>
        <Housing />
        <FanBlades reduceMotion={reduceMotion} />
      </group>
    </>
  );
}

export function FanScene({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 4.2], fov: 40 }}
      style={{ background: "transparent" }}
    >
      <Scene reduceMotion={reduceMotion} />
    </Canvas>
  );
}
