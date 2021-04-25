import React from 'react'
import * as THREE from 'three'

// https://threejs.org/docs/index.html#manual/ja/introduction/Creating-a-scene
export const ThreeDrawing = () => {
  // シーンを作成
  const scene = new THREE.Scene()
  // カメラを作成（画角, アスペクト比
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer()
  // サイズを指定
  const width = 960
  const height = 540
  // サイズを設定
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)
  // キューブの作成
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 5

  // sceneのレンダリング
  const animate = () => {
    requestAnimationFrame( animate )

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
  }

  animate()

  return <div />
}
