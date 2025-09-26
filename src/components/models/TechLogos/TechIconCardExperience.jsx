
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { useEffect } from "react";
const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene]);
  return (
    <Canvas style={{ background: "transparent" }} dpr={[1, 2]}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <OrbitControls enableZoom={false} />
        <Float speed={5.6} rotationIntensity={0.5} floatIntensity={0.9}>
          <group scale={model.scale} rotation={model.rotation}>
            <primitive object={scene.scene} />
          </group>
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default TechIcon;
