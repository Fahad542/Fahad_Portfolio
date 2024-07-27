import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber"; // Correct import for useFrame
import {
  OrbitControls,
  Preload,
  useGLTF,
  Plane,
  Sphere,
  Circle,
} from "@react-three/drei";
import CanvasLoader from "./Loader";
import scene from "./scene1.gltf";

const Mobile = ({ isMobile }) => {
  const computer = useGLTF(scene);
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.05 : 0.07}
        position={isMobile ? [0, -3, 0] : [-4, -4.5, -0.5]}
        rotation={[-0.04, 0.8, -0.1]}
        castShadow
      />
    </mesh>
  );
};

const MobileCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // autoRotate
          // autoRotateSpeed={6}
        />
        <ambientLight intensity={1} />
        <directionalLight
          position={[3, 2, 1]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Mobile isMobile={isMobile} />
        <Circle
          args={[10, 64]}
          rotation={[-Math.PI / 2, 0.2, 3.91]}
          position={[0, -4, 0]}
          receiveShadow
          scale={isMobile ? 0.05 : [0.2, 0.1, 1]}
        >
          <meshStandardMaterial attach="material" color="#242424" />
        </Circle>
      </Suspense>
    </Canvas>
  );
};

export default MobileCanvas;
