import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Shiba = () => {
  const shiba = useGLTF("./shiba/scene.gltf");

  return (
    <primitive
      object={shiba.scene}
      scale={2.5}
      position-y={1}
      rotation-y={11.4}
    />
  );
};

const ShibaCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Shiba />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ShibaCanvas;
