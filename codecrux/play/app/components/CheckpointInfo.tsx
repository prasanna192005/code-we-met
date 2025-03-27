//@ts-nocheck
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function CheckpointInfo({ checkpoint, onClose }) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-gray-900/90 p-6 rounded-lg shadow-2xl border border-cyan-500/50 text-white backdrop-blur-md">
      <h2 className="text-2xl font-bold mb-4 text-purple-400 cyberpunk-text-glow">{checkpoint.name}</h2>
      <p className="mb-4 text-sm leading-relaxed text-gray-300">{checkpoint.description}</p>
      <div className="flex justify-between items-center">
        <Link href={`/checkpoint`}>
        <Button 
          className="bg-purple-500 hover:bg-purple-600 text-black font-bold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
        >
          Embark
        </Button>
        </Link>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors duration-300">
          Close
        </button>
        
      </div>
    </div>
  )
}

