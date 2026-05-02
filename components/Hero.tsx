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
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-between pt-14 pb-12 px-6"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-between flex-1">
        {/* Top label row */}
        <div className="flex items-center justify-between pt-12 pb-8 border-b border-border">
          <span className="font-mono text-xs text-muted tracking-widest uppercase">
            elfic — 2026
          </span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">
            disponible para trabajo remoto
          </span>
        </div>

        {/* Main title */}
        <div className="py-12 md:py-16 flex-1 flex flex-col justify-center">
          <h1 className="font-syne font-extrabold leading-[0.9] tracking-tighter">
            <span className="block text-fg" style={{ fontSize: 'clamp(3.5rem, 11vw, 10.5rem)' }}>
              FULLSTACK
            </span>
            <span
              className="block text-accent"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 10.5rem)' }}
            >
              DEVELOPER
            </span>
          </h1>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row md:items-end gap-8 justify-between">
          <p className="font-mono text-sm text-muted leading-relaxed max-w-xs">
            Construyendo SaaS, APIs y experiencias
            <br />
            web que funcionan en producción.
          </p>

          <div className="flex flex-wrap gap-2 max-w-lg">
            {stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 border border-border text-muted hover:border-accent hover:text-accent transition-colors cursor-default"
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
