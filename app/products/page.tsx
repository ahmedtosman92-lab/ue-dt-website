import PageHero from '@/components/shared/PageHero'
import ProductFeature from '@/components/products/ProductFeature'
import ProductsGrid from '@/components/products/ProductsGrid'
import CTABanner from '@/components/shared/CTABanner'
import { products } from '@/lib/site-content'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Products',
  description:
    'UE Smart Scale, UE Monitoring Suite and UE WeighMaster — industrial hardware and software built for the plant floor.',
  path: '/products',
})

const [smartScale, monitoringSuite, weighMaster] = products

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumb="Products"
        title="Hardware & software for the plant floor."
        lead="Purpose-built industrial products — smart scales, monitoring dashboards, and weighing software — designed and assembled for Egyptian manufacturing environments."
      />

      <ProductFeature
        product={smartScale}
        eyebrow="Hardware · Weighing"
        tone="light"
      />

      <ProductFeature
        product={monitoringSuite}
        eyebrow="Software · Monitoring & analytics"
        tone="dark"
        reverse
      />

      <ProductFeature
        product={weighMaster}
        eyebrow="Software · Weighing"
        tone="light"
      />

      <ProductsGrid />

      <CTABanner />
    </>
  )
}
