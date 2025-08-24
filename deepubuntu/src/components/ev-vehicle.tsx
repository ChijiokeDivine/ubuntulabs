"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function TeslaModel() {
  const { scene } = useGLTF("/models/tesla_cybertruck.glb");
  const ref = useRef<THREE.Object3D>(null);

  // small animation on load
  const [t, setT] = useState(0);

  // ✅ Track screen size for mobile adjustment
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Tailwind `md` breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    if (t < 1) {
      setT((prev) => Math.min(prev + 0.01, 1));
      if (ref.current) {
        ref.current.rotation.y = -Math.PI / 5 + 0.2 * Math.sin(t * Math.PI);
        ref.current.position.y = 0.46 + 0.05 * Math.sin(t * Math.PI);
      }
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.6}
      position={isMobile ? [-0.47, 0.46, 1.3] : [-0.8, 0.46, 1.7]} // ✅ mobile vs desktop
      rotation={[0, -Math.PI / 5, 0]}
    />
  );
}

export default function TeslaViewer() {
  return (
    <div className="w-full h-[500px] lg:h-[720px]">
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        {/* soft global fill light */}
        <ambientLight intensity={0.6} />

        {/* sky light */}
        <hemisphereLight intensity={0.5} groundColor={"#222"} />

        {/* main showcase lights */}
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, 5, 5]} intensity={0.8} />
        <directionalLight position={[0, 5, -5]} intensity={0.8} />

        {/* stronger rim light */}
        <spotLight
          position={[0, 8, 0]}
          angle={0.9}
          penumbra={0.7}
          intensity={1.4}
          castShadow
        />

        <TeslaModel />
      </Canvas>
    </div>
  );
}
