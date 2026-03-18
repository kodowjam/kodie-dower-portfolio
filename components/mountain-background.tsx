"use client"

import { useEffect, useState } from "react"

export function MountainBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="mountain-background">
      {/* Mountain peaks */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 opacity-20">
        <svg viewBox="0 0 1200 400" className="w-full h-full">
          <path
            d="M0,400 L200,200 L400,250 L600,150 L800,200 L1000,100 L1200,180 L1200,400 Z"
            fill="rgba(71, 85, 105, 0.4)"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-30">
        <svg viewBox="0 0 1200 300" className="w-full h-full">
          <path
            d="M0,300 L150,180 L350,220 L550,120 L750,160 L950,80 L1200,140 L1200,300 Z"
            fill="rgba(51, 65, 85, 0.5)"
          />
        </svg>
      </div>

      {/* Drifting clouds */}
      <div className="cloud-element absolute top-20 left-0 w-32 h-16 opacity-25" style={{ animationDelay: "0s" }}>
        <svg viewBox="0 0 128 64" className="w-full h-full">
          <ellipse cx="32" cy="32" rx="20" ry="12" fill="rgba(255, 255, 255, 0.6)" />
          <ellipse cx="48" cy="28" rx="24" ry="16" fill="rgba(255, 255, 255, 0.5)" />
          <ellipse cx="64" cy="32" rx="18" ry="10" fill="rgba(255, 255, 255, 0.4)" />
        </svg>
      </div>

      <div className="cloud-element absolute top-32 left-0 w-24 h-12 opacity-20" style={{ animationDelay: "10s" }}>
        <svg viewBox="0 0 96 48" className="w-full h-full">
          <ellipse cx="24" cy="24" rx="16" ry="10" fill="rgba(255, 255, 255, 0.5)" />
          <ellipse cx="36" cy="20" rx="20" ry="12" fill="rgba(255, 255, 255, 0.4)" />
          <ellipse cx="48" cy="24" rx="14" ry="8" fill="rgba(255, 255, 255, 0.3)" />
        </svg>
      </div>

      {/* Alpine lake with shimmering water */}
      <div className="absolute bottom-0 left-1/4 w-1/2 h-32 opacity-40">
        <div className="w-full h-full bg-gradient-to-b from-blue-200/30 to-blue-400/40 rounded-t-full relative overflow-hidden">
          {/* Water ripples */}
          <div
            className="ripple-element absolute top-1/4 left-1/3 w-8 h-2 bg-blue-100/30 rounded-full"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="ripple-element absolute top-1/2 right-1/3 w-6 h-1.5 bg-blue-200/25 rounded-full"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="ripple-element absolute top-3/4 left-1/2 w-4 h-1 bg-blue-100/20 rounded-full"
            style={{ animationDelay: "3s" }}
          />

          {/* Sunlight glimmers */}
          <div className="shimmer-element absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-200/60 rounded-full" />
          <div
            className="shimmer-element absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-yellow-100/50 rounded-full"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="shimmer-element absolute top-2/3 left-2/3 w-1 h-1 bg-yellow-200/40 rounded-full"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      {/* Floating elements - snow or mist */}
      <div
        className="floating-element absolute top-1/5 left-1/6 w-1 h-1 bg-white/40 rounded-full"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="floating-element absolute top-1/4 right-1/5 w-1.5 h-1.5 bg-white/30 rounded-full"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="floating-element absolute top-2/5 left-3/4 w-1 h-1 bg-white/35 rounded-full"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}
