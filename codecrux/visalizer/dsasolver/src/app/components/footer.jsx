'use client'

import { useEffect, useState } from 'react';
import GitHubButton from 'react-github-btn';

export default function Footer() {
  const [visitors, setVisitors] = useState(0)

  useEffect(() => {
    // Simulate fetching visitor count
    // In a real application, you would fetch this from an API
    setVisitors(Math.floor(Math.random() * 10000))
  }, [])

  return (
    <footer className="bg-background py-6 px-6 mt-12 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-wrap justify-center gap-2">
          {/* <Button variant="outline" size="sm">
            <Github className="mr-2 h-4 w-4" />
            Follow
          </Button>
          <Button variant="outline" size="sm">
            <Star className="mr-2 h-4 w-4" />
            Star
          </Button>
          <Button variant="outline" size="sm">
            <GitFork className="mr-2 h-4 w-4" />
            Fork
          </Button>
          <div className="flex items-center justify-center px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
            <span className="font-bold mr-2">{visitors.toLocaleString()}</span>
            visitors
          </div> */}
        {/* <Button variant="outline" size="sm">
            <GitFork className="mr-2 h-4 w-4" />
            Fork
          </Button> */}
        </div>
      </div>
    </footer>
  )
}

