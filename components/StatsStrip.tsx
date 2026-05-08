'use client'

import { useLang } from '@/lib/i18n/LanguageContext'

export default function StatsStrip() {
  const { t } = useLang()

  return (
    <section className="border-t border-border py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {t.stats.map((stat) => (
            <div key={stat.label} className="px-8 first:pl-0 last:pr-0 py-4">
              <span className="font-syne font-bold text-5xl md:text-6xl text-accent block leading-none">
                {stat.num}
              </span>
              <span className="font-mono text-xs text-muted mt-3 block leading-relaxed">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
