import React, { Suspense } from "react"
import { FbxModule } from 'components/FbxModule'
import styles from 'styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

const Home = () => {
  return (
    <div id="canvas-container">
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <Suspense fallback={null}>
          <FbxModule />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Home
