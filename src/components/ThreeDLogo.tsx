"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  MeshTransmissionMaterial, 
  Float, 
  Environment, 
  OrbitControls,
  PerspectiveCamera,
  ContactShadows
} from "@react-three/drei";
import * as THREE from "three";

function ShieldModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Define the shield shape with high curve resolution
  const shieldShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 1.2);
    shape.quadraticCurveTo(0.8, 1.2, 0.9, 0.8);
    shape.lineTo(1, 0);
    shape.quadraticCurveTo(1, -0.6, 0, -1.2);
    shape.quadraticCurveTo(-1, -0.6, -1, 0);
    shape.lineTo(-0.9, 0.8);
    shape.quadraticCurveTo(-0.8, 1.2, 0, 1.2);
    return shape;
  }, []);

  // Extrude options refined for smoothness
  const extrudeSettings = useMemo(() => ({
    steps: 1,
    depth: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.04,
    bevelOffset: 0,
    bevelSegments: 8,
    curveSegments: 32, // Smoother edges
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      // Use time for perfectly smooth rotation without delta jitter
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.4} castShadow receiveShadow>
      <extrudeGeometry args={[shieldShape, extrudeSettings]} />
      <MeshTransmissionMaterial
        samples={10} // Prevents noise glitching
        resolution={512} // Performance optimization
        backside
        backsideThickness={0.1}
        thickness={0.05}
        chromaticAberration={0.03}
        anisotropicBlur={0.5}
        clearcoat={1}
        clearcoatRoughness={0.1}
        envMapIntensity={1.5}
        metalness={0.2}
        roughness={0.05}
        ior={1.15}
        color="#00f2ff"
      />
    </mesh>
  );
}

export default function ThreeDLogo() {
  return (
    <div className="w-full h-[400px] relative">
      {/* Background glow for blending */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      
      <Canvas 
        shadows 
        dpr={[1, 1.5]} 
        gl={{ antialias: true, powerPreference: "high-performance" }}
        className="z-10"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00f2ff" />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <ShieldModel />
        </Float>
        
        <Environment preset="city" />
        <ContactShadows 
          position={[0, -1.8, 0]} 
          opacity={0.3} 
          scale={8} 
          blur={2} 
          far={3} 
        />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
