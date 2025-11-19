import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="inline-flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 blur-md bg-gradient-to-tr from-indigo-500 via-sky-400 to-teal-400 opacity-70"></div>
                <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-slate-900 ring-1 ring-white/10">
                  <Sparkles className="h-5 w-5 text-sky-300" />
                </div>
              </div>
              <span className="text-base sm:text-lg font-semibold tracking-tight text-white">PagePerfect.Tech</span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="ml-2 inline-flex items-center rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-white shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 transition-all">
                Get a Quote
              </a>
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white ring-1 ring-white/10">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-white shadow-md">
                  Get a Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
