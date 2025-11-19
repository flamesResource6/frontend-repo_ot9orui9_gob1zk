import { Code2, Smartphone, Palette, Sparkles, Rocket, Gauge } from 'lucide-react'
import Parallax from './Parallax'

const services = [
  {
    icon: <Palette className="h-6 w-6" />, 
    title: 'Brand & UI Design', 
    desc: 'Premium design systems, brand identity, and component libraries with a modern, playful aesthetic.'
  },
  {
    icon: <Code2 className="h-6 w-6" />, 
    title: 'Web Development', 
    desc: 'High-performance websites with SEO, accessibility, and delightful micro-interactions built-in.'
  },
  {
    icon: <Smartphone className="h-6 w-6" />, 
    title: 'App Development', 
    desc: 'Cross-platform mobile apps with native feel and smooth animations.'
  },
  {
    icon: <Gauge className="h-6 w-6" />, 
    title: 'Optimization & Audits', 
    desc: 'Speed, Core Web Vitals, and UX audits with actionable improvements.'
  },
  {
    icon: <Rocket className="h-6 w-6" />, 
    title: 'Product Launch', 
    desc: 'Launch strategy, landing pages, and conversion funnels that convert.'
  },
  {
    icon: <Sparkles className="h-6 w-6" />, 
    title: '3D & Interactions', 
    desc: 'Parallax, 3D, and playful effects that make your brand memorable.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)]"></div>
      <div className="mx-auto max-w-7xl px-6">
        <Parallax speed={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
          <p className="mt-3 max-w-2xl text-slate-300">Everything you need to go from idea to launch with a premium feel.</p>
        </Parallax>

        <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-lg">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-sky-500/10 blur-2xl group-hover:bg-sky-500/20 transition"></div>
              <div className="flex items-center gap-3 text-sky-300">{s.icon}<span className="font-medium">{s.title}</span></div>
              <p className="mt-3 text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
