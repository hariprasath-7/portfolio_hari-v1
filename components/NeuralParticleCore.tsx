"use client";

import { useMemo, useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Emerald / cyan / neural-blue accents from the design system.
const PALETTE = [
  new THREE.Color("#10b981"),
  new THREE.Color("#06b6d4"),
  new THREE.Color("#3b82f6"),
];

const NODE_COUNT = 90;
const CLOUD_COUNT = 2600;
const SPHERE_R = 1.55;

/** Even distribution inside a sphere (cube-root keeps volume density uniform). */
function pointInSphere(radius: number): [number, number, number] {
  const r = radius * Math.cbrt(Math.random());
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  return [
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi),
  ];
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/**
 * A dense particle cloud ("neurons") wrapped by a sparser node-and-synapse graph.
 * The whole assembly auto-rotates, breathes, and tilts toward the pointer.
 */
function ParticleCore({ reduced }: { reduced: boolean }) {
  const tilt = useRef<THREE.Group>(null); // pointer parallax
  const spin = useRef<THREE.Group>(null); // auto-rotation + breathing
  const cloudRef = useRef<THREE.Points>(null);
  const lineMat = useRef<THREE.LineBasicMaterial>(null);

  // Dense inner cloud.
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(CLOUD_COUNT * 3);
    const colors = new Float32Array(CLOUD_COUNT * 3);
    for (let i = 0; i < CLOUD_COUNT; i++) {
      const [x, y, z] = pointInSphere(SPHERE_R);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      const c = PALETTE[i % PALETTE.length];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  // Synapse graph: nodes near the shell, each linked to its nearest neighbors.
  const { lineGeo, nodeGeo } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const [x, y, z] = pointInSphere(SPHERE_R * 0.95);
      // bias outward so the graph reads as a shell, not a fog
      const v = new THREE.Vector3(x, y, z);
      v.multiplyScalar(0.6 + 0.4 * (v.length() / SPHERE_R));
      nodes.push(v);
    }

    const linePos: number[] = [];
    const lineCol: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      // find 2 nearest neighbors
      const dists = nodes
        .map((n, j) => ({ j, d: nodes[i].distanceTo(n) }))
        .filter((o) => o.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      for (const { j } of dists) {
        if (j < i) continue; // dedupe undirected edges
        const c = PALETTE[(i + j) % PALETTE.length];
        linePos.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
        lineCol.push(c.r, c.g, c.b, c.r, c.g, c.b);
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePos, 3));
    lineGeo.setAttribute("color", new THREE.Float32BufferAttribute(lineCol, 3));

    const nodePos = new Float32Array(nodes.length * 3);
    const nodeCol = new Float32Array(nodes.length * 3);
    nodes.forEach((n, i) => {
      nodePos[i * 3] = n.x;
      nodePos[i * 3 + 1] = n.y;
      nodePos[i * 3 + 2] = n.z;
      const c = PALETTE[i % PALETTE.length];
      nodeCol[i * 3] = c.r;
      nodeCol[i * 3 + 1] = c.g;
      nodeCol[i * 3 + 2] = c.b;
    });
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.Float32BufferAttribute(nodePos, 3));
    nodeGeo.setAttribute("color", new THREE.Float32BufferAttribute(nodeCol, 3));

    return { lineGeo, nodeGeo };
  }, []);

  useFrame((state, delta) => {
    if (spin.current) {
      if (!reduced) {
        spin.current.rotation.y += delta * 0.12;
        spin.current.rotation.x += delta * 0.04;
        const s = 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.04;
        spin.current.scale.setScalar(s);
      }
    }
    if (tilt.current) {
      // ease toward the pointer for a parallax response
      const targetY = state.pointer.x * 0.5;
      const targetX = -state.pointer.y * 0.35;
      tilt.current.rotation.y += (targetY - tilt.current.rotation.y) * 0.05;
      tilt.current.rotation.x += (targetX - tilt.current.rotation.x) * 0.05;
    }
    if (lineMat.current) {
      lineMat.current.opacity = reduced
        ? 0.24
        : 0.18 + (Math.sin(state.clock.elapsedTime * 1.4) + 1) * 0.11;
    }
  });

  return (
    <group ref={tilt}>
      <group ref={spin}>
        <Points ref={cloudRef} positions={positions} colors={colors} stride={3}>
          <PointMaterial
            transparent
            vertexColors
            size={0.018}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points>

        <lineSegments geometry={lineGeo}>
          <lineBasicMaterial
            ref={lineMat}
            vertexColors
            transparent
            opacity={0.24}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>

        <points geometry={nodeGeo}>
          <pointsMaterial
            vertexColors
            transparent
            size={0.05}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
      </group>
    </group>
  );
}

export default function NeuralParticleCore() {
  const reduced = useReducedMotion();
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 60 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop="always"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <ParticleCore reduced={reduced} />
      </Suspense>
    </Canvas>
  );
}
