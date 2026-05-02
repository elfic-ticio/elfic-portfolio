import type { Metadata } from 'next'
import { Syne, DM_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'elfic.dev — FullStack Developer',
  description:
    'FullStack Developer disponible para trabajo remoto. Next.js 14, TypeScript, Prisma + PostgreSQL, Tailwind CSS, NextAuth v5.',
  openGraph: {
    title: 'elfic.dev — FullStack Developer',
    description: 'FullStack Developer disponible para trabajo remoto.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${syne.variable} ${dmMono.variable}`}>
      <body className="bg-bg text-fg font-mono">{children}</body>
    </html>
  )
}
