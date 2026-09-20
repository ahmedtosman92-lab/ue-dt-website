import Section from '@/components/shared/Section'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { stats } from '@/lib/site-content'

/** Intro copy beside the three headline numbers. */
export default function WhoWeAre() {
  const featured = stats.slice(0, 3)

  return (
    <Section tone="light">
      <AnimatedSection className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-eyebrow font-semibold uppercase text-mint">Who we are</p>
          <h2 className="mt-4 text-[2rem] leading-[1.1] text-on-light md:text-h2">
            Redefining the future of the factory.
          </h2>
          <p className="mt-5 text-base text-on-light-muted">
            Based in the heart of Egypt, UE Technology redefines the future of factories
            through cutting-edge integration, automation, and bespoke hardware.
          </p>
          <p className="mt-4 text-base text-on-light-muted">
            Ours is a holistic approach to digital transformation — comprehensive solutions
            spanning software, hardware, and the expertise of highly skilled engineers,
            giving you the tools to thrive in a competitive market.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {featured.map((s) => (
            <li
              key={s.label}
              className="rounded-2xl border border-line-light bg-paper-off px-8 py-7"
            >
              <p className="font-display text-stat text-mint-deep">{s.value}</p>
              <p className="mt-2 text-base font-medium text-on-light">{s.label}</p>
            </li>
          ))}
        </ul>
      </AnimatedSection>
    </Section>
  )
}
