import Head from 'next/head'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { protectedImageProps, protectedVideoProps } from '../components/mediaProps'
import { brand, featuredProjects, introMarquee } from '../data/siteContent'

export default function Home() {
  return (
    <>
      <Head>
        <title>{brand.seo.title}</title>
        <meta name="description" content={brand.seo.description} />
      </Head>

      <div className="min-h-screen bg-[#f6f1e7] text-stone-950">
        <Navbar />

        <main>
          <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 sm:pb-24 sm:pt-36">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_42%),linear-gradient(180deg,#f6f1e7_0%,#eee2cf_100%)]" />
            <div className="absolute bottom-8 left-6 right-6 top-8 rounded-[1.5rem] border border-black/8" />
            <div className="absolute left-[7%] top-[18%] hidden h-28 w-28 rounded-full border border-stone-400/40 lg:block" />
            <div className="absolute bottom-[16%] right-[10%] hidden h-44 w-44 rounded-full border border-stone-500/20 lg:block" />
            <div className="absolute left-[12%] top-1/2 hidden h-px w-24 bg-stone-500/30 lg:block" />
            <div className="absolute bottom-[24%] right-[16%] hidden h-px w-20 bg-stone-500/30 lg:block" />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center py-10 sm:py-16"
            >
              <p className="mb-8 text-center text-xs uppercase tracking-[0.42em] text-stone-500">Dace Media · Lusaka, Zambia</p>
              <h1 className="font-display max-w-5xl text-center text-5xl font-semibold uppercase leading-[0.92] tracking-[0.01em] text-stone-900 sm:text-7xl lg:text-[6.2rem]">
                We dont just guess, we deliver measurable results
              </h1>
              <p className="mt-6 max-w-3xl text-center text-lg leading-relaxed text-stone-700">
                Dace Media is a full-service media and technology company built for brands that
                want more than visibility. They want real connection.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-3 rounded-full bg-stone-950 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white"
                >
                  View Work <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-stone-300 bg-white/40 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-900 backdrop-blur-sm"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="overflow-hidden border-y border-black/5 bg-[#eadfcd] py-5"
          >
            <motion.div
              animate={{ x: '-50%' }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="flex whitespace-nowrap text-xs font-semibold uppercase tracking-[0.45em] text-stone-700 sm:text-sm"
            >
              {[...introMarquee, ...introMarquee, ...introMarquee].map((item, index) => (
                <span key={`${item}-${index}`} className="mr-12">{item}</span>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-7xl px-6 py-24"
          >
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-[1.25rem] border border-black/5 bg-[#eadfcd] p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Who We Are</p>
                <h2 className="font-display mt-4 text-4xl font-semibold uppercase leading-tight tracking-[0.01em] text-stone-900 sm:text-5xl">
                  Interactive communications for brands that mean business.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-stone-600">
                  From campaigns for regulators to mobile apps for farmers, we create work that
                  does not just say something. It invites your audience to say something back.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                <div className="rounded-[1.1rem] border border-black/5 bg-white p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Strategy</p>
                  <p className="mt-4 text-lg leading-relaxed text-stone-700">Brand development, positioning, and communication systems.</p>
                </div>
                <div className="rounded-[1.1rem] border border-black/5 bg-white p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Development</p>
                  <p className="mt-4 text-lg leading-relaxed text-stone-700">Full-stack development across websites, landing pages, and mobile products.</p>
                </div>
                <div className="rounded-[1.1rem] border border-black/5 bg-white p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Execution</p>
                  <p className="mt-4 text-lg leading-relaxed text-stone-700">Websites, apps, campaigns, photography, videography, and content.</p>
                </div>
              </div>
            </div>
          </motion.section>

          <section className="mx-auto max-w-7xl px-6 pb-24">
            <div className="mb-8 rounded-[1.5rem] border border-black/5 bg-[#e7ddd0] p-5 shadow-[0_24px_80px_rgba(28,25,23,0.06)] lg:p-6">
              <div className="grid gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col justify-between rounded-[1.1rem] border border-black/5 bg-[#f6f1e7] p-6 lg:p-8"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.34em] text-stone-500">Selected Work</p>
                    <h2 className="mt-4 max-w-2xl text-4xl font-semibold uppercase leading-[1.02] tracking-[0.01em] text-stone-900 sm:text-5xl">
                      Work that connects.
                    </h2>
                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-stone-600">
                      A selection of the work we have done for brands across Zambia and beyond.
                    </p>
                  </div>

                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[0.95rem] border border-black/5 bg-[#efe5d7] px-4 py-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">Campaign Design</p>
                    </div>
                    <div className="rounded-[0.95rem] border border-black/5 bg-[#dde5ef] px-4 py-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">Web Design</p>
                    </div>
                    <div className="rounded-[0.95rem] border border-black/5 bg-[#e6eee4] px-4 py-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">App Development</p>
                    </div>
                  </div>

                  <Link href="/work" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-stone-800">
                    View full portfolio <ArrowUpRight size={16} />
                  </Link>
                </motion.div>

                <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:row-span-2"
                  >
                    <Link
                      href={`/work/${featuredProjects[0].slug}`}
                      className="group flex h-full flex-col rounded-[1.1rem] border border-black/5 bg-[#f3ede3] p-4 shadow-[0_18px_60px_rgba(28,25,23,0.07)]"
                    >
                      <div className="flex min-h-[720px] flex-1 items-center justify-center overflow-hidden rounded-[0.95rem] border border-black/5 p-2 lg:min-h-[880px]">
                        {featuredProjects[0].heroMedia.type === 'video' ? (
                          <video src={featuredProjects[0].heroMedia.src} autoPlay muted loop playsInline className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" {...protectedVideoProps} />
                        ) : (
                          <img src={featuredProjects[0].heroMedia.src} alt={featuredProjects[0].heroMedia.alt} className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" {...protectedImageProps} />
                        )}
                      </div>
                      <div className="mt-5 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">{featuredProjects[0].client}</p>
                          <h3 className="mt-2 max-w-sm text-2xl font-semibold uppercase leading-snug text-stone-900">{featuredProjects[0].title}</h3>
                        </div>
                        <ArrowUpRight size={18} className="shrink-0 text-stone-700 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>

                  {featuredProjects.slice(1, 3).map((project, index) => (
                    <motion.div
                      key={project.slug}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={`/work/${project.slug}`}
                        className={`group flex h-full flex-col rounded-[1rem] border border-black/5 p-4 shadow-[0_14px_50px_rgba(28,25,23,0.06)] ${
                          index === 0 ? 'bg-[#dfe7f0]' : 'bg-[#efe4d6]'
                        }`}
                      >
                        <div className="flex min-h-[420px] items-center justify-center overflow-hidden rounded-[0.9rem] border border-black/5 p-2 lg:min-h-[430px]">
                          {project.heroMedia.type === 'video' ? (
                            <video src={project.heroMedia.src} autoPlay muted loop playsInline className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" {...protectedVideoProps} />
                          ) : (
                            <img src={project.heroMedia.src} alt={project.heroMedia.alt} className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" {...protectedImageProps} />
                          )}
                        </div>
                        <div className="mt-4 flex items-end justify-between gap-3">
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">{project.client}</p>
                            <h3 className="mt-2 text-lg font-semibold uppercase leading-snug text-stone-900">{project.title}</h3>
                          </div>
                          <ArrowUpRight size={16} className="shrink-0 text-stone-700 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
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
