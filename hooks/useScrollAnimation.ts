'use client'

import { useEffect, useRef } from 'react'
import { registerGsap, ScrollTrigger } from '@/lib/gsap-config'

export interface ScrollAnimationOptions {
  /** Distance in px the element travels upward as it enters. */
  y?: number
  /** Seconds. */
  duration?: number
  /** Seconds between children when `stagger` targets are found. */
  stagger?: number
  /** Selector for children to stagger; animates the container itself if unset. */
  childSelector?: string
  /** Viewport position that triggers the animation. */
  start?: string
}

/**
 * Reveals a section on scroll with GSAP + ScrollTrigger.
 *
 * Attach the returned ref to the section wrapper. Respects
 * `prefers-reduced-motion`, in which case elements are shown immediately with
 * no animation.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {},
) {
  const ref = useRef<T>(null)
  const {
    y = 24,
    duration = 0.7,
    stagger = 0.08,
    childSelector,
    start = 'top 85%',
  } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = childSelector
      ? Array.from(el.querySelectorAll<HTMLElement>(childSelector))
      : [el]
    if (targets.length === 0) return

    if (reduceMotion) {
      targets.forEach((t) => {
        t.style.opacity = '1'
        t.style.transform = 'none'
      })
      return
    }

    const gsap = registerGsap()
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger: targets.length > 1 ? stagger : 0,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start, once: true },
        },
      )
    }, el)

    return () => {
      ctx.revert()
      ScrollTrigger.refresh()
    }
  }, [y, duration, stagger, childSelector, start])

  return ref
}
