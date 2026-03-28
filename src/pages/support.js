import Head from 'next/head'
import { useState } from 'react'
import { Bug, CircleHelp, LifeBuoy, Send, Wrench } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { brand } from '../data/siteContent'

export default function SupportPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    issueType: 'Bug Report',
    priority: 'Medium',
    description: '',
  })

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function submitTicket(event) {
    event.preventDefault()

    const subject = `[Support Ticket] ${form.product || 'Software Client'} - ${form.issueType}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || 'N/A'}`,
      `Product: ${form.product || 'N/A'}`,
      `Issue Type: ${form.issueType}`,
      `Priority: ${form.priority}`,
      '',
      'Issue Details:',
      form.description || 'No description provided.',
    ].join('\n')

    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <Head>
        <title>Software Support | Dace Media</title>
        <meta
          name="description"
          content="Software support and ticket submission for Dace Media clients. Report bugs, request changes, and send implementation issues directly to the studio."
        />
      </Head>

      <div className="min-h-screen bg-[#f6f4ef] text-stone-950">
        <Navbar />

        <main className="mx-auto max-w-7xl px-6 pb-24 pt-36">
          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.35rem] border border-black/5 bg-[#e8ddd0] p-8 shadow-[0_20px_60px_rgba(28,25,23,0.05)]">
              <div className="flex items-center gap-4 text-stone-600">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70">
                  <LifeBuoy className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Software Support</p>
              </div>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.94] tracking-[-0.04em] sm:text-7xl">
                Send a support ticket.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
                Use this page if you are one of our software clients and need help with a website,
                system, landing page, or app we built for you.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1rem] border border-black/5 bg-white p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1ebe1] text-stone-700">
                  <Bug className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-stone-500">Bug Reports</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">Report things that are broken, inconsistent, or no longer working as expected.</p>
              </div>
              <div className="rounded-[1rem] border border-black/5 bg-[#dde5ef] p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/60 text-stone-700">
                  <Wrench className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-stone-500">Change Requests</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">Ask for content edits, feature adjustments, or interface changes.</p>
              </div>
              <div className="rounded-[1rem] border border-black/5 bg-[#efe4d6] p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/60 text-stone-700">
                  <Send className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-stone-500">Response</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">Tickets are sent directly to {brand.email} through your email app.</p>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div className="rounded-[1.35rem] border border-black/5 bg-white p-8 sm:p-10">
              <div className="flex items-center gap-4 text-stone-600">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1ebe1]">
                  <CircleHelp className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Ticket Form</p>
              </div>
              <form className="mt-8 grid gap-5" onSubmit={submitTicket}>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm text-stone-600">
                    <span>Your Name</span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={updateField}
                      className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-4 outline-none focus:border-stone-900"
                      required
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-stone-600">
                    <span>Your Email</span>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={updateField}
                      className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-4 outline-none focus:border-stone-900"
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm text-stone-600">
                    <span>Company / Organisation</span>
                    <input
                      name="company"
                      value={form.company}
                      onChange={updateField}
                      className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-4 outline-none focus:border-stone-900"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-stone-600">
                    <span>Product / Website / App</span>
                    <input
                      name="product"
                      value={form.product}
                      onChange={updateField}
                      className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-4 outline-none focus:border-stone-900"
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm text-stone-600">
                    <span>Issue Type</span>
                    <select
                      name="issueType"
                      value={form.issueType}
                      onChange={updateField}
                      className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-4 outline-none focus:border-stone-900"
                    >
                      <option>Bug Report</option>
                      <option>Change Request</option>
                      <option>Access Issue</option>
                      <option>Performance Issue</option>
                      <option>General Support</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm text-stone-600">
                    <span>Priority</span>
                    <select
                      name="priority"
                      value={form.priority}
                      onChange={updateField}
                      className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-4 outline-none focus:border-stone-900"
                    >
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Critical</option>
                    </select>
                  </label>
                </div>

                <label className="grid gap-2 text-sm text-stone-600">
                  <span>Describe the issue</span>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={updateField}
                    className="min-h-44 rounded-xl border border-stone-200 bg-stone-50 px-4 py-4 outline-none focus:border-stone-900"
                    placeholder="Tell us what is happening, where you noticed it, and what outcome you need."
                    required
                  />
                </label>

                <button className="rounded-full bg-stone-950 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Send Ticket
                </button>
              </form>
            </div>

            <div className="rounded-[1.35rem] bg-[#1c1917] p-8 text-white sm:p-10">
              <div className="flex items-center gap-4 text-stone-200">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <LifeBuoy className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-stone-400">How It Works</p>
              </div>
              <div className="mt-6 space-y-5">
                <div className="rounded-[1rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400">1. Fill in the ticket</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-300">Add the product name, issue type, and a clear description of the problem.</p>
                </div>
                <div className="rounded-[1rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400">2. Send from your email app</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-300">Submitting opens a prepared email draft to {brand.email} with the ticket details already filled in.</p>
                </div>
                <div className="rounded-[1rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400">3. We respond</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-300">We review the issue and reply using the contact details in the ticket.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
