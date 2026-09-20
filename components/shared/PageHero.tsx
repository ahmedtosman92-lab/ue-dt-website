import Link from 'next/link'

interface PageHeroProps {
  /** Current page name, shown after the Home crumb. */
  crumb: string
  title: string
  lead?: string
}

/**
 * Dark hero used by every page except Home, with the mint glow bleeding in from
 * the top-right as in the Figma `pagehero` sections.
 */
export default function PageHero({ crumb, title, lead }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-900 pt-16 pb-20 md:pt-[110px] md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-64 right-0 h-[460px] w-[900px] rounded-full bg-mint/10 blur-3xl"
      />
      <div className="container-ue relative">
        <nav aria-label="Breadcrumb" className="text-small">
          <Link href="/" className="text-mint transition-colors hover:text-mint-deep">
            Home
          </Link>
          <span className="text-on-dark-muted"> / {crumb}</span>
        </nav>

        <h1 className="mt-5 max-w-[700px] text-[2.5rem] leading-[1.08] text-on-dark md:text-h1">
          {title}
        </h1>

        {lead && (
          <p className="mt-6 max-w-[680px] text-lead text-on-dark-muted">{lead}</p>
        )}
      </div>
    </section>
  )
}
