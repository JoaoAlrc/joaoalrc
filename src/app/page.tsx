"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Roboto } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import MacbookScene from "./pages/macbookScene";

import "./i18n";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "700"],
});

export default function Home() {
  return (
    <main className={`${styles.scene}`}>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <MacbookScene />
      </Canvas>
    </main>
  );
}
