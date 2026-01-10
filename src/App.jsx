import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Workshops from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="overflow-hidden text-neutral-900 antialiased selection:bg-cyan-100 selection:text-cyan-900 bg-slate-50">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-slate-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(78,195,193,0.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Workshops />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
