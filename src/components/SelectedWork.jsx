import { motion } from 'framer-motion'
import { ArrowUpRight, Compass, Cpu, LineChart, Swords } from 'lucide-react'
import {
  DriverSathiSimulation,
  LearnSphereSimulation,
  QuantAlphaSimulation,
  CodeforcesSimulation,
} from './ProjectSimulation'

const caseStudies = [
  {
    num: '01',
    plate: 'Plate I &bull; Venture in Ideation',
    title: 'DriverSathi',
    subtitle: 'Commercial Logistics & Verified Fleet Driver Network',
    badge: 'Startup &bull; Ideation Stage',
    badgeColor: 'text-[#B85C42] border-[#B85C42]/30 bg-[#B85C42]/10',
    description:
      'A dedicated platform engineered to connect commercial vehicle and fleet owners with verified drivers for both permanent employment and urgent route assignments. Solves the severe trust, verification, and discovery bottlenecks in India\'s commercial logistics ecosystem through algorithmic matching and contract management.',
    stack: ['React', 'PostgreSQL', 'Maps API', 'Matching Engine Architecture', 'Contract Protocols'],
    status: 'Prototyping Architecture',
    accentColor: '#B85C42',
    icon: Compass,
    simulation: DriverSathiSimulation,
    links: {},
  },
  {
    num: '02',
    plate: 'Plate II &bull; Offline AI Architecture',
    title: 'LearnSphere',
    subtitle: 'Zero-Cloud Local Intelligence & Learning Environment',
    badge: 'Top 5 Rank Honors',
    badgeColor: 'text-[#74786A] border-[#74786A]/30 bg-[#74786A]/10',
    description:
      'A privacy-centric educational environment designed for zero-connectivity environments. Houses full local LLM inference via Ollama and quantized Gemma 3 models, accompanied by a reactive client dashboard. Democratizes personalized tutoring without cloud subscription lock-in.',
    stack: ['React', 'Ollama', 'Gemma 3', 'SQLite', 'Offline Storage Engine'],
    status: 'Shipped &bull; Top 5 Honor',
    accentColor: '#74786A',
    icon: Cpu,
    simulation: LearnSphereSimulation,
    links: { github: 'https://github.com/samarrsethi' },
  },
  {
    num: '03',
    plate: 'Plate III &bull; Quantitative Finance',
    title: 'QuantAlpha Engine',
    subtitle: 'Vectorized Statistical Arbitrage & Signal Generator',
    badge: 'Research Paper &bull; Simulation',
    badgeColor: 'text-[#242420] border-[#242420]/30 bg-[#242420]/5',
    description:
      'Quantitative signal synthesis platform executing statistical arbitrage algorithms and machine learning feature extraction over National Stock Exchange (NSE) historical equities. Implements vectorized computation pipelines to achieve robust out-of-sample Sharpe ratios and disciplined drawdown control.',
    stack: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'Matplotlib', 'yfinance'],
    status: 'Research Complete',
    accentColor: '#242420',
    icon: LineChart,
    simulation: QuantAlphaSimulation,
    links: { github: 'https://github.com/samarrsethi' },
  },
  {
    num: '04',
    plate: 'Plate IV &bull; Competitive Programming',
    title: 'Codeforces & Algorithmics',
    subtitle: '75+ Problems Solved &bull; Rigorous Heuristic Regimen',
    badge: 'Active Competitor',
    badgeColor: 'text-[#B85C42] border-[#B85C42]/30 bg-[#B85C42]/10',
    description:
      'A disciplined competitive coding regimen focused on mathematical problem solving, number theory, constructive proofs, and greedy heuristics. Serves as algorithmic proving ground while initiating an intensive, comprehensive Data Structures & Algorithms sprint.',
    stack: ['Python', 'Mathematical Proofs', 'Greedy Heuristics', 'Data Structures'],
    status: '75+ Solved &bull; Ongoing',
    accentColor: '#B85C42',
    icon: Swords,
    simulation: CodeforcesSimulation,
    links: { live: 'https://github.com/samarrsethi' },
  },
]

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto relative select-none">
      {/* ─── EDITORIAL SECTION MASTHEAD ─── */}
      <div className="border-b-2 border-[#242420] pb-6 mb-16">
        <div className="flex flex-wrap items-center justify-between font-mono text-xs uppercase tracking-widest text-[#74786A] mb-4">
          <div className="flex items-center gap-3">
            <span className="text-[#B85C42] font-semibold">03 &bull; Portfolio Dispatches</span>
            <span>&mdash;</span>
            <span>Vol. XXIV &bull; Special Gazette</span>
          </div>
          <span className="hidden sm:inline">Selected Works &amp; Case Studies</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="overflow-hidden py-1">
              <motion.h2
                initial={{ y: '110%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#1A1A16] tracking-tight uppercase leading-none"
              >
                Selected Work.
              </motion.h2>
            </div>
            <p className="font-serif italic text-base sm:text-lg text-[#74786A] mt-2">
              Four verified plates from the engineering studio &amp; computational laboratory.
            </p>
          </div>
          <div className="font-mono text-xs text-[#4A4A42] max-w-xs border-l border-[#242420]/20 pl-4 hidden md:block">
            <span>Every plate is documented with architectural specifications, technical schematics &amp; verifiable artifacts.</span>
          </div>
        </div>
      </div>

      {/* ─── FULL-WIDTH EDITORIAL PLATES SPREADS ─── */}
      <div className="space-y-16">
        {caseStudies.map((study, idx) => {
          const SimulationComponent = study.simulation
          return (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-12 bg-[#FAF7F0] border border-[#242420]/20 hover:border-[#242420]/50 transition-all duration-300 shadow-paper relative overflow-hidden group hover:-translate-y-1.5"
            >
              {/* Paper Fold Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#E2D8C6] to-[#FAF7F0] border-b border-l border-[#242420]/15 pointer-events-none" />

              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#242420]/15 pb-5 mb-8 font-mono text-xs text-[#74786A]">
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl font-serif text-[#B85C42] font-normal">
                    {study.num}
                  </span>
                  <span className="uppercase tracking-wider font-semibold" dangerouslySetInnerHTML={{ __html: study.plate }} />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border font-semibold ${study.badgeColor}`}
                  dangerouslySetInnerHTML={{ __html: study.badge }}
                />
              </div>

              {/* Spread Grid: Narrative (Left) + Interactive Simulation (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Column: Heading, Subtitle, Narrative, Stack */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="overflow-hidden">
                    <motion.h3
                      initial={{ y: 25, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.15 }}
                      className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A16] tracking-tight group-hover:text-[#B85C42] transition-colors"
                    >
                      {study.title}
                    </motion.h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm font-medium text-[#74786A] tracking-wide">
                    {study.subtitle}
                  </p>

                  <div className="pt-2 flex items-center gap-2 font-mono text-xs text-[#4A4A42]">
                    <span className="w-2 h-2 rounded-full bg-[#B85C42]" />
                    <span>Status: {study.status}</span>
                  </div>

                  <p className="text-sm sm:text-base text-[#3A3A34] leading-relaxed font-sans text-justify pt-2">
                    {study.description}
                  </p>

                  {/* Architecture & Tools */}
                  <div className="pt-4 border-t border-[#242420]/15">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#74786A] mb-2 font-semibold">
                      Architectural Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.stack.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 bg-[#F0EAE0] border border-[#242420]/15 rounded font-mono text-[11px] text-[#242420] group-hover:border-[#242420]/30 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* External Links */}
                  {study.links.live || study.links.github ? (
                    <div className="pt-3">
                      <a
                        href={study.links.github || study.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#B85C42] hover:text-[#242420] transition-colors"
                      >
                        <span>Examine Repository &bull; Dossier</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  ) : null}
                </div>

                {/* Right Column: Live Micro-Simulation Schematic */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#74786A] flex items-center justify-between">
                    <span>Fig. {study.num} &bull; Live Simulation Schematic</span>
                    <span className="italic font-serif">Verified Codebase</span>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.012, rotate: 0.4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="shadow-paper rounded overflow-hidden"
                  >
                    <SimulationComponent />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
