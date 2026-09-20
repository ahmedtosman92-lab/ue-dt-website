import Section from '@/components/shared/Section'
import StatCounter from '@/components/shared/StatCounter'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { stats } from '@/lib/site-content'

export default function StatsSection() {
  return (
    <Section tone="dark" className="border-y border-line-dark !py-14">
      <AnimatedSection
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        childSelector="[data-stat]"
      >
        {stats.map((stat) => (
          <div data-stat key={stat.label}>
            <StatCounter stat={stat} />
          </div>
        ))}
      </AnimatedSection>
    </Section>
  )
}
