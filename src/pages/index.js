import Head from 'next/head'
import Link from 'next/link'
import { ArrowUpRight, Compass, Cpu, Sparkles } from 'lucide-react'
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
          <section className="relative flex min-h-[88svh] items-center overflow-hidden px-4 pb-14 pt-24 sm:min-h-screen sm:px-6 sm:pb-24 sm:pt-36">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_42%),linear-gradient(180deg,#f6f1e7_0%,#eee2cf_100%)]" />
            <div className="absolute bottom-5 left-3 right-3 top-5 rounded-[1rem] border border-black/8 sm:bottom-8 sm:left-6 sm:right-6 sm:top-8 sm:rounded-[1.5rem]" />
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
              <p className="mb-5 text-center text-[10px] uppercase tracking-[0.26em] text-stone-500 sm:mb-8 sm:text-xs sm:tracking-[0.42em]">Dace Media · Lusaka, Zambia</p>
              <h1 className="font-display max-w-[18rem] text-center text-[2.15rem] font-semibold uppercase leading-[0.98] tracking-[0.01em] text-stone-900 sm:max-w-5xl sm:text-7xl lg:text-[6.2rem]">
                We dont just guess, we deliver measurable results
              </h1>
              <p className="mt-4 max-w-[21rem] text-center text-[0.98rem] leading-relaxed text-stone-700 sm:mt-6 sm:max-w-3xl sm:text-lg">
                Dace Media is a full-service media and technology company built for brands that
                want more than visibility. They want real connection.
              </p>
              <div className="mt-7 flex w-full max-w-xs flex-col items-stretch justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link
                  href="/work"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-stone-950 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white"
                >
                  View Work <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-stone-300 bg-white/40 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-stone-900 backdrop-blur-sm"
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
            className="overflow-hidden border-y border-black/5 bg-[#eadfcd] py-4 sm:py-5"
          >
            <motion.div
              animate={{ x: '-50%' }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="flex whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-700 sm:text-sm sm:tracking-[0.45em]"
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
            className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
          >
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-[1.25rem] border border-black/5 bg-[#eadfcd] p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Who We Are</p>
                <h2 className="font-display mt-4 text-3xl font-semibold uppercase leading-tight tracking-[0.01em] text-stone-900 sm:text-5xl">
                  Interactive communications for brands that mean business.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-stone-600">
                  From campaigns for regulators to mobile apps for farmers, we create work that
                  does not just say something. It invites your audience to say something back.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.1rem] border border-black/5 bg-white p-5 sm:p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#efe5d7] text-stone-800 sm:h-20 sm:w-20">
                    <Compass className="h-10 w-10" strokeWidth={1.6} />
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.24em] text-stone-500 sm:mt-7 sm:tracking-[0.28em]">Strategy</p>
                  <p className="mt-4 text-base leading-relaxed text-stone-700 sm:mt-5 sm:text-lg">Brand development, positioning, and communication systems.</p>
                </div>
                <div className="rounded-[1.1rem] border border-black/5 bg-white p-5 sm:p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dde5ef] text-stone-800 sm:h-20 sm:w-20">
                    <Cpu className="h-10 w-10" strokeWidth={1.6} />
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.24em] text-stone-500 sm:mt-7 sm:tracking-[0.28em]">Development</p>
                  <p className="mt-4 text-base leading-relaxed text-stone-700 sm:mt-5 sm:text-lg">Full-stack development across websites, landing pages, and mobile products.</p>
                </div>
                <div className="rounded-[1.1rem] border border-black/5 bg-white p-5 sm:p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e7eddc] text-stone-800 sm:h-20 sm:w-20">
                    <Sparkles className="h-10 w-10" strokeWidth={1.6} />
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.24em] text-stone-500 sm:mt-7 sm:tracking-[0.28em]">Execution</p>
                  <p className="mt-4 text-base leading-relaxed text-stone-700 sm:mt-5 sm:text-lg">Websites, apps, campaigns, photography, videography, and content.</p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24"
          >
            <div className="grid gap-5 rounded-[1.25rem] border border-black/5 bg-[#e7ddd0] p-5 lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
              <div className="rounded-[1.05rem] border border-black/5 bg-[#f6f1e7] p-5 lg:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Software Capability</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold uppercase leading-[1.02] tracking-[0.01em] text-stone-900 sm:text-5xl">
                  We also build custom systems for real business operations.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600">
                  Beyond campaigns and websites, we design and build internal tools, dashboards,
                  portals, and workflow systems tailored to how your team actually works.
                </p>
                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-stone-900"
                >
                  Explore services <ArrowUpRight size={16} />
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[1rem] border border-black/5 bg-white p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Build</p>
                  <p className="mt-3 text-base leading-relaxed text-stone-700">
                    Dashboards, admin panels, portals, and internal business systems.
                  </p>
                </div>
                <div className="rounded-[1rem] border border-black/5 bg-white p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Support</p>
                  <p className="mt-3 text-base leading-relaxed text-stone-700">
                    Ongoing improvements, implementation support, and issue resolution.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
            <div className="mb-8 rounded-[1.2rem] border border-black/5 bg-[#e7ddd0] p-4 shadow-[0_24px_80px_rgba(28,25,23,0.06)] sm:p-5 lg:rounded-[1.5rem] lg:p-6">
              <div className="grid gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col justify-between rounded-[1.05rem] border border-black/5 bg-[#f6f1e7] p-5 lg:p-8"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.34em] text-stone-500">Selected Work</p>
                    <h2 className="mt-4 max-w-2xl text-3xl font-semibold uppercase leading-[1.02] tracking-[0.01em] text-stone-900 sm:text-5xl">
                      Work that connects.
                    </h2>
                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-stone-600">
                      A selection of the work we have done for brands across Zambia and beyond.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[0.95rem] border border-black/5 bg-[#efe5d7] px-4 py-3.5">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">Campaign Design</p>
                    </div>
                    <div className="rounded-[0.95rem] border border-black/5 bg-[#dde5ef] px-4 py-3.5">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">Web Design</p>
                    </div>
                    <div className="rounded-[0.95rem] border border-black/5 bg-[#e6eee4] px-4 py-3.5">
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
                      className="group flex h-full flex-col rounded-[1.05rem] border border-black/5 bg-[#f3ede3] p-3 sm:p-4 shadow-[0_18px_60px_rgba(28,25,23,0.07)]"
                    >
                      <div className="flex min-h-[240px] flex-1 items-center justify-center overflow-hidden rounded-[0.95rem] border border-black/5 p-2 sm:min-h-[420px] lg:min-h-[880px]">
                        {featuredProjects[0].heroMedia.type === 'video' ? (
                          <video src={featuredProjects[0].heroMedia.src} autoPlay muted loop playsInline className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" {...protectedVideoProps} />
                        ) : (
                          <img src={featuredProjects[0].heroMedia.src} alt={featuredProjects[0].heroMedia.alt} className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" {...protectedImageProps} />
                        )}
                      </div>
                        <div className="mt-4 flex items-end justify-between gap-4 sm:mt-5">
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">{featuredProjects[0].client}</p>
                            <h3 className="mt-2 max-w-sm text-xl font-semibold uppercase leading-snug text-stone-900 sm:text-2xl">{featuredProjects[0].title}</h3>
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
                        className={`group flex h-full flex-col rounded-[1rem] border border-black/5 p-3 sm:p-4 shadow-[0_14px_50px_rgba(28,25,23,0.06)] ${
                          index === 0 ? 'bg-[#dfe7f0]' : 'bg-[#efe4d6]'
                        }`}
                      >
                        <div className="flex min-h-[220px] items-center justify-center overflow-hidden rounded-[0.9rem] border border-black/5 p-2 sm:min-h-[320px] lg:min-h-[430px]">
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
