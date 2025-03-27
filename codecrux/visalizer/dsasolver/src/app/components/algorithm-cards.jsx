"use client";
import Link from "next/link";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";

const algorithms = [
  {
    id: "pathfinder",
    title: "Pathfinder",
    description: "Visualize graph algorithms like Dijkstra, BFS, DFS",
    image: "/AlgorithmVisualizer/images/graph.png?height=200&width=300",
  },
  {
    id: "recursion-tree",
    title: "Recursion Tree",
    description: "A function calling itself directly or indirectly.",
    image: "/AlgorithmVisualizer/images/recursion.jpg?height=200&width=300",
  },
  {
    id: "sorting",
    title: "Sorting Algorithm",
    description: "Compare different sorting algorithms",
    image: "/AlgorithmVisualizer/images/sort.png?height=200&width=300",
  },
  {
    id: "recursive-sorting",
    title: "Recursive Sorting",
    description: "Compare different recursive sorting algorithms",
    image: "/AlgorithmVisualizer/images/sort.png?height=200&width=300",
  },
  {
    id: "n-queen",
    title: "N Queen",
    description: "Place N queens on an N×N board so they don't threaten each other.",
    image: "/AlgorithmVisualizer/images/queen.PNG?height=200&width=300",
  },
  {
    id: "convex-hull",
    title: "Convex Hull",
    description: "The smallest convex polygon containing a set of points.",
    image: "/AlgorithmVisualizer/images/convex-hull.png?height=200&width=300",
  }
];

export function AlgorithmCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {algorithms.map((algorithm) => (
        <div key={algorithm.id} className="relative h-[26rem]">
          <PinContainer title={algorithm.title} href={`/AlgorithmVisualizer/${algorithm.id}`}>
            <Link href={`/AlgorithmVisualizer/${algorithm.id}`} className="block group">
              <div className="flex flex-col w-96 h-80 p-4 rounded-lg border-4 border-violet-500 bg-transparent">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={algorithm.image}
                    alt={algorithm.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mt-3">{algorithm.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{algorithm.description}</p>
              </div>
            </Link>
          </PinContainer>
        </div>
      ))}
    </div>
  );
}