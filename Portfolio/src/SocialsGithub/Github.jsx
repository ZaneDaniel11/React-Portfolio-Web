"use client"

import { useState, useEffect } from "react"
import GitHubCalendar from "react-github-calendar"

export default function Github() {
  const [followers, setFollowers] = useState([])
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
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

  const displayedRepos = repos.slice(0, 5)

  return (
    <div className="font-kreon bg-[#1D1D1D] overflow-x-hidden w-full text-white p-4 lg:p-8">
      {/* Centered container for large screens */}
      <div className="text-center">
        <h2 className="text-5xl mb-4 font-bold text-body-yellow md:text-7xl md:pt-[50px] pb-[20px] lg:text-9xl lg:pb-[40px]">GitHub Stats</h2>

        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <span className="ml-2">Loading...</span>
          </div>
        ) : (
          <div className="space-y-8 lg:space-y-12">
            {/* Stats Section */}
            <div className="flex flex-row gap-4 justify-center items-center font-kreon">
              <div className=" border-2 border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {followers.length} Followers
              </div>
              <div className=" border-2 border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg">{repos.length} Repositories</div>
            </div>

            {/* Recent Repositories Section */}
            <div className="lg:text-left">
              <h3 className="text-2xl text-black pb-[20px] font-bold md:text-4xl  md:pb-[20px] lg:text-6xl mt-7 lg:text-center text-body-yellow">Recent Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {displayedRepos.map((repo) => (
                  <div
                    key={repo.id}
                    className="border-2 border-gray-600 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-blue-400 truncate">{repo.name}</h4>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
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
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    See All {repos.length} Repositories
                  </button>
                </div>
              )}
            </div>

            {/* Contribution Graph Section */}
            <div>
              <h3 className="text-2xl lg:text-3xl mb-6 lg:text-center text-body-yellow">Contribution Graph</h3>
              <div className="flex justify-center min-w-[320px]">
                <div className="">
                  <GitHubCalendar
                    username={username}
                    colorScheme="dark"
                    theme={colorTheme}
                    style={{
                      width: "100%",
                      maxWidth: "1200px",
                      fontSize: "14px",
                    }}
                    blockSize={15}
                    blockMargin={4}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">All Repositories</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repos.map((repo) => (
                  <div
                    key={repo.id}
                    className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-blue-400 truncate">{repo.name}</h4>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{repo.description || "No description available"}</p>
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
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
