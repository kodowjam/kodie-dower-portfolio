import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function ContentPortfolio() {
  const articles = [
    {
      publication: "Fast Company",
      title: "How to Use AI for Good",
      description: "Exploring ethical AI implementation and responsible technology adoption in business.",
      url: "https://www.fastcompany.com/91333607/how-to-use-ai-for-good",
    },
    {
      publication: "Fast Company",
      title: "How to Fund Open Source's Future",
      description: "Examining sustainable funding models for open source software development and community growth.",
      url: "https://www.fastcompany.com/91311597/how-to-fund-open-sources-future",
    },
    {
      publication: "Forbes",
      title: "Decoding AI Model Interpretability",
      description:
        "Understanding the importance of transparency and explainability in AI systems for enterprise adoption.",
      url: "https://www.forbes.com/councils/forbestechcouncil/2024/09/27/whats-in-the-box-decoding-ai-model-interpretability/",
    },
    {
      publication: "Forbes",
      title: "Essential Qualities of Open Source Environments",
      description: "Five critical factors for successful open source environment and package management solutions.",
      url: "https://www.forbes.com/councils/forbestechcouncil/2024/07/17/beyond-the-hype-five-essential-qualities-of-an-open-source-environment-and-package-management-solution/",
    },
    {
      publication: "Forbes",
      title: "Business Process Reinvention Through AI",
      description:
        "How artificial intelligence is transforming traditional business processes and operational efficiency.",
      url: "https://www.forbes.com/sites/libertbarry/2025/01/23/business-process-reinvention-through-ai-building-on-a-30-year-legacy/",
    },
    {
      publication: "Forbes",
      title: "AI Agents Will Come to Earth in 2025",
      description: "Predictions for practical AI agent deployment and real-world applications in the coming year.",
      url: "https://www.forbes.com/sites/libertbarry/2024/11/22/beyond-moonshots-ai-agents-will-come-to-earth-in-2025/",
    },
    {
      publication: "Forbes",
      title: "The Rise of the AI-Native Generation",
      description: "How younger workers are reshaping the workplace with AI-first approaches.",
      url: "https://www.forbes.com/councils/forbestechcouncil/2024/05/15/the-rise-of-the-ai-native-generation-how-younger-workers-are-reshaping-the-workplace/",
    },
    {
      publication: "Forbes",
      title: "The Future of Data Science is Collaborative",
      description: "Exploring collaborative approaches to data science and team-based analytics.",
      url: "https://www.forbes.com/councils/forbestechcouncil/2024/03/13/the-future-of-data-science-is-collaborative/",
    },
    {
      publication: "Anaconda",
      title: "Shadow AI Crisis in the Enterprise",
      description: "Addressing the risks and challenges of unmanaged AI adoption in enterprise environments.",
      url: "https://www.anaconda.com/blog/shadow-ai-crisis-in-the-enterprise",
    },
    {
      publication: "Anaconda",
      title: "Anaconda Launches Lumen AI",
      description: "Announcing the launch of Lumen AI and its impact on data science workflows and productivity.",
      url: "https://www.anaconda.com/blog/anaconda-launches-lumen-ai",
    },
    {
      publication: "Anaconda",
      title: "State of Data Science 2024 Key Findings",
      description: "Insights from the annual State of Data Science report highlighting industry trends and challenges.",
      url: "https://www.anaconda.com/blog/state-of-data-science-2024-key-findings",
    },
    {
      publication: "Anaconda",
      title: "Synthetic Data: The New Fuel for AI",
      description: "Exploring how synthetic data is accelerating AI development and addressing data privacy concerns.",
      url: "https://www.anaconda.com/blog/synthetic-data-the-new-fuel-for-ais-rapid-evolution",
    },
    {
      publication: "Anaconda",
      title: "Anaconda Acquires PyScript",
      description: "Strategic acquisition announcement and its implications for Python development.",
      url: "https://www.anaconda.com/blog/anaconda-acquires-pyscript",
    },
    {
      publication: "Anaconda",
      title: "Anaconda Announces New AI Assistant",
      description: "Press release announcing new AI assistant capabilities and features.",
      url: "https://www.anaconda.com/press/anaconda-announces-new-ai-assistant",
    },
    {
      publication: "Anaconda",
      title: "Anaconda Raises Series B Funding",
      description: "Funding announcement and growth strategy for the data science platform.",
      url: "https://www.anaconda.com/press/anaconda-raises-series-b",
    },
  ]

  return (
    <div className="min-h-screen bg-background page-transition relative">
      {/* Header Navigation */}
      <Navigation showBackButton backTo="/" />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Content <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Published articles, bylines, and thought leadership content across leading publications
          </p>
        </div>
      </section>

      {/* Content Portfolio */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                          {article.publication}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{article.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{article.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="hover:bg-accent hover:text-accent-foreground bg-transparent"
                      >
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Read Article <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground">© 2024 Kodie Dower. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
