import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { clientLogos } from '@/lib/site-content'
import FlowDiagram from './FlowDiagram'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink-900 pt-16 pb-20 md:pt-24 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[780px] rounded-full bg-mint/10 blur-3xl"
      />
      <div className="container-ue relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-eyebrow font-semibold uppercase text-mint">
            Industry 4.0 · Digital transformation
          </p>

          <h1 className="mt-5 text-[2.5rem] leading-[1.08] text-on-dark md:text-h1">
            We turn factories into connected, intelligent operations.
          </h1>

          <p className="mt-6 max-w-[540px] text-lead text-on-dark-muted">
            UE Technology builds the hardware, software, and engineering that make
            manufacturing measurable — from precision weighing on the line to real-time
            production and energy intelligence.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/solutions"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-mint px-7 text-[0.9375rem] font-semibold text-mint-ink transition-colors hover:bg-mint-deep"
            >
              Explore solutions
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/products"
              className="inline-flex h-12 items-center rounded-full border border-line-dark px-7 text-[0.9375rem] font-semibold text-on-dark transition-colors hover:border-mint hover:text-mint"
            >
              See our products
            </Link>
          </div>

          <div className="mt-14">
            <p className="text-[0.8125rem] uppercase tracking-[0.14em] text-on-dark-muted">
              Trusted on the floor at
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {clientLogos.map((c) => (
                <li key={c.name} className="text-base font-medium text-on-dark">
                  {c.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FlowDiagram className="mx-auto hidden w-full max-w-[520px] lg:block" />
      </div>
    </section>
  )
}
