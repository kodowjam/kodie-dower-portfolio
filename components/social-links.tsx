import type React from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react"

interface SocialLink {
  name: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}

const socialLinks: SocialLink[] = [
  {
    name: "email",
    url: "mailto:kodiedower@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    name: "github",
    url: "https://github.com/kodowjam",
    icon: Github,
    label: "GitHub",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/kodiedower93/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    name: "twitter",
    url: "https://x.com/KodieDower",
    icon: Twitter,
    label: "Twitter",
  },
  {
    name: "portfolio",
    url: "/projects",
    icon: Globe,
    label: "Portfolio",
  },
]

interface SocialLinksProps {
  variant?: "buttons" | "icons" | "compact"
  size?: "sm" | "md" | "lg"
  showLabels?: boolean
  className?: string
  includeEmail?: boolean
}

export function SocialLinks({
  variant = "buttons",
  size = "md",
  showLabels = true,
  className = "",
  includeEmail = true,
}: SocialLinksProps) {
  const filteredLinks = includeEmail ? socialLinks : socialLinks.filter((link) => link.name !== "email")

  const iconSize = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }[size]

  const buttonSize = {
    sm: "sm",
    md: "default",
    lg: "lg",
  }[size] as "sm" | "default" | "lg"

  if (variant === "icons") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {filteredLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.url}
              target={link.name === "email" ? undefined : "_blank"}
              rel={link.name === "email" ? undefined : "noopener noreferrer"}
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={link.label}
            >
              <Icon className={iconSize} />
            </a>
          )
        })}
      </div>
    )
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {filteredLinks.map((link) => {
          const Icon = link.icon
          return (
            <Button key={link.name} variant="ghost" size="sm" asChild className="h-8 w-8 p-0 hover:bg-accent/10">
              <a
                href={link.url}
                target={link.name === "email" ? undefined : "_blank"}
                rel={link.name === "email" ? undefined : "noopener noreferrer"}
                aria-label={link.label}
              >
                <Icon className="w-4 h-4" />
              </a>
            </Button>
          )
        })}
      </div>
    )
  }

  // Default buttons variant
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
      {filteredLinks.map((link) => {
        const Icon = link.icon
        return (
          <Button key={link.name} variant="outline" size={buttonSize} asChild>
            <a
              href={link.url}
              target={link.name === "email" ? undefined : "_blank"}
              rel={link.name === "email" ? undefined : "noopener noreferrer"}
              className="flex items-center gap-2"
            >
              <Icon className={iconSize} />
              {showLabels && link.label}
            </a>
          </Button>
        )
      })}
    </div>
  )
}
