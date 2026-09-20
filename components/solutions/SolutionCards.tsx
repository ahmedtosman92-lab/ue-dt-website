import Section from '@/components/shared/Section'
import AnimatedSection from '@/components/shared/AnimatedSection'
import IconBox from '@/components/shared/IconBox'
import { solutions } from '@/lib/site-content'

/** Every solution except MES, which gets its own feature band above. */
export default function SolutionCards() {
  const rest = solutions.filter((s) => s.slug !== 'mes')

  return (
    <Section tone="dark">
      <AnimatedSection className="grid gap-5 md:grid-cols-2" childSelector="[data-card]">
        {rest.map((s) => (
          <article
            data-card
            key={s.slug}
            className="rounded-2xl border border-line-dark bg-ink-800 p-8"
          >
            <IconBox name={s.icon} />
            <p className="mt-5 text-kicker font-semibold uppercase text-mint">{s.abbr}</p>
            <h2 className="mt-3 text-h3 text-on-dark">{s.category}</h2>
            <p className="mt-2 text-small text-on-dark-muted">{s.summary}</p>
          </article>
        ))}
      </AnimatedSection>
    </Section>
  )
}
