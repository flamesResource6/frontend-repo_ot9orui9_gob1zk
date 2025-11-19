export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Us</h2>
            <p className="mt-4 text-slate-300">We are a boutique team of designers and engineers crafting premium digital experiences. We obsess over details, performance, and brand storytelling so your product feels unmistakably high-end.</p>
            <ul className="mt-6 space-y-3 text-slate-200">
              <li>• 10+ years designing conversion-first interfaces</li>
              <li>• 3D & motion baked into our design systems</li>
              <li>• Flexible engagement: sprint-based or full product</li>
            </ul>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 p-1">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop" alt="Team" className="h-80 w-full rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
