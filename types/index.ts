/**
 * Shared domain types.
 *
 * These mirror the content structures in the Figma file (03 · Website) so that
 * each section component takes one well-typed object rather than loose props.
 */

export type Tone = 'light' | 'dark'

export interface NavLink {
  label: string
  href: string
  /** Design exists in Figma. Blog and Contact are nav-only for now. */
  designed: boolean
}

export interface Stat {
  value: string
  label: string
  caption?: string
}

/** A capability we deliver — MES, EMS, OEE, Scale Customization, Supply Chain. */
export interface Solution {
  slug: string
  abbr: string
  category: string
  title: string
  summary: string
  icon: string
}

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  slug: string
  kind: 'Hardware' | 'Software'
  name: string
  summary: string
  features?: string[]
  specs?: ProductSpec[]
  image?: string
  imageAlt?: string
}

/** A card on the Services page — the deck's "Key Products & Services". */
export interface Service {
  eyebrow: string
  title: string
  summary: string
}

/** A reason to choose UE — rendered as a FeatureRow or card. */
export interface Advantage {
  title: string
  summary: string
  icon?: string
}

export interface ClientLogo {
  name: string
  src: string
}

/** A client engagement, one per section on the Clients page. */
export interface CaseStudy {
  slug: string
  client: string
  sector: string
  title: string
  body: string
  bullets?: string[]
  closing: string
  logo: string
}
