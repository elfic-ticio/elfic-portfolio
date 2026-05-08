'use client'

import { useLang } from '@/lib/i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="mx-4 mb-4 rounded-2xl bg-surface border border-white/[0.07] py-6 px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#"
          className="font-mono text-sm text-accent hover:opacity-70 transition-opacity duration-150 ease-out tracking-widest"
        >
          Omar Sanchez
        </a>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/elfic-ticio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-fg transition-[color] duration-150 ease-out"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/omar-sanchez-ba8208261"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-fg transition-[color] duration-150 ease-out"
          >
            LinkedIn
          </a>
          <a
            href="mailto:omarjunior11@gmail.com"
            className="font-mono text-xs text-muted hover:text-fg transition-[color] duration-150 ease-out"
          >
            Email
          </a>
        </div>

        <span className="font-mono text-xs text-muted">{t.footer}</span>
      </div>
    </footer>
  )
}
