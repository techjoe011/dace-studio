import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { process, services } from '../data/siteContent'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Brand, Design, Development & More - Dace Media</title>
        <meta
          name="description"
          content="Explore Dace Media services across branding, websites, app development, social media design, paid media, AI utilization, photography, videography, and creative direction."
        />
      </Head>

      <div className="min-h-screen bg-[#f6f4ef] text-stone-950">
        <Navbar />

        <main className="mx-auto max-w-7xl px-6 pb-24 pt-36">
          <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">What We Do</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.94] tracking-[-0.04em] sm:text-7xl">
                Full-service. Medium agnostic.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-stone-600">
              We work across a range of disciplines and mediums to solve the creative and
              communications challenges that matter most to your brand.
            </p>
          </section>

          <section className="mt-16 grid gap-8">
            {services.map((service) => (
              <article
                key={service.slug}
                className="grid gap-8 rounded-[2.25rem] border border-black/5 bg-white p-8 lg:grid-cols-[0.8fr_1.2fr]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-stone-500">{service.title}</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{service.headline}</h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600">{service.description}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <div key={item} className="rounded-[1.4rem] bg-stone-50 p-5 text-sm font-medium text-stone-700">
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </section>

          <section className="mt-20 rounded-[2.5rem] bg-[#1c1917] p-8 text-white sm:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-stone-400">How We Work</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-400">{item.step}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-300">{item.text}</p>
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
