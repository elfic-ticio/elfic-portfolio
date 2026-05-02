const focus = ['SaaS', 'E-commerce', 'APIs REST', 'PWA', 'Testing E2E', 'Pagos en línea']

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-4 mb-14">
          <span className="font-mono text-xs text-muted">02</span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-fg tracking-tighter">
            SOBRE MÍ
          </h2>
        </div>

        {/* bio card — full width */}
        <div className="rounded-2xl bg-surface border border-white/[0.07] p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-xs text-muted leading-relaxed mb-5">
                Soy un desarrollador FullStack enfocado en construir productos que funcionan
                en producción. Me especializo en el ecosistema TypeScript — desde APIs robustas
                hasta interfaces rápidas y accesibles.
              </p>
              <p className="font-mono text-xs text-muted leading-relaxed">
                He lanzado SaaS con pagos reales, implementado suites de testing E2E con 141+
                tests y arquitectado sistemas multi-tenant. Trabajo de forma remota, entrego
                con documentación y cobertura de tests.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-muted leading-relaxed mb-5">
                Actualmente disponible para proyectos freelance y posiciones remotas.
              </p>
              <div className="pt-5 border-t border-white/[0.06]">
                <span className="font-mono text-[10px] text-muted block mb-3 tracking-widest uppercase">
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
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="mt-12">
          <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-6 pb-3 border-b border-white/[0.08]">
            Stack & habilidades
          </p>

          {/* Grid de categorías */}
          <div className="grid grid-cols-2 border border-white/[0.08] divide-x divide-y divide-white/[0.08] mb-px">

            {/* Frontend */}
            <div className="p-6">
              <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-3 pb-3 border-b border-white/[0.08]">Frontend</p>
              <div className="flex flex-wrap gap-1.5">
                {['Next.js 14','React','TypeScript','Tailwind CSS','App Router','PWA / Serwist','Responsive UI'].map((t, i) =>
                  <span key={t} className={`font-mono text-[11px] px-2.5 py-1 rounded-sm border ${i < 4 ? 'border-lime-400/30 text-lime-400 bg-lime-400/5' : 'border-white/[0.14] text-neutral-400'}`}>{t}</span>
                )}
              </div>
            </div>

            {/* Backend */}
            <div className="p-6">
              <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-3 pb-3 border-b border-white/[0.08]">Backend & base de datos</p>
              <div className="flex flex-wrap gap-1.5">
                {['Next.js API Routes','Prisma v6','PostgreSQL','NextAuth v5','JWT · Edge Runtime','Neon Serverless','REST APIs'].map((t, i) =>
                  <span key={t} className={`font-mono text-[11px] px-2.5 py-1 rounded-sm border ${i < 3 ? 'border-lime-400/30 text-lime-400 bg-lime-400/5' : 'border-white/[0.14] text-neutral-400'}`}>{t}</span>
                )}
              </div>
            </div>

            {/* Testing */}
            <div className="p-6">
              <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-3 pb-3 border-b border-white/[0.08]">Testing</p>
              <div className="flex flex-wrap gap-1.5">
                {['Playwright E2E','TypeScript estricto','Suite 141+ tests','Flujos de auth','Tests de pago','CI automatizado'].map((t, i) =>
                  <span key={t} className={`font-mono text-[11px] px-2.5 py-1 rounded-sm border ${i < 2 ? 'border-cyan-400/30 text-cyan-400 bg-cyan-400/5' : 'border-white/[0.14] text-neutral-400'}`}>{t}</span>
                )}
              </div>
            </div>

            {/* DevOps */}
            <div className="p-6">
              <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-3 pb-3 border-b border-white/[0.08]">Servicios & despliegue</p>
              <div className="flex flex-wrap gap-1.5">
                {['Vercel','Blob Storage','Resend','Wompi','Git + GitHub','Deploy continuo'].map((t, i) =>
                  <span key={t} className={`font-mono text-[11px] px-2.5 py-1 rounded-sm border ${i < 1 ? 'border-lime-400/30 text-lime-400 bg-lime-400/5' : 'border-white/[0.14] text-neutral-400'}`}>{t}</span>
                )}
              </div>
            </div>
          </div>

          {/* Evidencia por tecnología */}
          <div className="border border-white/[0.08] p-6 mb-px">
            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-4 pb-3 border-b border-white/[0.08]">Evidencia por tecnología — aplicado en producción</p>
            <div className="grid grid-cols-3 gap-px bg-white/[0.08]">
              {[
                { tech: 'Next.js 14 + TypeScript', proof: 'Usado en', highlight: '4 proyectos en producción', rest: ' — full-stack, App Router, API Routes en el mismo repo' },
                { tech: 'Prisma + PostgreSQL', proof: 'Esquemas multi-tenant en ', highlight: 'GlowSuite', rest: ' — Neon serverless, migraciones en producción' },
                { tech: 'Pagos reales (Wompi)', proof: '', highlight: '3 SaaS', rest: ' con suscripciones COP — planes FREE/BASIC/PRO con webhooks' },
                { tech: 'NextAuth v5', proof: 'Auth JWT con ', highlight: 'Edge Runtime', rest: ' — sesiones multi-rol: admin, equipo, cliente final' },
                { tech: 'PWA', proof: 'GlowSuite instalable como app — Serwist, ', highlight: 'funciona offline', rest: '' },
                { tech: 'E-commerce complejo', proof: 'Subastas, carrito, envíos y ', highlight: 'chatbot IA', rest: ' integrado en MermaWeb' },
              ].map(({ tech, proof, highlight, rest }) => (
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
              <span className="font-mono text-[11px] bg-[#c8f060] text-black px-2.5 py-0.5 rounded-sm">141 / 142 pasando</span>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {[
                { num: '142', label: 'Tests escritos' },
                { num: '99%', label: 'Tasa de éxito' },
                { num: '3', label: 'Flujos críticos' },
                { num: 'E2E', label: 'Auth · Pagos · Reservas' },
              ].map(({ num, label }) => (
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
