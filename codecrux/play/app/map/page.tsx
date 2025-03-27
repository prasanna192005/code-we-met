//@ts-nocheck
"use client"

import { useState } from "react"
import GameMap from "../components/GameMap"
import CheckpointInfo from "../components/CheckpointInfo"

export default function CyberpunkGameMap() {
  const [selectedCheckpoint, setSelectedCheckpoint] = useState(null)

  const handleCheckpointClick = (checkpoint) => {
    setSelectedCheckpoint(checkpoint)
  }

  const handleClosePopup = () => {
    setSelectedCheckpoint(null)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient">
      <h1 className="text-4xl font-bold mb-8 text-white text-shadow-md">Algorashtra</h1>
      <div className="relative">
        <GameMap onCheckpointClick={handleCheckpointClick} />
        {selectedCheckpoint && <CheckpointInfo checkpoint={selectedCheckpoint} onClose={handleClosePopup} />}
      </div>
    </div>
  );
}

