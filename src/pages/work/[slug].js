import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { protectedImageProps, protectedVideoProps } from '../../components/mediaProps'
import { brand, featuredProjects, workBySlug } from '../../data/siteContent'

export async function getStaticPaths() {
  return {
    paths: featuredProjects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      project: workBySlug[params.slug] ?? null,
    },
  }
}

export default function ProjectDetail({ project }) {
  if (!project) return null

  return (
    <>
      <Head>
        <title>{`${project.title} | Dace Media`}</title>
        <meta name="description" content={project.description} />
      </Head>

      <div className="min-h-screen bg-[#f6f4ef] text-stone-950">
        <Navbar />

        <main className="mx-auto max-w-7xl px-6 pb-24 pt-36">
          <Link href="/work" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-600 transition-colors hover:text-stone-950">
            <ArrowLeft size={16} />
            Back to Work
          </Link>

          <section className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">{project.client}</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.94] tracking-[-0.04em] sm:text-7xl">
                {project.title}
              </h1>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <MetaCard label="Category" value={project.category} />
              <MetaCard label="Year" value={project.year} />
              <MetaCard label="Services" value={project.services.join(', ')} />
            </div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex items-center justify-center overflow-hidden rounded-[2.5rem] border border-black/5 p-6"
          >
            {project.heroMedia.type === 'video' ? (
              <video src={project.heroMedia.src} controls autoPlay muted loop playsInline className="h-full max-h-[72vh] w-full object-contain" {...protectedVideoProps} />
            ) : (
              <img src={project.heroMedia.src} alt={project.heroMedia.alt} className="h-full max-h-[72vh] w-full object-contain" {...protectedImageProps} />
            )}
          </motion.section>

          <section className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-black/5 bg-white p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Overview</p>
              <p className="mt-5 text-lg leading-relaxed text-stone-600">{project.description}</p>
            </div>
            <div className="rounded-[2rem] bg-[#1c1917] p-8 text-white">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Need Similar Work?</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">{brand.tagline}</h2>
              <p className="mt-4 text-base leading-relaxed text-stone-300">
                If your brand needs the same level of strategic design, digital execution, or campaign support, let&apos;s talk.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950">
                Start a Conversation <ArrowUpRight size={16} />
              </Link>
            </div>
          </section>

          <section className="mt-14">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Gallery</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {project.gallery.map((media) => (
                <div key={media.src} className="flex items-center justify-center overflow-hidden rounded-[2rem] border border-black/5 p-4">
                  {media.type === 'video' ? (
                    <video src={media.src} controls className="h-full min-h-[360px] w-full object-contain" {...protectedVideoProps} />
                  ) : (
                    <img src={media.src} alt={media.alt} className="h-full min-h-[360px] w-full object-contain" {...protectedImageProps} />
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

function MetaCard({ label, value }) {
  return (
    <div className="rounded-[1.5rem] border border-black/5 bg-[#efe8dc] p-5">
      <p className="text-xs uppercase tracking-[0.24em] text-stone-500">{label}</p>
      <p className="mt-3 text-sm leading-relaxed text-stone-800">{value}</p>
    </div>
  )
}
