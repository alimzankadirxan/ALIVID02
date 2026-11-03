"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { IPCamera, type CameraDrive } from "./IPCamera";
import type { MutableRefObject } from "react";

export function CameraCanvas({ drive }: { drive: MutableRefObject<CameraDrive> }) {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 4.2], fov: 35 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 4]} intensity={1.4} color="#e8f1ff" />
      <directionalLight position={[-3, 1, -2]} intensity={0.7} color="#1685FF" />
      <pointLight position={[0, 0, 2.4]} intensity={1.1} color="#7EC8FF" />
      <IPCamera drive={drive} />
      <ContactShadows position={[0, -1.15, 0]} opacity={0.42} scale={8} blur={2.6} far={2} />
    </Canvas>
  );
}
