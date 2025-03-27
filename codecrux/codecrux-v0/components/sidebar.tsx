"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

const tags = ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming", "Sorting", "Searching"]

interface SidebarProps {
  onSearch: (query: string) => void
  onTagFilter: (tag: string) => void
  activeTag: string | null
}

export default function Sidebar({ onSearch, onTagFilter, activeTag }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <aside className="w-64 bg-muted p-4 hidden md:block lg:hidden xl:block">
      <form onSubmit={handleSearch} className="mb-4">
        <Label htmlFor="search">Search</Label>
        <div className="flex items-center space-x-2">
          <Input
            id="search"
            placeholder="Search discussions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant={activeTag === tag ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => onTagFilter(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <Button className="w-full">New Discussion</Button>
    </aside>
  )
}

