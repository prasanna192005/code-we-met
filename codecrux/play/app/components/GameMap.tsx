//@ts-nocheck

import Image from "next/image"
import { checkpoints } from "../data/checkpoints"

export default function GameMap({ onCheckpointClick }) {
  return (
    <div className="relative w-[800px] h-[600px] overflow-hidden rounded-lg ">
      <Image
        src="/map1.png"
        alt="Cyberpunk City Map"
        layout="fill"
        objectFit="cover"
        quality={100}
        className=""
      />
      <div className="absolute inset-0  from-purple-900/30 to-cyan-900/30"></div>
      {checkpoints.map((checkpoint) => (
        <button
          key={checkpoint.id}
          className={`absolute w-6 h-6 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 hover:z-10 ${
            checkpoint.color === "cyan" ? "bg-red-500" : "bg-red-500"
          } shadow-lg shadow-${checkpoint.color === "cyan" ? "cyan" : "red"}-500/50`}
          style={{ left: `${checkpoint.x}%`, top: `${checkpoint.y}%` }}
          onClick={() => onCheckpointClick(checkpoint)}
        >
          <span className="absolute inset-0 rounded-full animate-ping opacity-75 bg-white"></span>
        </button>
      ))}
    </div>
  )
}

