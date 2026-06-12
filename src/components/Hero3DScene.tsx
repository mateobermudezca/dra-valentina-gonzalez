"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function MouseHandler({ groupRef }: { groupRef: React.MutableRefObject<THREE.Group | null> }) {
  const { pointer } = useThree();
  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.04, 0.04);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.06, 0.04);
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, pointer.x * 0.08, 0.04);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -pointer.y * 0.08, 0.04);
  });
  return null;
}

function TorusKnotWireframe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.08;
    ref.current.rotation.y = state.clock.elapsedTime * 0.12;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
  });
  return (
    <mesh ref={ref} position={[-1.8, 0.4, -0.5]}>
      <torusKnotGeometry args={[0.5, 0.18, 80, 12]} />
      <meshBasicMaterial color="#c4a882" wireframe transparent opacity={0.12} />
    </mesh>
  );
}

function GlowRing({ radius, color, speed, tiltX = 0, tiltY = 0 }: { radius: number; color: string; speed: number; tiltX?: number; tiltY?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = tiltX;
    ref.current.rotation.y = tiltY + state.clock.elapsedTime * speed;
  });
  return (
    <mesh ref={ref}>
      <ringGeometry args={[radius, radius + 0.008, 80]} />
      <meshBasicMaterial color={color} transparent opacity={0.1} side={THREE.DoubleSide} depthWrite={false} />
    </mesh>
  );
}

function Particles({ count = 200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const accent = new THREE.Color("#c4a882");
    const warm = new THREE.Color("#e8d5b8");
    const white = new THREE.Color("#ffffff");
    const soft = new THREE.Color("#a8c4d8");
    const palette = [accent, warm, white, soft];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      pos[idx + 1] += Math.sin(state.clock.elapsedTime * 0.2 + i * 0.1) * 0.0005;
      pos[idx] += Math.cos(state.clock.elapsedTime * 0.15 + i * 0.07) * 0.0003;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingDiamonds() {
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  const mesh3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (mesh1.current) {
      mesh1.current.position.y = Math.sin(t * 0.5 + 0) * 0.15;
      mesh1.current.rotation.z = t * 0.3;
    }
    if (mesh2.current) {
      mesh2.current.position.y = Math.sin(t * 0.4 + 2) * 0.12;
      mesh2.current.rotation.z = -t * 0.25;
    }
    if (mesh3.current) {
      mesh3.current.position.y = Math.sin(t * 0.6 + 4) * 0.1;
      mesh3.current.rotation.z = t * 0.35;
    }
  });

  const diamondGeo = useMemo(() => new THREE.OctahedronGeometry(0.04, 0), []);

  return (
    <>
      <mesh ref={mesh1} geometry={diamondGeo} position={[-0.8, 0.6, 0.5]}>
        <meshBasicMaterial color="#c4a882" transparent opacity={0.3} />
      </mesh>
      <mesh ref={mesh2} geometry={diamondGeo} position={[0.5, -0.7, -0.3]}>
        <meshBasicMaterial color="#e8d5b8" transparent opacity={0.25} />
      </mesh>
      <mesh ref={mesh3} geometry={diamondGeo} position={[-0.3, 0.9, 1.2]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
    </>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <>
      <MouseHandler groupRef={groupRef} />

      <ambientLight intensity={0.3} />
      <hemisphereLight args={["#ffeedd", "#080820", 0.4]} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffeedd" />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#c4a882" />
      <pointLight position={[-2, -2, 3]} intensity={0.5} color="#e8d5b8" />

      <group ref={groupRef}>
        <Particles count={200} />
        <TorusKnotWireframe />
        <FloatingDiamonds />

        <GlowRing radius={1.2} color="#c4a882" speed={0.08} tiltY={0.2} />
        <GlowRing radius={1.8} color="#a8c4d8" speed={-0.06} tiltX={0.4} tiltY={0.1} />
        <GlowRing radius={2.4} color="#c4a882" speed={0.05} tiltX={0.6} tiltY={0.3} />
      </group>
    </>
  );
}

export default function Hero3DScene() {
  if (typeof window === "undefined") return null;
  const hasWebGL = (() => {
    try {
      const c = document.createElement("canvas");
      return !!(c.getContext("webgl") || c.getContext("webgl2"));
    } catch { return false; }
  })();
  if (!hasWebGL) return null;
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 40 }}
      dpr={isMobile ? [1, 1.2] : [1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <Scene />
    </Canvas>
  );
}
