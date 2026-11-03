"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh, MeshStandardMaterial } from "three";
import type { MutableRefObject } from "react";

export type CameraDrive = {
  progress: number;
  mx: number;
  my: number;
};

export function IPCamera({ drive }: { drive: MutableRefObject<CameraDrive> }) {
  const group = useRef<Group>(null);
  const lens = useRef<Mesh>(null);
  const glow = useRef<Mesh>(null);
  const fov = useRef<Mesh>(null);
  const ring = useRef<Mesh>(null);

  useFrame((_, delta) => {
    const p = drive.current.progress;
    const appear = clamp01(p / 0.12);
    const turnHousing = smoothstep(0.12, 0.28, p);
    const lensOut = smoothstep(0.26, 0.4, p);
    const glowIn = smoothstep(0.36, 0.5, p);
    const spin = smoothstep(0.48, 0.72, p);
    const fovIn = smoothstep(0.68, 0.86, p);
    const shift = smoothstep(0.88, 1, p);

    if (!group.current) return;
    group.current.visible = appear > 0.01;
    group.current.position.set(shift * 0.55, (1 - appear) * -0.9 + 0.05, 0);
    group.current.rotation.y =
      -0.35 + turnHousing * 0.45 + spin * Math.PI + drive.current.mx * 0.35 * (1 - shift);
    group.current.rotation.x = 0.12 + drive.current.my * 0.18;
    group.current.scale.setScalar(0.86 + appear * 0.22);

    if (lens.current) lens.current.position.z = 0.42 + lensOut * 0.22;
    if (glow.current) {
      const mat = glow.current.material as MeshStandardMaterial;
      mat.opacity = 0.08 + glowIn * 0.55;
      mat.emissiveIntensity = glowIn * 2.4;
    }
    if (ring.current) ring.current.rotation.z += delta * (0.2 + glowIn);
    if (fov.current) {
      fov.current.scale.set(fovIn, fovIn, fovIn);
      const mat = fov.current.material as MeshStandardMaterial;
      mat.opacity = fovIn * 0.18;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[0, -0.72, -0.18]}>
        <cylinderGeometry args={[0.08, 0.12, 0.7, 16]} />
        <meshStandardMaterial color="#151b24" metalness={0.72} roughness={0.28} />
      </mesh>
      <mesh position={[0, -0.38, 0]}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial color="#1b2430" metalness={0.8} roughness={0.22} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.42, 0.46, 0.72, 32]} />
        <meshStandardMaterial color="#1a212c" metalness={0.78} roughness={0.24} />
      </mesh>
      <mesh position={[0, 0, 0.28]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 0.18, 32]} />
        <meshStandardMaterial color="#0e141c" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh ref={lens} position={[0, 0, 0.42]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 0.28, 32]} />
        <meshStandardMaterial color="#0a1018" metalness={0.9} roughness={0.12} />
      </mesh>
      <mesh position={[0, 0, 0.56]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.16, 32]} />
        <meshStandardMaterial
          color="#081018"
          emissive="#1685FF"
          emissiveIntensity={0.35}
          metalness={0.2}
          roughness={0.05}
        />
      </mesh>
      <mesh ref={glow} position={[0, 0, 0.58]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.18, 0.28, 40]} />
        <meshStandardMaterial
          color="#1685FF"
          emissive="#7EC8FF"
          transparent
          opacity={0.1}
          roughness={0.2}
        />
      </mesh>
      <mesh ref={ring} position={[0, 0, 0.36]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.012, 8, 48]} />
        <meshStandardMaterial color="#7EC8FF" emissive="#1685FF" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0.28, 0.18, 0.12]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshStandardMaterial color="#ff4d4d" emissive="#ff4d4d" emissiveIntensity={1.4} />
      </mesh>
      <mesh ref={fov} position={[0, 0, 1.35]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[1.15, 2.2, 32, 1, true]} />
        <meshStandardMaterial
          color="#1685FF"
          transparent
          opacity={0}
          emissive="#1685FF"
          emissiveIntensity={0.4}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

function smoothstep(a: number, b: number, v: number) {
  const t = clamp01((v - a) / (b - a));
  return t * t * (3 - 2 * t);
}
