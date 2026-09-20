'use client'

import { useEffect, useState } from 'react'

/**
 * Tracks whether the page has scrolled past a threshold.
 *
 * The navbar sits transparent over the dark hero and gains its solid background
 * plus hairline once the user scrolls, matching the Header component in Figma.
 *
 * @param threshold Pixels scrolled before the navbar is considered "stuck".
 */
export function useNavbarScroll(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll() // honour a restored scroll position on mount
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
