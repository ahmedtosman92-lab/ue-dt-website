import type { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Section from './Section'
import Chip from './Chip'
import AnimatedSection from './AnimatedSection'
import type { Tone } from '@/types'

interface SplitFeatureProps {
  tone?: Tone
  eyebrow: string
  title: string
  body?: string
  /** Rendered as a bulleted list under the body. */
  bullets?: string[]
  /** Short pill tags, used on the Solutions page. */
  chips?: string[]
  /** Italic closing line, used by the client case studies. */
  closing?: string
  /** Image shown in the media column. */
  image?: { src: string; alt: string }
  /** Custom media, used when the column is not a plain image. */
  media?: ReactNode
  /** Contain the image on a white card — right for logos and UI shots. */
  mediaCard?: boolean
  /** Put the media column on the right instead of the left. */
  reverse?: boolean
  id?: string
}

/**
 * Media + copy in two columns — the `split` layout that Solutions, Products and
 * the client case studies all share in Figma.
 */
export default function SplitFeature({
  tone = 'light',
  eyebrow,
  title,
  body,
  bullets,
  chips,
  closing,
  image,
  media,
  mediaCard = true,
  reverse = false,
  id,
}: SplitFeatureProps) {
  const light = tone === 'light'

  return (
    <Section tone={tone} id={id}>
      <AnimatedSection className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div className={cn(reverse && 'lg:order-2')}>
          {media ?? (
            image && (
              <div
                className={cn(
                  'flex aspect-[560/306] items-center justify-center overflow-hidden rounded-2xl p-8',
                  mediaCard ? 'bg-paper' : 'bg-ink-800',
                  light && mediaCard && 'border border-line-light',
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={560}
                  height={306}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
            )
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
            {title}
          </h2>

          {body && (
            <p
              className={cn(
                'mt-5 text-base',
                light ? 'text-on-light-muted' : 'text-on-dark-muted',
              )}
            >
              {body}
            </p>
          )}

          {bullets && bullets.length > 0 && (
            <ul
              className={cn(
                'mt-5 flex flex-col gap-2 text-base',
                light ? 'text-on-light-muted' : 'text-on-dark-muted',
              )}
            >
              {bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mint" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {chips && chips.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <Chip key={c} label={c} tone={tone} />
              ))}
            </div>
          )}

          {closing && (
            <p
              className={cn(
                'mt-5 text-base italic',
                light ? 'text-on-light-muted' : 'text-on-dark-muted',
              )}
            >
              {closing}
            </p>
          )}
        </div>
      </AnimatedSection>
    </Section>
  )
}
