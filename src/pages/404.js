import Head from 'next/head'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 | Dace Media</title>
        <meta
          name="description"
          content="The page you were looking for does not exist. It may have moved, disappeared, or never survived the brief."
        />
      </Head>

      <div className="min-h-screen bg-[#f6f4ef] text-stone-950">
        <Navbar />

        <main className="mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 pt-36">
          <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.35rem] border border-black/5 bg-[#e8ddd0] p-8 shadow-[0_20px_60px_rgba(28,25,23,0.05)]">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">404</p>
              <h1 className="mt-4 text-6xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-8xl">
                This page took
                <br />
                a creative detour.
              </h1>
            </div>

            <div className="flex flex-col justify-center rounded-[1.35rem] border border-black/5 bg-white p-8">
              <p className="max-w-2xl text-xl leading-relaxed text-stone-700">
                The page you were looking for is not here. It may have moved, been renamed, or
                decided to ignore the brief.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600">
                The good news is the rest of the site is behaving normally.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white"
                >
                  Back Home <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-900"
                >
                  See Work
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
