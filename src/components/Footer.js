import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { brand } from '../data/siteContent'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#ece5d8] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_0.55fr_0.55fr]">
          <div className="rounded-[1.25rem] border border-black/5 bg-[#f6f1e7] p-6 shadow-[0_16px_40px_rgba(28,25,23,0.05)]">
            <img src={brand.logo} alt={brand.name} className="h-20 w-auto" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-stone-700">
              Strategy, design, development, media, and production for brands that want clearer communication and stronger connection.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-stone-700">
              <a href={`mailto:${brand.email}`} className="rounded-full border border-stone-300 px-4 py-2 hover:border-stone-900">
                {brand.email}
              </a>
              <a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="rounded-full border border-stone-300 px-4 py-2 hover:border-stone-900">
                {brand.phone}
              </a>
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-black/5 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Explore</p>
            <div className="mt-5 grid gap-3 text-sm text-stone-800">
              <Link href="/work" className="hover:text-stone-950">Work</Link>
              <Link href="/news" className="hover:text-stone-950">News</Link>
              <Link href="/services" className="hover:text-stone-950">Services</Link>
              <Link href="/about" className="hover:text-stone-950">About</Link>
              <Link href="/contact" className="hover:text-stone-950">Contact</Link>
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-black/5 bg-[#1c1917] p-6 text-white">
            <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Software Support</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight">Need help with a product we built?</h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-300">
              Software clients can send tickets, report bugs, and request support through the dedicated support page.
            </p>
            <Link
              href="/support"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white"
            >
              Open Support <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-black/8 pt-6 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <p>{brand.socialHandle}</p>
          <p>© 2026 {brand.studioName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
