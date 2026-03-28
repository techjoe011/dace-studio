import Head from 'next/head'
import { motion } from 'framer-motion'
import { BookOpenText, BrainCircuit, Newspaper, NotebookPen } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { protectedImageProps } from '../components/mediaProps'
import { brand, newsPosts } from '../data/siteContent'

const pageTitle = 'News | Dace Media'
const pageDescription =
  'Original essays and notes from Dace Media on creative work, paid media, AI utilization, and building clearer brand systems.'

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Dace Media News',
              itemListElement: newsPosts.map((post, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: post.title,
                description: post.excerpt,
              })),
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-[#f6f4ef] text-stone-950">
        <Navbar />

        <main className="mx-auto max-w-7xl px-6 pb-24 pt-36">
          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.35rem] border border-black/5 bg-[#e8ddd0] p-8 shadow-[0_20px_60px_rgba(28,25,23,0.06)]"
            >
              <div className="flex items-center gap-4 text-stone-600">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70">
                  <Newspaper className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <p className="text-xs uppercase tracking-[0.32em] text-stone-500">News</p>
              </div>
              <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.04em] sm:text-7xl">
                Essays, notes, and ideas from the studio.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
                Clear thinking about creative work, paid media, AI utilization, and the systems
                behind strong brand communication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
            >
              <div className="rounded-[1rem] border border-black/5 bg-white p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1ebe1] text-stone-700">
                  <NotebookPen className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-stone-500">Writing Mode</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  Plainspoken, reflective, idea-led.
                </p>
              </div>
              <div className="rounded-[1rem] border border-black/5 bg-[#dde5ef] p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/60 text-stone-700">
                  <BrainCircuit className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-stone-500">Topics</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  Creative direction, media systems, digital execution, and AI workflows.
                </p>
              </div>
              <div className="rounded-[1rem] border border-black/5 bg-[#efe4d6] p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/60 text-stone-700">
                  <BookOpenText className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-stone-500">Studio</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  {brand.foundedLabel} · {brand.email}
                </p>
              </div>
            </motion.div>
          </section>

          <section className="mt-20 grid gap-8 lg:grid-cols-[0.42fr_1fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[1.2rem] border border-black/5 bg-[#f0ebe2] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Index</p>
                <div className="mt-6 space-y-4">
                  {newsPosts.map((post, index) => (
                    <a
                      key={post.slug}
                      href={`#${post.slug}`}
                      className="block border-b border-black/8 pb-4 last:border-b-0 last:pb-0"
                    >
                      <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
                        0{index + 1} · {post.date}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-stone-800">
                        {post.title}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10">
              {newsPosts.map((post, index) => (
                <motion.article
                  id={post.slug}
                  key={post.slug}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{ duration: 0.65, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[1.2rem] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(28,25,23,0.04)]"
                >
                  <div className="grid gap-8 lg:grid-cols-[0.28fr_1fr]">
                    <div className="border-b border-black/8 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">{post.date}</p>
                      <p className="mt-4 text-sm leading-relaxed text-stone-600">
                        Essay {String(index + 1).padStart(2, '0')}
                      </p>
                    </div>

                    <div>
                      {post.image ? (
                        <div className="mb-8 overflow-hidden rounded-[1rem] border border-black/5">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-[260px] w-full object-cover sm:h-[320px]"
                            {...protectedImageProps}
                          />
                        </div>
                      ) : null}
                      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                        {post.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-700">
                        {post.excerpt}
                      </p>

                      <div className="mt-8 space-y-5 text-[17px] leading-8 text-stone-700">
                        {post.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
