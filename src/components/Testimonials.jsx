const testimonials = [
  {
    quote: 'They delivered beyond expectations. Our conversion rate jumped 38% after launch.',
    name: 'Elena Rivera',
    role: 'CMO, NovaFlow',
    avatar: 'https://i.pravatar.cc/100?img=1'
  },
  {
    quote: 'A perfect blend of design and performance. The app feels premium and fast.',
    name: 'Marcus Lee',
    role: 'Founder, Mellow',
    avatar: 'https://i.pravatar.cc/100?img=5'
  },
  {
    quote: 'The 3D interactions made our brand unforgettable. Highly recommend.',
    name: 'Priya Sharma',
    role: 'Product Lead, Vertex',
    avatar: 'https://i.pravatar.cc/100?img=8'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-28 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Testimonials</h2>
        <p className="mt-3 max-w-2xl text-slate-300">What our clients say about working with us.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full" />
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-slate-300">{t.role}</div>
                </div>
              </div>
              <p className="mt-4 text-slate-200">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
