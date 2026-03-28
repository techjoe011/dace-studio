import Head from 'next/head'
import Link from 'next/link'
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Globe,
  Lightbulb,
  Megaphone,
  Smartphone,
  Target,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { protectedImageProps } from '../components/mediaProps'
import { caseStudies } from '../data/siteContent'

const categoryIcons = {
  'Paid Media': BarChart3,
  'App Development': Smartphone,
  'Website Design & Development': Globe,
  'Campaign Design': Megaphone,
}

function StudyIcon({ category, className = 'h-6 w-6' }) {
  const Icon = categoryIcons[category] || BriefcaseBusiness
  return <Icon className={className} strokeWidth={1.8} />
}

function SupportingVisual({ study }) {
  if (study.media?.length) {
    return (
      <div className="overflow-hidden rounded-[1rem] border border-black/5 bg-white">
        <div className="flex min-h-[240px] items-center justify-center p-3">
          <img
            src={study.media[0]}
            alt={study.client}
            className="h-full w-full object-contain"
            {...protectedImageProps}
          />
        </div>
      </div>
    )
  }

  if (study.visualStyle === 'app') {
    return (
      <div className="overflow-hidden rounded-[1rem] border border-black/5 bg-[linear-gradient(180deg,#1f2937_0%,#334155_100%)] p-5 text-white">
        <div className="rounded-[1rem] border border-white/10 bg-white/5 p-4">
          <p className="text-[11px] uppercase tracking-[0.18em] text-stone-300">Mobile Product</p>
          <div className="mt-5 flex justify-center">
            <div className="w-[10.5rem] rounded-[1.8rem] border border-white/15 bg-[#0f172a] p-3 shadow-[0_24px_60px_rgba(15,23,42,0.35)]">
              <div className="min-h-[210px] rounded-[1.2rem] bg-[linear-gradient(180deg,#f8fafc_0%,#dbeafe_100%)] p-4 text-stone-900">
                <p className="text-[10px] uppercase tracking-[0.18em] text-stone-500">LearnMo</p>
                <p className="mt-6 text-xl font-semibold leading-tight">Revision support built for easier repeat use.</p>
                <div className="mt-6 grid gap-2">
                  <div className="rounded-full bg-white/80 px-3 py-2 text-xs">Past papers</div>
                  <div className="rounded-full bg-white/80 px-3 py-2 text-xs">Study access</div>
                  <div className="rounded-full bg-white/80 px-3 py-2 text-xs">Mobile-first</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-[1rem] border border-black/5 bg-[linear-gradient(180deg,#e7ddd0_0%,#f6f1e7_100%)] p-5">
      <div className="rounded-[1rem] border border-black/5 bg-white/70 p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">Website Case</p>
        <div className="mt-5 rounded-[0.9rem] border border-black/5 bg-[#f8fafc] p-4 shadow-[0_18px_40px_rgba(28,25,23,0.06)]">
          <div className="flex items-center gap-2 border-b border-black/5 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
          </div>
          <div className="mt-4 grid gap-3">
            <div className="h-6 w-2/3 rounded-full bg-[#dbeafe]" />
            <div className="h-20 rounded-[0.8rem] bg-[#e2e8f0]" />
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="h-16 rounded-[0.8rem] bg-[#f1f5f9]" />
              <div className="h-16 rounded-[0.8rem] bg-[#f1f5f9]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  const featuredStudy = caseStudies[0]
  const supportingStudies = caseStudies.slice(1)

  return (
    <>
      <Head>
        <title>Case Studies | Dace Media</title>
        <meta
          name="description"
          content="Selected Dace Media case studies across paid media, app development, web design, and campaign work."
        />
      </Head>

      <div className="min-h-screen bg-[#f6f4ef] text-stone-950">
        <Navbar />

        <main className="mx-auto max-w-7xl px-6 pb-24 pt-36">
          <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Case Studies</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.94] tracking-[-0.04em] sm:text-7xl">
                Proof, not just promises.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-stone-600">
              A selection of how we approach paid media, websites, app development, and campaign
              work in ways that make sense for Zambia-based audiences, sectors, and business
              realities.
            </p>
          </section>

          <section className="mt-16 rounded-[1.6rem] border border-black/5 bg-[#e7ddd0] p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[1.15rem] border border-black/5 bg-[#f6f1e7] p-6 lg:p-8">
                <div className="flex items-center gap-4 text-stone-600">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white">
                    <StudyIcon category={featuredStudy.category} className="h-6 w-6" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                    Featured Study · {featuredStudy.category}
                  </p>
                </div>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-stone-950 sm:text-5xl">
                  {featuredStudy.title}
                </h2>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-stone-500">
                  {featuredStudy.client} · {featuredStudy.period}
                </p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-700">
                  {featuredStudy.summary}
                </p>

                <div className="mt-6 rounded-[1rem] border border-black/5 bg-white/70 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-stone-700">
                      <Globe className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
                      Market Context
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-stone-700">
                    {featuredStudy.marketContext}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {featuredStudy.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-[1rem] border border-black/5 bg-white p-5">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
                        {metric.label}
                      </p>
                      <p className="mt-3 text-base font-medium leading-relaxed text-stone-900">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                {featuredStudy.media?.length ? (
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {featuredStudy.media.map((src, index) => (
                      <div
                        key={src}
                        className={`overflow-hidden rounded-[1rem] border border-black/5 bg-white ${
                          index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                        }`}
                      >
                        <div className={`flex items-center justify-center p-3 ${index === 0 ? 'min-h-[360px]' : 'min-h-[172px]'}`}>
                          <img
                            src={src}
                            alt={`${featuredStudy.client} visual ${index + 1}`}
                            className="h-full w-full object-contain"
                            {...protectedImageProps}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="grid gap-5">
                <div className="rounded-[1.15rem] border border-black/5 bg-white p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-stone-700">
                      <Target className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Challenge</p>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-stone-700">
                    {featuredStudy.challenge}
                  </p>
                </div>

                <div className="rounded-[1.15rem] border border-black/5 bg-white p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-stone-700">
                      <Lightbulb className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Approach</p>
                  </div>
                  <div className="mt-4 grid gap-3">
                    {featuredStudy.approach.map((item) => (
                      <p key={item} className="rounded-[0.95rem] bg-stone-50 px-4 py-4 text-sm leading-relaxed text-stone-700">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.15rem] border border-black/5 bg-white p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-stone-700">
                      <BarChart3 className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                      Why It Worked Here
                    </p>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-stone-700">
                    {featuredStudy.whyItWorked}
                  </p>
                </div>

                <div className="rounded-[1.15rem] border border-black/5 bg-[#1c1917] p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-stone-200">
                      <BriefcaseBusiness className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Outcome</p>
                  </div>
                  <div className="mt-4 grid gap-3">
                    {featuredStudy.outcomes.map((item) => (
                      <p key={item} className="text-sm leading-relaxed text-stone-300">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-3">
            {supportingStudies.map((study, index) => (
              <article
                key={study.slug}
                className={`flex h-full flex-col rounded-[1.3rem] border border-black/5 p-6 ${
                  index % 3 === 0 ? 'bg-white' : index % 3 === 1 ? 'bg-[#efe4d6]' : 'bg-[#dde5ef]'
                }`}
              >
                <div className="flex items-center gap-4 text-stone-700">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white/80">
                    <StudyIcon category={study.category} className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">{study.category}</p>
                </div>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-stone-950">
                  {study.client}
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-500">
                  {study.period}
                </p>
                <div className="mt-5">
                  <SupportingVisual study={study} />
                </div>
                <p className="mt-5 text-base leading-relaxed text-stone-700">{study.summary}</p>

                <div className="mt-6 rounded-[1rem] border border-black/5 bg-white/70 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700">
                      <Globe className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
                      Market Context
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-stone-700">{study.marketContext}</p>
                </div>

                <div className="mt-4 rounded-[1rem] border border-black/5 bg-white/70 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700">
                      <Target className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">Challenge</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-stone-700">{study.challenge}</p>
                </div>

                <div className="mt-4 rounded-[1rem] border border-black/5 bg-white/70 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700">
                      <BarChart3 className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
                      Why It Worked Here
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-stone-700">{study.whyItWorked}</p>
                </div>

                <div className="mt-5 grid gap-3">
                  {study.outcomes.map((item) => (
                    <p key={item} className="text-sm leading-relaxed text-stone-700">
                      {item}
                    </p>
                  ))}
                </div>

                {study.link && (
                  <Link
                    href={study.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-stone-900"
                  >
                    View project <ArrowUpRight size={16} />
                  </Link>
                )}
              </article>
            ))}
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
