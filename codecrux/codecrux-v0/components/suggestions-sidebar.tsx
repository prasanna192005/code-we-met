import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const suggestedUsers = [
  { id: 1, name: "Alice", expertise: "Algorithms", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 2, name: "Bob", expertise: "Data Structures", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 3, name: "Charlie", expertise: "System Design", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 4, name: "David", expertise: "Machine Learning", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 5, name: "Eve", expertise: "Cryptography", avatar: "/placeholder.svg?height=32&width=32" },
]

const trendingTopics = [
  "Graph Algorithms",
  "Dynamic Programming",
  "System Design",
  "Object-Oriented Design",
  "Concurrency",
]

export default function SuggestionsSidebar() {
  return (
    <Card className="w-64 h-[calc(100vh-4rem)] overflow-hidden hidden xl:block">
      <CardHeader>
        <CardTitle>Suggestions</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="p-4 space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Users to Follow</h3>
              <ul className="space-y-2">
                {suggestedUsers.map((user) => (
                  <li key={user.id} className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.expertise}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Trending Topics</h3>
              <ul className="space-y-1">
                {trendingTopics.map((topic, index) => (
                  <li key={index} className="text-sm">
                    <a href="#" className="hover:underline">
                      #{topic}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

