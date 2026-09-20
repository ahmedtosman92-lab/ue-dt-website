import Link from 'next/link'
import Section from '@/components/shared/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { products } from '@/lib/site-content'

export default function ProductsSection() {
  return (
    <Section tone="dark">
      <SectionHeader
        eyebrow="Our products"
        title="Hardware & software built for the plant floor."
      />

      <AnimatedSection className="mt-14 grid gap-5 md:grid-cols-3" childSelector="[data-card]">
        {products.map((p) => (
          <article
            data-card
            key={p.slug}
            className="flex flex-col rounded-2xl border border-line-dark bg-ink-800 p-8"
          >
            <p className="text-kicker font-semibold uppercase text-mint">{p.kind}</p>
            <h3 className="mt-3 text-h3 text-on-dark">{p.name}</h3>
            <p className="mt-2 grow text-small text-on-dark-muted">{p.summary}</p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-1.5 text-small font-semibold text-mint transition-colors hover:text-on-dark"
            >
              View product <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </AnimatedSection>
    </Section>
  )
}
