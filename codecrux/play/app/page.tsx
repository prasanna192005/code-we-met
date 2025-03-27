//@ts-nocheck

"use client"

import { useState } from "react"
import GameMap from "./components/GameMap"
import CheckpointInfo from "./components/CheckpointInfo"

export default function CyberpunkGameMap() {
  const [selectedCheckpoint, setSelectedCheckpoint] = useState(null)

  const handleCheckpointClick = (checkpoint) => {
    setSelectedCheckpoint(checkpoint)
  }

  const handleClosePopup = () => {
    setSelectedCheckpoint(null)
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <h1 className="text-5xl font-bold mb-8 text-cyan-400 cyberpunk-text-glow z-10">Algorashtra</h1>
      <div className="relative z-10">
        <GameMap onCheckpointClick={handleCheckpointClick} />
        {selectedCheckpoint && <CheckpointInfo checkpoint={selectedCheckpoint} onClose={handleClosePopup} />}
      </div>
    </div>
  )
}

