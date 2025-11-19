import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setStatus('Thanks! We will get back to you within 24 hours.')
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something great</h2>
            <p className="mt-3 text-slate-300">Tell us about your project and we’ll follow up with a tailored proposal.</p>

            <form onSubmit={submit} className="mt-8 space-y-4">
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input required className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Project details</label>
                <textarea rows="5" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="What are you building?" />
              </div>
              <button className="inline-flex items-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-3 text-white shadow-lg shadow-sky-600/20">Request proposal</button>
              {status && <p className="text-sky-300 mt-2">{status}</p>}
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
            <h3 className="text-xl font-semibold">Contact Details</h3>
            <p className="mt-2 text-slate-300">Email: hello@pageperfect.tech</p>
            <p className="mt-1 text-slate-300">HQ: Remote-first, worldwide</p>
            <div className="mt-6 h-64 w-full overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop" alt="Office" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
