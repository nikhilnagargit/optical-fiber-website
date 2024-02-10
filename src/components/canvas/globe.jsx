import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import {
  Html,
  useGLTF,
  Preload,
  useProgress,
  OrbitControls,
} from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

const GlobeModel = () => {
  const globemodel = useGLTF("./globe/scene.gltf");
  const ref = useRef();
  //   useFrame((_, delta) => {
  //     ref.current.rotation.y -= 0.1 * delta;
  //   });
  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={5} />
      <primitive object={globemodel.scene} />
    </mesh>
  );
};

function GlobeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 12 }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableRotate={true}
        />
        <GlobeModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default GlobeCanvas;
