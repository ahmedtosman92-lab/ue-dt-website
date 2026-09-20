import PageHero from '@/components/shared/PageHero'
import SplitFeature from '@/components/shared/SplitFeature'
import CTABanner from '@/components/shared/CTABanner'
import { caseStudies } from '@/lib/site-content'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Clients',
  description:
    'Digital transformation delivered on live Egyptian production lines — Shatat Group, Zero Carbon, Cairo 3A and El Sewedy Electric.',
  path: '/clients',
})

export default function ClientsPage() {
  return (
    <>
      <PageHero
        crumb="Clients"
        title="Working on real production floors."
        lead="From slaughterhouses to recycling plants, poultry farms to cable factories — digital transformation delivered on live Egyptian production lines."
      />

      {caseStudies.map((study, i) => (
        <SplitFeature
          key={study.slug}
          id={study.slug}
          /* Alternate tones so the page keeps the rhythm of the Figma frame */
          tone={i % 2 === 0 ? 'light' : 'dark'}
          eyebrow={`Client · ${study.sector}`}
          title={study.title}
          body={study.body}
          bullets={study.bullets}
          closing={study.closing}
          image={{ src: study.logo, alt: study.client }}
        />
      ))}

      <CTABanner
        lead="From a single scale to a full MES rollout — we start where your data goes dark."
        ctaLabel="Talk to us"
        ctaHref="/contact"
      />
    </>
  )
}
