import { useState } from 'react'

const plans = [
  { name: 'Starter', monthly: 499, yearly: 4990, blurb: 'For individuals getting their first projects online.', features: ['1 workspace', '5 projects', 'Community support', 'Basic analytics'] },
  { name: 'Pro', monthly: 999, yearly: 9990, blurb: 'For growing teams that ship every week.', features: ['Unlimited workspaces', 'Unlimited projects', 'Priority support', 'Advanced analytics', 'Custom domains'], popular: true },
  { name: 'Enterprise', monthly: 2499, yearly: 24990, blurb: 'For organisations that need scale and control.', features: ['Everything in Pro', 'SSO / SAML', 'Dedicated account manager', '99.9% uptime SLA', 'Audit logs'] },
]

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="text-xl font-bold tracking-tight text-indigo-600">Hydizo</a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
          <a href="#faq" className="hover:text-indigo-600">FAQ</a>
        </nav>
        <div className="hidden md:block">
          <a href="#pricing" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">Get started</a>
        </div>
        <button className="md:hidden rounded-md p-2 text-slate-700 hover:bg-slate-100" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 md:hidden">
          <a href="#features" className="block py-2" onClick={() => setOpen(false)}>Features</a>
          <a href="#pricing" className="block py-2" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#faq" className="block py-2" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#pricing" className="mt-2 block rounded-lg bg-indigo-600 px-4 py-2 text-center font-semibold text-white" onClick={() => setOpen(false)}>Get started</a>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
      <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">New: real-time collaboration is live</span>
      <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Build, launch and grow your product in one place</h1>
      <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">Hydizo brings your projects, team and customers together with fast tooling, clear analytics and pricing that scales with you — not against you.</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href="#pricing" className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500 sm:w-auto">Start free trial</a>
        <a href="#features" className="w-full rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 sm:w-auto">See how it works</a>
      </div>
    </section>
  )
}

const features = [
  { title: 'Fast by default', body: 'Pages and dashboards load in milliseconds, so your team never waits on its own tools.' },
  { title: 'Analytics that matter', body: 'Track activation, retention and revenue with reports you can read at a glance.' },
  { title: 'Secure & compliant', body: 'Encryption in transit and at rest, role-based access and regular independent audits.' },
  { title: 'Works with your stack', body: 'APIs and integrations for the tools you already use — set up in minutes, not sprints.' },
  { title: 'Real human support', body: 'Talk to people who know the product. Median first response under one hour on paid plans.' },
  { title: 'Scales with you', body: 'From a solo project to thousands of seats, the same workspace grows without migrations.' },
]

function Features() {
  return (
    <section id="features" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">Everything you need to ship</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(f => (
            <article key={f.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const [yearly, setYearly] = useState(false)
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <h2 className="text-center text-3xl font-bold text-slate-900">Simple, honest pricing</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">Start free for 14 days. No card required. Switch or cancel anytime.</p>
      <div className="mt-8 flex items-center justify-center gap-3 text-sm font-medium text-slate-700">
        <span className={!yearly ? 'text-slate-900' : 'text-slate-400'}>Monthly</span>
        <button role="switch" aria-checked={yearly} onClick={() => setYearly(!yearly)} className={`relative h-6 w-11 rounded-full transition ${yearly ? 'bg-indigo-600' : 'bg-slate-300'}`}>
          <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${yearly ? 'left-[22px]' : 'left-0.5'}`} />
        </button>
        <span className={yearly ? 'text-slate-900' : 'text-slate-400'}>Yearly <span className="ml-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">2 months free</span></span>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map(p => (
          <article key={p.name} className={`relative flex flex-col rounded-2xl p-8 ring-1 ${p.popular ? 'bg-slate-900 text-white ring-slate-900 shadow-xl lg:-my-4 lg:py-12' : 'bg-white ring-slate-200'}`}>
            {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">Most popular</span>}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className={`mt-1 text-sm ${p.popular ? 'text-slate-300' : 'text-slate-500'}`}>{p.blurb}</p>
            <p className="mt-6">
              <span className="text-4xl font-extrabold">₹{(yearly ? p.yearly : p.monthly).toLocaleString('en-IN')}</span>
              <span className={`ml-1 text-sm ${p.popular ? 'text-slate-300' : 'text-slate-500'}`}>/ {yearly ? 'year' : 'month'}</span>
            </p>
            <ul className="mt-6 flex-1 space-y-3 text-sm">
              {p.features.map(f => (
                <li key={f} className="flex gap-2"><span aria-hidden="true" className="text-emerald-500">✓</span>{f}</li>
              ))}
            </ul>
            <a href="#faq" className={`mt-8 rounded-lg px-4 py-2.5 text-center font-semibold ${p.popular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-slate-900 text-white hover:bg-slate-700'}`}>Choose {p.name}</a>
          </article>
        ))}
      </div>
    </section>
  )
}

const faqs = [
  { q: 'Can I change plans later?', a: 'Yes. Upgrade or downgrade at any time; changes are prorated automatically.' },
  { q: 'Is there a free trial?', a: 'Every plan starts with a 14-day free trial. No credit card is required to start.' },
  { q: 'What payment methods do you accept?', a: 'All major cards and UPI. Enterprise plans can pay by invoice.' },
]

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
          {faqs.map((f, i) => (
            <div key={f.q} className="px-6">
              <button className="flex w-full items-center justify-between py-4 text-left font-medium text-slate-900" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q}<span aria-hidden="true">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p className="pb-4 text-sm leading-6 text-slate-600">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Faq />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">© 2026 Hydizo Global Solutions. All rights reserved.</footer>
    </div>
  )
}
