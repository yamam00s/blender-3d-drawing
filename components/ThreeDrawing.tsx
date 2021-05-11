import React, { FC, useEffect } from 'react'
import * as THREE　from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

// https://threejs.org/docs/index.html#manual/ja/introduction/Creating-a-scene
const ThreeDrawing = () => {
  const createFbx = () => {
    // シーンを作成
    const scene = new THREE.Scene()
    // カメラを作成（画角, アスペクト比
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#render-dom') as HTMLCanvasElement
    })
    // サイズを設定
    renderer.setSize(window.innerWidth, window.innerHeight)

    document.body.appendChild(renderer.domElement)

    const loader = new FBXLoader()

    loader.load(
      '/fbx/booth_sen_small_prototype.fbx',
      (fbx) => {
        fbx.position.set(0, -130, -500)
        fbx.rotation.set(0, 0.6, 0)
        fbx.scale.set(0.8, 0.8, 0.8)
        scene.add(fbx)
      },
    )
    // sceneのレンダリング&フレーム処理
    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()
  }

  useEffect(() => {
    createFbx()
  }, [])

  return (
    <div style={{ backgroundColor: '#000000' }}>
      <canvas id="render-dom" />
    </div>
  )
}

export default ThreeDrawing
