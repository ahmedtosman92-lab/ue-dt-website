import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'UE Technology | Industry 4.0 Digital Transformation — Cairo, Egypt',
  description: 'UE-DT delivers MES, EMS, OEE, Smart Weighing, and Supply Chain solutions for Egyptian manufacturing plants.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  )
}