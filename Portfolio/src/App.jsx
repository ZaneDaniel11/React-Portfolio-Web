"use client"

import React, { useState, useEffect, Suspense } from "react"
import LoadingScreen from "./Loading"

// Lazy load components for better loading experience
const Abouts = React.lazy(() => import("./about"))
const StockTicker = React.lazy(() => import("./Components/Infinitescroll"))
const Portfolio = React.lazy(() => import("./portfolio"))
const Technology = React.lazy(() => import("./Technology"))
const Github = React.lazy(() => import("./SocialsGithub/Github"))

function App() {
  const [loading, setLoading] = useState(true)
  const [componentsLoaded, setComponentsLoaded] = useState(false)

  useEffect(() => {
    // Simulate component loading and handle slow internet
    const loadComponents = async () => {
      try {
        // Set minimum loading time (2 seconds) to handle slow connections
        const minLoadTime = new Promise((resolve) => setTimeout(resolve, 2000))

        // Preload all components
        const componentPromises = [
          import("./about"),
          import("./Components/Infinitescroll"),
          import("./portfolio"),
          import("./Technology"),
          import("./SocialsGithub/Github"),
        ]

        // Wait for both minimum time and all components to load
        await Promise.all([minLoadTime, ...componentPromises])

        setComponentsLoaded(true)

        // Small delay before hiding loading screen for smooth transition
        setTimeout(() => {
          setLoading(false)
        }, 500)
      } catch (error) {
        console.error("Error loading components:", error)
        // Even if there's an error, hide loading after a reasonable time
        setTimeout(() => {
          setLoading(false)
        }, 3000)
      }
    }

    loadComponents()
  }, [])

  if (loading) {
    return <LoadingScreen setLoading={setLoading} />
  }

  return (
    <Suspense fallback={<LoadingScreen setLoading={setLoading} />}>
      <div className="min-h-screen">
        <Abouts />
        <Technology />
        <StockTicker />
        <Portfolio />
        <Github />
      </div>
    </Suspense>
  )
}

export default App
