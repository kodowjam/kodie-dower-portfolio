"use client"

import { useEffect, useRef, type ReactNode } from "react"

export function ScrollCarousel({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const hasNestedVerticalScroll = (target: EventTarget | null) => {
      let node = target as HTMLElement | null
      while (node && node !== el) {
        const style = getComputedStyle(node)
        if ((style.overflowY === "auto" || style.overflowY === "scroll") && node.scrollHeight > node.clientHeight) {
          return true
        }
        node = node.parentElement
      }
      return false
    }

    const handleWheel = (e: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return
      if (hasNestedVerticalScroll(e.target)) return
      e.preventDefault()
      el.scrollLeft += e.deltaY
    }

    el.addEventListener("wheel", handleWheel, { passive: false })
    return () => el.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
