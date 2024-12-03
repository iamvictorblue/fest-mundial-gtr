import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField(props) {
  const ref = useRef()
  const [sphere] = React.useState(() => {
    const sphere = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360) 
      const phi = THREE.MathUtils.randFloatSpread(360) 
      sphere[i * 3] = 50 * Math.sin(theta) * Math.cos(phi)
      sphere[i * 3 + 1] = 50 * Math.sin(theta) * Math.sin(phi)
      sphere[i * 3 + 2] = 50 * Math.cos(theta)
    }
    return sphere
  })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function StarfieldBackground() {
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      zIndex: -1, 
      background: 'linear-gradient(to bottom, rgb(115,208,235), rgb(183,218,214))'
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  )
}
