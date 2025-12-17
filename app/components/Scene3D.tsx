'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere({ position, color, speed }: any) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.5
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
        metalness={0.8}
      />
    </Sphere>
  )
}

function ParticleField() {
  const points = useMemo(() => {
    const p = new Array(5000).fill(0).map(() => (
      new THREE.Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      )
    ))
    return p
  }, [])

  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function Scene3D({ slideIndex }: { slideIndex: number }) {
  const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0000', '#0000ff', '#ff8800']

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />

        <AnimatedSphere position={[-5, 0, -5]} color={colors[slideIndex % colors.length]} speed={0.5} />
        <AnimatedSphere position={[5, 0, -5]} color={colors[(slideIndex + 1) % colors.length]} speed={0.3} />

        <ParticleField />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
