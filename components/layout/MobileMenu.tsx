'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { company, navLinks } from '@/lib/site-content'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  useLockBodyScroll(open)

  // Close on route change and on Escape
  useEffect(() => {
    onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <div
      hidden={!open}
      className="fixed inset-0 z-50 bg-ink-900 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="container-ue flex h-[72px] items-center justify-between">
        <span className="text-wordmark font-display">
          <span className="text-paper">UE</span> <span className="text-mint">Technology</span>
        </span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex size-10 items-center justify-center rounded-full border border-line-dark text-on-dark"
          aria-label="Close menu"
        >
          <X className="size-5" aria-hidden />
        </button>
      </div>

      <nav className="container-ue mt-6" aria-label="Mobile">
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={cn(
                  'block rounded-xl px-4 py-3.5 text-lead transition-colors',
                  isActive(link.href)
                    ? 'bg-mint-soft-dark text-mint'
                    : 'text-on-dark-muted hover:bg-ink-800 hover:text-on-dark',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          onClick={onClose}
          className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-mint px-6 font-semibold text-mint-ink"
        >
          Talk to us
        </Link>

        <p className="mt-8 text-meta text-on-dark-muted">
          {company.email} · {company.location}
        </p>
      </nav>
    </div>
  )
}
