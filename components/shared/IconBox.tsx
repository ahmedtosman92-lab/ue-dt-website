import { cn } from '@/lib/utils'
import Icon from './Icon'
import type { Tone } from '@/types'

interface IconBoxProps {
  name?: string
  tone?: Tone
  className?: string
}

/** 50×50 rounded tile holding a 24px icon — the Figma `IconBox` component. */
export default function IconBox({ name, tone = 'dark', className }: IconBoxProps) {
  return (
    <span
      className={cn(
        'inline-flex size-[50px] shrink-0 items-center justify-center rounded-xl',
        tone === 'light' ? 'bg-mint-soft-light text-mint-deep' : 'bg-mint-soft-dark text-mint',
        className,
      )}
    >
      <Icon name={name} className="size-6" />
    </span>
  )
}
