const contactLinks = [
  {
    label: 'omarjunior11@gmail.com',
    href: 'mailto:omarjunior11@gmail.com',
    type: 'Email',
  },
  {
    label: 'github.com/elfic-ticio',
    href: 'https://github.com/elfic-ticio',
    type: 'GitHub',
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-xs text-muted">03</span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-fg tracking-tighter">
            CONTACTO
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* CTA text */}
          <div>
            <p className="font-syne font-bold leading-tight tracking-tight mb-6 text-balance"
               style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              ¿Tienes un proyecto?{' '}
              <span className="text-accent">Hablemos.</span>
            </p>
            <p className="font-mono text-sm text-muted leading-relaxed">
              Disponible para trabajo remoto, contratos y proyectos freelance.
              <br />
              Respondo en menos de 24 horas.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-px bg-border">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between px-6 py-5 bg-bg hover:bg-card transition-colors group"
              >
                <div>
                  <span className="font-mono text-xs text-muted block mb-1 tracking-widest">
                    {link.type}
                  </span>
                  <span className="font-mono text-sm text-fg group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                </div>
                <span className="text-muted group-hover:text-accent transition-colors font-mono">
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
