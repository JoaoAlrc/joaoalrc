import { useRef, useState } from "react";
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
import { useFrame } from "@react-three/fiber";

import Resume from "../resume/page";

import { macbookLink } from "@/utils/links";
import { isMobileDevice } from "@/utils";

import "./style.css";

function MacbookScene() {
  const macbook = useGLTF(macbookLink);
  const [matcapTexture] = useMatcapTexture("9D8F84_5D4544_D9D3C9_62555A", 256);
  const [mouseOn, setMouseOn] = useState<boolean>(false);
  const [easter, setEaster] = useState<boolean>(false);
  const easterTextRef = useRef(null);

  useFrame((state) => {
    const zoom = isMobileDevice ? 1.6 : 2.3;
    const cameraX = isMobileDevice ? 0 : -1.3;
    const cameraY = isMobileDevice ? 1 : 1.25;
    state.camera.zoom = THREE.MathUtils.lerp(
      state.camera.zoom,
      mouseOn ? zoom : 1,
      mouseOn ? 0.025 : 0.15
    );
    state.camera.lookAt(cameraX, cameraY, 2);

    if (easter) {
      const easterTextPosition = new THREE.Vector3();
      easterTextRef.current.getWorldPosition(easterTextPosition);
      state.camera.lookAt(
        easterTextPosition.x + 8,
        easterTextPosition.y,
        easterTextPosition.z
      );
      state.camera.zoom = THREE.MathUtils.lerp(
        state.camera.zoom,
        isMobileDevice ? 7 : 20,
        0.15
      );
    }
    state.camera.updateProjectionMatrix();
  });

  return (
    <>
      <color args={["#241a1a"]} attach="background" />
      <Environment path="/assets/" files="./environment.hdr" />

      {/* Macbook focus */}
      <PresentationControls
        global
        rotation={isMobileDevice ? [-0.2, -0.5, 0] : [0, 0, 0.1]}
        polar={isMobileDevice ? [0, 0.2] : [0, 0.2]}
        azimuth={isMobileDevice ? [0, 0.5] : [-0.5, 0.5]}
        config={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={mouseOn ? 0 : 0.4}>
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
            position={isMobileDevice ? [0, -2, 0] : [0, -1.6, 0]}
            onClick={() => {
              setMouseOn(!mouseOn);
            }}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation={[-0.256, 0, 0]}
            >
              <Resume />
            </Html>
          </primitive>
          <Text3D
            font="./fonts/Architects_Daughter/Architects_Daughter_Regular.json"
            position={isMobileDevice ? [-1.8, 2, -2] : [3.3, 1, -1.9]}
            rotation={isMobileDevice ? [-0.3, 0.1, 0] : [0, -1, 0]}
            scale={isMobileDevice ? 0.6 : 0.65}
            size={isMobileDevice ? 0.7 : 0.65}
          >
            JOÃO VICTOR
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
          <Text3D
            font="./fonts/Architects_Daughter/Architects_Daughter_Regular.json"
            position={isMobileDevice ? [-2.5, 1.3, -5] : [2.3, 0.4, -1.8]}
            rotation={isMobileDevice ? [-0.3, 0.1, 0] : [0, -1, 0]}
            scale={isMobileDevice ? 0.7 : 0.65}
            size={isMobileDevice ? 0.6 : 0.65}
          >
            ALARCÃO PEREIRA
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </Float>
        <Text3D
          ref={easterTextRef}
          font="./fonts/Architects_Daughter/Architects_Daughter_Regular.json"
          position={isMobileDevice ? [-10, 30, -120] : [0, 0, -150]}
          rotation={[0, 0, 0]}
          onPointerEnter={() => setEaster(true)}
          onClick={() => setEaster(isMobileDevice ? !easter : false)}
          scale={isMobileDevice ? 0.7 : 0.65}
          size={isMobileDevice ? 0.6 : 0.65}
        >
          O LIMITE É UMA FRONTEIRA CRIADA SÓ PELA MENTE
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
        <Sparkles count={100} speed={1} opacity={6} size={1} scale={2} />
        <Sparkles count={50} speed={2} opacity={0.8} size={0.8} scale={10} />
      </PresentationControls>

      {/* Macbook shadows */}

      <ContactShadows
        position-y={isMobileDevice ? -2 : -1.4}
        rotation={isMobileDevice ? [-0.2, -0.5, 0] : [0, 0, 0.1]}
        opacity={0.4}
        scale={isMobileDevice ? 3 : 5}
        blur={2.4}
      />
    </>
  );
}

export default MacbookScene;
