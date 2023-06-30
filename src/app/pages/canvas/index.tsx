import React from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import MacbookScene from "../macbookScene";

const Canvas: React.FC = () => {
  return (
    <ThreeCanvas
      flat
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <MacbookScene />
    </ThreeCanvas>
  );
};

export default Canvas;
