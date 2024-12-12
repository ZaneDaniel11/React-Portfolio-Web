"use client"

import { useState, useEffect } from "react"
import GitHubCalendar from "react-github-calendar"
import { Twitter, Facebook, Mail, MessageCircle, Send } from "lucide-react"

export default function Github() {
  const [followers, setFollowers] = useState([])
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [hoveredDay, setHoveredDay] = useState(null)
  const [error, setError] = useState(null)
  const username = "ZaneDaniel11" // Define your GitHub username here

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Add timeout to prevent infinite loading
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`, {
          signal: controller.signal,
        })

        clearTimeout(timeoutId)

        if (!reposResponse.ok) {
          throw new Error(`Failed to fetch repositories: ${reposResponse.status}`)
        }

        const reposData = await reposResponse.json()
        setRepos(reposData || [])

        // Fetch followers (optional, don't let it block the main content)
        try {
          const followersResponse = await fetch(`https://api.github.com/users/${username}/followers`)
          if (followersResponse.ok) {
            const followersData = await followersResponse.json()
            setFollowers(followersData || [])
          }
        } catch (followersError) {
          console.warn("Could not fetch followers:", followersError)
          setFollowers([])
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error)
        setError(error.message)
        // Set empty arrays to stop loading even on error
        setRepos([])
        setFollowers([])
      } finally {
        setLoading(false)
      }
    }

    // Only fetch if username exists
    if (username && username.trim()) {
      fetchGitHubData()
    } else {
      setLoading(false)
      setError("No username provided")
    }
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
  const currentYear = new Date().getFullYear()

  // Social media links data
  const socialLinks = [
    {
      name: "GitHub",
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: `https://github.com/${username}`,
      color: "hover:text-gray-300",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/yourusername", // Replace with your Twitter
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/yourusername", // Replace with your Facebook
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@gmail.com", // Replace with your email
      color: "hover:text-red-400",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/1234567890", // Replace with your WhatsApp number
      color: "hover:text-green-400",
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/yourusername", // Replace with your Telegram
      color: "hover:text-blue-500",
    },
  ]

  return (
    <div className="font-kreon bg-[#1D1D1D] overflow-x-hidden w-full text-white p-4 lg:p-8">
      {/* Centered container for large screens */}
      <div className="text-center">
        <h2 className="text-5xl mb-4 font-bold text-body-yellow md:text-7xl md:pt-[50px] pb-[20px] lg:text-9xl lg:pb-[40px]">
          GitHub Stats
        </h2>

     

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-900 border border-red-700 text-red-100 px-4 py-3 rounded mb-6">
            <p>Error loading GitHub data: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 bg-red-700 hover:bg-red-600 px-3 py-1 rounded text-sm"
            >
              Retry
            </button>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <span className="ml-2">Loading GitHub data...</span>
          </div>
        ) : (
          <div className="space-y-8 lg:space-y-12">
            {/* Stats Section */}
            <div className="flex flex-row gap-4 justify-center items-center font-kreon">
              <div className="border-2 border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {followers.length} Followers
              </div>
              <div className="border-2 border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-lg">
                {repos.length} Repositories
              </div>
            </div>

            {/* Recent Repositories Section */}
            <div className="lg:text-left">
              <h3 className="text-2xl text-black pb-[20px] font-bold md:text-4xl md:pb-[20px] lg:text-6xl mt-7 lg:text-center text-body-yellow">
                Recent Projects
              </h3>

              {repos.length > 0 ? (
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
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <p>No repositories found</p>
                </div>
              )}

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
              <h3 className="text-2xl lg:text-3xl mb-6 lg:text-center text-body-yellow">
                {currentYear} Contribution Graph
              </h3>

              {/* Single scrollable container - NO DOUBLE SCROLLBARS */}
              <div className="w-full">
  
                  <div className="w-full flex justify-center py-4">
                    <div className="w-full max-w-[1200px]">
                      <GitHubCalendar
                        username={username}
                        colorScheme="dark"
                        theme={colorTheme}
                        style={{
                          width: "100%",
                          fontSize: "14px",
                        }}
                        blockSize={15}
                        blockMargin={4}
                        showWeekdayLabels={true}
                        labels={{
                          months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                          weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                          totalCount: "{{count}} contributions in {{year}}",
                          legend: {
                            less: "Less",
                            more: "More",
                          },
                        }}
                        transformData={(data) => {
                          return data.map((day) => ({
                            ...day,
                            level: Math.min(day.count, 4), // Ensure level doesn't exceed 4
                          }))
                        }}
                      />
                    </div>
                  </div>
                </div>
              

             
               {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-5 mb-8">
          {socialLinks.map((social) => {
            const IconComponent = social.icon
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-gray-800 rounded-full border-2 border-gray-600 transition-all duration-300 ${social.color} hover:scale-110 hover:border-gray-400`}
                title={social.name}
              >
                <IconComponent className="w-5 h-5" />
              </a>
            )
          })}
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
