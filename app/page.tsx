import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import SolutionsSection from '@/components/home/SolutionsSection'
import ProductsSection from '@/components/home/ProductsSection'
import WhySection from '@/components/home/WhySection'
import ClientLogos from '@/components/home/ClientLogos'
import CTABanner from '@/components/shared/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
      <ProductsSection />
      <WhySection />
      <ClientLogos />
      <CTABanner />
    </>
  )
}
