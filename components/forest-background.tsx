"use client"

import { useEffect, useState } from "react"

export function ForestBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="forest-background">
      {/* Light rays filtering through trees */}
      <div className="light-ray w-32 h-96 top-10 left-1/4" style={{ animationDelay: "0s" }} />
      <div className="light-ray w-24 h-80 top-20 right-1/3" style={{ animationDelay: "2s" }} />
      <div className="light-ray w-28 h-72 top-32 left-2/3" style={{ animationDelay: "4s" }} />

      {/* Swaying branches and foliage */}
      <div className="forest-element top-0 left-0 w-full h-32 opacity-20">
        <svg viewBox="0 0 1200 200" className="w-full h-full">
          <path d="M0,100 Q300,80 600,100 T1200,100 L1200,0 L0,0 Z" fill="rgba(34, 197, 94, 0.3)" />
        </svg>
      </div>

      <div className="forest-element top-16 right-0 w-1/3 h-48 opacity-25" style={{ animationDelay: "1s" }}>
        <svg viewBox="0 0 400 200" className="w-full h-full">
          <path d="M0,150 Q100,120 200,140 Q300,160 400,130 L400,0 L0,0 Z" fill="rgba(22, 163, 74, 0.4)" />
        </svg>
      </div>

      {/* Native plants - ferns */}
      <div className="forest-element bottom-20 left-10 w-16 h-24 opacity-30" style={{ animationDelay: "0.5s" }}>
        <svg viewBox="0 0 64 96" className="w-full h-full">
          <path
            d="M32,96 Q20,80 16,60 Q12,40 20,20 Q28,0 32,0 Q36,0 44,20 Q52,40 48,60 Q44,80 32,96"
            fill="rgba(34, 197, 94, 0.6)"
          />
          <path
            d="M32,80 Q25,70 22,55 Q19,40 25,25 Q31,10 32,10 Q33,10 39,25 Q45,40 42,55 Q39,70 32,80"
            fill="rgba(22, 163, 74, 0.7)"
          />
        </svg>
      </div>

      <div className="forest-element bottom-32 right-20 w-12 h-20 opacity-25" style={{ animationDelay: "2.5s" }}>
        <svg viewBox="0 0 48 80" className="w-full h-full">
          <path
            d="M24,80 Q18,68 16,52 Q14,36 18,20 Q22,4 24,4 Q26,4 30,20 Q34,36 32,52 Q30,68 24,80"
            fill="rgba(34, 197, 94, 0.5)"
          />
        </svg>
      </div>

      {/* Floating particles/spores */}
      <div
        className="floating-element absolute top-1/4 left-1/5 w-2 h-2 bg-green-200 rounded-full opacity-40"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="floating-element absolute top-1/3 right-1/4 w-1 h-1 bg-green-300 rounded-full opacity-30"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="floating-element absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-green-100 rounded-full opacity-35"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="floating-element absolute bottom-1/4 right-1/3 w-1 h-1 bg-green-200 rounded-full opacity-25"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}
