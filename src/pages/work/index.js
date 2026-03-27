import Head from 'next/head'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { protectedImageProps, protectedVideoProps } from '../../components/mediaProps'
import {
  brand,
  externalProjects,
  featuredProjects,
  photographyCollections,
} from '../../data/siteContent'

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Our Work | Selected Projects - Dace Media</title>
        <meta
          name="description"
          content="Explore Dace Media portfolio work across campaign design, graphic design, websites, apps, videography, and photography."
        />
      </Head>

      <div className="min-h-screen bg-[#f6f4ef] text-stone-950">
        <Navbar />

        <main className="mx-auto max-w-7xl px-6 pb-24 pt-36">
          <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Selected Work</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.94] tracking-[-0.04em] sm:text-7xl">
                Projects we&apos;re proud of.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-stone-600">
              A selection of campaign, digital, graphic, video, and photography work created for
              brands across Zambia and beyond.
            </p>
          </section>

          <section className="mt-16 grid gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="grid gap-6 overflow-hidden rounded-[1.25rem] border border-black/5 p-6 shadow-[0_20px_80px_rgba(28,25,23,0.06)] transition-transform hover:-translate-y-1 lg:grid-cols-[0.85fr_1.15fr]"
                  style={{ backgroundColor: project.color }}
                >
                  <div className="flex flex-col justify-between gap-10">
                    <div className="space-y-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-stone-600">0{index + 1} · {project.client}</p>
                      <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{project.title}</h2>
                      <p className="text-sm uppercase tracking-[0.18em] text-stone-700">{project.category}</p>
                      <p className="max-w-lg text-base leading-relaxed text-stone-700">{project.summary}</p>
                    </div>
                    <div className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-900">
                      View Project <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div className="flex items-center justify-center overflow-hidden rounded-[1rem] p-6">
                    {project.heroMedia.type === 'video' ? (
                      <video src={project.heroMedia.src} autoPlay muted loop playsInline className="h-full min-h-[320px] w-full object-contain" {...protectedVideoProps} />
                    ) : (
                      <img src={project.heroMedia.src} alt={project.heroMedia.alt} className="h-full min-h-[320px] w-full object-contain" {...protectedImageProps} />
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-black/5 bg-white p-7">
              <p className="mb-6 text-xs uppercase tracking-[0.28em] text-stone-500">Websites</p>
              <div className="space-y-5">
                {externalProjects.websites.map((site) => (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-[1.5rem] border border-stone-200 p-5 transition-colors hover:border-stone-900"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold">{site.title}</h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">{site.category}</p>
                        <p className="mt-3 text-sm leading-relaxed text-stone-600">{site.description}</p>
                      </div>
                      <ArrowUpRight size={18} className="mt-1 shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-[#1c1917] p-7 text-white">
              <p className="mb-6 text-xs uppercase tracking-[0.28em] text-stone-300">Apps</p>
              {externalProjects.apps.map((app) => (
                <a
                  key={app.url}
                  href={app.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold">{app.title}</h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-300">{app.category}</p>
                      <p className="mt-4 max-w-lg text-sm leading-relaxed text-stone-200">{app.description}</p>
                    </div>
                    <ArrowUpRight size={20} className="mt-1 shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-20 rounded-[2.5rem] bg-[#eadfcd] p-8 sm:p-10">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Photography</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                  Photography collections.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-stone-600">
                Event, brand, and corporate photography sourced from the folders provided for the site.
              </p>
            </div>

            <div className="space-y-10">
              {photographyCollections.map((collection, index) => (
                <motion.div
                  key={collection.slug}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[1.5rem] border border-black/5 bg-[#efe4d3] p-6"
                >
                  <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold">{collection.title}</h3>
                      <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{collection.category}</p>
                    </div>
                    <p className="text-sm text-stone-500">{collection.images.length} images</p>
                  </div>

                  <div className="grid gap-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden rounded-[1.1rem] border border-black/5"
                    >
                      <img
                        src={collection.cover}
                        alt={collection.title}
                        className="h-full min-h-[420px] w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                        {...protectedImageProps}
                      />
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {collection.images.map((image, imageIndex) => (
                        <motion.div
                          key={image}
                          initial={{ opacity: 0, x: 24 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.35 }}
                          transition={{ duration: 0.6, delay: imageIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden rounded-[1rem] border border-black/5"
                        >
                          <img
                            src={image}
                            alt={collection.title}
                            className="h-full min-h-[260px] w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                            {...protectedImageProps}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mt-20 rounded-[2.5rem] bg-stone-950 px-8 py-14 text-white sm:px-12">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Start a Project</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              {brand.tagline}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-300">
              If you&apos;re looking for branding, campaigns, websites, apps, photography, or
              creative direction, the studio is ready to talk.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950">
              Contact Dace Media <ArrowUpRight size={16} />
            </Link>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
