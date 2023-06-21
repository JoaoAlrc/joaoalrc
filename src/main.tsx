import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Leva collapsed />
    <Canvas
      flat 
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <App />
    </Canvas>
  </StrictMode>
);
