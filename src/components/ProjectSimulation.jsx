import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Terminal, Compass, ShieldCheck, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react'

// ─── 01. DRIVERSATHI LOGISTICS & MATCHING RADAR SIMULATION ───
export function DriverSathiSimulation() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  const steps = [
    { title: 'Fleet Route Broadcast', detail: 'Route: Delhi NCR &rarr; Jaipur Corridor &bull; Urgent Freight' },
    { title: 'Identity & License Hash', detail: 'DigiLocker / Sarathi API verification verified' },
    { title: 'Algorithmic Proximity Match', detail: 'Distance: 4.2 km &bull; Experience: 8+ yrs Heavy Motor' },
    { title: 'Escrow Contract Bound', detail: 'Smart assignment sealed &bull; Driver dispatched' },
  ]

  return (
    <div className="p-5 sm:p-6 bg-[#FAF7F0] border border-[#242420]/20 font-mono text-xs rounded shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-[#242420]/15 pb-2 text-[10px] uppercase tracking-wider text-[#74786A]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B85C42] animate-ping" />
          <span className="font-semibold text-[#242420]">DriverSathi Logistics Protocol</span>
        </div>
        <span className="text-[#B85C42] font-semibold">Active Node Dispatch</span>
      </div>

      {/* Corridor Map / Radar nodes */}
      <div className="relative py-4 px-4 bg-[#F0EAE0]/80 border border-[#242420]/15 rounded flex items-center justify-between">
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-9 h-9 rounded-full bg-[#242420] text-[#F5F1E8] flex items-center justify-center shadow">
            <Compass className="w-4 h-4 text-[#FAF7F0]" />
          </div>
          <span className="text-[10px] text-[#4A4A42] font-semibold">Fleet Owner</span>
        </div>

        {/* Animated route pulse line */}
        <div className="flex-1 mx-4 relative flex items-center">
          <div className="h-[2px] w-full bg-[#242420]/20" />
          <motion.div
            animate={{
              left: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#B85C42] border-2 border-[#FAF7F0] shadow-md"
          />
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <div className="w-9 h-9 rounded-full bg-[#B85C42] text-white flex items-center justify-center shadow">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="text-[10px] text-[#4A4A42] font-semibold">Verified Driver</span>
        </div>
      </div>

      {/* Verification Stages */}
      <div className="space-y-1.5 pt-1">
        {steps.map((step, idx) => {
          const isCurrent = activeStep === idx
          const isDone = activeStep > idx
          return (
            <div
              key={step.title}
              className={`flex items-center justify-between p-2 rounded transition-colors text-[11px] ${
                isCurrent
                  ? 'bg-[#EAE2D3] text-[#242420] font-semibold border-l-2 border-[#B85C42]'
                  : isDone
                  ? 'text-[#74786A] opacity-75'
                  : 'text-[#9A998E] opacity-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono">{idx + 1}.</span>
                <span>{step.title}</span>
              </div>
              <span className="text-[10px] text-[#74786A] hidden sm:inline" dangerouslySetInnerHTML={{ __html: step.detail }} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── 02. LEARNSPHERE LOCAL OFFLINE LLM PIPELINE ───
export function LearnSphereSimulation() {
  const [tokens, setTokens] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTokens((prev) => (prev > 140 ? 12 : prev + 14))
    }, 450)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-5 sm:p-6 bg-[#FAF7F0] border border-[#242420]/20 font-mono text-xs rounded shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-[#242420]/15 pb-2 text-[10px] uppercase tracking-wider text-[#74786A]">
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-[#74786A]" />
          <span className="font-semibold text-[#242420]">LearnSphere &bull; Local Neural Engine</span>
        </div>
        <span className="text-[#74786A]">Ollama &bull; Gemma 3 (4-bit)</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[10px] text-center">
        <div className="p-2.5 bg-[#F0EAE0]/70 border border-[#242420]/10 rounded">
          <p className="text-[#74786A]">Mode</p>
          <p className="font-semibold text-[#242420] mt-0.5">100% Offline</p>
        </div>
        <div className="p-2.5 bg-[#F0EAE0]/70 border border-[#242420]/10 rounded">
          <p className="text-[#74786A]">Quantization</p>
          <p className="font-semibold text-[#74786A] mt-0.5">q4_K_M</p>
        </div>
        <div className="p-2.5 bg-[#F0EAE0]/70 border border-[#242420]/10 rounded">
          <p className="text-[#74786A]">Throughput</p>
          <p className="font-semibold text-[#B85C42] mt-0.5">38.4 tok/s</p>
        </div>
      </div>

      <div className="p-3 bg-[#242420] text-[#F5F1E8] rounded text-[11px] font-mono leading-relaxed relative overflow-hidden">
        <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-[#A0A096] pb-1 border-b border-white/10 mb-2">
          <span>Inference Stream</span>
          <span>Tokens: {tokens}</span>
        </div>
        <p className="text-[#D6CEBF]">
          <span className="text-[#B85C42]">&gt;</span> Prompt: &quot;Derive quicksort recurrence &amp; worst-case partitions.&quot;
        </p>
        <p className="text-[#96A088] mt-1 text-[10px]">
          &bull; T(n) = T(k) + T(n-k-1) + O(n). When partition is unbalanced: O(n&sup2;).
        </p>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1.5 h-3 bg-[#B85C42] ml-1 align-middle"
        />
      </div>
    </div>
  )
}

// ─── 03. QUANTALPHA VECTORIZED SHARPE & EQUITY CURVE ───
export function QuantAlphaSimulation() {
  return (
    <div className="p-5 sm:p-6 bg-[#FAF7F0] border border-[#242420]/20 font-mono text-xs rounded shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-[#242420]/15 pb-2 text-[10px] uppercase tracking-wider text-[#74786A]">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-[#242420]" />
          <span className="font-semibold text-[#242420]">QuantAlpha Vector Engine</span>
        </div>
        <span className="text-[#242420]">NSE EOD Alpha Pipeline</span>
      </div>

      <div className="relative h-28 bg-[#F0EAE0]/70 border border-[#242420]/10 rounded p-2.5 overflow-hidden flex flex-col justify-between">
        <div className="flex justify-between text-[9px] text-[#74786A]">
          <span>Out-of-Sample Performance</span>
          <span className="text-[#B85C42] font-semibold">Sharpe: 2.14 &bull; MaxDD: -6.8%</span>
        </div>

        <svg className="w-full h-16 overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 60">
          <path
            d="M0 50 Q75 45 150 40 T300 28"
            stroke="#74786A"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            fill="none"
            opacity="0.6"
          />
          <motion.path
            d="M0 55 L30 50 L60 48 L90 38 L120 42 L150 28 L180 30 L210 20 L240 16 L270 12 L300 6"
            stroke="#B85C42"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: 'easeOut', repeat: Infinity, repeatDelay: 1.5 }}
          />
        </svg>

        <div className="flex justify-between text-[8px] text-[#74786A]">
          <span>T-252 Trading Days</span>
          <span>Benchmark vs Alpha</span>
          <span>Today</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] pt-1 text-[#4A4A42]">
        <span>Model: Mean-Reversion + Volume-Weighted Momentum</span>
        <span className="text-[#242420] font-semibold">Vectorized NumPy</span>
      </div>
    </div>
  )
}

// ─── 04. CODEFORCES HEURISTICS & PROBLEM TRACKER ───
export function CodeforcesSimulation() {
  const problems = [
    { id: '1985D', name: 'Manhattan Circle', tag: 'Constructive Heuristic', status: 'Accepted', time: '46ms' },
    { id: '1974B', name: 'Symmetric Encoding', tag: 'Strings & Maps', status: 'Accepted', time: '31ms' },
    { id: '1950C', name: 'Clock Conversion', tag: 'Number Theory / Formats', status: 'Accepted', time: '15ms' },
  ]

  return (
    <div className="p-5 sm:p-6 bg-[#FAF7F0] border border-[#242420]/20 font-mono text-xs rounded shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-[#242420]/15 pb-2 text-[10px] uppercase tracking-wider text-[#74786A]">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#B85C42]" />
          <span className="font-semibold text-[#242420]">Codeforces Practice Dossier</span>
        </div>
        <span className="text-[#B85C42] font-semibold">75+ Verified Solves</span>
      </div>

      <div className="space-y-1.5">
        {problems.map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between p-2.5 bg-[#F0EAE0]/70 border border-[#242420]/10 rounded text-[10px]"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#B85C42]">{p.id}</span>
              <span className="text-[#242420]">{p.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#74786A] hidden sm:inline">{p.tag}</span>
              <span className="px-1.5 py-0.5 bg-[#B85C42]/10 text-[#B85C42] rounded text-[9px] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5" />
                {p.status}
              </span>
              <span className="text-[#74786A]">{p.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-[10px] text-[#74786A] pt-1 border-t border-[#242420]/10">
        <span>Curriculum: Greedy Heuristics, Number Theory &amp; Graphs</span>
        <span className="text-[#242420] font-semibold">Continuous Sprint</span>
      </div>
    </div>
  )
}
