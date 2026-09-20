import PageHero from '@/components/shared/PageHero'
import WhoWeAre from '@/components/about/WhoWeAre'
import MissionVision from '@/components/about/MissionVision'
import AdvantageList from '@/components/about/AdvantageList'
import CTABanner from '@/components/shared/CTABanner'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'About',
  description:
    'Pioneers of smart manufacturing — architects of efficiency and catalysts for progress, based in Cairo, Egypt.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title="Pioneers of smart manufacturing."
        lead="More than a company — architects of efficiency and catalysts for progress in the world of manufacturing."
      />
      <WhoWeAre />
      <MissionVision />
      <AdvantageList />
      <CTABanner
        lead="From a single scale to a full MES rollout — we start where your data goes dark."
        ctaLabel="Talk to us"
        ctaHref="/contact"
      />
    </>
  )
}
