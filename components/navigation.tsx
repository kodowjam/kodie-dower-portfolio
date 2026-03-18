"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SocialLinks } from "@/components/social-links"

interface NavigationProps {
  showBackButton?: boolean
}

export function Navigation({ showBackButton = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/#resume", label: "Resume", isActive: pathname === "/" },
    { href: "/projects", label: "Projects", isActive: pathname === "/projects" },
    { href: "/content", label: "Content", isActive: pathname === "/content" },
    { href: "/#contact", label: "Contact", isActive: false },
  ]

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Link
                href="/"
                className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </Link>
            )}
            <Link
              href="/"
              className="text-xl font-serif font-bold text-primary-foreground hover:text-accent transition-colors"
            >
              Kodie Dower
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  item.isActive ? "text-accent font-medium" : "text-primary-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-primary-foreground/20">
              <SocialLinks
                variant="compact"
                size="sm"
                showLabels={false}
                includeEmail={false}
                className="[&_a]:text-primary-foreground [&_a:hover]:text-accent"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary-foreground hover:text-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    item.isActive ? "text-accent font-medium" : "text-primary-foreground hover:text-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t border-primary-foreground/20">
                <SocialLinks
                  variant="icons"
                  size="sm"
                  showLabels={false}
                  className="justify-start [&_a]:text-primary-foreground [&_a:hover]:text-accent"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
