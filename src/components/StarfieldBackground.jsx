import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import beachImage from "../assets/beach-image.png";

function StarField(props) {
  const ref = useRef()
  const [sphere] = React.useState(() => {
    const sphere = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360) 
      const phi = THREE.MathUtils.randFloatSpread(360) 
      sphere[i * 3] = 50 * Math.sin(theta) * Math.cos(phi)
      sphere[i * 3 + 1] = 50 * Math.sin(theta) * Math.sin(phi)
      sphere[i * 3 + 2] = 50 * Math.cos(theta)
    }
    return sphere
  })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15
    ref.current.rotation.y -= delta / 20
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#B7DAD6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#73D0EB"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#498FC6"
          size={0.03}
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
      background: `linear-gradient(to bottom, rgb(115,208,235), rgb(183,218,214)), url(${beachImage})`,
      backgroundBlendMode: 'overlay',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.3,
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${beachImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1,
        mixBlendMode: 'overlay',
      }} />
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  )
}
