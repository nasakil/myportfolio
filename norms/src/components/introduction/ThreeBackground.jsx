import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const Octahedron = ({ position, scale, speed, color }) => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.003 * speed;
    ref.current.rotation.y += 0.005 * speed;
  });
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </Float>
  );
};

const Icosahedron = ({ position, scale, speed, color }) => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.002 * speed;
    ref.current.rotation.z += 0.004 * speed;
  });
  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
};

const TorusKnot = ({ position, scale, speed, color }) => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.004 * speed;
    ref.current.rotation.y += 0.003 * speed;
  });
  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusKnotGeometry args={[1, 0.3, 64, 8]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {/* Octahedrons */}
        <Octahedron position={[-10, 0, -3]}  scale={2} speed={1.2} color="#456882" />
        <Octahedron position={[11, -2, -3]}  scale={1.3} speed={0.8} color="#234C6A" />
        <Octahedron position={[2, 4, 0]}  scale={0.8} speed={1.5} color="#456882" />

        {/* Icosahedrons */}
        <Icosahedron position={[7, 3, -2]}  scale={1.5} speed={1.0} color="#234C6A" />
        <Icosahedron position={[-5, 2, -3]} scale={1.2} speed={1.3} color="#456882" />
        <Icosahedron position={[-7, 5, -3]} scale={0.3} speed={1.3} color="#456882" />

        {/* Torus Knots */}
        <TorusKnot position={[-3, 5, -5]}  scale={1.0} speed={0.7} color="#234C6A" />
        <TorusKnot position={[6, 0, -4]}  scale={0.5} speed={1.1} color="#456882" />
        <TorusKnot position={[-1, -1, -4]}  scale={0.3} speed={1.1} color="#456882" />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;