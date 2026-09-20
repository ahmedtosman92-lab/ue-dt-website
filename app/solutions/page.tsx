import PageHero from '@/components/shared/PageHero'
import SplitFeature from '@/components/shared/SplitFeature'
import SolutionCards from '@/components/solutions/SolutionCards'
import CTABanner from '@/components/shared/CTABanner'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Solutions',
  description:
    'MES, EMS, OEE, scale customization and supply chain management — smart systems and data-driven platforms for Egyptian factories.',
  path: '/solutions',
})

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumb="Solutions"
        title="Solutions that connect the whole floor."
        lead="We integrate advanced hardware and software to optimize manufacturing — smart systems and data-driven platforms that raise efficiency, cut downtime, and support sustainable growth."
      />

      <SplitFeature
        id="mes"
        tone="light"
        eyebrow="MES · Manufacturing Execution"
        title="See production as it happens."
        body="Real-time control and visibility of production, ensuring seamless coordination between the shop floor and management."
        chips={['Work orders', 'Output per shift', 'Live status']}
        image={{
          src: '/assets/images/products/monitoring-suite.png',
          alt: 'Manufacturing execution dashboard showing live production data',
        }}
      />

      <SolutionCards />

      <CTABanner
        title="Start with one line. Scale to the whole plant."
        lead="Our modular architecture grows from a single solution into full MES, OEE, EMS, or supply-chain platforms."
        ctaLabel="Book a walkthrough"
        ctaHref="/contact"
      />
    </>
  )
}
