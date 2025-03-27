"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Header from "@/components/header"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageSquare, Code, Share2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

type Article = {
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

type Comment = {
  id: number
  author: {
    name: string
    avatar: string
  }
  content: string
  createdAt: string
  upvotes: number
}

const dummyArticle: Article = {
  id: 1,
  title: "Optimizing Fibonacci Sequence with Dynamic Programming",
  content:
    "Dynamic Programming (DP) is a powerful technique for solving optimization problems. In this article, we'll explore how to use DP to optimize the calculation of Fibonacci numbers.\n\nThe Fibonacci sequence is defined as follows:\n\nF(0) = 0\nF(1) = 1\nF(n) = F(n-1) + F(n-2) for n > 1\n\nA naive recursive implementation would have exponential time complexity. However, by using DP, we can reduce it to linear time complexity.\n\nHere's a Python implementation using DP:\n\n```python\ndef fib(n):\n    if n <= 1:\n        return n\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    for i in range(2, n + 1):\n        dp[i] = dp[i-1] + dp[i-2]\n    return dp[n]\n```\n\nThis implementation has a time complexity of O(n) and space complexity of O(n). We can further optimize the space complexity to O(1) by only keeping track of the last two numbers:\n\n```python\ndef fib_optimized(n):\n    if n <= 1:\n        return n\n    a, b = 0, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    return b\n```\n\nBy using DP, we've significantly improved the efficiency of calculating Fibonacci numbers, making it possible to compute large Fibonacci numbers quickly.",
  author: {
    name: "Alice",
    avatar: "image.png",
  },
  upvotes: 15,
  comments: 7,
  tags: ["Dynamic Programming", "Algorithms", "Python"],
  createdAt: "2h ago",
}

const dummyComments: Comment[] = [
  {
    id: 1,
    author: {
      name: "Bob",
      avatar: "/image.png",
    },
    content: "Great explanation! I've been struggling with DP and this really helped clarify things.",
    createdAt: "1h ago",
    upvotes: 5,
  },
  {
    id: 2,
    author: {
      name: "Charlie",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    content: "Have you considered using memoization instead of tabulation? It might be more intuitive for some people.",
    createdAt: "45m ago",
    upvotes: 3,
  },
  {
    id: 3,
    author: {
      name: "David",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    content: "I implemented this in Java and it works great. Thanks for the clear explanation!",
    createdAt: "30m ago",
    upvotes: 2,
  },
]

export default function ArticlePage() {
  const params = useParams()
  const [article, setArticle] = useState<Article | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [upvoted, setUpvoted] = useState(false)
  const [upvotes, setUpvotes] = useState(0)

  useEffect(() => {
    // In a real app, we would fetch the article and comments based on the ID
    // For now, we'll just use our dummy data
    setArticle(dummyArticle)
    setComments(dummyComments)
    setUpvotes(dummyArticle.upvotes)
  }, [])

  if (!article) {
    return <div>Loading...</div>
  }

  const handleUpvote = () => {
    if (upvoted) {
      setUpvotes(upvotes - 1)
    } else {
      setUpvotes(upvotes + 1)
    }
    setUpvoted(!upvoted)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>{article.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{article.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Posted by {article.author.name} • {article.createdAt}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none">
              {article.content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-4 space-x-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" onClick={handleUpvote}>
                <ThumbsUp className={`mr-2 h-4 w-4 ${upvoted ? "fill-current" : ""}`} />
                {upvotes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                {comments.length}
              </Button>
              <Button variant="ghost" size="sm">
                <Code className="mr-2 h-4 w-4" />
                Code
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </CardFooter>
        </Card>

        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <div className="space-y-4 mb-8">
          {comments.map((comment) => (
            <Card key={comment.id}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                    <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{comment.author.name}</p>
                    <p className="text-sm text-muted-foreground">{comment.createdAt}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{comment.content}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  {comment.upvotes}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Separator className="my-8" />

        <h2 className="text-2xl font-bold mb-4">Add a Comment</h2>
        <Textarea className="mb-4" placeholder="Write your comment here..." />
        <Button>Post Comment</Button>
      </main>
    </div>
  )
}

