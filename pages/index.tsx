import React, { useState, lazy, Suspense, useEffect } from "react"
const ThreeDrawing = lazy(() => import('components/ThreeDrawing'))
import styles from 'styles/Home.module.css'

const Home = () => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => setHasMounted(true), [])

  return (
    hasMounted &&
      <Suspense fallback={null}>
          <ThreeDrawing />
      </Suspense>
  )
}

export default Home
