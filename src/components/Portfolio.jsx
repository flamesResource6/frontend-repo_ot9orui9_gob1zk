import Parallax from './Parallax'

const items = [
  { title: 'NovaFlow SaaS', tag: 'Web App', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop' },
  { title: 'OmniCart Mobile', tag: 'App', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Vertex Studio', tag: 'Brand', img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Skyline UI Kit', tag: 'Design', img: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Pulse Analytics', tag: 'Dashboard', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Mellow Music', tag: 'Product', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <Parallax speed={0.06}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Portfolio</h2>
          <p className="mt-3 max-w-2xl text-slate-300">A few selected projects. Clean, modern, and conversion-focused.</p>
        </Parallax>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <a key={it.title} href="#contact" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={it.img} alt={it.title} className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <div className="absolute bottom-0 p-5">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{it.tag}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{it.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
