import PageHero from '@/components/shared/PageHero'
import SplitFeature from '@/components/shared/SplitFeature'
import ServiceCards from '@/components/services/ServiceCards'
import CTABanner from '@/components/shared/CTABanner'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Services',
  description:
    'Industrial automation, smart weighing, labeling and traceability, OEE and supply-chain software, and custom embedded hardware.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Expert services for every stage."
        lead="From initial deployment to long-term optimisation — our engineering team works alongside your operations to implement, integrate, and maintain your Industry 4.0 stack."
      />

      <SplitFeature
        tone="light"
        eyebrow="Services · Implementation"
        title="End-to-end deployment."
        body="We handle the full stack — hardware installation, software configuration, network setup, and staff training — so your team can focus on production from day one."
        chips={['Site survey & audit', 'Hardware install', 'Software config']}
        image={{
          src: '/assets/images/products/ue-smart-scale.png',
          alt: 'UE Smart Scale installed on a production line',
        }}
      />

      <ServiceCards />

      <CTABanner />
    </>
  )
}
