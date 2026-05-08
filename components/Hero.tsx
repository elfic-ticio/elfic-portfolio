'use client'

import { useLang } from '@/lib/i18n/LanguageContext'

const stack = [
  'Next.js 14',
  'TypeScript',
  'Prisma + PostgreSQL',
  'Tailwind CSS',
  'NextAuth v5',
  'Playwright E2E',
  'Vercel',
  'PWA',
]

export default function Hero() {
  const { t } = useLang()
  const subLines = t.hero.sub.split('\n')

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-14 pb-12 px-6 overflow-hidden"
    >
      <div className="dot-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto w-full flex flex-col flex-1 justify-between">
        {/* eyebrow row */}
        <div className="flex items-center justify-between pt-12 pb-8 border-b border-white/[0.06]">
          <span className="font-mono text-xs text-muted tracking-widest uppercase">
            Omar Sanchez — 2026
          </span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase hidden sm:block">
            {t.hero.tag}
          </span>
        </div>

        {/* main title */}
        <div className="py-14 md:py-20 flex-1 flex flex-col justify-center">
          <h1 className="font-syne font-extrabold leading-[0.88] tracking-tighter">
            <span
              className="block text-fg"
              style={{ fontSize: 'clamp(2.8rem, 6.8vw, 6.8rem)' }}
            >
              FULLSTACK
            </span>
            <span
              className="block text-accent"
              style={{ fontSize: 'clamp(2.8rem, 6.8vw, 6.8rem)' }}
            >
              DEVELOPER
            </span>
          </h1>
        </div>

        {/* bottom row */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row md:items-end gap-8 justify-between">
          <p className="font-mono text-sm text-muted leading-relaxed max-w-xs">
            {subLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < subLines.length - 1 && <br />}
              </span>
            ))}
          </p>

          <div className="flex flex-wrap gap-2 md:max-w-lg">
            {stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 rounded-lg bg-surface border border-white/[0.08] text-muted hover:border-accent/40 hover:text-accent transition-[border-color,color] duration-150 ease-out cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
