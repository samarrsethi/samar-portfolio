import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react'

// Word-by-word masked text reveal component
function MaskedWord({ children, delay = 0 }) {
  return (
    <span className="inline-block overflow-hidden py-1 -my-1">
      <motion.span
        initial={{ y: '115%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Introduction() {
  return (
    <section id="intro" className="relative pt-28 pb-20 px-6 sm:px-10 max-w-7xl mx-auto overflow-hidden">
      {/* Top Section Folio */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-between border-b border-[#242420]/20 pb-4 mb-10 font-mono text-xs uppercase tracking-widest text-[#74786A]"
      >
        <div className="flex items-center gap-3">
          <span className="text-[#B85C42] font-semibold">01 &bull; Frontispiece</span>
          <span>&mdash;</span>
          <span>Samar Sethi</span>
        </div>
        <div className="hidden sm:block">
          B.Tech CS &amp; AI &bull; NST Rishihood University
        </div>
        <div className="text-[#B85C42]">
          Available for Collabs
        </div>
      </motion.div>

      {/* Main Editorial Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column (Main Oversized Display Typography with Word Masking) */}
        <div className="lg:col-span-8">
          <div className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-[#1C1C18] leading-[0.92]">
            <div>
              <MaskedWord delay={0.05}>Samar</MaskedWord>
            </div>
            <div>
              <span className="inline-block overflow-hidden py-1 -my-1">
                <motion.span
                  initial={{ y: '115%', opacity: 0 }}
                  whileInView={{ y: '0%', opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="italic font-normal text-[#B85C42] pl-1 inline-block"
                >
                  Sethi.
                </motion.span>
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 pt-8 border-t border-[#242420]/15"
          >
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#242420] font-normal leading-snug">
              Engineering high-performance <span className="italic text-[#74786A]">AI systems</span>, quantitative models &amp; modern digital platforms.
            </p>
          </motion.div>
        </div>

        {/* Right Column (Editorial Sidebar / Synopsis) */}
        <div className="lg:col-span-4 lg:pt-4 space-y-6 text-[#3A3A34] text-sm leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 bg-[#FAF7F0] border border-[#242420]/15 space-y-4 shadow-paper hover:border-[#242420]/30 transition-all"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-[#B85C42] font-semibold">
              Curriculum &bull; Focus
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#4A4A42] leading-relaxed">
              First-year CS &amp; AI undergrad building low-latency offline intelligence, algorithmic trading systems, and full-stack platforms from the ground up.
            </p>
            <div className="pt-4 border-t border-[#242420]/10 flex flex-col gap-2 font-mono text-xs text-[#242420]">
              <div className="flex justify-between">
                <span className="text-[#74786A]">Institution</span>
                <span className="font-medium text-right">NST, Rishihood Univ.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#74786A]">Specialization</span>
                <span>CS &amp; Artificial Intelligence</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#74786A]">Location</span>
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-2.5 font-mono text-xs"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#242420] text-[#F5F1E8] rounded-full hover:bg-[#B85C42] transition-colors"
            >
              <span>Examine Work</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/samarrsethi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#242420]/30 rounded-full hover:bg-[#FAF7F0] hover:border-[#B85C42] transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#B85C42]" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/samar-sethi-bb96273bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#242420]/30 rounded-full hover:bg-[#FAF7F0] hover:border-[#B85C42] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#B85C42]" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
