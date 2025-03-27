//@ts-nocheck
import { Button } from "@/components/ui/button"

export default function PopupPanel({ checkpoint, onClose }) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-90 p-6 rounded-lg shadow-lg border border-cyan-500 text-white">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">{checkpoint.name}</h2>
      <p className="mb-4">
        Welcome to {checkpoint.name}, traveler. This location is a hub of cybernetic activity and neon-lit wonders.
      </p>
      <div className="flex justify-between items-center">
        <Button
          onClick={() => alert(`Embarking to ${checkpoint.name}`)}
          className="bg-purple-500 hover:bg-purple-600 text-black font-bold py-2 px-4 rounded"
        >
          Embark
        </Button>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          Close
        </button>
      </div>
    </div>
  )
}

