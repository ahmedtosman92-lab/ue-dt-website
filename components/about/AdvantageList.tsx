import Section from '@/components/shared/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import AnimatedSection from '@/components/shared/AnimatedSection'
import IconBox from '@/components/shared/IconBox'
import { advantages } from '@/lib/site-content'

/** All five competitive advantages, laid out as FeatureRows in two columns. */
export default function AdvantageList() {
  return (
    <Section tone="light">
      <SectionHeader
        eyebrow="Competitive advantage"
        title="What sets us apart."
        tone="light"
      />

      <AnimatedSection
        className="mt-14 grid gap-x-14 gap-y-10 md:grid-cols-2"
        childSelector="[data-row]"
      >
        {advantages.map((a) => (
          <div data-row key={a.title} className="flex gap-5">
            <IconBox name={a.icon} tone="light" />
            <div>
              <h3 className="text-h3 text-on-light">{a.title}</h3>
              <p className="mt-2 text-base text-on-light-muted">{a.summary}</p>
            </div>
          </div>
        ))}
      </AnimatedSection>
    </Section>
  )
}
