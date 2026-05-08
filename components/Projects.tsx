'use client'

import { useLang } from '@/lib/i18n/LanguageContext'

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
  statusKey?: 'live' | 'alpha'
}

const projects: Project[] = [
  {
    name: 'GlowSuite',
    description:
      'SaaS completo para gestión de salones y barberías. Agenda inteligente, punto de venta, control de inventario, gestión de clientes y equipo. Planes FREE / BASIC / PRO con pagos Wompi. Reservas online, vitrina pública y panel admin multi-tenant.',
    tags: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth v5', 'Wompi', 'Tailwind', 'PWA'],
    url: 'https://getglowsuite.com',
    featured: true,
    statusKey: 'live',
  },
  {
    num: '03',
    label: 'E-commerce · Venta de licores · Full-Stack',
    name: 'Merma',
    accent: 'Web',
    type: 'E-commerce · Venta de licores · Full-Stack',
    description:
      'Plataforma de venta de merma — botellas con defectos cosméticos que no pasan control de calidad. Frontend con carrito, facturación y subastas en tiempo real. Backend REST con Prisma + PostgreSQL, motor de subastas, inventario y gestión de guías de envío. Chatbot IA integrado para ventas y soporte.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL', 'REST API', 'Subastas', 'Chatbot IA', 'WebSockets'],
    url: 'https://project-m3ygs.vercel.app',
    github: 'https://github.com/elfic-ticio/ProyectoAppVentaLicores',
    statusKey: 'alpha',
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
    statusKey: 'live',
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
    url: 'https://convertor-mk.vercel.app',
    github: 'https://github.com/elfic-ticio/convertor-mk',
    statusKey: 'live',
  },
]

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="proyectos" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-4 mb-14">
          <span className="font-mono text-xs text-muted">01</span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-fg tracking-tighter">
            {t.projects.label}
          </h2>
        </div>

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
                  {t.projects.featured}
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

                  {project.statusKey && (
                    <div className="mt-5 flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full inline-block ${
                          project.statusKey === 'live' ? 'bg-accent' : 'bg-yellow-400'
                        }`}
                      />
                      <span
                        className={`font-mono text-xs ${
                          project.statusKey === 'live' ? 'text-accent' : 'text-yellow-400'
                        }`}
                      >
                        {project.statusKey === 'live'
                          ? t.projects.statusLive
                          : t.projects.statusAlpha}
                      </span>
                    </div>
                  )}

                  {project.featured && (
                    <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-start gap-3">
                      <span className="font-mono text-[10px] text-[#c8f060] bg-[#c8f060]/10 border border-[#c8f060]/20 px-2 py-0.5 rounded-sm shrink-0">
                        {t.projects.testingBadge}
                      </span>
                      <p className="font-mono text-[11px] text-neutral-500 leading-relaxed">
                        {t.projects.testing}
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
