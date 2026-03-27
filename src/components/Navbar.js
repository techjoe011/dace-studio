import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { brand } from '../data/siteContent'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Work', href: '/work' },
    { name: 'News', href: '/news' },
    { name: 'Services', href: '/services' },
    { name: 'Support', href: '/support' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed w-full z-50 border-b border-black/5 bg-[rgba(246,244,239,0.88)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" aria-label={brand.name}>
          <img src={brand.logo} alt={brand.name} className="h-20 w-auto sm:h-24" />
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.18em] text-stone-700 transition-colors hover:text-stone-950"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col space-y-6 border-t border-black/5 bg-[rgba(246,244,239,0.96)] px-6 py-8 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-semibold text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}
