import Section from '@/components/shared/Section'
import AnimatedSection from '@/components/shared/AnimatedSection'
import IconBox from '@/components/shared/IconBox'

const PILLARS = [
  {
    icon: 'mission-rings',
    title: 'Our Mission',
    body: 'To propel manufacturing industries into a new era of excellence — enriching the manufacturing landscape through innovative digital solutions, fueled by a commitment to quality, efficiency, and continuous improvement.',
  },
  {
    icon: 'vision-eye',
    title: 'Our Vision',
    body: 'A future where manufacturing industries worldwide thrive in a seamlessly connected digital ecosystem — with UE as a visionary leader driving that transformation and empowering clients to achieve unparalleled excellence.',
  },
]

export default function MissionVision() {
  return (
    <Section tone="dark">
      <AnimatedSection className="grid gap-5 md:grid-cols-2" childSelector="[data-card]">
        {PILLARS.map((p) => (
          <article
            data-card
            key={p.title}
            className="rounded-2xl border border-line-dark bg-ink-800 p-10"
          >
            <IconBox name={p.icon} />
            <h2 className="mt-6 text-[1.6875rem] text-on-dark">{p.title}</h2>
            <span className="mt-4 block h-1.5 w-16 rounded-full bg-mint" aria-hidden />
            <p className="mt-5 text-base text-on-dark-muted">{p.body}</p>
          </article>
        ))}
      </AnimatedSection>
    </Section>
  )
}
