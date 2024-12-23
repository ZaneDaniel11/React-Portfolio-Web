import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = "ZaneDaniel11"; // Define your GitHub username here

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/followers`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub followers");
        }
        const data = await response.json();
        setFollowers(data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers();
  }, [username]);

  // Custom color theme for the GitHub calendar
  const colorTheme = {
    dark: [
      "#BBBAB9", // Least contributions
      "#926C02",
      "#BB8A03",
      "#DDA304",
      "#F3B304", // Most contributions
    ],
  };

  return (
    <div className="bg-[#1D1D1D] overflow-x-hidden w-full text-white p-4">
      <h2 className="text-4xl mb-6">GitHub Stats</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3 className="text-2xl mb-4">Followers: {followers.length}</h3>
          <div className="flex gap-4 flex-wrap">
            {followers.map((follower) => (
              <img
                key={follower.id}
                src={follower.avatar_url}
                alt={follower.login}
                className="w-12 h-12 rounded-full"
              />
            ))}
          </div>
        </div>
      )}
      <h3 className="text-2xl mt-6">Contribution Graph</h3>
      <div className="mt-4">
        <div className="w-full">
          <GitHubCalendar
            username={username}
            colorScheme="dark"
            theme={colorTheme}
            style={{ width: "500px" }} // Ensures the graph width is 100%
          />
        </div>
      </div>
    </div>
  );
}
