import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CodeCrux",
  description: "A reactive DSA community app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}>
      <nav className="shadow-md p-4 flex justify-between items-center bg-black text-white">
  <div className="text-xl font-bold"></div>
  <ul className="hidden md:flex space-x-6">
    <li><a href="https://codecrux-hero.vercel.app/" className="hover:text-gray-600">Home</a></li>
    <li><a href="https://coderuxx-vs8d.vercel.app/" className="hover:text-gray-600">Play</a></li>
    <li><a href="http://localhost:3000/AlgorithmVisualizer/AlgorithmVisualizer" className="hover:text-gray-600">Visualize</a></li>
    <li><a href="https://codecrux-profile.vercel.app/" className="hover:text-gray-600">Profile</a></li>
  </ul>
  <button className="md:hidden text-gray-600">☰</button>
</nav>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

