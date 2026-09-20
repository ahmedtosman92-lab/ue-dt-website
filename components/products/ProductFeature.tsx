import Image from 'next/image'
import { cn } from '@/lib/utils'
import Section from '@/components/shared/Section'
import AnimatedSection from '@/components/shared/AnimatedSection'
import type { Product, Tone } from '@/types'

interface ProductFeatureProps {
  product: Product
  eyebrow: string
  tone?: Tone
  reverse?: boolean
}

/** One product in detail — image on one side, specs or features on the other. */
export default function ProductFeature({
  product,
  eyebrow,
  tone = 'light',
  reverse = false,
}: ProductFeatureProps) {
  const light = tone === 'light'

  return (
    <Section tone={tone} id={product.slug}>
      <AnimatedSection className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div className={cn(reverse && 'lg:order-2')}>
          {product.image && (
            <div
              className={cn(
                'flex aspect-[560/400] items-center justify-center overflow-hidden rounded-2xl p-8',
                light ? 'border border-line-light bg-paper-off' : 'bg-ink-800',
              )}
            >
              <Image
                src={product.image}
                alt={product.imageAlt ?? product.name}
                width={560}
                height={400}
                className="h-full w-auto max-w-full object-contain"
              />
            </div>
          )}
        </div>

        <div className={cn(reverse && 'lg:order-1')}>
          <p className="text-eyebrow font-semibold uppercase text-mint">{eyebrow}</p>
          <h2
            className={cn(
              'mt-4 text-[2rem] leading-[1.1] md:text-h2',
              light ? 'text-on-light' : 'text-on-dark',
            )}
          >
            {product.name}
          </h2>
          <p
            className={cn(
              'mt-5 text-base',
              light ? 'text-on-light-muted' : 'text-on-dark-muted',
            )}
          >
            {product.summary}
          </p>

          {product.specs && (
            <dl className="mt-7 flex flex-col">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className={cn(
                    'flex flex-wrap items-baseline gap-x-6 border-t py-3 text-small',
                    light ? 'border-line-light' : 'border-line-dark',
                  )}
                >
                  <dt
                    className={cn(
                      'w-36 font-semibold',
                      light ? 'text-on-light' : 'text-on-dark',
                    )}
                  >
                    {spec.label}
                  </dt>
                  <dd className={light ? 'text-on-light-muted' : 'text-on-dark-muted'}>
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {product.features && (
            <ul
              className={cn(
                'mt-7 flex flex-col gap-2.5 text-base',
                light ? 'text-on-light-muted' : 'text-on-dark-muted',
              )}
            >
              {product.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mint" aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </AnimatedSection>
    </Section>
  )
}
