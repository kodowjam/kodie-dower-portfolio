import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star, GitFork, Calendar, Code2, Brain, RefreshCw } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SocialLinks } from "@/components/social-links"
import { fetchGitHubRepos, transformRepoToProject } from "@/lib/github"
import type { ProjectData } from "@/lib/github"

async function getProjects(): Promise<ProjectData[]> {
  try {
    console.log("[v0] Fetching GitHub repos directly from service")
    const repos = await fetchGitHubRepos()
    const projects = repos.map(transformRepoToProject)
    console.log("[v0] Successfully fetched", projects.length, "projects")
    return projects
  } catch (error) {
    console.error("[v0] Error fetching projects:", error)
    // Fallback to static data if API fails
    return [
      {
        id: 1,
        name: "AI Content Pipeline",
        description:
          "Automated content generation and distribution pipeline using AI models for creating, optimizing, and scheduling marketing content across multiple channels.",
        longDescription:
          "A comprehensive content automation system that leverages AI to generate, optimize, and distribute marketing content. Features include content ideation, automated writing, SEO optimization, and multi-channel publishing with performance tracking.",
        technologies: ["Python", "OpenAI API", "LangChain", "FastAPI", "PostgreSQL", "Celery"],
        githubUrl: "https://github.com/kodowjam/ai-content-pipeline",
        liveUrl: null,
        stars: 0,
        forks: 0,
        lastUpdated: "2024-01-25",
        image: "/ai-content-dashboard.png",
        category: "Content Automation",
      },
      {
        id: 2,
        name: "Auto List Builder",
        description:
          "Intelligent lead generation and list building tool that uses AI to identify, qualify, and organize potential customers from various data sources.",
        longDescription:
          "An automated lead generation system that combines web scraping, AI-powered qualification, and CRM integration. Uses machine learning to score leads and automatically builds targeted prospect lists for marketing campaigns.",
        technologies: ["Python", "Scrapy", "Machine Learning", "CRM APIs", "Data Processing", "AI Classification"],
        githubUrl: "https://github.com/kodowjam/auto-listbuilder",
        liveUrl: null,
        stars: 0,
        forks: 0,
        lastUpdated: "2024-01-20",
        image: "/lead-generation-dashboard.png",
        category: "Lead Generation",
      },
      {
        id: 3,
        name: "AI Video Editor",
        description:
          "Automated video editing tool that uses AI to cut, splice, and enhance video content for social media and marketing campaigns.",
        longDescription:
          "An intelligent video editing platform that automates the post-production process. Features include automatic scene detection, content-aware cropping, subtitle generation, and optimization for different social media platforms.",
        technologies: ["Python", "OpenCV", "FFmpeg", "Machine Learning", "Computer Vision", "Audio Processing"],
        githubUrl: "https://github.com/kodowjam/ai-video-editor",
        liveUrl: null,
        stars: 0,
        forks: 0,
        lastUpdated: "2024-01-18",
        image: "/ai-video-editor-interface.png",
        category: "Video Processing",
      },
    ]
  }
}

export default async function ProjectsPage() {
  const aiProjects = await getProjects()
  const categories = ["All", ...Array.from(new Set(aiProjects.map((p) => p.category)))]

  return (
    <div className="min-h-screen bg-background page-transition">
      {/* Navigation Component */}
      <Navigation showBackButton={true} />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-accent" />
              <h1 className="text-4xl font-serif font-bold">AI Projects</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my collection of AI-powered marketing automation tools. Each project demonstrates practical
              applications of artificial intelligence for growth marketing, content creation, and business automation.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <RefreshCw className="w-4 h-4" />
              <span>Projects automatically synced from GitHub</span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {aiProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl font-serif group-hover:text-accent transition-colors">
                      {project.name}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <Badge variant="secondary" className="bg-accent/90 text-accent-foreground">
                      {project.category}
                    </Badge>
                  </div>

                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Project Stats */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        <span>{project.forks}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(project.lastUpdated).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-2">
                      <Button size="sm" asChild className="flex-1">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-serif font-bold">Interested in Collaboration?</h2>
          </div>
          <p className="text-muted-foreground mb-8 text-lg">
            I'm always excited to work on innovative AI projects and explore new marketing automation technologies.
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/#contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/kodowjam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                View All Repositories
              </a>
            </Button>
          </div>
          <SocialLinks variant="icons" size="md" showLabels={false} includeEmail={false} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground">© 2024 Kodie Dower. Built with Next.js and Tailwind CSS.</p>
            <SocialLinks variant="icons" size="sm" showLabels={false} />
          </div>
        </div>
      </footer>
    </div>
  )
}
