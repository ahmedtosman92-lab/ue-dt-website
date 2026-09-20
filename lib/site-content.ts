import type {
  Advantage,
  CaseStudy,
  ClientLogo,
  NavLink,
  Product,
  Service,
  Solution,
  Stat,
} from '@/types'

/**
 * Single source of copy for the marketing site.
 *
 * Every string here is lifted verbatim from the Figma file (03 · Website) so the
 * build stays in step with the design. Change it in Figma first, then here.
 */

export const company = {
  name: 'UE Technology',
  tagline:
    'Industry 4.0 digital transformation — hardware, software, and engineering for smart manufacturing.',
  topbar: 'Smart manufacturing, engineered in Egypt',
  email: 'info@ue-dt.com',
  location: 'Cairo, Egypt',
  locationShort: 'Cairo, EG',
  site: 'www.ue-dt.com',
} as const

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/', designed: true },
  { label: 'About', href: '/about', designed: true },
  { label: 'Solutions', href: '/solutions', designed: true },
  { label: 'Services', href: '/services', designed: true },
  { label: 'Products', href: '/products', designed: true },
  { label: 'Clients', href: '/clients', designed: true },
  { label: 'Blog', href: '/blog', designed: false },
  { label: 'Contact', href: '/contact', designed: false },
]

export const stats: Stat[] = [
  { value: '10+', label: 'Collaborations', caption: 'across industries' },
  { value: '5+', label: 'Projects delivered', caption: 'live on the floor' },
  { value: '100%', label: 'In-house HW + SW', caption: 'one accountable team' },
  { value: 'EG', label: 'Based in Egypt', caption: 'local agility, global standards' },
]

export const solutions: Solution[] = [
  {
    slug: 'mes',
    abbr: 'MES',
    category: 'Manufacturing Execution',
    title: 'MES',
    summary:
      'Real-time control and visibility of production, coordinating the shop floor and management in one system.',
    icon: 'mes-grid',
  },
  {
    slug: 'ems',
    abbr: 'EMS',
    category: 'Energy Management',
    title: 'EMS',
    summary:
      'Monitor and optimize energy use, cutting cost and supporting sustainability targets.',
    icon: 'ems-bolt',
  },
  {
    slug: 'oee',
    abbr: 'OEE',
    category: 'Overall Equipment Efficiency',
    title: 'OEE',
    summary:
      'Track machine performance to minimize downtime and maximize utilization.',
    icon: 'oee-gauge',
  },
  {
    slug: 'scale-customization',
    abbr: 'Weighing',
    category: 'Weighing',
    title: 'Scale Customization',
    summary: 'Industrial weighing integrated into production lines.',
    icon: 'sliders',
  },
  {
    slug: 'supply-chain',
    abbr: 'SCM',
    category: 'Logistics',
    title: 'Supply Chain',
    summary: 'Transparency from raw materials to finished goods.',
    icon: 'truck',
  },
  {
    slug: 'labeling',
    abbr: 'Labeling',
    category: 'Traceability',
    title: 'Labeling',
    summary: 'Accurate product tracking, production to dispatch.',
    icon: 'tag',
  },
]

export const products: Product[] = [
  {
    slug: 'ue-smart-scale',
    kind: 'Hardware',
    name: 'UE Smart Scale',
    summary:
      'Industrial digital scale with analog or touchscreen displays — integrates directly with your software stack or runs on our UE WeighMaster platform.',
    specs: [
      { label: 'Capacity', value: 'Up to 5,000 kg' },
      { label: 'Display', value: 'Analog or 7" touchscreen' },
      { label: 'Interface', value: 'RS-232, USB, Ethernet, Wi-Fi' },
      { label: 'Certifications', value: 'OIML R 76 compliant' },
    ],
    image: '/assets/images/products/ue-smart-scale.png',
    imageAlt: 'UE Smart Scale platform scale with LCD keypad terminal',
  },
  {
    slug: 'ue-monitoring-suite',
    kind: 'Software',
    name: 'UE Monitoring Suite',
    summary:
      'The software layer that complements our solutions — real-time visibility over production and energy in one dashboard.',
    features: [
      'Production & efficiency — track output and efficiency across lines, live',
      'Energy consumption — monitor power, peak load and cost with the EMS module',
      'OEE at a glance — availability, performance and quality in one score',
      'Client & cost evaluation — consumption, peak load and cost per client',
    ],
    image: '/assets/images/products/monitoring-suite.png',
    imageAlt: 'UE Monitoring Suite live production and energy dashboard',
  },
  {
    slug: 'ue-weighmaster',
    kind: 'Software',
    name: 'UE WeighMaster',
    summary:
      'Our own weighing software for any weighing operation — live capture, counting, and fully traceable records.',
    features: [
      'Built for any weighing workflow — batch & piece counting, live weight and stability detection',
      'Traceable weigh records — every session logged and ready for reporting',
      'Standalone or connected — runs on its own or paired with UE Smart Scale hardware',
    ],
    image: '/assets/images/products/weighmaster.png',
    imageAlt: 'UE WeighMaster bilingual weighing session interface',
  },
]

export const services: Service[] = [
  {
    eyebrow: 'Automation',
    title: 'Industrial Automation',
    summary:
      'Customized solutions to automate processes, improve efficiency, and optimize decisions through real-time data.',
  },
  {
    eyebrow: 'Weighing',
    title: 'Smart Weighing & Monitoring',
    summary:
      'Certified, calibrated scales, balance nodes, and conveyor-integrated weighing for precise, automated data.',
  },
  {
    eyebrow: 'Traceability',
    title: 'Labeling & Traceability',
    summary:
      'End-to-end labeling that ensures accurate product tracking from production to distribution.',
  },
  {
    eyebrow: 'Software',
    title: 'OEE & Supply-Chain Software',
    summary:
      'Platforms to monitor equipment effectiveness, production cycles, inventory, and energy usage.',
  },
  {
    eyebrow: 'Hardware',
    title: 'Custom Hardware & Embedded',
    summary:
      'In-house design of PCBs, IoT devices, and smart monitoring hardware tailored to client needs.',
  },
]

export const advantages: Advantage[] = [
  {
    title: 'Tailored digital transformation',
    summary: "Fully customized solutions for each client's production environment.",
    icon: 'shield',
  },
  {
    title: 'End-to-end integration',
    summary: 'In-house hardware and software developed for seamless connectivity.',
    icon: 'link',
  },
  {
    title: 'Accurate solutions',
    summary: 'Precision weighing and labeling calibrated to international standards.',
    icon: 'accuracy-cross',
  },
  {
    title: 'Advanced expertise',
    summary: 'Strong capability in embedded systems, cloud platforms, and data analytics.',
    icon: 'chip',
  },
  {
    title: 'Local agility, global standards',
    summary: 'Quick response in Egypt while maintaining world-class quality.',
    icon: 'globe-grid',
  },
]

export const clientLogos: ClientLogo[] = [
  { name: 'Shatat Group', src: '/assets/images/clients/shatat-group.png' },
  { name: 'Zero Carbon', src: '/assets/images/clients/zero-carbon.png' },
  { name: 'Cairo 3A', src: '/assets/images/clients/cairo-3a.png' },
  { name: 'El Sewedy Electric', src: '/assets/images/clients/el-sewedy-electric.png' },
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'shatat-group',
    client: 'Shatat Group',
    sector: 'Meat processing',
    title: 'Digital transformation of a slaughterhouse.',
    body: "A full digital transformation of Shatat Group's facility — automating and optimizing the entire data workflow across meat-processing stages, from livestock weighing through slaughter, cutting, and packaging to labeling and quality monitoring.",
    bullets: [
      'Integrated weighing that captures data before, during and after slaughter',
      'Automated labeling applied directly at the processing point',
      'Monitoring of work orders, productivity, and real-time power consumption',
      'Centralized software delivering full operational visibility',
    ],
    closing:
      'Moving Shatat Group toward a fully data-driven, traceable, and energy-efficient operation.',
    logo: '/assets/images/clients/shatat-group.png',
  },
  {
    slug: 'zero-carbon',
    client: 'Zero Carbon',
    sector: 'Recycling',
    title: 'Smarter, greener recycling plants.',
    body: 'Partnering with Zero Carbon — a leader in decarbonization across Egypt and the Middle East — to digitally transform its recycling plants. The project enhances OEE, monitors energy consumption, and provides real-time data for smarter decisions and production optimization.',
    closing:
      "Through UE's Smart Balance Nodes and conveyor-integrated weighing, raw materials, outputs, and waste streams are weighed automatically as they move along the line. Load cells embedded directly in the conveyor enable accurate, real-time monitoring without manual input — precise material tracking and full visibility across the recycling process.",
    logo: '/assets/images/clients/zero-carbon.png',
  },
  {
    slug: 'cairo-3a-feed-weighing',
    client: 'Cairo 3A',
    sector: 'Poultry',
    title: 'Smart Monitoring System — feed weighing.',
    body: 'A fully automated solution bringing precision, traceability, and efficiency to industrial weighing. Engineered with ARM-based microcontrollers, load-cell sensors, and real-time cloud integration — with a keypad, GLCD display and LED indicators — all data is transmitted securely to Microsoft Azure for centralized monitoring.',
    closing:
      'Tailored for the poultry industry, where precise feed measurement is critical for cost efficiency and bird health, it continuously tracks feed quantities with high accuracy — ensuring consistent distribution and eliminating errors from manual weighing.',
    logo: '/assets/images/clients/cairo-3a.png',
  },
  {
    slug: 'cairo-3a-poultry-grading',
    client: 'Cairo 3A',
    sector: 'Poultry',
    title: 'Poultry grading & weighing system.',
    body: 'UE Technology developed and tested a grading scale system for broiler breeders (parent stock). The solution accurately weighs live parent chickens, allowing Cairo 3A to classify and grade birds by weight category.',
    closing:
      'A critical process in poultry management — ensuring uniformity, optimizing feeding programs, and improving production efficiency. By automating weighing and grading, UE provided Cairo 3A with reliable data to enhance decisions and streamline flock management.',
    logo: '/assets/images/clients/cairo-3a.png',
  },
  {
    slug: 'el-sewedy-sedco',
    client: 'El Sewedy Electric',
    sector: 'Manufacturing',
    title: 'SEDCO cable accessories factory.',
    body: "UE Technology integrated custom-developed industrial hardware and software with production machines at Elsewedy Electric's SEDCO cable accessories factory. The solution enables real-time monitoring of power consumption per machine, production output per shift, and machine temperature throughout operating hours.",
    closing:
      'Centralized into actionable dashboards, the system supports energy optimization, production-efficiency tracking, and early detection of operational risks — helping management make faster, data-driven decisions and improve overall factory performance.',
    logo: '/assets/images/clients/el-sewedy-electric.png',
  },
]

export const footerColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Clients', href: '/clients' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'MES', href: '/solutions' },
      { label: 'EMS', href: '/solutions' },
      { label: 'OEE', href: '/solutions' },
      { label: 'Supply chain', href: '/solutions' },
    ],
  },
  {
    heading: 'Products',
    links: [
      { label: 'Smart Scale', href: '/products' },
      { label: 'Monitoring Suite', href: '/products' },
      { label: 'WeighMaster', href: '/products' },
      { label: 'Services', href: '/services' },
    ],
  },
] as const
