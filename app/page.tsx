import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, Briefcase, GraduationCap, Star, GitFork } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SocialLinks } from "@/components/social-links"
import { fetchGitHubRepos, transformRepoToProject, type ProjectData } from "@/lib/github"

async function getFeaturedProjects(): Promise<ProjectData[]> {
  try {
    console.log("[v0] Fetching featured projects directly from GitHub service")
    const repos = await fetchGitHubRepos()
    const projects = repos.map(transformRepoToProject)
    console.log("[v0] Successfully fetched", projects.length, "featured projects")

    // Return the first 3 projects for featured section
    return projects.slice(0, 3)
  } catch (error) {
    console.error("[v0] Error fetching featured projects:", error)
    // Return fallback data
    return [
      {
        id: 1,
        name: "AI Content Pipeline",
        description: "Automated content generation and distribution pipeline using AI",
        longDescription:
          "A comprehensive content automation system that leverages AI to generate, optimize, and distribute marketing content.",
        technologies: ["Python", "AI", "Automation"],
        githubUrl: "https://github.com/kodowjam/ai-content-pipeline",
        liveUrl: null,
        stars: 0,
        forks: 0,
        lastUpdated: new Date().toISOString(),
        image: "/ai-project-1.png",
        category: "Content Automation",
      },
      {
        id: 2,
        name: "Auto Listbuilder",
        description: "Automated lead generation and list building tool",
        longDescription:
          "An automated lead generation system that combines web scraping, AI-powered qualification, and CRM integration.",
        technologies: ["JavaScript", "Automation", "Marketing"],
        githubUrl: "https://github.com/kodowjam/auto-listbuilder",
        liveUrl: null,
        stars: 0,
        forks: 0,
        lastUpdated: new Date().toISOString(),
        image: "/ai-project-2.png",
        category: "Lead Generation",
      },
      {
        id: 3,
        name: "AI Video Editor",
        description: "AI-powered video editing and content creation tool",
        longDescription: "An intelligent video editing platform that automates the post-production process.",
        technologies: ["Python", "AI", "Video"],
        githubUrl: "https://github.com/kodowjam/ai-video-editor",
        liveUrl: null,
        stars: 0,
        forks: 0,
        lastUpdated: new Date().toISOString(),
        image: "/ai-project-3.png",
        category: "Video Processing",
      },
    ]
  }
}

export default async function Portfolio() {
  const featuredProjects = await getFeaturedProjects()

  return (
    <div className="min-h-screen bg-background page-transition relative">
      {/* Header Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <img
                src="/kodie-headshot.jpg"
                alt="Kodie Dower professional headshot"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
              Hello, I'm <span className="text-accent">Kodie Dower</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AI-Powered Marketing Professional building AI-native workflows to scale impact
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
            <SocialLinks variant="icons" size="lg" showLabels={false} includeEmail={false} />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-8">About Me</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Strategic communications leader with 8+ years in AI and enterprise tech, adept at distilling complex
                technical concepts into compelling narratives for senior audiences. Proven track record in boosting
                brand visibility and media engagement through integrated, performance-driven campaigns. Expert in
                collaborating with executive and product teams to amplify thought leadership and drive innovative
                content strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Resume Summary</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Experience Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-accent" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-card-foreground">Content & Social Media Manager</h4>
                  <p className="text-sm text-muted-foreground">Coder • Jun 2025-Present</p>
                  <p className="text-sm mt-2">
                    Leading content strategy and social media initiatives for developer-focused cloud development platform.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Senior Manager, Marketing Communications</h4>
                  <p className="text-sm text-muted-foreground">Anaconda, Inc. • Jun 2022-Jun 2025</p>
                  <p className="text-sm mt-2">
                    Built AI-native growth infrastructure, increased earned media by 30% and mentions by 252% YoY
                    through AI-powered workflows.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Senior Manager, Public Relations</h4>
                  <p className="text-sm text-muted-foreground">NinjaOne • Dec 2019-Jun 2022</p>
                  <p className="text-sm mt-2">
                    Built scalable communications infrastructure and automated workflows for rapid response
                    communications.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-card-foreground">Bachelor of Arts, Political Science</h4>
                  <p className="text-sm text-muted-foreground">University of Washington, Seattle • 2013-2015</p>
                  <p className="text-sm mt-2">Foundation in analytical thinking and strategic communication</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Professional Development</h4>
                  <p className="text-sm text-muted-foreground">AI & Automation Tools</p>
                  <p className="text-sm text-muted-foreground">Growth Marketing Infrastructure</p>
                </div>
              </CardContent>
            </Card>

            {/* Skills Card */}
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-accent" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Claude AI",
                    "ChatGPT",
                    "Python",
                    "JavaScript",
                    "N8N Workflows",
                    "SQL",
                    "LangChain",
                    "Campaign Automation",
                    "API Integrations",
                    "Technical Storytelling",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Featured AI Projects</h2>
            <p className="text-muted-foreground">
              Explore my latest work in artificial intelligence and marketing automation
            </p>
          </div>

          <div className="relative mb-8">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-shadow flex-none w-80 snap-start">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex gap-2 flex-wrap mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          {project.forks}
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              <p className="text-xs text-muted-foreground">← Scroll to see more projects →</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/projects">View All AI Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content Portfolio */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Featured Content Portfolio</h2>
            <p className="text-muted-foreground">
              Published articles, bylines, and thought leadership content across leading publications
            </p>
          </div>

          <div className="relative mb-8">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {/* Fast Company */}
              <Card className="group hover:shadow-lg transition-shadow flex-none w-80 snap-start">
                <CardHeader>
                  <CardTitle className="text-lg text-accent">Fast Company</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">How to Use AI for Good</h4>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <a
                        href="https://www.fastcompany.com/91333607/how-to-use-ai-for-good"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        Read Article <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">How to Fund Open Source's Future</h4>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <a
                        href="https://www.fastcompany.com/91311597/how-to-fund-open-sources-future"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        Read Article <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Forbes */}
              <Card className="group hover:shadow-lg transition-shadow flex-none w-80 snap-start">
                <CardHeader>
                  <CardTitle className="text-lg text-accent">Forbes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Decoding AI Model Interpretability</h4>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <a
                        href="https://www.forbes.com/councils/forbestechcouncil/2024/09/27/whats-in-the-box-decoding-ai-model-interpretability/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        Read Article <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Essential Qualities of Open Source Environments</h4>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <a
                        href="https://www.forbes.com/councils/forbestechcouncil/2024/07/17/beyond-the-hype-five-essential-qualities-of-an-open-source-environment-and-package-management-solution/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        Read Article <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Business Process Reinvention Through AI</h4>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <a
                        href="https://www.forbes.com/sites/libertbarry/2025/01/23/business-process-reinvention-through-ai-building-on-a-30-year-legacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        Read Article <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">AI Agents Will Come to Earth in 2025</h4>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <a
                        href="https://www.forbes.com/sites/libertbarry/2024/11/22/beyond-moonshots-ai-agents-will-come-to-earth-in-2025/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        Read Article <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Anaconda */}
              <Card className="group hover:shadow-lg transition-shadow flex-none w-80 snap-start">
                <CardHeader>
                  <CardTitle className="text-lg text-accent">Anaconda</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Shadow AI Crisis in the Enterprise</h4>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <a
                        href="https://www.anaconda.com/blog/shadow-ai-crisis-in-the-enterprise"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        Read Article <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Anaconda Launches Lumen AI</h4>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <a
                        href="https://www.anaconda.com/blog/anaconda-launches-lumen-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        Read Article <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">State of Data Science 2024 Key Findings</h4>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <a
                        href="https://www.anaconda.com/blog/state-of-data-science-2024-key-findings"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        Read Article <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Synthetic Data: The New Fuel for AI</h4>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <a
                        href="https://www.anaconda.com/blog/synthetic-data-the-new-fuel-for-ais-rapid-evolution"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        Read Article <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-4">
              <p className="text-xs text-muted-foreground">← Scroll to see more articles →</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/content">View All Content</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Interested in collaborating on AI-powered marketing solutions or discussing opportunities? I'd love to hear
            from you.
          </p>

          <SocialLinks variant="buttons" size="lg" className="mb-8" />
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
