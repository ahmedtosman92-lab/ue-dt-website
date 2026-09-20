import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  title?: string
  lead?: string
  ctaLabel?: string
  ctaHref?: string
}

/** The mint gradient CTA band that closes every page. */
export default function CTABanner({
  title = "Let's build your smart factory.",
  lead = "Tell us where your production data goes dark — we'll show you how to bring it into the light.",
  ctaLabel = 'Explore solutions',
  ctaHref = '/solutions',
}: CTABannerProps) {
  return (
    <section className="bg-ink-900 pb-20 md:pb-section">
      <div className="container-ue">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-mint-deep via-mint-deep to-ink-900 px-8 py-16 text-center md:px-16 md:py-20">
          <h2 className="mx-auto max-w-[560px] text-[2rem] leading-[1.1] text-paper md:text-h2">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-base text-paper/80">{lead}</p>
          <Link
            href={ctaHref}
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-mint px-7 text-[0.9375rem] font-semibold text-mint-ink transition-colors hover:bg-paper"
          >
            {ctaLabel}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
