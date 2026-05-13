'use client'

import { useLang } from '@/lib/i18n/LanguageContext'

type ProjectKey = 'glowsuite' | 'mermaweb' | 'cvmatch' | 'docs2md'

interface Project {
  key: ProjectKey
  num?: string
  name: string
  accent?: string
  url?: string
  github?: string
  featured?: boolean
  statusKey?: 'live' | 'alpha'
}

const projects: Project[] = [
  {
    key: 'glowsuite',
    name: 'GlowSuite',
    url: 'https://getglowsuite.com',
    featured: true,
    statusKey: 'live',
  },
  {
    key: 'mermaweb',
    num: '02',
    name: 'Merma',
    accent: 'Web',
    url: 'https://project-m3ygs.vercel.app',
    github: 'https://github.com/elfic-ticio/ProyectoAppVentaLicores',
    statusKey: 'alpha',
  },
  {
    key: 'cvmatch',
    num: '03',
    name: 'CV',
    accent: 'Match',
    url: 'https://cvanalizer-vert.vercel.app',
    github: 'https://github.com/elfic-ticio/cvanalizer',
    statusKey: 'live',
  },
  {
    key: 'docs2md',
    num: '04',
    name: 'docs',
    accent: '2md',
    url: 'https://docs2md.vercel.app/',
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
          {projects.map((project) => {
            const data = t.projectData[project.key]

            return (
              <article
                key={project.key}
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
                    {'label' in data && (
                      <span className="font-mono text-xs text-muted">{data.label as string}</span>
                    )}
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
                            aria-label={`GitHub ${project.name}`}
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
                            aria-label={`Visit ${project.name}`}
                          >
                            ↗
                          </a>
                        )}
                      </div>
                    </div>

                    {'type' in data && (
                      <p className="font-mono text-[10px] text-muted/50 mb-4 tracking-wide">
                        {data.type as string}
                      </p>
                    )}

                    <p className="font-mono text-xs text-muted leading-relaxed">
                      {data.description}
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
                      {data.tags.map((tag) => (
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
