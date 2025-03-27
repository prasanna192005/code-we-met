//@ts-nocheck

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function CityGrid() {
  const gridRef = useRef()

  useFrame(() => {
    if (gridRef.current) {
      gridRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={gridRef}>
      <gridHelper args={[100, 100, 0x004444, 0x004444]} />
      {Array.from({ length: 20 }).map((_, i) =>
        Array.from({ length: 20 }).map((_, j) => (
          <mesh key={`building-${i}-${j}`} position={[i * 5 - 47.5, 0, j * 5 - 47.5]}>
            <boxGeometry args={[3, Math.random() * 10 + 1, 3]} />
            <meshStandardMaterial color={new THREE.Color(0x000000)} />
          </mesh>
        )),
      )}
    </group>
  )
}

