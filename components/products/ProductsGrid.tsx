import Section from '@/components/shared/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { products } from '@/lib/site-content'

/** Summary grid of all three products, closing the Products page. */
export default function ProductsGrid() {
  return (
    <Section tone="dark">
      <SectionHeader
        eyebrow="Our products"
        title="Hardware & software built for the plant floor."
      />

      <AnimatedSection className="mt-12 grid gap-5 md:grid-cols-3" childSelector="[data-card]">
        {products.map((p) => (
          <article
            data-card
            key={p.slug}
            className="rounded-2xl border border-line-dark bg-ink-800 p-8"
          >
            <p className="text-kicker font-semibold uppercase text-mint">{p.kind}</p>
            <h3 className="mt-3 text-h3 text-on-dark">{p.name}</h3>
            <p className="mt-2 text-small text-on-dark-muted">{p.summary}</p>
          </article>
        ))}
      </AnimatedSection>
    </Section>
  )
}
