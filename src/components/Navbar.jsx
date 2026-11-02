import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: '01 Intro', href: '#intro', id: 'intro' },
  { label: '02 About', href: '#about', id: 'about' },
  { label: '03 Work', href: '#work', id: 'work' },
  { label: '04 Expertise', href: '#expertise', id: 'expertise' },
  { label: '05 Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)

      const sections = ['intro', 'about', 'work', 'expertise', 'contact']
      const scrollPos = window.scrollY + 160

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F1E8]/90 backdrop-blur-md border-b border-[#242420]/10 shadow-[0_2px_15px_rgba(36,36,32,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Masthead monogram */}
          <a href="#intro" className="group flex items-center gap-3">
            <span className="font-serif text-2xl font-normal tracking-tight text-[#242420] group-hover:text-[#B85C42] transition-colors">
              The Samar Journal
            </span>
            <span className="hidden md:inline font-mono text-[10px] uppercase text-[#74786A] tracking-widest pl-2 border-l border-[#242420]/20">
              Autumn 2026
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-[#4A4A42]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#B85C42] font-semibold'
                      : 'hover:text-[#242420]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeEditorialNav"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B85C42]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Right action button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&to=samarsethi777@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#242420]/30 rounded-full font-mono text-xs uppercase tracking-wider text-[#242420] hover:bg-[#242420] hover:text-[#F5F1E8] transition-all duration-300"
            >
              <span>Dispatch Note</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#242420]"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FAF7F0] border-b border-[#242420]/15 px-6 py-6 overflow-hidden"
          >
            <div className="space-y-4 font-mono text-xs uppercase tracking-wider">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 border-b border-[#242420]/10 ${
                    activeSection === link.id
                      ? 'text-[#B85C42] font-semibold'
                      : 'text-[#4A4A42]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://mail.google.com/mail/?view=cm&to=samarsethi777@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-block mt-4 px-5 py-2.5 bg-[#242420] text-[#F5F1E8] rounded-full text-center w-full"
              >
                Dispatch Note &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
