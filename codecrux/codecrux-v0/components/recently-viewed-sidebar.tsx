import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

const recentlyViewedPosts = [
  { id: 1, title: "Understanding Quicksort Algorithm", author: "Alice" },
  { id: 2, title: "Implementing a Hash Table from Scratch", author: "Bob" },
  { id: 3, title: "Depth-First Search in Graphs", author: "Charlie" },
  { id: 4, title: "Optimizing Dynamic Programming Solutions", author: "David" },
  { id: 5, title: "Balancing AVL Trees", author: "Eve" },
]

export default function RecentlyViewedSidebar() {
  return (
    <Card className="w-64 h-[calc(100vh-4rem)] overflow-hidden hidden lg:block">
      <CardHeader>
        <CardTitle>Recently Viewed</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <ul className="p-4 space-y-2">
            {recentlyViewedPosts.map((post) => (
              <li key={post.id} className="text-sm">
                <Link href={`/article/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
                <p className="text-xs text-muted-foreground">by {post.author}</p>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

