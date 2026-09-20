import type { Metadata } from 'next'
import { company } from './site-content'

const BASE_URL = 'https://ue-dt.com'

/** Builds per-page metadata with consistent titles, OG and Twitter cards. */
export function buildMetadata({
  title,
  description,
  path = '/',
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const url = `${BASE_URL}${path}`
  return {
    title: `${title} | ${company.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${company.name}`,
      description,
      url,
      siteName: company.name,
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/assets/branding/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${company.name}`,
      description,
    },
  }
}
