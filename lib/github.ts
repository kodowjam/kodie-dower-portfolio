export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
  created_at: string
}

export interface ProjectData {
  id: number
  name: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  liveUrl: string | null
  stars: number
  forks: number
  lastUpdated: string
  image: string
  category: string
}

const GITHUB_API_BASE = "https://api.github.com"
const GITHUB_USERNAME = "kodowjam"

// Map of repo names to categories and additional info
const repoMetadata: Record<string, { category: string; longDescription: string; image: string }> = {
  "ai-content-pipeline": {
    category: "Content Automation",
    longDescription:
      "A comprehensive content automation system that leverages AI to generate, optimize, and distribute marketing content. Features include content ideation, automated writing, SEO optimization, and multi-channel publishing with performance tracking.",
    image: "/ai-project-1.png",
  },
  "auto-listbuilder": {
    category: "Lead Generation",
    longDescription:
      "An automated lead generation system that combines web scraping, AI-powered qualification, and CRM integration. Uses machine learning to score leads and automatically builds targeted prospect lists for marketing campaigns.",
    image: "/ai-project-2.png",
  },
  "ai-video-editor": {
    category: "Video Processing",
    longDescription:
      "An intelligent video editing platform that automates the post-production process. Features include automatic scene detection, content-aware cropping, subtitle generation, and optimization for different social media platforms.",
    image: "/ai-project-3.png",
  },
  "sproutsocial-mcp-server": {
    category: "MCP Integration",
    longDescription:
      "A custom Model Context Protocol (MCP) server for Sprout Social integration. Enables AI agents to interact with Sprout Social's API for social media management, analytics, and automated publishing workflows.",
    image: "/ai-project-4.png",
  },
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Portfolio-Website",
  }

  // Add GitHub token if available for higher rate limits
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`
  }

  try {
    console.log("[v0] Making GitHub API request")
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, {
      headers,
      cache: "force-cache", // Use standard fetch caching instead of Next.js specific
    })

    if (!response.ok) {
      console.error("[v0] GitHub API error:", response.status, response.statusText)
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()
    console.log("[v0] Successfully fetched", repos.length, "repositories from GitHub")

    // Filter for AI/automation projects and public repos
    const filteredRepos = repos.filter(
      (repo) =>
        !repo.name.includes("fork") &&
        (repo.topics.some((topic) =>
          ["ai", "automation", "machine-learning", "content", "marketing"].includes(topic),
        ) ||
          Object.keys(repoMetadata).includes(repo.name)),
    )

    console.log("[v0] Filtered to", filteredRepos.length, "relevant repositories")
    return filteredRepos
  } catch (error) {
    console.error("[v0] Error fetching GitHub repos:", error)
    return []
  }
}

export function transformRepoToProject(repo: GitHubRepo): ProjectData {
  const metadata = repoMetadata[repo.name] || {
    category: "AI/Automation",
    longDescription: repo.description || "An innovative AI project focused on automation and efficiency.",
    image: "/ai-project-1.png",
  }

  // Extract technologies from language and topics
  const technologies = [
    repo.language,
    ...repo.topics.filter((topic) =>
      ["python", "javascript", "typescript", "react", "nextjs", "ai", "machine-learning", "automation"].includes(topic),
    ),
  ]
    .filter(Boolean)
    .slice(0, 6)

  return {
    id: repo.id,
    name: repo.name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description: repo.description || "AI-powered automation tool",
    longDescription: metadata.longDescription,
    technologies: technologies.length > 0 ? technologies : ["Python", "AI"],
    githubUrl: repo.html_url,
    liveUrl: repo.homepage,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    lastUpdated: repo.updated_at,
    image: metadata.image,
    category: metadata.category,
  }
}
