'use client'

import { cn } from '@/lib/utils'
import { useCountUp } from '@/hooks/useCountUp'
import type { Stat, Tone } from '@/types'

interface StatCounterProps {
  stat: Stat
  tone?: Tone
}

/**
 * Renders one stat from the stats band.
 *
 * Values in the design mix numerics with suffixes ("10+", "100%") and a plain
 * string ("EG"), so the numeric part is parsed out and animated while any
 * prefix/suffix is rendered as-is.
 */
export default function StatCounter({ stat, tone = 'dark' }: StatCounterProps) {
  const match = stat.value.match(/^(\d+)(.*)$/)
  const numeric = match ? Number(match[1]) : null
  const suffix = match ? match[2] : ''
  const { ref, value } = useCountUp(numeric ?? 0)

  return (
    <div>
      <p
        className={cn(
          'font-display text-stat',
          tone === 'light' ? 'text-on-light' : 'text-mint',
        )}
      >
        {numeric === null ? (
          stat.value
        ) : (
          <span ref={ref}>
            {value}
            {suffix}
          </span>
        )}
      </p>
      <p
        className={cn(
          'mt-3 text-base font-medium',
          tone === 'light' ? 'text-on-light' : 'text-on-dark',
        )}
      >
        {stat.label}
      </p>
      {stat.caption && (
        <p
          className={cn(
            'mt-1 text-small',
            tone === 'light' ? 'text-on-light-muted' : 'text-on-dark-muted',
          )}
        >
          {stat.caption}
        </p>
      )}
    </div>
  )
}
