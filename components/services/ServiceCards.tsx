import Section from '@/components/shared/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { services } from '@/lib/site-content'

export default function ServiceCards() {
  return (
    <Section tone="light">
      <SectionHeader eyebrow="What we do" title="Key products & services." tone="light" />

      <AnimatedSection
        className="mt-12 grid gap-5 md:grid-cols-2"
        childSelector="[data-card]"
      >
        {services.map((s) => (
          <article
            data-card
            key={s.title}
            className="rounded-2xl border border-line-light bg-paper p-8 shadow-[0_1px_2px_rgba(20,27,31,0.04)]"
          >
            <p className="text-kicker font-semibold uppercase text-mint-deep">{s.eyebrow}</p>
            <h3 className="mt-3 text-h3 text-on-light">{s.title}</h3>
            <p className="mt-2 text-small text-on-light-muted">{s.summary}</p>
          </article>
        ))}
      </AnimatedSection>
    </Section>
  )
}
