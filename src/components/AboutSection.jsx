import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#242420]/15 relative">
      {/* Section Header */}
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#74786A] mb-12">
        <span className="text-[#B85C42] font-semibold">02 &bull; Biography &amp; Pursuits</span>
        <span>The Journey So Far</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (Editorial Column & Drop Cap) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A16] leading-tight"
            >
              At the intersection of bare-metal systems, intelligent models, and market mechanics.
            </motion.h2>
          </div>

          {/* Fine Animated Horizontal Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1px] bg-[#242420]/15 origin-left my-4"
          />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-[#3A3A34] leading-relaxed space-y-4 pt-2 font-sans"
          >
            <p className="drop-cap text-justify">
              Beginning my formal undergraduate curriculum in Computer Science and Artificial Intelligence at the Newton School of Technology, Rishihood University, my work has centered on one primary obsession: executing high-performance computing without unnecessary abstractions.
            </p>
            <p className="text-justify">
              Rather than treating artificial intelligence as a distant cloud API, my exploration focuses on local-first, low-latency inference architectures. By deploying quantized local models like Gemma through Ollama on local machines, we reclaim privacy, eliminate latency spikes, and make machine intelligence truly offline-first.
            </p>
            <p className="text-justify">
              Simultaneously, my interest in quantitative finance has led to building backtesting engines and statistical arbitrage models evaluated on National Stock Exchange (NSE) historical equities, combining gradient-boosted signals with vectorized computation.
            </p>
          </motion.div>
        </div>

        {/* Right Column (Editorial Pull Quote & Academic Dossier — Asymmetric Stagger) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Pull Quote */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 bg-[#FAF7F0] border-l-2 border-[#B85C42] border-t border-r border-b border-[#242420]/15 shadow-paper group hover:border-l-4 transition-all"
          >
            <span className="font-serif text-4xl text-[#B85C42] leading-none">&ldquo;</span>
            <p className="font-serif italic text-xl sm:text-2xl text-[#242420] leading-snug -mt-4 mb-4">
              Real engineering begins where convenience ends &mdash; in local execution, deterministic algorithms, and verified system limits.
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-[#74786A]">
              &mdash; Samar Sethi, Research Notes
            </p>
          </motion.div>

          {/* Dossier Specifications Table */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 bg-[#FAF7F0] border border-[#242420]/15 space-y-3 font-mono text-xs shadow-paper hover:border-[#242420]/30 transition-all"
          >
            <p className="text-[10px] uppercase tracking-widest text-[#B85C42] font-semibold border-b border-[#242420]/15 pb-2">
              Dossier &bull; Academic Log
            </p>
            <div className="space-y-3 pt-2 text-[#3A3A34]">
              <div className="flex justify-between py-1 border-b border-[#242420]/10">
                <span className="text-[#74786A]">Undergrad Degree</span>
                <span className="font-medium text-right text-[#242420]">B.Tech CS &amp; AI</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#242420]/10">
                <span className="text-[#74786A]">Institution</span>
                <span className="font-medium text-right text-[#242420]">Newton School of Technology</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#242420]/10">
                <span className="text-[#74786A]">University</span>
                <span className="font-medium text-right text-[#242420]">Rishihood University</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#242420]/10">
                <span className="text-[#74786A]">Key Disciplines</span>
                <span className="font-medium text-right text-[#242420]">DSA, Systems, Local LLMs</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#74786A]">Cohort Status</span>
                <span className="font-medium text-right text-[#B85C42]">First Year Undergrad</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
