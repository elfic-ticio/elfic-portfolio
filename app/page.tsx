import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import StatsStrip from '@/components/StatsStrip'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <StatsStrip />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
