'use client'

import { useState, useEffect } from 'react'
import { useLang } from '@/lib/i18n/LanguageContext'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, t, toggle } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#proyectos', label: t.nav.projects },
    { href: '#sobre-mi', label: t.nav.about },
    { href: '#contacto', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/[0.06] bg-bg/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* logo */}
        <a
          href="#"
          className="inline-flex items-center rounded-xl bg-surface border border-white/[0.08] px-3.5 py-1.5 font-mono text-xs text-accent tracking-widest hover:opacity-75 transition-opacity duration-150 ease-out"
        >
          Omar Sanchez
        </a>

        {/* Desktop links + toggle */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-muted hover:text-fg transition-[color,opacity] duration-150 ease-out tracking-wider"
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <div className="flex items-center gap-1.5 font-mono text-xs tracking-widest">
            <button
              onClick={() => toggle('es')}
              className={`transition-colors duration-150 ${lang === 'es' ? 'text-[#c8f060]' : 'text-muted hover:text-fg'}`}
            >
              ES
            </button>
            <span className="text-muted/40">·</span>
            <button
              onClick={() => toggle('en')}
              className={`transition-colors duration-150 ${lang === 'en' ? 'text-[#c8f060]' : 'text-muted hover:text-fg'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden font-mono text-xl text-muted hover:text-fg transition-[color,opacity] duration-150 ease-out w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open ? '×' : '≡'}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-bg/95 backdrop-blur-md">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 font-mono text-sm text-muted hover:text-fg transition-[color] duration-150 border-b border-white/[0.05] last:border-0"
            >
              {link.label}
            </a>
          ))}
          {/* Language toggle mobile */}
          <div className="px-6 py-4 flex items-center gap-3 font-mono text-sm">
            <button
              onClick={() => { toggle('es'); setOpen(false) }}
              className={lang === 'es' ? 'text-[#c8f060]' : 'text-muted'}
            >
              ES
            </button>
            <span className="text-muted/40">·</span>
            <button
              onClick={() => { toggle('en'); setOpen(false) }}
              className={lang === 'en' ? 'text-[#c8f060]' : 'text-muted'}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
