import type { Metadata } from 'next'
import { Syne, DM_Mono } from 'next/font/google'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
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
  title: 'Omar Sanchez — FullStack Developer',
  description:
    'FullStack Developer disponible para trabajo remoto. Next.js 14, TypeScript, Prisma + PostgreSQL, Tailwind CSS, NextAuth v5.',
  openGraph: {
    title: 'Omar Sanchez — FullStack Developer',
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
    <html lang="es" className={`${syne.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <body className="bg-bg text-fg font-mono">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
