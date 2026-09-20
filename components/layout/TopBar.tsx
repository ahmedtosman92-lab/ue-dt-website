import { company } from '@/lib/site-content'

/**
 * Thin utility strip above the navbar — 38px, the darkest surface in the palette.
 * Hidden on small screens, where the space is better spent on the navbar itself.
 */
export default function TopBar() {
  return (
    <div className="hidden h-[38px] w-full items-center bg-ink-950 md:flex">
      <div className="container-ue flex items-center justify-between">
        <p className="text-meta">
          <span className="font-semibold text-mint">Industry 4.0</span>
          <span className="text-on-dark-muted"> · {company.topbar}</span>
        </p>
        <p className="text-meta text-on-dark-muted">
          {company.email} · {company.locationShort}
        </p>
      </div>
    </div>
  )
}
