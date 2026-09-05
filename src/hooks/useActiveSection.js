// src/hooks/useActiveSection.js
import { useState, useEffect, useRef } from 'react'

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] || '')
  const ticking = useRef(false)

  useEffect(() => {
    // Must match NAVBAR_HEIGHT in App.jsx (140) + small buffer
    const NAV_OFFSET = 160

    function updateActive() {
      const scrollY = window.scrollY + NAV_OFFSET

      let current = sectionIds[0]

      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i])
        if (!el) continue

        const top = el.offsetTop
        const bottom = top + el.offsetHeight

        if (scrollY >= top && scrollY < bottom) {
          current = sectionIds[i]
          break
        }
      }

      // Handle bottom of page - activate last section
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50
      if (atBottom) {
        current = sectionIds[sectionIds.length - 1]
      }

      setActive(current)
      ticking.current = false
    }

    function onScroll() {
      if (!ticking.current) {
        requestAnimationFrame(updateActive)
        ticking.current = true
      }
    }

    // Run immediately on mount
    updateActive()

    // Also run after a short delay (for initial page load)
    const initTimer = setTimeout(updateActive, 100)

    window.addEventListener('scroll', onScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(initTimer)
    }
  }, [sectionIds])

  return active
}