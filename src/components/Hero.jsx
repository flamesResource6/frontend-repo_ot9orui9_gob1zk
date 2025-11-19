import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]"></div>
        <div className="mx-auto max-w-7xl px-6 pt-44 pb-24 sm:pt-52">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
              Web & App Design Agency
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Crafting pixel-perfect experiences for ambitious brands
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              We design and build high-converting websites and mobile apps with a premium, modern aesthetic. Interactive 3D, smooth parallax, and delightful micro-interactions included.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-3 text-white shadow-lg shadow-sky-600/20">
                Start a project
              </a>
              <a href="#portfolio" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10">
                See our work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <svg className="w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C240 0 480 0 720 40C960 80 1200 80 1440 40V80H0V40Z" fill="url(#g)" fillOpacity="0.35"/>
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8"/>
              <stop offset="1" stopColor="#6366f1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
