//@ts-nocheck

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'


const skillsData = [
  { 
    id: 1, 
    name: 'Buy Stock I', 
    description: 'Given an array of prices where prices[i] is the price of a stock on day i, find the maximum profit by choosing a single day to buy and a different day to sell. If no profit can be made, return 0.',
    requirements: 'Starting point'
  },
  { 
    id: 2, 
    name: 'Sell Stock I', 
    description: 'Optimize the selling strategy to maximize profit from a single stock purchase. Ensure that the selling day is after the buying day.',
    requirements: 'Requires: Buy Stock I'
  },
  { 
    id: 3, 
    name: 'Buy Stock II', 
    description: 'You may complete as many transactions as you like (buy and sell multiple times). However, you must sell before you buy again.',
    requirements: 'Requires: Sell Stock I'
  },
  { 
    id: 4, 
    name: 'Sell Stock II', 
    description: 'Optimize multiple buy-sell transactions to maximize cumulative profit while ensuring no overlapping trades.',
    requirements: 'Requires: Buy Stock II'
  },
  { 
    id: 5, 
    name: 'Buy Stock III', 
    description: 'You can complete at most two transactions (buy-sell pairs). Find the maximum profit that can be achieved with this constraint.',
    requirements: 'Requires: Sell Stock II'
  },
  { 
    id: 6, 
    name: 'Sell Stock III', 
    description: 'Determine the best two buy-sell transactions while considering transaction sequence constraints.',
    requirements: 'Requires: Buy Stock III'
  },
  { 
    id: 7, 
    name: 'Buy Stock IV', 
    description: 'You are allowed to complete at most k transactions. Implement a strategy to maximize profit under this constraint.',
    requirements: 'Requires: Sell Stock III'
  },
]

export default function SkillTree() {
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0])
  const [progress, setProgress] = useState(1)

  return (
    <div className="min-h-screen flex bg-black">
      <div className="flex-1 p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">Skill Progression</h1>
          <div className="max-w-xs mx-auto">
            <div className="flex flex-col items-center space-y-8 mb-12 relative px-8">
              {skillsData.map((skill, index) => (
                <div key={skill.id} className="flex flex-col items-center">
                  {index > 0 && (
                    <div className="absolute flex flex-col items-center justify-center z-0" 
                         style={{ top: `${index * 96 - 48}px`, height: '96px' }}>
                      <div className={`w-0.5 flex-grow ${skill.id <= progress ? 'bg-cyan-500' : 'bg-zinc-700'}`} />
                      <div 
                        className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] ${
                          skill.id <= progress ? 'border-t-cyan-500' : 'border-t-zinc-700'
                        }`} 
                      />
                    </div>
                  )}
                  <motion.button
                    onClick={() => setSelectedSkill(skill)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative w-16 h-16 rounded-full border-2 transition-all duration-300 z-10 ${
                      skill.id === progress
                        ? 'bg-cyan-500 border-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]'
                        : skill.id < progress
                        ? 'bg-zinc-800 border-cyan-500'
                        : 'bg-zinc-900 border-zinc-700'
                    }`}
                  >
                    <span className={`absolute inset-0 flex items-center justify-center text-lg font-medium
                      ${skill.id <= progress ? 'text-white' : 'text-zinc-500'}`}>
                      {skill.id}
                    </span>
                    <div className={`absolute left-20 top-1/2 -translate-y-1/2 transform opacity-0 
                      group-hover:opacity-100 transition-opacity bg-zinc-900 text-white px-3 py-1.5 
                      rounded-md text-sm whitespace-nowrap border border-zinc-700 z-20`}>
                      {skill.name}
                    </div>
                  </motion.button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-96 bg- p-8 border-l border-zinc-800 overflow-y-auto"
      >
        <div className="mb-6">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm
            ${progress >= skillsData.length ? 'bg-green-500/20 text-green-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
            {progress >= skillsData.length ? 'Completed' : 'In Progress'}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{selectedSkill.name}</h2>
            <p className="text-zinc-400 text-sm">{selectedSkill.requirements}</p>
          </div>

          <p className="text-zinc-300 leading-relaxed">
            {selectedSkill.description}
          </p>

          {selectedSkill.id <= progress && progress < skillsData.length && (
            <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/">
              <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setProgress(prev => Math.min(prev + 1, skillsData.length))}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 
                hover:to-blue-400 text-white px-6 py-3 rounded-lg font-medium flex items-center 
                justify-center group transition-all"
            >
              Unlock Next Level
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            </a>
          )}

          {progress >= skillsData.length && (
            <div className="bg-zinc-800/50 rounded-lg p-6  text-center">
              <p className="text-zinc-300">Congratulations! You've completed all levels.</p>
            </div>
          )}
        </div>
        <div className='mt-10   text-sm h-10 w-20 rounded-sm bg-gradient-to-t text-white flex items-center justify-center cursor-pointer'>
            <Link  className='font-bold  text-black' href="https://www.youtube.com/watch?v=vRVfmbCFW7Y&t=131s&ab_channel=takeUforward">
            Solution
            </Link> 

            <iframe className='ml-[150px] mt-[200px]' width="300px" height="200px" src="https://www.youtube.com/embed/vRVfmbCFW7Y" title="DP 48. Matrix Chain Multiplication | MCM | Partition DP Starts 🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </motion.div>
    </div>
  )
}

