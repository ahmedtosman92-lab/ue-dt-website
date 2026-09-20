'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { company, navLinks } from '@/lib/site-content'
import { useNavbarScroll } from '@/hooks/useNavbarScroll'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const pathname = usePathname()
  const scrolled = useNavbarScroll()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-[72px] w-full transition-colors duration-200',
        scrolled
          ? 'border-b border-line-dark bg-ink-900/95 backdrop-blur-sm'
          : 'border-b border-transparent bg-ink-900',
      )}
    >
      <nav className="container-ue flex h-full items-center justify-between" aria-label="Main">
        <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} — home`}>
          <Image
            src="/assets/branding/ue-logo-mint.png"
            alt=""
            width={35}
            height={34}
            className="h-[34px] w-[35px]"
            priority
          />
          <span className="text-wordmark font-display">
            <span className="text-paper">UE</span>{' '}
            <span className="text-mint">Technology</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={cn(
                  'inline-flex h-[38px] items-center rounded-full px-4 text-nav transition-colors',
                  isActive(link.href)
                    ? 'bg-mint text-mint-ink font-medium'
                    : 'text-on-dark-muted hover:text-on-dark',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden h-12 items-center gap-2 rounded-full bg-mint px-6 text-[0.9375rem] font-semibold text-mint-ink transition-colors hover:bg-mint-deep sm:inline-flex"
          >
            Talk to us
            <ArrowRight className="size-4" aria-hidden />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line-dark text-on-dark lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open menu</span>
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
