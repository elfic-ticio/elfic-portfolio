import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const stats = [
  { value: '6', label: 'Proyectos en producción' },
  { value: '141', label: 'Tests E2E pasando' },
  { value: '3', label: 'SaaS con pagos reales' },
  { value: '30+', label: 'Formatos soportados en Office2MD' },
]

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />

      {/* Stats strip */}
      <section className="border-t border-border py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="px-8 first:pl-0 last:pr-0 py-4">
                <span className="font-syne font-bold text-5xl md:text-6xl text-accent block leading-none">
                  {stat.value}
                </span>
                <span className="font-mono text-xs text-muted mt-3 block leading-relaxed">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <Contact />
      <Footer />
    </main>
  )
}
