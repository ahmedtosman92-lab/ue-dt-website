import { cn } from '@/lib/utils'
import type { Tone } from '@/types'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  lead?: string
  tone?: Tone
  align?: 'left' | 'center'
  className?: string
}

/** Eyebrow + H2 + optional lead, used at the top of most sections. */
export default function SectionHeader({
  eyebrow,
  title,
  lead,
  tone = 'dark',
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        'max-w-[720px]',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="text-eyebrow font-semibold uppercase text-mint">{eyebrow}</p>
      )}
      <h2
        className={cn(
          'mt-4 text-[2rem] leading-[1.1] md:text-h2',
          tone === 'light' ? 'text-on-light' : 'text-on-dark',
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            'mt-5 text-lead',
            tone === 'light' ? 'text-on-light-muted' : 'text-on-dark-muted',
          )}
        >
          {lead}
        </p>
      )}
    </header>
  )
}
