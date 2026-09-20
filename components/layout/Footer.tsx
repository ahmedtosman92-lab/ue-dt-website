import Image from 'next/image'
import Link from 'next/link'
import { LinkedInIcon, XIcon } from '@/components/shared/SocialIcons'
import { company, footerColumns } from '@/lib/site-content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line-dark bg-ink-950">
      <div className="container-ue py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/branding/ue-logo-mint.png"
                alt=""
                width={32}
                height={31}
                className="h-[31px] w-8"
              />
              <span className="text-wordmark font-display">
                <span className="text-paper">UE</span>{' '}
                <span className="text-mint">Technology</span>
              </span>
            </Link>
            <p className="mt-4 max-w-[280px] text-small text-on-dark-muted">
              {company.tagline}
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h2 className="text-footer-head font-sans font-medium uppercase text-on-dark">
                {col.heading}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-small text-on-dark-muted transition-colors hover:text-mint"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h2 className="text-footer-head font-sans font-medium uppercase text-on-dark">
              Get in touch
            </h2>
            <ul className="mt-5 flex flex-col gap-3 text-small text-on-dark-muted">
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-mint">
                  {company.email}
                </a>
              </li>
              <li>{company.location}</li>
              <li>
                <a href={`https://${company.site}`} className="transition-colors hover:text-mint">
                  {company.site}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a
                href="https://www.linkedin.com/company/ue-technology"
                aria-label="UE Technology on LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded-lg bg-ink-800 text-on-dark transition-colors hover:bg-mint hover:text-mint-ink"
              >
                <LinkedInIcon className="size-4" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="UE Technology on X"
                className="inline-flex size-9 items-center justify-center rounded-lg bg-ink-800 text-on-dark transition-colors hover:bg-mint hover:text-mint-ink"
              >
                <XIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line-dark pt-6 text-meta text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p>Privacy · Terms · {company.location}</p>
        </div>
      </div>
    </footer>
  )
}
