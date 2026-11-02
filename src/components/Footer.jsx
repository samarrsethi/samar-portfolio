import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function Footer({ onScrollTop }) {
  return (
    <footer className="border-t border-[#242420]/20 py-14 px-6 sm:px-10 bg-[#FAF7F0] text-[#74786A] font-mono text-xs relative overflow-hidden">
      {/* Animated fine hairline top accent rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#B85C42]/40 origin-center"
      />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        {/* Left colophon */}
        <div className="space-y-1">
          <p className="font-serif text-lg text-[#242420] font-normal">
            The Samar Journal &bull; Colophon
          </p>
          <p className="text-[11px] text-[#74786A]">
            Designed as an editorial broadsheet. Built with React, GSAP ScrollTrigger, Lenis &amp; Tailwind CSS.
          </p>
        </div>

        {/* Center note */}
        <div className="text-[11px] text-[#4A4A42]">
          <span>Samar Sethi &copy; 2026 &bull; Delhi NCR, India</span>
        </div>

        {/* Right back to top button */}
        <button
          onClick={onScrollTop}
          className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#242420]/20 rounded-full hover:bg-[#242420] hover:text-[#F5F1E8] hover:border-[#242420] transition-all duration-300"
        >
          <span>Top of Journal</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </footer>
  )
}
