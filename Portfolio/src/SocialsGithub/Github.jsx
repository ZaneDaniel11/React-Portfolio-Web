"use client"

import { useState, useEffect } from "react"
import GitHubCalendar from "react-github-calendar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Users, ExternalLink } from "lucide-react"

export default function Github() {
  const [followers, setFollowers] = useState([])
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAllRepos, setShowAllRepos] = useState(false)
  const username = "ZaneDaniel11" // Define your GitHub username here

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch repositories instead of followers
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`)
        if (!reposResponse.ok) {
          throw new Error("Failed to fetch GitHub repositories")
        }
        const reposData = await reposResponse.json()
        setRepos(reposData)

        // Still fetch followers for count but don't display them
        const followersResponse = await fetch(`https://api.github.com/users/${username}/followers`)
        if (followersResponse.ok) {
          const followersData = await followersResponse.json()
          setFollowers(followersData)
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [username])

  // Custom color theme for the GitHub calendar
  const colorTheme = {
    dark: [
      "#BBBAB9", // Least contributions
      "#926C02",
      "#BB8A03",
      "#DDA304",
      "#F3B304", // Most contributions
    ],
  }

  const displayedRepos = showAllRepos ? repos : repos.slice(0, 5)

  return (
    <div className="bg-[#1D1D1D] overflow-x-hidden w-full text-white p-4 lg:p-8">
      {/* Centered container for large screens */}
      <div className="max-w-6xl mx-auto lg:text-center">
        <h2 className="text-4xl lg:text-5xl mb-6 lg:mb-8 font-bold">GitHub Stats</h2>

        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <span className="ml-2">Loading...</span>
          </div>
        ) : (
          <div className="space-y-8 lg:space-y-12">
            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-gray-800 text-white">
                <Users className="w-5 h-5 mr-2" />
                {followers.length} Followers
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-gray-800 text-white">
                {repos.length} Repositories
              </Badge>
            </div>

            {/* Recent Repositories Section */}
            <div className="lg:text-left">
              <h3 className="text-2xl lg:text-3xl mb-4 lg:text-center">Recent Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {displayedRepos.map((repo) => (
                  <div key={repo.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-blue-400 truncate">{repo.name}</h4>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {repo.description || "No description available"}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      {repo.language && (
                        <span className="bg-blue-600 text-white px-2 py-1 rounded">{repo.language}</span>
                      )}
                      <span>⭐ {repo.stargazers_count}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* See More Button */}
              {repos.length > 5 && (
                <div className="text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                      >
                        See All {repos.length} Repositories
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gray-900 text-white border-gray-700">
                      <DialogHeader>
                        <DialogTitle className="text-2xl mb-4">All Repositories</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {repos.map((repo) => (
                          <div key={repo.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-lg font-semibold text-blue-400 truncate">{repo.name}</h4>
                              <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </div>
                            <p className="text-gray-300 text-sm mb-3">
                              {repo.description || "No description available"}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-400">
                              {repo.language && (
                                <span className="bg-blue-600 text-white px-2 py-1 rounded">{repo.language}</span>
                              )}
                              <div className="flex gap-4">
                                <span>⭐ {repo.stargazers_count}</span>
                                <span>🍴 {repo.forks_count}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>

            {/* Contribution Graph Section */}
            <div>
              <h3 className="text-2xl lg:text-3xl mb-4 lg:text-center">Contribution Graph</h3>
              <div className="flex justify-center">
                <div className="overflow-x-auto">
                  <GitHubCalendar
                    username={username}
                    colorScheme="dark"
                    theme={colorTheme}
                    style={{
                      width: "100%",
                      maxWidth: "900px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
