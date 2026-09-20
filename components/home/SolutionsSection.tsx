import Link from 'next/link'
import Section from '@/components/shared/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import AnimatedSection from '@/components/shared/AnimatedSection'
import IconBox from '@/components/shared/IconBox'
import { solutions } from '@/lib/site-content'

export default function SolutionsSection() {
  return (
    <Section tone="dark">
      <SectionHeader
        eyebrow="Our solutions"
        title="Industry 4.0, integrated end to end."
        lead="Smart systems and data-driven platforms that help factories raise efficiency, cut downtime, and grow sustainably."
      />

      <AnimatedSection className="mt-14 grid gap-5 md:grid-cols-2" childSelector="[data-card]">
        {solutions.map((s) => (
          <Link
            data-card
            key={s.slug}
            href="/solutions"
            className="group rounded-2xl border border-line-dark bg-ink-800 p-8 transition-colors hover:border-mint/40"
          >
            <IconBox name={s.icon} />
            <p className="mt-5 text-kicker font-semibold uppercase text-on-dark-muted">
              {s.category}
            </p>
            <h3 className="mt-3 text-h3 text-on-dark group-hover:text-mint">{s.title}</h3>
            <p className="mt-2 text-small text-on-dark-muted">{s.summary}</p>
          </Link>
        ))}
      </AnimatedSection>
    </Section>
  )
}
