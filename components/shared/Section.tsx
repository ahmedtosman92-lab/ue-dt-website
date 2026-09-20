import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import type { Tone } from '@/types'

interface SectionProps {
  /** `dark` sits on the page background; `light` is a Paper/White band. */
  tone?: Tone
  id?: string
  className?: string
  children: ReactNode
}

/**
 * Full-bleed band with the design's 96px vertical rhythm and 1240px container.
 * Pages alternate tones the way the Figma frames do.
 */
export default function Section({ tone = 'dark', id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full py-20 md:py-section',
        tone === 'light' ? 'bg-paper text-on-light' : 'bg-ink-900 text-on-dark',
        className,
      )}
    >
      <div className="container-ue">{children}</div>
    </section>
  )
}
