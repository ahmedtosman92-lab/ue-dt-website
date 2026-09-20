import { cn } from '@/lib/utils'
import type { Tone } from '@/types'

interface ChipProps {
  label: string
  tone?: Tone
}

/** Small pill used for feature tags under section copy. */
export default function Chip({ label, tone = 'dark' }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex h-[34px] items-center rounded-full px-4 text-meta font-medium',
        tone === 'light'
          ? 'bg-mint-soft-light text-mint-deep'
          : 'bg-mint-soft-dark text-mint',
      )}
    >
      {label}
    </span>
  )
}
