//@ts-nocheck
import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

const checkpointData = [
  { id: 1, position: [10, 1, 10], color: 0x00ffff, name: "Neon Plaza" },
  { id: 2, position: [-10, 1, -10], color: 0xff0000, name: "Red Light District" },
  { id: 3, position: [15, 1, -15], color: 0x00ffff, name: "Cyber Mall" },
  { id: 4, position: [-15, 1, 15], color: 0xff0000, name: "Underground Hub" },
]

export default function Checkpoints({ onCheckpointClick }) {
  const groupRef = useRef()
  const checkpointsRefs = useMemo(() => checkpointData.map(() => useRef()), [])

  const checkpoints = useMemo(
    () =>
      checkpointData.map((checkpoint, index) => ({
        ...checkpoint,
        ref: checkpointsRefs[index],
      })),
    [],
  )

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    checkpoints.forEach((checkpoint) => {
      if (checkpoint.ref.current) {
        checkpoint.ref.current.position.y = Math.sin(elapsedTime * 2 + checkpoint.id) * 0.2 + 1
        checkpoint.ref.current.scale.setScalar(Math.sin(elapsedTime * 3 + checkpoint.id) * 0.1 + 1)
      }
    })
  })

  return (
    <group ref={groupRef}>
      {checkpoints.map((checkpoint) => (
        <mesh
          key={checkpoint.id}
          ref={checkpoint.ref}
          position={checkpoint.position}
          onClick={() => onCheckpointClick(checkpoint)}
        >
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color={new THREE.Color(checkpoint.color)}
            emissive={new THREE.Color(checkpoint.color)}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

