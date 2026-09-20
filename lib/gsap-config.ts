import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Registers GSAP plugins exactly once.
 *
 * ScrollTrigger touches `window`, so this must only run in the browser. Import
 * `gsap` from here rather than from the package directly.
 */
let registered = false

export function registerGsap(): typeof gsap {
  if (!registered && typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
    registered = true
  }
  return gsap
}

export { gsap, ScrollTrigger }
