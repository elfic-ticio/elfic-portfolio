'use client'

import { useEffect, useRef, useState } from 'react'

interface Skill {
  name: string
  level: number
}

const skills: Skill[] = [
  { name: 'TypeScript / JavaScript', level: 95 },
  { name: 'Next.js / React', level: 93 },
  { name: 'Node.js / REST APIs', level: 88 },
  { name: 'PostgreSQL / Prisma', level: 85 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Playwright E2E Testing', level: 80 },
  { name: 'DevOps / Vercel / CI', level: 78 },
]

const focus = ['SaaS', 'E-commerce', 'APIs REST', 'PWA', 'Testing E2E', 'Pagos en línea']

function SkillBar({ name, level, animate }: Skill & { animate: boolean }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-2.5">
        <span className="font-mono text-xs text-fg">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      {/* matrix-style surface track */}
      <div className="h-px bg-surface border-t border-white/[0.06] relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 h-full bg-accent transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre-mi" ref={ref} className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-4 mb-14">
          <span className="font-mono text-xs text-muted">02</span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-fg tracking-tighter">
            SOBRE MÍ
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* text — matrix surface card */}
          <div className="rounded-2xl bg-surface border border-white/[0.07] p-8">
            <p className="font-mono text-xs text-muted leading-relaxed mb-5">
              Soy un desarrollador FullStack enfocado en construir productos que funcionan
              en producción. Me especializo en el ecosistema TypeScript — desde APIs robustas
              hasta interfaces rápidas y accesibles.
            </p>
            <p className="font-mono text-xs text-muted leading-relaxed mb-5">
              He lanzado SaaS con pagos reales, implementado suites de testing E2E con 141+
              tests y arquitectado sistemas multi-tenant. Trabajo de forma remota, entrego
              con documentación y cobertura de tests.
            </p>
            <p className="font-mono text-xs text-muted leading-relaxed">
              Actualmente disponible para proyectos freelance y posiciones remotas.
            </p>

            <div className="mt-8 pt-8 border-t border-white/[0.06]">
              <span className="font-mono text-xs text-muted block mb-4 tracking-widest uppercase">
                Áreas de enfoque
              </span>
              <div className="flex flex-wrap gap-2">
                {focus.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg bg-bg border border-white/[0.08] text-cyan"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* skills */}
          <div>
            <span className="font-mono text-xs text-muted block mb-8 tracking-widest uppercase">
              Stack & habilidades
            </span>
            {skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} animate={animate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
