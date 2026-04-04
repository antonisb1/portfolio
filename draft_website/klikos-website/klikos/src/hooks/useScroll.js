import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollPos) {
          setActive(sectionIds[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return active
}

export function useScrolled(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])
  return scrolled
}
