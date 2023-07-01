"use client";

import "./i18n";

import { Canvas } from "@react-three/fiber";
import Head from "next/head";

import MacbookScene from "./pages/macbookScene";

import { isMobileDevice } from "@/utils";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.scene}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Canvas
        flat
        camera={{
          fov: isMobileDevice ? 60 : 45,
          near: 0.1,
          far: 200,
          position: isMobileDevice ? [0, 3, 6] : [-4, 3, 6],
        }}
      >
        <MacbookScene />
      </Canvas>
    </main>
  );
}
