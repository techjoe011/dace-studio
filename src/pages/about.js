import Head from 'next/head'
import { motion } from 'framer-motion'
import { Gem, Lightbulb, MapPin, ShieldCheck, Users } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { protectedImageProps, protectedVideoProps } from '../components/mediaProps'
import { beliefs, brand, process, teamProfiles } from '../data/siteContent'

const clientLogos = [
  { name: 'Hybrid Zambia', src: '/images/logos/Hybrid-Logo-1.png' },
  { name: 'T.D. Jakes Foundation', src: '/images/logos/tdjakes-logo-blue-min.png' },
  { name: 'Mudi Properties', src: '/images/logos/mudi-site-black.png' },
  { name: 'Muche Graphique', src: '/images/logos/muche_logo-2.png' },
  { name: 'NAC2000', src: '/images/logos/logo-nac.png' },
  { name: 'Harvest Group', src: '/images/logos/harvest-logo.abf5c32f-1.png' },
  { name: 'Harvest', src: '/images/logos/harvest.png' },
  { name: 'FIBA Africa', src: '/images/logos/FIBA_Africa_logo.jpg' },
  { name: 'WaterAid', src: '/images/logos/wateraids-new-logo.webp' },
  { name: 'Radio Phoenix', src: '/images/logos/radiopheonix.png' },
  { name: 'Digitalsafe', src: '/images/logos/digitalsafe.png' },
  { name: 'Great North Credit', src: '/images/logos/GreatNorth.jpeg' },
  { name: 'NICO Zambia', src: '/images/logos/nico-zambia.png' },
  { name: 'ZICTA', src: '/images/logos/ZICTA_logo.png' },
  { name: 'Liquid Intelligent Technologies', src: '/images/logos/logo_LIQUID_.png' },
]

const memoryVideos = [
  { title: 'Memory 01', src: '/images/works/memories/mem_01.mp4' },
  { title: 'Memory 02', src: '/images/works/memories/mem_02.mp4' },
]

const beliefIcons = [Lightbulb, Gem]
export default function About() {
  return (
    <>
      <Head>
        <title>About Dace Media | Who We Are</title>
        <meta
          name="description"
          content="Learn about Dace Media, a Lusaka-based media and technology studio focused on interactive communications, strategy, design, and development."
        />
      </Head>

      <div className="min-h-screen bg-[#f6f4ef] text-stone-950">
        <Navbar />

        <main className="mx-auto max-w-7xl px-6 pb-24 pt-36">
          <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-4 text-stone-600">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-[#e7ddd0]">
                  <Users className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Introduction</p>
              </div>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.94] tracking-[-0.04em] sm:text-7xl">
                We are Dace Media.
              </h1>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-stone-600">
              <p>
                A media and technology company that engages people in new and interesting ways.
              </p>
              <p>
                From sound-reactive identity systems for orchestras to digital platforms for
                agriculture startups, we create interactive communications for brands that want
                more meaningful conversations with their audiences.
              </p>
              <p>
                We are a tight-knit team of strategists, designers, developers, photographers, and
                storytellers based in Lusaka, Zambia. We are independent, agile, and invested in
                the success of every project we take on.
              </p>
            </div>
          </section>

          <section className="mt-20 grid gap-8 lg:grid-cols-2">
            {beliefs.map((belief, index) => {
              const Icon = beliefIcons[index] || Lightbulb
              return (
              <div key={belief.title} className="rounded-[2rem] border border-black/5 bg-white p-8">
                <div className="flex items-center gap-4 text-stone-600">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1ebe1]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Our Philosophy</p>
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">{belief.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-stone-600">{belief.text}</p>
              </div>
            )})}
          </section>

          <section className="mt-20 rounded-[2.5rem] bg-[#1c1917] p-8 text-white sm:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Our Approach</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">Strategy first. Always.</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-300">
              We do not guess. Every project begins with a clear understanding of your audience,
              your goals, and your market position. From there, we build creative solutions that
              are both beautiful and effective.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-400">{item.step}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-300">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-8 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="rounded-[1.4rem] border border-black/5 bg-[#e7ddd0] p-8">
                <div className="flex items-center gap-4 text-stone-600">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70">
                    <Users className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Team</p>
                </div>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">The team behind the work.</h2>
                <p className="mt-5 text-base leading-relaxed text-stone-600">
                  A compact multidisciplinary team spanning strategy, design, development, media,
                  and production.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {teamProfiles.map((profile, index) => {
                  return (
                  <motion.div
                    key={profile.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[1.1rem] border border-black/5 bg-white p-6"
                  >
                    <div className="overflow-hidden rounded-[1rem] border border-black/5 bg-[linear-gradient(180deg,#f0e6d8_0%,#e5d5be_100%)]">
                      <div className="min-h-[240px]" />
                    </div>

                    <p className="mt-6 text-xs uppercase tracking-[0.22em] text-stone-500">Team Role</p>
                    <h3 className="mt-3 text-2xl font-semibold">{profile.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-stone-600">{profile.text}</p>
                  </motion.div>
                )})}
              </div>
            </div>
          </section>

          <section className="mt-20 rounded-[1.5rem] border border-black/5 bg-white p-8">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-4 text-stone-600">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1ebe1]">
                    <Gem className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Memories</p>
                </div>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">Memories with our creative partners.</h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-stone-600">
                A broader look at the people, moments, and collaborative energy around the studio.
              </p>
            </div>

            <div className="mb-6 grid gap-5 lg:grid-cols-2">
              {memoryVideos.map((video, index) => (
                <motion.div
                  key={video.src}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden rounded-[1rem] border border-black/5"
                >
                  <video
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="h-full min-h-[320px] w-full object-cover"
                    {...protectedVideoProps}
                  />
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-black/5 bg-[#efe8dc] p-8">
              <div className="flex items-center gap-4 text-stone-600">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70">
                  <MapPin className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">The Studio</p>
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">{brand.studioName}</h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">{brand.tagline}</p>
              <div className="mt-8 space-y-2 text-sm text-stone-700">
                <p>{brand.foundedLabel}</p>
                <p>{brand.email}</p>
                <p>{brand.phone}</p>
                <p>{brand.socialHandle}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white p-8">
              <div className="flex items-center gap-4 text-stone-600">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1ebe1]">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Clients</p>
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Trusted by brands across Zambia and beyond.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {clientLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex min-h-28 items-center justify-center rounded-[1rem] border border-stone-200 bg-[#f7f4ee] p-5"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-14 w-full object-contain grayscale transition duration-300 hover:grayscale-0"
                      {...protectedImageProps}
                    />
                  </div>
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
