'use client'

import { useState, useEffect } from 'react'

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'contact']

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    // Active = last section whose top has scrolled past a line 120px from the top
    // (just below the 80px nav). Works for sections taller than the screen, unlike an
    // intersection ratio, and a fixed line keeps short sections like About active
    // after a nav click, whatever the window height.
    const update = () => {
      const line = 120
      let current = SECTION_IDS[0]
      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      })
      // The last section may be too short to reach the line; pick it at the bottom
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = SECTION_IDS[SECTION_IDS.length - 1]
      }
      setActiveSection(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return activeSection
}
