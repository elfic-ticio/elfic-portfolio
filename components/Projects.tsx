interface Project {
  num?: string
  label?: string
  name: string
  accent?: string
  type?: string
  description: string
  tags: string[]
  url?: string
  github?: string
  featured?: boolean
  status?: string
}

const projects: Project[] = [
  {
    name: 'GlowSuite',
    description:
      'SaaS completo para gestión de salones y barberías. Agenda inteligente, punto de venta, control de inventario, gestión de clientes y equipo. Planes FREE / BASIC / PRO con pagos Wompi. Reservas online, vitrina pública y panel admin multi-tenant.',
    tags: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth v5', 'Wompi', 'Tailwind', 'PWA'],
    url: 'https://getglowsuite.com',
    featured: true,
    status: 'En producción',
  },
  {
    name: 'MermaWeb',
    description:
      'E-commerce de licores con defectos. Carrito, facturación, subastas en tiempo real, chatbot IA integrado y tracking de envíos.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'IA', 'WebSockets'],
    url: 'https://project-m3ygs.vercel.app/',
    status: 'En producción',
  },
  {
    name: 'MermaAPI',
    description:
      'Backend REST para MermaWeb. Motor de subastas, gestión de inventario y base de datos con Prisma + PostgreSQL.',
    tags: ['Node.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'REST API'],
    status: 'En producción',
  },
  {
    num: '05',
    label: 'IA · Análisis de CVs',
    name: 'CV',
    accent: 'Match',
    type: 'SaaS · AI-Powered · Full-Stack',
    description:
      'Analizador de CVs con IA. Sube tu CV en PDF, pega la oferta de trabajo y obtén un score de compatibilidad, skills que coinciden, gaps detectados y 3 sugerencias concretas. Historial de análisis y dashboard con métricas personales.',
    tags: ['Gemini 2.0 Flash', 'PDF parsing', 'Score 0-100', 'Auth Google + Magic Link', 'Historial', 'Dashboard', 'Prisma + PostgreSQL', 'Vercel Blob'],
    url: 'https://cvanalizer-vert.vercel.app',
    github: 'https://github.com/elfic-ticio/cvanalizer',
    status: 'En producción',
  },
  {
    num: '06',
    label: 'Herramienta · Open Source',
    name: 'Office',
    accent: '2MD',
    type: 'Utilidad · Conversión · 100% Client-Side',
    description:
      'Conversor de documentos a Markdown que corre completamente en el navegador. Sin servidor, sin registro, sin que tus archivos salgan de tu equipo. Soporta PDF, Word, Excel, PowerPoint, CSV, JSON, HTML y 30+ formatos más.',
    tags: ['30+ formatos', '100% client-side', 'Sin backend', 'PDF · DOCX · XLSX · PPTX', 'CSV · JSON · HTML', 'Código fuente (.py .js .ts...)', 'Sin registro'],
    url: 'https://docs2md.vercel.app/',
    github: 'https://github.com/elfic-ticio/convertor-mk',
    status: 'En producción',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* section header */}
        <div className="flex items-baseline gap-4 mb-14">
          <span className="font-mono text-xs text-muted">01</span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-fg tracking-tighter">
            PROYECTOS
          </h2>
        </div>

        {/* matrix-style surface grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className={[
                'rounded-2xl bg-surface border border-white/[0.07] p-7 md:p-9',
                'hover:border-white/[0.14] hover:bg-raised',
                'transition-[background-color,border-color] duration-200 ease-out',
                'group',
                project.featured ? 'md:col-span-2' : '',
              ].join(' ')}
            >
              {project.featured && (
                <span className="font-mono text-xs text-accent border border-accent/30 bg-accent/5 rounded-md px-2 py-0.5 mb-8 inline-block tracking-widest">
                  FEATURED
                </span>
              )}

              {project.num && (
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-xs text-muted/50">{project.num}</span>
                  <span className="font-mono text-xs text-muted">{project.label}</span>
                </div>
              )}

              <div
                className={
                  project.featured ? 'md:grid md:grid-cols-2 md:gap-14 md:items-start' : ''
                }
              >
                {/* title + description */}
                <div>
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-syne font-bold text-xl md:text-2xl text-fg group-hover:text-accent transition-[color] duration-150 ease-out leading-tight">
                      {project.name}
                      {project.accent && (
                        <span className="text-accent">{project.accent}</span>
                      )}
                    </h3>
                    <div className="flex items-center gap-3 ml-4 mt-0.5 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-muted hover:text-accent transition-[color] duration-150 ease-out text-xs"
                          aria-label={`GitHub de ${project.name}`}
                        >
                          GH
                        </a>
                      )}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-muted hover:text-accent transition-[color] duration-150 ease-out text-sm"
                          aria-label={`Visitar ${project.name}`}
                        >
                          ↗
                        </a>
                      )}
                    </div>
                  </div>

                  {project.type && (
                    <p className="font-mono text-[10px] text-muted/50 mb-4 tracking-wide">
                      {project.type}
                    </p>
                  )}

                  <p className="font-mono text-xs text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* tags + status */}
                <div
                  className={
                    project.featured
                      ? 'flex flex-col justify-between h-full mt-8 md:mt-0'
                      : 'mt-6'
                  }
                >
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-1 rounded-md bg-bg border border-white/[0.07] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.status && (
                    <div className="mt-5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                      <span className="font-mono text-xs text-accent">{project.status}</span>
                    </div>
                  )}

                  {/* Testing callout dentro de la card de GlowSuite */}
                  {project.featured && (
                    <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-start gap-3">
                      <span className="font-mono text-[10px] text-[#c8f060] bg-[#c8f060]/10 border border-[#c8f060]/20 px-2 py-0.5 rounded-sm shrink-0">
                        141 tests E2E
                      </span>
                      <p className="font-mono text-[11px] text-neutral-500 leading-relaxed">
                        Cobertura de flujos críticos — autenticación, pagos Wompi y reservas — con Playwright.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
