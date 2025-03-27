"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageSquare, Code } from "lucide-react"
import Link from "next/link"
import Sidebar from "./sidebar"

type Discussion = {
  id: number
  title: string
  content: string
  author: {
    name: string
    avatar: string
  }
  upvotes: number
  comments: number
  tags: string[]
  createdAt: string
}

const dummyDiscussions: Discussion[] = [
  {
    id: 1,
    title: "Optimizing Fibonacci Sequence with Dynamic Programming",
    content:
      "I've been working on improving the efficiency of calculating Fibonacci numbers. Here's my approach using DP:",
    author: {
      name: "Alice",
      avatar: "/image.png",
    },
    upvotes: 15,
    comments: 7,
    tags: ["Dynamic Programming", "Algorithms"],
    createdAt: "2h ago",
  },
  {
    id: 2,
    title: "Implementing a Balanced Binary Search Tree",
    content: "I'm struggling with the rotation logic in my AVL tree implementation. Any tips?",
    author: {
      name: "Bob",
      avatar: "/image.png",
    },
    upvotes: 8,
    comments: 3,
    tags: ["Trees", "Data Structures"],
    createdAt: "4h ago",
  },
  {
    id: 3,
    title: "Efficient Graph Traversal Techniques",
    content: "Let's discuss various graph traversal algorithms and their time complexities.",
    author: {
      name: "Charlie",
      avatar: "/image.png",
    },
    upvotes: 12,
    comments: 5,
    tags: ["Graphs", "Algorithms"],
    createdAt: "6h ago",
  },
  {
    id: 4,
    title: "Mastering Quicksort and Its Variations",
    content: "Quicksort is a powerful sorting algorithm. Let's explore its implementation and optimizations.",
    author: {
      name: "David",
      avatar: "/imag2.jpeg",
    },
    upvotes: 10,
    comments: 4,
    tags: ["Sorting", "Algorithms"],
    createdAt: "8h ago",
  },
  {
    id: 5,
    title: "Understanding Time Complexity in Recursive Algorithms",
    content: "Analyzing time complexity in recursive algorithms can be tricky. Here's a guide to help you master it.",
    author: {
      name: "Eve",
      avatar: "/imag2.jpeg",
    },
    upvotes: 18,
    comments: 9,
    tags: ["Algorithms", "Recursion"],
    createdAt: "10h ago",
  },
]

export default function DiscussionFeed() {
  const [discussions, setDiscussions] = useState<Discussion[]>([])
  const [filteredDiscussions, setFilteredDiscussions] = useState<Discussion[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTag, setActiveTag] = useState<string | null>(null)

  useEffect(() => {
    // Simulating fetching discussions from an API
    setDiscussions(dummyDiscussions)
    setFilteredDiscussions(dummyDiscussions)
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    filterDiscussions(query, activeTag)
  }

  const handleTagFilter = (tag: string) => {
    if (activeTag === tag) {
      setActiveTag(null)
      filterDiscussions(searchQuery, null)
    } else {
      setActiveTag(tag)
      filterDiscussions(searchQuery, tag)
    }
  }

  const filterDiscussions = (query: string, tag: string | null) => {
    let filtered = discussions

    if (query) {
      filtered = filtered.filter(
        (discussion) =>
          discussion.title.toLowerCase().includes(query.toLowerCase()) ||
          discussion.content.toLowerCase().includes(query.toLowerCase()),
      )
    }

    if (tag) {
      filtered = filtered.filter((discussion) => discussion.tags.includes(tag))
    }

    setFilteredDiscussions(filtered)
  }

  return (
    <div className="flex flex-grow">
      <Sidebar onSearch={handleSearch} onTagFilter={handleTagFilter} activeTag={activeTag} />
      <div className="flex-grow p-4 overflow-y-auto max-w-3xl mx-auto">
        {filteredDiscussions.map((discussion) => (
          <Card key={discussion.id} className="mb-4">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                  <AvatarFallback>{discussion.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <Link href={`/article/${discussion.id}`}>
                    <CardTitle className="hover:underline cursor-pointer">{discussion.title}</CardTitle>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Posted by {discussion.author.name} • {discussion.createdAt}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{discussion.content}</p>
              <div className="mt-2 space-x-2">
                {discussion.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  {discussion.upvotes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {discussion.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <Code className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

