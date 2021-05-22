import React, { FC, useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

// https://threejs.org/docs/index.html#manual/ja/introduction/Creating-a-scene
export const FbxModule = () => {
  const fbx = useLoader(FBXLoader, './fbx/booth_sen_small_prototype.fbx')

  return (
    <>
      <primitive
        object={fbx}
        dispose={null}
        scale={[0.8, 0.8, 0.8]}
        rotation={[0, 0.6, 0]}
        position={[0, -130, -500]}
      />
    </>
  )
}
