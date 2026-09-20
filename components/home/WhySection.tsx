import Section from '@/components/shared/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import AnimatedSection from '@/components/shared/AnimatedSection'
import IconBox from '@/components/shared/IconBox'
import { advantages } from '@/lib/site-content'

/** The Figma `why` band surfaces three of the five advantages; About lists all five. */
const FEATURED = ['End-to-end integration', 'Accurate solutions', 'Advanced expertise']

export default function WhySection() {
  const items = advantages.filter((a) => FEATURED.includes(a.title))

  return (
    <Section tone="dark">
      <SectionHeader
        eyebrow="Why UE Technology"
        title="One team for the whole stack."
        align="center"
      />

      <AnimatedSection className="mt-14 grid gap-5 md:grid-cols-3" childSelector="[data-card]">
        {items.map((a) => (
          <article
            data-card
            key={a.title}
            className="rounded-2xl border border-line-dark bg-ink-800 p-8"
          >
            <IconBox name={a.icon} />
            <h3 className="mt-5 text-h3 text-on-dark">{a.title}</h3>
            <p className="mt-2 text-small text-on-dark-muted">{a.summary}</p>
          </article>
        ))}
      </AnimatedSection>
    </Section>
  )
}
