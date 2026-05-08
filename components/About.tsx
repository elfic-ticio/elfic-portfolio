'use client'

import { useLang } from '@/lib/i18n/LanguageContext'

const focus = ['SaaS', 'E-commerce', 'APIs REST', 'PWA', 'Testing E2E', 'Pagos en línea']

const frontendSkills = ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'App Router', 'PWA / Serwist', 'Responsive UI']
const backendSkills = ['Next.js API Routes', 'Prisma v6', 'PostgreSQL', 'NextAuth v5', 'JWT · Edge Runtime', 'Neon Serverless', 'REST APIs']

export default function About() {
  const { t } = useLang()
  const titleLines = t.about.sectionTitle.split('\n')

  return (
    <section id="sobre-mi" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-4 mb-14">
          <span className="font-mono text-xs text-muted">02</span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-fg tracking-tighter leading-tight">
            {titleLines.map((line, i) => (
              <span key={i} className={`block ${i > 0 ? 'text-accent' : ''}`}>
                {line}
              </span>
            ))}
          </h2>
        </div>

        {/* bio card */}
        <div className="rounded-2xl bg-surface border border-white/[0.07] p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-xs text-muted leading-relaxed mb-5">
                {t.about.p1}
              </p>
              <p className="font-mono text-xs text-muted leading-relaxed">
                {t.about.p2}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-muted leading-relaxed mb-5">
                {t.about.p3}
              </p>
              <div className="pt-5 border-t border-white/[0.06]">
                <span className="font-mono text-[10px] text-muted block mb-3 tracking-widest uppercase">
                  {t.about.focusLabel}
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
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="mt-12">
          <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-6 pb-3 border-b border-white/[0.08]">
            {t.about.stackLabel}
          </p>

          <div className="grid grid-cols-2 border border-white/[0.08] divide-x divide-y divide-white/[0.08] mb-px">

            <div className="p-6">
              <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-3 pb-3 border-b border-white/[0.08]">Frontend</p>
              <div className="flex flex-wrap gap-1.5">
                {frontendSkills.map((t, i) =>
                  <span key={t} className={`font-mono text-[11px] px-2.5 py-1 rounded-sm border ${i < 4 ? 'border-lime-400/30 text-lime-400 bg-lime-400/5' : 'border-white/[0.14] text-neutral-400'}`}>{t}</span>
                )}
              </div>
            </div>

            <div className="p-6">
              <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-3 pb-3 border-b border-white/[0.08]">{t.about.catBackend}</p>
              <div className="flex flex-wrap gap-1.5">
                {backendSkills.map((sk, i) =>
                  <span key={sk} className={`font-mono text-[11px] px-2.5 py-1 rounded-sm border ${i < 3 ? 'border-lime-400/30 text-lime-400 bg-lime-400/5' : 'border-white/[0.14] text-neutral-400'}`}>{sk}</span>
                )}
              </div>
            </div>

            <div className="p-6">
              <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-3 pb-3 border-b border-white/[0.08]">Testing</p>
              <div className="flex flex-wrap gap-1.5">
                {t.about.testingSkills.map((sk, i) =>
                  <span key={sk} className={`font-mono text-[11px] px-2.5 py-1 rounded-sm border ${i < 2 ? 'border-cyan-400/30 text-cyan-400 bg-cyan-400/5' : i === 6 ? 'border-cyan-400/20 text-cyan-300/70 bg-cyan-400/[0.03]' : 'border-white/[0.14] text-neutral-400'}`}>{sk}</span>
                )}
              </div>
              <p className="font-mono text-[10px] text-neutral-600 mt-4 pt-3 border-t border-white/[0.08]">
                {t.about.testingNote}
              </p>
            </div>

            <div className="p-6">
              <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-3 pb-3 border-b border-white/[0.08]">{t.about.catServices}</p>
              <div className="flex flex-wrap gap-1.5">
                {t.about.deploySkills.map((sk, i) =>
                  <span key={sk} className={`font-mono text-[11px] px-2.5 py-1 rounded-sm border ${i < 1 ? 'border-lime-400/30 text-lime-400 bg-lime-400/5' : 'border-white/[0.14] text-neutral-400'}`}>{sk}</span>
                )}
              </div>
            </div>
          </div>

          {/* Evidence grid */}
          <div className="border border-white/[0.08] p-6 mb-px">
            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-4 pb-3 border-b border-white/[0.08]">
              {t.about.skillsLabel}
            </p>
            <div className="grid grid-cols-3 gap-px bg-white/[0.08]">
              {t.about.evidence.map(({ tech, proof, highlight, rest }) => (
                <div key={tech} className="bg-[#111] p-5">
                  <p className="font-mono text-[12px] text-neutral-200 font-medium mb-1.5">{tech}</p>
                  <p className="font-mono text-[11px] text-neutral-500 leading-relaxed">
                    {proof}<span className="text-[#c8f060]">{highlight}</span>{rest}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testing highlight */}
          <div className="border border-lime-400/20 bg-[#111] p-6">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
              <span className="font-mono text-[10px] text-[#c8f060] uppercase tracking-widest">Testing — Playwright E2E</span>
              <span className="font-mono text-[11px] bg-[#c8f060] text-black px-2.5 py-0.5 rounded-sm">
                {t.about.testingPassing}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {t.about.testingStats.map(({ num, label }) => (
                <div key={label}>
                  <span className="block text-[1.8rem] font-extrabold text-[#c8f060] leading-none tracking-tight mb-1">{num}</span>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wide leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
