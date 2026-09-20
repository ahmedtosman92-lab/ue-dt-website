import {
  Crosshair,
  Cpu,
  Eye,
  Gauge,
  Globe,
  LayoutGrid,
  Link2,
  Shield,
  SlidersHorizontal,
  Tag,
  Target,
  Truck,
  Zap,
  type LucideIcon,
} from 'lucide-react'

/**
 * Maps the icon names used in the Figma component library (Icon/mes-grid etc.)
 * onto lucide equivalents, so content can reference an icon by design name.
 */
const registry: Record<string, LucideIcon> = {
  'mes-grid': LayoutGrid,
  'ems-bolt': Zap,
  'oee-gauge': Gauge,
  sliders: SlidersHorizontal,
  truck: Truck,
  tag: Tag,
  shield: Shield,
  link: Link2,
  'accuracy-cross': Crosshair,
  chip: Cpu,
  'globe-grid': Globe,
  'mission-rings': Target,
  'vision-eye': Eye,
}

export function getIcon(name?: string): LucideIcon {
  return (name && registry[name]) || LayoutGrid
}

export default function Icon({ name, className }: { name?: string; className?: string }) {
  const Cmp = getIcon(name)
  return <Cmp className={className} aria-hidden />
}
