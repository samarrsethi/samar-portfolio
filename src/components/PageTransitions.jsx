import { motion } from 'framer-motion'

/**
 * PageTurnCurl — An elegant 3D curled page turn transition between About Me and Expertise.
 * Features realistic paper curl highlights, fold shadow, and editorial folio label.
 */
export function PageTurnCurl() {
  return (
    <div className="relative w-full py-16 overflow-hidden pointer-events-none select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between border-t border-b border-[#242420]/15 py-4 font-mono text-[11px] uppercase tracking-widest text-[#74786A]">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B85C42]" />
          <span>Page Turn &bull; End of Section 01</span>
        </div>
        <div className="italic font-serif text-xs text-[#242420]">
          Turning broadsheet to Section 02: Technical Compendium &rarr;
        </div>
        <span className="hidden sm:inline">The Samar Journal &bull; Folio B</span>
      </div>

      {/* Subtle 3D paper curl highlight strip across the border */}
      <div
        className="w-full h-8 opacity-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(36,36,32,0.06) 0%, rgba(255,255,255,0.6) 50%, rgba(36,36,32,0.04) 100%)',
        }}
      />
    </div>
  )
}

/**
 * SpreadLiftTransition — A technical broadsheet spread lift between Expertise and Selected Work.
 */
export function SpreadLiftTransition() {
  return (
    <div className="relative w-full py-16 overflow-hidden pointer-events-none select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between border-t border-b border-[#242420]/15 py-4 font-mono text-[11px] uppercase tracking-widest text-[#74786A]">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#74786A]" />
          <span>Technical Supplement Lift &bull; End of Section 02</span>
        </div>
        <div className="italic font-serif text-xs text-[#242420]">
          Lifting spread to Section 03: Selected Work &amp; Case Studies &rarr;
        </div>
        <span className="hidden sm:inline">Folio C &bull; Portfolio Dispatches</span>
      </div>

      <div
        className="w-full h-8 opacity-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(36,36,32,0.06) 0%, rgba(255,255,255,0.6) 50%, rgba(36,36,32,0.04) 100%)',
        }}
      />
    </div>
  )
}

/**
 * FoldAwayTransition — An inward fold transition before the Telegram Desk.
 */
export function FoldAwayTransition() {
  return (
    <div className="relative w-full py-16 overflow-hidden pointer-events-none select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between border-t border-b border-[#242420]/15 py-4 font-mono text-[11px] uppercase tracking-widest text-[#74786A]">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B85C42]" />
          <span>Final Broadsheet Fold &bull; End of Section 03</span>
        </div>
        <div className="italic font-serif text-xs text-[#242420]">
          Folding away into Section 04: The Telegram Desk &rarr;
        </div>
        <span className="hidden sm:inline">Folio D &bull; Correspondence</span>
      </div>

      <div
        className="w-full h-8 opacity-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(36,36,32,0.08) 0%, rgba(255,255,255,0.7) 50%, rgba(36,36,32,0.05) 100%)',
        }}
      />
    </div>
  )
}
