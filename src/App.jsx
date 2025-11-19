import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(56,189,248,0.15),transparent_60%)]"></div>

      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact />

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-slate-400">
          © {new Date().getFullYear()} PagePerfect.Tech — All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
