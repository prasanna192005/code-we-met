import Header from "@/components/header"
import DiscussionFeed from "@/components/discussion-feed"
import RecentlyViewedSidebar from "@/components/recently-viewed-sidebar"
import SuggestionsSidebar from "@/components/suggestions-sidebar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex">
        <RecentlyViewedSidebar />
        <DiscussionFeed />
        <SuggestionsSidebar />
      </main>
    </div>
  )
}

