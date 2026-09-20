import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, Ubuntu } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Body + UI type
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

// Display type — headings and the wordmark
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-ubuntu',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'UE Technology | Industry 4.0 Digital Transformation — Cairo, Egypt',
  description:
    'UE Technology delivers MES, EMS, OEE, Smart Weighing, and Supply Chain solutions for Egyptian manufacturing plants.',
  metadataBase: new URL('https://ue-dt.com'),
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable, ubuntu.variable)}>
      <body className="bg-ink-900 text-on-dark">
        <TopBar />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
