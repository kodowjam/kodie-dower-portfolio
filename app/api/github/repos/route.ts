import { NextResponse } from "next/server"
import { fetchGitHubRepos, transformRepoToProject } from "@/lib/github"

export async function GET() {
  try {
    const repos = await fetchGitHubRepos()
    const projects = repos.map(transformRepoToProject)

    return NextResponse.json({
      success: true,
      data: projects,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch repositories",
        data: [],
      },
      { status: 500 },
    )
  }
}

export const dynamic = "force-dynamic"
