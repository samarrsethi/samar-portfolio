import { motion } from 'framer-motion'
import { ArrowUpRight, Globe, Cpu, LineChart, Swords } from 'lucide-react'

const caseStudies = [
  {
    num: '01',
    plate: 'Plate I &bull; Venture in Ideation',
    title: 'DriverSathi',
    subtitle: 'Commercial Vehicle Driver Hiring Platform',
    badge: 'Startup &bull; Ideation Stage',
    badgeColor: 'text-[#B85C42] border-[#B85C42]/30 bg-[#B85C42]/10',
    description:
      'A dedicated platform engineered to connect commercial vehicle and fleet owners with verified drivers for both permanent employment and urgent route assignments. Solves the severe trust, verification, and discovery bottlenecks in India\'s commercial logistics ecosystem through algorithmic matching and contract management.',
    stack: ['React', 'PostgreSQL', 'Maps API', 'Matching Engine Architecture', 'Contract Protocols'],
    status: 'Prototyping Architecture',
    accentColor: '#B85C42',
    icon: Globe,
    links: {},
  },
  {
    num: '02',
    plate: 'Plate II &bull; Offline AI Architecture',
    title: 'LearnSphere',
    subtitle: 'Offline-First AI Learning Platform',
    badge: 'Top 5 Rank Honors',
    badgeColor: 'text-[#74786A] border-[#74786A]/30 bg-[#74786A]/10',
    description:
      'A privacy-centric educational environment designed for zero-connectivity environments. Houses full local LLM inference via Ollama and quantized Gemma 3 models, accompanied by a reactive client dashboard. Democratizes personalized tutoring without cloud subscription lock-in.',
    stack: ['React', 'Ollama', 'Gemma 3', 'SQLite', 'Offline Storage Engine'],
    status: 'Shipped &bull; Top 5 Honor',
    accentColor: '#74786A',
    icon: Cpu,
    links: { github: '#' },
  },
  {
    num: '03',
    plate: 'Plate III &bull; Quantitative Finance',
    title: 'QuantAlpha Engine',
    subtitle: 'High-Frequency Alpha Signal Generator',
    badge: 'Research Paper &bull; Simulation',
    badgeColor: 'text-[#242420] border-[#242420]/30 bg-[#242420]/5',
    description:
      'Quantitative signal synthesis platform executing statistical arbitrage algorithms and machine learning feature extraction over National Stock Exchange (NSE) historical equities. Implements vectorized computation pipelines to achieve robust out-of-sample Sharpe ratios and disciplined drawdown control.',
    stack: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'Matplotlib', 'yfinance'],
    status: 'Research Complete',
    accentColor: '#242420',
    icon: LineChart,
    links: { github: '#' },
  },
  {
    num: '04',
    plate: 'Plate IV &bull; Competitive Programming',
    title: 'Codeforces & Algorithmics',
    subtitle: '75+ Problems Solved &bull; DSA Foundation',
    badge: 'Active Competitor',
    badgeColor: 'text-[#B85C42] border-[#B85C42]/30 bg-[#B85C42]/10',
    description:
      'A disciplined competitive coding regimen focused on mathematical problem solving, number theory, constructive proofs, and greedy heuristics. Serves as algorithmic proving ground while initiating an intensive, comprehensive Data Structures & Algorithms sprint.',
    stack: ['Python', 'Mathematical Proofs', 'Greedy Heuristics', 'Data Structures'],
    status: '75+ Solved &bull; Ongoing',
    accentColor: '#B85C42',
    icon: Swords,
    links: { live: '#' },
  },
]

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#242420]/15 relative">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between font-mono text-xs uppercase tracking-widest text-[#74786A] mb-14">
        <span className="text-[#B85C42] font-semibold">03 &bull; Selected Works &amp; Case Studies</span>
        <span>Four Plates from the Studio</span>
      </div>

      <div className="space-y-12">
        {caseStudies.map((study, idx) => {
          const Icon = study.icon
          return (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-12 bg-[#FAF7F0] border border-[#242420]/15 hover:border-[#242420]/40 transition-all duration-300 shadow-paper relative overflow-hidden group hover:-translate-y-1"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#242420]/10 pb-5 mb-8 font-mono text-xs text-[#74786A]">
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl font-serif text-[#B85C42] font-normal">
                    {study.num}
                  </span>
                  <span className="uppercase tracking-wider" dangerouslySetInnerHTML={{ __html: study.plate }} />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border font-semibold ${study.badgeColor}`}
                  dangerouslySetInnerHTML={{ __html: study.badge }}
                />
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Title & Subtitle with independent animation */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="overflow-hidden">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: idx * 0.1 + 0.1 }}
                      className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A16] tracking-tight group-hover:text-[#B85C42] transition-colors"
                    >
                      {study.title}
                    </motion.h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm font-medium text-[#74786A] tracking-wide">
                    {study.subtitle}
                  </p>
                  
                  <div className="pt-4 flex items-center gap-2 font-mono text-xs text-[#4A4A42]">
                    <span className="w-2 h-2 rounded-full bg-[#B85C42]" />
                    <span>Status: {study.status}</span>
                  </div>
                </div>

                {/* Narrative Description & Tech Stack */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-sm sm:text-base text-[#3A3A34] leading-relaxed font-sans text-justify">
                    {study.description}
                  </p>

                  {/* Editorial Typographic Tech List */}
                  <div className="pt-4 border-t border-[#242420]/10">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#74786A] mb-2">
                      Tools &bull; Architecture
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

                  {/* Case Study Link */}
                  {study.links.live || study.links.github ? (
                    <div className="pt-2">
                      <a
                        href={study.links.github || study.links.live}
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#B85C42] hover:text-[#242420] transition-colors"
                      >
                        <span>Examine Repository &bull; Dossier</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
