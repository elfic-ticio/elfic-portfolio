interface Project {
  name: string
  description: string
  tags: string[]
  url?: string
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
    name: 'Office → MD',
    description:
      'Conversor de documentos Office a Markdown. Procesamiento en el servidor, output limpio y descargable al instante.',
    tags: ['Next.js', 'TypeScript', 'File Processing'],
    url: 'https://office-to-markdown-eight.vercel.app',
    status: 'En producción',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-xs text-muted">01</span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-fg tracking-tighter">
            PROYECTOS
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {projects.map((project) => (
            <article
              key={project.name}
              className={`bg-bg p-8 md:p-10 group hover:bg-card transition-colors ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {project.featured && (
                <span className="font-mono text-xs text-accent border border-accent px-2 py-0.5 mb-8 inline-block tracking-widest">
                  FEATURED
                </span>
              )}

              <div
                className={
                  project.featured ? 'md:grid md:grid-cols-2 md:gap-16 md:items-start' : ''
                }
              >
                {/* Left: title + description */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-syne font-bold text-2xl md:text-3xl text-fg group-hover:text-accent transition-colors leading-tight">
                      {project.name}
                    </h3>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-muted hover:text-accent transition-colors ml-4 mt-1 shrink-0"
                        aria-label={`Visitar ${project.name}`}
                      >
                        ↗
                      </a>
                    )}
                  </div>

                  <p className="font-mono text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Right: tags + status */}
                <div className={project.featured ? 'mt-8 md:mt-0 flex flex-col justify-between h-full' : 'mt-6'}>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-1 border border-border text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.status && (
                    <div className="mt-6 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                      <span className="font-mono text-xs text-accent">{project.status}</span>
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
