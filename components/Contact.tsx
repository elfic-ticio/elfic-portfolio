'use client'

import { useLang } from '@/lib/i18n/LanguageContext'

const contactLinks = [
  { label: 'omarjunior11@gmail.com', href: 'mailto:omarjunior11@gmail.com', type: 'Email' },
  { label: 'github.com/elfic-ticio', href: 'https://github.com/elfic-ticio', type: 'GitHub' },
  { label: 'linkedin.com/in/omar-sanchez-ba8208261', href: 'https://www.linkedin.com/in/omar-sanchez-ba8208261', type: 'LinkedIn' },
]

export default function Contact() {
  const { t } = useLang()
  const subLines = t.contact.sub.split('\n')

  return (
    <section id="contacto" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-4 mb-14">
          <span className="font-mono text-xs text-muted">03</span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-fg tracking-tighter">
            {t.contact.sectionTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p
              className="font-syne font-bold leading-tight tracking-tight mb-6 text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              {t.contact.title}{' '}
              <span className="text-accent">{t.contact.titleAccent}</span>
            </p>
            <p className="font-mono text-xs text-muted leading-relaxed">
              {subLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < subLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between px-6 py-5 rounded-2xl bg-surface border border-white/[0.07] hover:border-white/[0.15] hover:bg-raised transition-[background-color,border-color] duration-150 ease-out group"
              >
                <div>
                  <span className="font-mono text-xs text-muted block mb-1 tracking-widest uppercase">
                    {link.type}
                  </span>
                  <span className="font-mono text-sm text-fg group-hover:text-accent transition-[color] duration-150 ease-out">
                    {link.label}
                  </span>
                </div>
                <span className="text-muted group-hover:text-accent transition-[color] duration-150 ease-out font-mono">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
