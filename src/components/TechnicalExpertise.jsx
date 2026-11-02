import { motion } from 'framer-motion'

const stackColumns = [
  {
    category: 'I. Programming & Query Languages',
    description: 'Core syntaxes leveraged for deterministic computation, quantitative models & data architecture.',
    items: [
      { name: 'Python', role: 'Primary language for quantitative alphas, vectorized backtesting & AI model pipelines.' },
      { name: 'SQL', role: 'Relational data modeling, schema integrity & analytical querying with PostgreSQL & SQLite.' },
    ],
  },
  {
    category: 'II. Interface Architecture',
    description: 'Component hierarchies & reactive client design systems built for high-performance rendering.',
    items: [
      { name: 'React', role: 'Declarative component architecture, custom hooks & reactive state management.' },
    ],
  },
  {
    category: 'III. Systems, Intelligence & Tooling',
    description: 'Bare-metal inference, version control discipline & Unix engineering environments.',
    items: [
      { name: 'Ollama & Gemma Models', role: 'Local model quantization, GPU-accelerated prompt pipelines & zero-cloud AI.' },
      { name: 'Git & GitHub', role: 'Branching hygiene, atomic commits, open-source collaboration & code review.' },
      { name: 'macOS & Unix Terminal', role: 'Shell scripting, environment virtualization, CLI workflows & process management.' },
    ],
  },
]

export default function TechnicalExpertise() {
  return (
    <section id="expertise" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#242420]/15 relative">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between font-mono text-xs uppercase tracking-widest text-[#74786A] mb-14">
        <span className="text-[#B85C42] font-semibold">04 &bull; Technical Compendium</span>
        <span>A Typographic Inventory</span>
      </div>

      {/* Animated Headline */}
      <div className="mb-12 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A16] max-w-3xl leading-tight"
        >
          Tools selected for mechanical sympathy, reliability &amp; verifiable performance.
        </motion.h2>
      </div>

      {/* Animated Fine Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] bg-[#242420]/15 origin-left mb-12"
      />

      {/* Three Column Typographic Grid with Staggered Entrance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-14 border-b border-[#242420]/15">
        {stackColumns.map((col, idx) => (
          <motion.div
            key={col.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 bg-[#FAF7F0] border border-[#242420]/15 space-y-6 flex flex-col h-full shadow-paper hover:border-[#242420]/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#B85C42] font-semibold mb-2">
                {col.category}
              </p>
              <p className="font-sans text-xs text-[#74786A] leading-relaxed">
                {col.description}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#242420]/10 flex-1">
              {col.items.map((item) => (
                <div
                  key={item.name}
                  className="space-y-1 p-2 -mx-2 rounded hover:bg-[#F0EAE0]/70 transition-colors duration-200"
                >
                  <p className="font-serif text-lg text-[#1A1A16] font-normal">
                    {item.name}
                  </p>
                  <p className="font-sans text-xs text-[#4A4A42] leading-relaxed">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Editorial By-the-Numbers Ledger with Staggered Fade Up */}
      <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { metric: '05+', label: 'Shipped Platforms', sub: 'End-to-end architectures' },
          { metric: '03+', label: 'Hackathons', sub: 'Competitive team sprints' },
          { metric: '01', label: 'Venture in Ideation', sub: 'DriverSathi platform' },
          { metric: '1st', label: 'Year Undergrad', sub: 'Newton School of Technology' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 border-l border-[#242420]/20 font-mono group hover:border-[#B85C42] transition-colors"
          >
            <p className="font-serif text-3xl sm:text-4xl text-[#B85C42] font-normal group-hover:scale-105 transition-transform origin-left">
              {stat.metric}
            </p>
            <p className="text-xs uppercase tracking-wider text-[#242420] font-semibold mt-1">
              {stat.label}
            </p>
            <p className="text-[11px] text-[#74786A] mt-0.5 font-sans">
              {stat.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
