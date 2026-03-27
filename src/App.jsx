import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Workshops from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="overflow-x-hidden bg-[#f8fafa] text-[#111827] antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Workshops />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
