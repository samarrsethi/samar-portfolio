import { motion } from 'framer-motion'
import { ArrowDownRight, Github, Linkedin, GraduationCap, MapPin, Code, Award } from 'lucide-react'
import IronManTransformation from './IronManTransformation'
import DualMarquee from './DualMarquee'

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto select-none">
      {/* ─── TOP SECTION FOLIO ─── */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#242420]/20 pb-4 mb-8 font-mono text-xs uppercase tracking-widest text-[#74786A]">
        <div className="flex items-center gap-3">
          <span className="text-[#B85C42] font-semibold">01 &bull; Frontispiece &amp; Biography</span>
          <span>&mdash;</span>
          <span>Samar Sethi</span>
        </div>
        <div className="hidden sm:block">
          B.Tech CS &amp; AI &bull; NST, Rishihood University
        </div>
        <div className="flex items-center gap-2 text-[#B85C42]">
          <span className="w-2 h-2 rounded-full bg-[#B85C42] animate-pulse" />
          <span>Available for Collabs</span>
        </div>
      </div>

      {/* ─── LAYERED EDITORIAL HERO CENTERPIECE ─── */}
      {/* Centered portrait, overlapping massive typography, opposing marquees running behind */}
      <div className="relative mb-20 pt-2">
        {/* Background Opposing Horizontal Marquees - Running directly behind the portrait torso */}
        <div className="absolute top-[52%] -translate-y-1/2 left-0 right-0 z-0 pointer-events-none opacity-85 overflow-hidden">
          <DualMarquee />
        </div>

        {/* Big Editorial Headline centered behind / over the portrait */}
        <div className="relative z-10 text-center max-w-5xl mx-auto mb-2 pointer-events-none">
          <h2 className="font-serif leading-[0.85] tracking-tight text-[#1A1A16] uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-normal tracking-tight">
            The Person
          </h2>
          <div className="-mt-1 sm:-mt-3">
            <span className="font-serif italic lowercase text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal text-[#B85C42] inline-block tracking-normal">
              behind the code.
            </span>
          </div>
        </div>

        {/* Centered Interactive Portrait with Scribble-to-Iron Man Transformation */}
        <div className="relative z-20 flex justify-center -mt-6 sm:-mt-10">
          <IronManTransformation
            portraitSrc="/samar_cutout.png"
            ironManSrc="/ironman_armor.png"
          />
        </div>

        {/* Hero Narrative Subtitle & Verified Quick Actions */}
        <div className="relative z-20 max-w-2xl mx-auto text-center mt-6 space-y-5">
          <p className="font-serif text-xl sm:text-2xl text-[#242420] font-normal leading-snug px-4">
            Samar Sethi &mdash; First-year CS &amp; AI student engineering high-performance <span className="italic text-[#74786A]">local inference systems</span>, quantitative alpha models &amp; digital platforms.
          </p>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs pt-1">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#242420] text-[#F5F1E8] rounded-full hover:bg-[#B85C42] transition-colors shadow-sm"
            >
              <span>Examine Work</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/samarrsethi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#242420]/30 rounded-full hover:bg-[#FAF7F0] hover:border-[#B85C42] transition-colors bg-[#FAF7F0]/80 backdrop-blur-sm"
            >
              <Github className="w-3.5 h-3.5 text-[#B85C42]" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/samar-sethi-bb96273bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#242420]/30 rounded-full hover:bg-[#FAF7F0] hover:border-[#B85C42] transition-colors bg-[#FAF7F0]/80 backdrop-blur-sm"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#B85C42]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── DETAILED EDITORIAL DOSSIER & BIOGRAPHY ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start border-t border-[#242420]/15 pt-16">
        {/* Left Column: Drop Cap Editorial Story */}
        <div className="lg:col-span-7 space-y-6">
          <div className="overflow-hidden">
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A16] leading-tight">
              At the intersection of bare-metal systems, local intelligence models, and market mechanics.
            </h3>
          </div>

          {/* Hairline Divider */}
          <div className="h-[1px] bg-[#242420]/15 origin-left my-4" />

          {/* Narrative text with drop-cap */}
          <div className="text-base text-[#3A3A34] leading-relaxed space-y-4 pt-1 font-sans">
            <p className="drop-cap text-justify">
              Beginning my formal undergraduate curriculum in Computer Science and Artificial Intelligence at the Newton School of Technology, Rishihood University, my work has centered on one primary obsession: executing high-performance computing without unnecessary abstractions.
            </p>
            <p className="text-justify">
              Rather than treating artificial intelligence as a distant cloud API, my exploration focuses on local-first, low-latency inference architectures. By deploying quantized local models like Gemma through Ollama on local machines, we reclaim privacy, eliminate latency spikes, and make machine intelligence truly offline-first.
            </p>
            <p className="text-justify">
              Simultaneously, my interest in quantitative finance has led to building backtesting engines and statistical arbitrage models evaluated on National Stock Exchange (NSE) historical equities, combining gradient-boosted signals with vectorized computation.
            </p>
          </div>
        </div>

        {/* Right Column: Pull Quote + Academic Log Table */}
        <div className="lg:col-span-5 space-y-8">
          {/* Editorial Pull Quote */}
          <div className="p-8 bg-[#FAF7F0] border-l-4 border-[#B85C42] border-t border-r border-b border-[#242420]/20 shadow-paper group hover:border-l-4 transition-all">
            <span className="font-serif text-5xl text-[#B85C42] leading-none">&ldquo;</span>
            <p className="font-serif italic text-xl sm:text-2xl text-[#242420] leading-snug -mt-4 mb-4">
              Real engineering begins where convenience ends &mdash; in local execution, deterministic algorithms, and verified system limits.
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-[#74786A]">
              &mdash; Samar Sethi, Research Notes
            </p>
          </div>

          {/* Academic Dossier Specifications Table */}
          <div className="p-6 bg-[#FAF7F0] border border-[#242420]/20 space-y-4 font-mono text-xs shadow-paper hover:border-[#242420]/35 transition-all">
            <div className="flex items-center justify-between border-b border-[#242420]/15 pb-2">
              <span className="text-[10px] uppercase tracking-widest text-[#B85C42] font-semibold">
                Dossier &bull; Academic Log
              </span>
              <span className="text-[#74786A] text-[10px]">Verified Undergrad</span>
            </div>

            <div className="space-y-3 pt-1 text-[#3A3A34]">
              <div className="flex justify-between items-center py-1.5 border-b border-[#242420]/10">
                <span className="text-[#74786A] flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#B85C42]" />
                  <span>Degree</span>
                </span>
                <span className="font-medium text-right text-[#242420]">B.Tech CS &amp; AI</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-[#242420]/10">
                <span className="text-[#74786A]">Institution</span>
                <span className="font-medium text-right text-[#242420]">Newton School of Technology</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-[#242420]/10">
                <span className="text-[#74786A]">University</span>
                <span className="font-medium text-right text-[#242420]">Rishihood University</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-[#242420]/10">
                <span className="text-[#74786A] flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-[#B85C42]" />
                  <span>Disciplines</span>
                </span>
                <span className="font-medium text-right text-[#242420]">DSA, Systems, Local LLMs</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-[#242420]/10">
                <span className="text-[#74786A] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B85C42]" />
                  <span>Location</span>
                </span>
                <span className="font-medium text-right text-[#242420]">Delhi NCR, India</span>
              </div>

              <div className="flex justify-between items-center py-1.5">
                <span className="text-[#74786A] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#B85C42]" />
                  <span>Cohort Status</span>
                </span>
                <span className="font-semibold text-right text-[#B85C42]">First Year Undergrad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
