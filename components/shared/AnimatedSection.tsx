'use client'

import type { ElementType, ReactNode } from 'react'
import { useScrollAnimation, type ScrollAnimationOptions } from '@/hooks/useScrollAnimation'

interface AnimatedSectionProps extends ScrollAnimationOptions {
  as?: ElementType
  className?: string
  children: ReactNode
}

/**
 * Wraps content in a GSAP scroll reveal. Pass `childSelector` to stagger a grid
 * of cards rather than fading the whole block at once.
 */
export default function AnimatedSection({
  as: Tag = 'div',
  className,
  children,
  ...options
}: AnimatedSectionProps) {
  const ref = useScrollAnimation<HTMLDivElement>(options)
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
