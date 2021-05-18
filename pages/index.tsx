import React, { useRef, useState, lazy, Suspense, useEffect } from "react"
const ThreeDrawing = lazy(() => import('components/ThreeDrawing'))
import styles from 'styles/Home.module.css'
import { Canvas, useFrame } from '@react-three/fiber'

const Home = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshPhongMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default Home
