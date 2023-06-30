import * as THREE from "three";
import {
  useGLTF,
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
  Sparkles,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";

import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import Resume from "../resume/page";

import "./style.css";
import { macbookLink } from "@/utils/links";

function MacbookScene() {
  const macbook = useGLTF(macbookLink);
  const [matcapTexture] = useMatcapTexture("9D8F84_5D4544_D9D3C9_62555A", 256);
  const [mouseOn, setMouseOn] = useState<boolean>(false);

  const {
    modelPosition,
    namePosition,
    nameRotation,
    nameSize,
    nameScale,
    surnamePosition,
    surnameRotation,
    surnameScale,
    surnameSize,
    lightPosition,
    lightRotation,
    distanceFactor,
    position,
    rotation,
    width,
    height,
    intensity,
    rotationMacbook,
    polar,
    azimuth,
    color,
  } = useControls("test", {
    modelPosition: { value: [0, -1.6, 0], step: 0.1 },
    namePosition: { value: [3.3, 1, -1.9], step: 0.1 },
    nameRotation: { value: [0, -1, 0], step: 0.1 },
    nameSize: { value: 0.65, step: 0.1 },
    nameScale: { value: 0.65, step: 0.1 },
    surnamePosition: { value: [2.3, 0.4, -1.8], step: 0.1 },
    surnameRotation: { value: [0, -1, 0], step: 0.1 },
    surnameScale: { value: 0.65, step: 0.1 },
    surnameSize: { value: 0.65, step: 0.1 },
    lightPosition: { value: [0, 0.55, -1.15], step: 0.1 },
    lightRotation: { value: [-0.1, Math.PI, 0], step: 0.1 },
    distanceFactor: { value: 1.17, step: 0.1 },
    position: { value: [0, 1.56, -1.4], step: 0.1 },
    rotation: { value: [-0.256, 0, 0], step: 0.1 },
    width: { value: 2.5, step: 0.1 },
    height: { value: 1.65, step: 0.1 },
    intensity: { value: 65, step: 0.1 },
    rotationMacbook: { value: [0, -0.2, -0.2], step: 0.1 },
    polar: { value: [0, -0.2], step: 0.1 },
    azimuth: { value: [-1, 0.75], step: 0.1 },
    color: "orange",
  });

  useFrame((state) => {
    state.camera.zoom = THREE.MathUtils.lerp(
      state.camera.zoom,
      mouseOn ? 2.5 : 1,
      mouseOn ? 0.025 : 0.15
    );
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });
  return (
    <>
      <color args={["#241a1a"]} attach="background" />
      <Environment path="/assets/" files="./environment.hdr" />
      <Perf position="top-left" />

      {/* Macbook focus */}
      <PresentationControls
        global
        rotation={rotationMacbook}
        polar={polar}
        azimuth={azimuth}
        config={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          {/* Macbook light */}

          <rectAreaLight
            width={width}
            height={height}
            intensity={intensity}
            color={"blue"}
            rotation={lightRotation}
            position={lightPosition}
          />

          {/* Macbook */}
          <primitive
            object={macbook.scene}
            position={modelPosition}
            onPointerEnter={(e: React.PointerEvent<HTMLDivElement>) => {
              const target = e.currentTarget;
              target.setPointerCapture(e.pointerId);
              setMouseOn(true);
            }}
            onPointerLeave={(e: React.PointerEvent<HTMLDivElement>) => {
              const target = e.currentTarget;
              target.releasePointerCapture(e.pointerId);
              setMouseOn(false);
            }}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={distanceFactor}
              position={position}
              rotation={rotation}
            >
              <Resume />
            </Html>
          </primitive>
          <Text3D
            font="./fonts/Architects_Daughter/Architects_Daughter_Regular.json"
            position={namePosition}
            rotation={nameRotation}
            scale={nameScale}
            size={nameSize}
          >
            JOÃO VICTOR
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
          <Text3D
            font="./fonts/Architects_Daughter/Architects_Daughter_Regular.json"
            position={surnamePosition}
            rotation={surnameRotation}
            scale={surnameScale}
            size={surnameSize}
          >
            ALARCÃO PEREIRA
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </Float>
        <Sparkles count={100} speed={1} opacity={6} size={1} scale={2} />
        <Sparkles count={50} speed={2} opacity={0.8} size={0.8} scale={10} />
      </PresentationControls>

      {/* Macbook shadows */}
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}

export default MacbookScene;
