import Head from 'next/head'
import { useState } from 'react'
import { Mail, Phone, Instagram, Facebook, Linkedin, MessageSquareText, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { brand } from '../data/siteContent'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/dacemedia', icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com/dacemedia', icon: Facebook },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    enquiryType: 'Branding',
    description: '',
  })

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function submitEnquiry(event) {
    event.preventDefault()

    const subject = `[Project Enquiry] ${form.enquiryType}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company / Organisation: ${form.company || 'N/A'}`,
      `Enquiry Type: ${form.enquiryType}`,
      '',
      'Project Details:',
      form.description || 'No project details provided.',
    ].join('\n')

    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <Head>
        <title>Contact Dace Media | Let&apos;s Build Something Great</title>
        <meta
          name="description"
          content="Contact Dace Media in Lusaka for branding, design, websites, apps, photography, videography, and campaign work."
        />
      </Head>

      <div className="min-h-screen bg-[#f6f4ef] text-stone-950">
        <Navbar />

        <main className="mx-auto max-w-7xl px-6 pb-24 pt-36">
          <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="flex items-center gap-4 text-stone-600">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-[#e7ddd0]">
                  <MessageSquareText className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Contact</p>
              </div>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.94] tracking-[-0.04em] sm:text-7xl">
                We are ready to go. Are you?
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
                Whether you have a clear brief or just an idea, we&apos;d love to hear from you.
                Let&apos;s build something that actually connects.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <a href={`mailto:${brand.email}`} className="rounded-[2rem] border border-black/5 bg-white p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f1ebe1] text-stone-700">
                  <Mail className="h-7 w-7" strokeWidth={1.7} />
                </div>
                <p className="mt-7 text-xs uppercase tracking-[0.28em] text-stone-500">Email</p>
                <p className="mt-3 text-xl font-semibold">{brand.email}</p>
                <p className="mt-2 text-sm text-stone-600">{brand.altEmail}</p>
              </a>
              <a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="rounded-[2rem] border border-black/5 bg-white p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dde5ef] text-stone-700">
                  <Phone className="h-7 w-7" strokeWidth={1.7} />
                </div>
                <p className="mt-7 text-xs uppercase tracking-[0.28em] text-stone-500">Phone</p>
                <p className="mt-3 text-xl font-semibold">{brand.phone}</p>
                <p className="mt-2 text-sm text-stone-600">{brand.foundedLabel}</p>
              </a>
            </div>
          </section>

          <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[2.5rem] border border-black/5 bg-white p-8 sm:p-10">
              <div className="flex items-center gap-4 text-stone-600">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1ebe1]">
                  <Sparkles className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Project Enquiries</p>
              </div>
              <form className="mt-8 grid gap-5" onSubmit={submitEnquiry}>
                <label className="grid gap-2 text-sm text-stone-600">
                  <span>Your Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 outline-none transition focus:border-stone-900"
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
                    className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 outline-none transition focus:border-stone-900"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm text-stone-600">
                  <span>Company / Organisation (optional)</span>
                  <input
                    name="company"
                    value={form.company}
                    onChange={updateField}
                    className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 outline-none transition focus:border-stone-900"
                  />
                </label>
                <label className="grid gap-2 text-sm text-stone-600">
                  <span>What are you looking to do?</span>
                  <select
                    name="enquiryType"
                    value={form.enquiryType}
                    onChange={updateField}
                    className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 outline-none transition focus:border-stone-900"
                  >
                    <option>Branding</option>
                    <option>Website</option>
                    <option>App Development</option>
                    <option>Photography / Videography</option>
                    <option>Social Media Design</option>
                    <option>General Enquiry</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm text-stone-600">
                  <span>Tell us about your project</span>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={updateField}
                    className="min-h-40 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 outline-none transition focus:border-stone-900"
                    required
                  />
                </label>
                <button className="rounded-full bg-stone-950 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Let&apos;s Talk
                </button>
              </form>
            </div>

            <div className="rounded-[2.5rem] bg-[#1c1917] p-8 text-white sm:p-10">
              <div className="flex items-center gap-4 text-stone-200">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <Instagram className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Follow</p>
              </div>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.03em]">{brand.socialHandle}</p>
              <div className="mt-8 space-y-4">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:border-white/25"
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={18} />
                      <span>{label}</span>
                    </span>
                    <span className="text-sm text-stone-300">@dacemedia</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
