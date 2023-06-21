import * as THREE from "three";
import {
  useGLTF,
  OrbitControls,
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
  Sparkles,
  Stars,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";

import { macbookLink } from "./utils/links";

import "./App.css";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

function App() {
  const macbook = useGLTF(macbookLink);
  const [matcapTexture] = useMatcapTexture("9D8F84_5D4544_D9D3C9_62555A", 256);
  const [mouseOn, setMouseOn] = useState<boolean>(false);

  // const { position, color } = useControls("test", {
  //   position: { value: { x: -2, y: 0, z: 0 }, step: 0.1 },
  //   color: "orange",
  // });

  useFrame((state) => {
    state.camera.zoom = THREE.MathUtils.lerp(
      state.camera.zoom,
      mouseOn ? 1.5 : 1,
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
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, -0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          {/* Macbook light */}

          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"blue"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          {/* Macbook */}
          <primitive
            object={macbook.scene}
            position-y={-1.2}
            onPointerEnter={(e) => {
              // e.target.setPointerCapture(e.pointerId);
              setMouseOn(true);
            }}
            onPointerLeave={(e) => {
              // e.target.releasePointerCapture(e.pointerId);
              setMouseOn(false);
            }}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
              onPointerEnter={(e) => {
                console.log("in22");

                e.target.setPointerCapture(e.pointerId);
                setMouseOn(true);
              }}
              onPointerUp={(e) => {
                e.target.releasePointerCapture(e.pointerId);
                setMouseOn(false);
              }}
            >
              <div style={{ backgroundColor: "black", color: "white" }}>tdasdsadasdest</div>
            </Html>
          </primitive>
          <Text3D
            font="./fonts/Architects_Daughter/Architects_Daughter_Regular.json"
            position={[1, 0.75, 0.75]}
            rotation-y={-1.25}
            scale={0.8}
          >
            JOÃO VICTOR
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
          <Text3D
            font="./fonts/Architects_Daughter/Architects_Daughter_Regular.json"
            position={[1, -1, 0.75]}
            rotation-y={-1.25}
            scale={0.8}
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

export default App;
