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
  //   // キューブの作成
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    const loader = new FBXLoader()

    loader.load(
      '/fbx/booth_sen_small_prototype.fbx',
      (fbx) => {
        fbx.position.set(0, 0, 0)
        fbx.rotation.set(0, Math.PI, 0)
        scene.add(fbx)
        console.log('Adding FBX resource to the scene.')
      },
    )
    scene.add(cube)

    camera.position.z = 1
    renderer.render(scene, camera)
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

  return <canvas id="render-dom" />
}

export default ThreeDrawing
