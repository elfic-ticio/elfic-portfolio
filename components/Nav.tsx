'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#proyectos', label: 'proyectos' },
  { href: '#sobre-mi', label: 'sobre mí' },
  { href: '#contacto', label: 'contacto' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/[0.06] bg-bg/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* matrix-style pill logo */}
        <a
          href="#"
          className="inline-flex items-center rounded-xl bg-surface border border-white/[0.08] px-3.5 py-1.5 font-mono text-xs text-accent tracking-widest hover:opacity-75 transition-opacity duration-150 ease-out"
        >
          elfic.dev
        </a>

        {/* Desktop links */}
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
        </div>

        {/* Mobile toggle */}
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
        </div>
      )}
    </header>
  )
}
