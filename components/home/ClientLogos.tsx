import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/shared/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { clientLogos } from '@/lib/site-content'

export default function ClientLogos() {
  return (
    <Section tone="light">
      <SectionHeader
        eyebrow="Our clients"
        title="Working on real production floors."
        tone="light"
        align="center"
      />

      <AnimatedSection
        className="mt-12 grid grid-cols-2 items-center gap-8 md:grid-cols-4"
        childSelector="[data-logo]"
      >
        {clientLogos.map((c) => (
          <Link
            data-logo
            key={c.name}
            href="/clients"
            className="flex h-[120px] items-center justify-center rounded-xl px-6"
          >
            <Image
              src={c.src}
              alt={c.name}
              width={178}
              height={64}
              className="h-16 w-auto object-contain opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
            />
          </Link>
        ))}
      </AnimatedSection>
    </Section>
  )
}
