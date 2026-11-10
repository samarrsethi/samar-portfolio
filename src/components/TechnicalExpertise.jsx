import { useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Cpu, Database, GitBranch, Layers, CheckCircle2, Play, Code2, Server } from 'lucide-react'

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
  const [activeTab, setActiveTab] = useState('python')

  return (
    <section id="expertise" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto relative select-none">
      {/* ─── EDITORIAL SECTION MASTHEAD ─── */}
      <div className="border-b-2 border-[#242420] pb-6 mb-14">
        <div className="flex flex-wrap items-center justify-between font-mono text-xs uppercase tracking-widest text-[#74786A] mb-4">
          <div className="flex items-center gap-3">
            <span className="text-[#B85C42] font-semibold">02 &bull; Technical Compendium</span>
            <span>&mdash;</span>
            <span>Typographic Inventory</span>
          </div>
          <span>Illustrated Technical Supplement</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="overflow-hidden py-1">
              <motion.h2
                initial={{ y: '110%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1A1A16] tracking-tight uppercase leading-none"
              >
                Tools &amp; Schematics.
              </motion.h2>
            </div>
            <p className="font-serif italic text-base sm:text-lg text-[#74786A] mt-2">
              Technologies selected for mechanical sympathy, predictability &amp; verifiable performance.
            </p>
          </div>
        </div>
      </div>

      {/* ─── LIVE INTERACTIVE TECHNICAL SUPPLEMENT WORKBENCH ─── */}
      <div className="mb-16 p-6 sm:p-8 bg-[#FAF7F0] border border-[#242420]/20 shadow-paper rounded">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#242420]/15 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B85C42] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#242420] font-semibold">
              Interactive Demonstrations &bull; Verified Pipelines
            </span>
          </div>

          {/* Interactive demonstration tabs */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {[
              { id: 'python', label: 'Python: Vector Ops' },
              { id: 'ai', label: 'AI: Local Gemma Stream' },
              { id: 'git', label: 'Git: Branch Graph' },
              { id: 'systems', label: 'Systems: Unix Process' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#242420] text-[#F5F1E8] font-medium shadow-sm'
                    : 'bg-[#F0EAE0] text-[#4A4A42] hover:bg-[#E6DFD2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── TAB CONTENT PANELS ─── */}
        <div className="p-4 sm:p-6 bg-[#242420] text-[#F5F1E8] rounded font-mono text-xs min-h-[220px] flex flex-col justify-center overflow-x-auto">
          {/* TAB 1: PYTHON VECTORIZED EXECUTION FLOW */}
          {activeTab === 'python' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] uppercase text-[#A0A096]">
                <span className="flex items-center gap-1.5 text-[#B85C42]">
                  <Play className="w-3 h-3 fill-current" />
                  <span>Execution Flow &bull; Vectorized NumPy Signal Generator</span>
                </span>
                <span>Latency: 1.42ms &bull; 250 Assets</span>
              </div>
              <div className="space-y-1.5 text-[#D6CEBF] font-mono text-[11px] sm:text-xs">
                <p className="text-[#96A088]"># Stage 1: Load matrix &amp; compute logarithmic returns</p>
                <p>returns = np.diff(np.log(close_prices), axis=0)</p>
                <p className="text-[#96A088] pt-1"># Stage 2: Standardize rolling volatility over 20-day window</p>
                <p>z_scores = (returns - np.mean(returns, axis=0)) / np.std(returns, axis=0)</p>
                <p className="text-[#96A088] pt-1"># Stage 3: Generate mean-reversion alpha signals</p>
                <p className="text-[#B85C42] font-semibold">
                  signals = np.where(z_scores &lt; -2.0, 1.0, np.where(z_scores &gt; 2.0, -1.0, 0.0))
                </p>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#A0A096]">
                <span>Status: Vectorized Pipeline Active</span>
                <span className="text-[#96A088]">Zero Python Loop Overhead</span>
              </div>
            </motion.div>
          )}

          {/* TAB 2: LOCAL AI MODEL INFERENCE PIPELINE */}
          {activeTab === 'ai' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] uppercase text-[#A0A096]">
                <span className="flex items-center gap-1.5 text-[#74786A]">
                  <Cpu className="w-3.5 h-3.5 text-[#B85C42]" />
                  <span>Zero-Cloud Local Inference Pipeline &bull; Gemma 3 4-Bit</span>
                </span>
                <span className="text-[#96A088]">100% Offline</span>
              </div>

              {/* Diagram Pipeline */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 py-2 text-center text-[10px]">
                <div className="p-2.5 bg-white/5 border border-white/10 rounded">
                  <p className="text-[#A0A096]">1. Input Prompt</p>
                  <p className="text-[#F5F1E8] font-semibold mt-1">UTF-8 String</p>
                </div>
                <div className="p-2.5 bg-white/5 border border-white/10 rounded">
                  <p className="text-[#A0A096]">2. Tokenizer</p>
                  <p className="text-[#B85C42] font-semibold mt-1">SentencePiece</p>
                </div>
                <div className="p-2.5 bg-[#B85C42]/20 border border-[#B85C42]/40 rounded">
                  <p className="text-[#F5F1E8]">3. Local Gemma</p>
                  <p className="text-white font-semibold mt-1">q4_K_M Weights</p>
                </div>
                <div className="p-2.5 bg-white/5 border border-white/10 rounded">
                  <p className="text-[#A0A096]">4. Stream Output</p>
                  <p className="text-[#96A088] font-semibold mt-1">38.4 tok/sec</p>
                </div>
              </div>

              <div className="p-2.5 bg-black/40 rounded border border-white/5 text-[11px] text-[#D6CEBF]">
                <span className="text-[#B85C42]">&gt;</span> Prompt: &quot;Explain deterministic state machines in offline systems.&quot;
                <p className="text-[#96A088] mt-1 text-[10px]">
                  Response: Deterministic machines guarantee identical state transitions given fixed inputs, vital for low-latency systems.
                </p>
              </div>
            </motion.div>
          )}

          {/* TAB 3: GIT BRANCHING & MERGING DIAGRAM */}
          {activeTab === 'git' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] uppercase text-[#A0A096]">
                <span className="flex items-center gap-1.5 text-[#B85C42]">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>Branching Hygiene &bull; Linear Rebase Strategy</span>
                </span>
                <span>Branch: main (clean)</span>
              </div>

              {/* Branch Diagram SVG */}
              <div className="py-2 px-2 bg-black/30 rounded border border-white/5">
                <svg className="w-full h-16" viewBox="0 0 500 60">
                  {/* Main branch line */}
                  <line x1="20" y1="20" x2="480" y2="20" stroke="#74786A" strokeWidth="2" />
                  {/* Feature branch line */}
                  <path d="M 80 20 C 120 20, 130 45, 170 45 L 340 45 C 380 45, 390 20, 430 20" stroke="#B85C42" strokeWidth="2" fill="none" />
                  
                  {/* Commits on main */}
                  <circle cx="40" cy="20" r="5" fill="#FAF7F0" />
                  <circle cx="80" cy="20" r="5" fill="#FAF7F0" />
                  <circle cx="430" cy="20" r="6" fill="#B85C42" />
                  <circle cx="470" cy="20" r="5" fill="#96A088" />

                  {/* Commits on feature */}
                  <circle cx="210" cy="45" r="4.5" fill="#B85C42" />
                  <circle cx="280" cy="45" r="4.5" fill="#B85C42" />
                  <circle cx="340" cy="45" r="4.5" fill="#B85C42" />

                  {/* Labels */}
                  <text x="30" y="12" fill="#A0A096" fontSize="8" fontFamily="monospace">init</text>
                  <text x="210" y="58" fill="#B85C42" fontSize="8" fontFamily="monospace">feat/quant-alpha</text>
                  <text x="420" y="12" fill="#FAF7F0" fontSize="8" fontFamily="monospace">merge</text>
                </svg>
              </div>

              <p className="text-[10px] text-[#A0A096]">
                Atomic commits &bull; Signed GPG tags &bull; PR reviews prior to integration
              </p>
            </motion.div>
          )}

          {/* TAB 4: MINIMAL UNIX TERMINAL VISUALIZATION */}
          {activeTab === 'systems' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] uppercase text-[#A0A096]">
                <span className="flex items-center gap-1.5 text-[#96A088]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Darwin Kernel 26.0 &bull; Process Monitor</span>
                </span>
                <span className="text-[#96A088]">Threads: 16 &bull; Load: 0.42</span>
              </div>
              <div className="space-y-1 font-mono text-[11px] text-[#D6CEBF]">
                <p><span className="text-[#B85C42]">$</span> pgrep -l &quot;ollama|python|vite&quot;</p>
                <div className="pl-3 space-y-0.5 text-[10px] text-[#A0A096]">
                  <p>PID 4821 &bull; ollama_runner (gemma3:4b-instruct) &bull; RAM: 3.2 GB &bull; GPU: 88%</p>
                  <p>PID 5120 &bull; python3 alpha_engine.py --mode=live &bull; RAM: 412 MB</p>
                  <p>PID 5174 &bull; vite (The Samar Journal dev server) &bull; Port: 5174 &bull; HMR: active</p>
                </div>
                <p className="text-[#96A088] pt-1.5 text-[10px]">
                  &check; All subprocesses running without latency degradation.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* ─── THREE COLUMN TYPOGRAPHIC GRID ─── */}
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

      {/* ─── BY-THE-NUMBERS STATISTICAL LEDGER ─── */}
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
            className="p-5 border-l-2 border-[#242420]/20 font-mono group hover:border-[#B85C42] transition-colors bg-[#FAF7F0]/40"
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
